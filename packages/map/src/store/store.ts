import { action, Action, createStore, thunk, Thunk } from "easy-peasy";
import { AvailableTimes, Mode, Period, SyncedLayer } from "../types/common";

import {
  seekNearestTimeIndex,
  getLowerLimit,
  getUpperLimit,
  setAvailableTime,
  checkSyncedLayersReady,
} from "./util";

export interface TDStoreModel {
  tdVersion: string;
  lowerLimitIndex: number;
  upperLimitIndex: number;
  loadingTimeIndex: number;
  currentTimeIndex: number;
  currentTime: number;
  numberNextTimesReady: number;
  availableTimes: AvailableTimes;
  syncedLayers: SyncedLayer;
  setTimeloadingIndex: Action<TDStoreModel, { newTimeIndex: number }>;
  setNewTimeIndex: Action<TDStoreModel>;

  prepareNextTimes: Action<
    TDStoreModel,
    { numSteps: number; howmany: number; loop: boolean }
  >;

  getNumberNextTimesReady: Action<
    TDStoreModel,
    { numSteps: number; howmany: number; loop: boolean }
  >;

  setAvailableTime: Action<
    TDStoreModel,
    {
      times?: AvailableTimes;
      mode: Mode;
      period: Period;
    }
  >;

  setCurrentTimeIndex: Thunk<
    TDStoreModel,
    { index: number /* loadingTimeout: number */ }
  >;
  setCurrentTime: Thunk<
    TDStoreModel,
    { time: number /* loadingTimeout: number */ }
  >;
  nextTime: Thunk<
    TDStoreModel,
    { numSteps: number; loop: boolean /* loadingTimeout: number */ }
  >;
  previousTime: Thunk<
    TDStoreModel,
    { numSteps: number; loop: boolean /* loadingTimeout: number */ }
  >;
  prepareAvailableTimes: Thunk<
    TDStoreModel,
    {
      _availableTimes: AvailableTimes;
      updateCurrentTime: boolean;
      // updateTimeDimension: boolean;
      updateTimeDimensionMode: Mode;
      /* loadingTimeout: number;*/
    }
  >;
}

export const tdStoreModel: TDStoreModel = {
  tdVersion: "1.0.0",

  lowerLimitIndex: 0,
  upperLimitIndex: 0,
  loadingTimeIndex: -1,
  currentTimeIndex: -1,
  currentTime: -1,
  numberNextTimesReady: 0,
  availableTimes: [],
  syncedLayers: [],
  setTimeloadingIndex: action((state, { newTimeIndex }) => {
    state.loadingTimeIndex = newTimeIndex;
  }),

  setNewTimeIndex: action((state) => {
    if (state.loadingTimeIndex === -1) {
      return;
    }
    state.currentTime = state.availableTimes[state.loadingTimeIndex];
    state.currentTimeIndex = state.loadingTimeIndex;
    // console.log("END -- Current time: " + new Date(time).toISOString());

    state.loadingTimeIndex = -1;
  }),

  setAvailableTime: action((state, { times, mode, period }) => {
    const _availableTimes = setAvailableTime(
      mode,
      times,
      period,
      state.availableTimes
    );
    if (_availableTimes !== undefined) state.availableTimes = _availableTimes;

    if (state.lowerLimitIndex) {
      const lowerLimitTime = state.availableTimes[state.lowerLimitIndex];
      state.lowerLimitIndex = getLowerLimit(
        lowerLimitTime,
        state.upperLimitIndex,
        state.availableTimes
      );
    }
    if (state.upperLimitIndex) {
      const upperLimitTime = state.availableTimes[state.upperLimitIndex];
      state.upperLimitIndex = getUpperLimit(
        upperLimitTime,
        state.upperLimitIndex,
        state.availableTimes
      );
    }
  }),

  setCurrentTime: thunk((actions, { time }, helper) => {
    const state = helper.getState();
    var index = seekNearestTimeIndex(time, state.availableTimes);
    actions.setCurrentTimeIndex({ index });
  }),

  setCurrentTimeIndex: thunk((actions, { index }, helper) => {
    const state = helper.getState();
    var upperLimit = state.upperLimitIndex || state.availableTimes.length - 1;
    var lowerLimit = state.lowerLimitIndex || 0;
    //clamp the value
    const newTimeIndex = Math.min(Math.max(lowerLimit, index), upperLimit);

    if (newTimeIndex < 0) {
      return;
    }
    actions.setTimeloadingIndex({ newTimeIndex });
    // const newTime = state.availableTimes[newTimeIndex];
    // console.log("INIT -- Current time: " + new Date(newTime).toISOString());
    if (
      checkSyncedLayersReady(
        state.availableTimes[state.loadingTimeIndex],
        state.syncedLayers
      )
    ) {
      actions.setNewTimeIndex();
    } else {
      // add timeout of 3 seconds if layers doesn't response
      setTimeout(actions.setNewTimeIndex, 3000);
    }
  }),

  nextTime: thunk((actions, { numSteps, loop }, helper) => {
    const state = helper.getState();

    if (!numSteps) {
      numSteps = 1;
    }
    let newIndex = state.currentTimeIndex;
    var upperLimit = state.upperLimitIndex || state.availableTimes.length - 1;
    var lowerLimit = state.lowerLimitIndex || 0;
    if (state.loadingTimeIndex > -1) {
      newIndex = state.loadingTimeIndex;
    }
    newIndex = newIndex + numSteps;
    if (newIndex > upperLimit) {
      if (!!loop) {
        newIndex = lowerLimit;
      } else {
        newIndex = upperLimit;
      }
    }
    // loop backwards
    if (newIndex < lowerLimit) {
      if (!!loop) {
        newIndex = upperLimit;
      } else {
        newIndex = lowerLimit;
      }
    }
    actions.setCurrentTimeIndex({ index: newIndex });
  }),

  previousTime: thunk((actions, { numSteps, loop }) => {
    actions.nextTime({ numSteps: numSteps * -1, loop });
  }),

  prepareNextTimes: action((state, { numSteps, howmany, loop }) => {
    if (!numSteps) {
      numSteps = 1;
    }

    let newIndex = state.currentTimeIndex;
    var currentIndex = newIndex;
    if (state.loadingTimeIndex > -1) {
      newIndex = state.loadingTimeIndex;
    }
    // assure synced layers have a buffer/cache of at least howmany elements
    for (var i = 0, len = state.syncedLayers.length; i < len; i++) {
      if (state.syncedLayers[i].setMinimumForwardCache) {
        state.syncedLayers[i].setMinimumForwardCache(howmany);
      }
    }
    var count = howmany;
    const upperLimit: number =
      state.upperLimitIndex || state.availableTimes.length - 1;
    const lowerLimit: number = state.lowerLimitIndex || 0;
    while (count > 0) {
      newIndex = newIndex + numSteps;
      if (newIndex > upperLimit) {
        if (!!loop) {
          newIndex = lowerLimit;
        } else {
          break;
        }
      }
      if (newIndex < lowerLimit) {
        if (!!loop) {
          newIndex = upperLimit;
        } else {
          break;
        }
      }
      if (currentIndex === newIndex) {
        //we looped around the timeline
        //no need to load further, the next times are already loading
        break;
      }
      state.loadingTimeIndex = newIndex;
      // timeloading({ newTime: availableTimes[newIndex] });
      // fire("timeloading", {
      //   time: _availableTimes[newIndex],
      // });
      count--;
    }
  }),

  getNumberNextTimesReady: action((state, { numSteps, howmany, loop }) => {
    if (!numSteps) {
      numSteps = 1;
    }

    var newIndex = state.currentTimeIndex;
    if (state.loadingTimeIndex > -1) {
      newIndex = state.loadingTimeIndex;
    }
    var count = howmany;
    var ready = 0;
    var upperLimit = state.upperLimitIndex || state.availableTimes.length - 1;
    var lowerLimit = state.lowerLimitIndex || 0;
    while (count > 0) {
      newIndex = newIndex + numSteps;
      if (newIndex > upperLimit) {
        if (!!loop) {
          newIndex = lowerLimit;
        } else {
          count = 0;
          ready = howmany;
          break;
        }
      }
      if (newIndex < lowerLimit) {
        if (!!loop) {
          newIndex = upperLimit;
        } else {
          count = 0;
          ready = howmany;
          break;
        }
      }
      var time = state.availableTimes[newIndex];
      if (checkSyncedLayersReady(time, state.syncedLayers)) {
        ready++;
      }
      count--;
    }
    state.numberNextTimesReady = ready;
  }),

  prepareAvailableTimes: thunk(
    (
      actions,
      { _availableTimes, updateCurrentTime, updateTimeDimensionMode },
      helper
    ) => {
      const state = helper.getState();
      const _updateCurrentTime =
        updateCurrentTime || state.availableTimes.length == 0;
      if (_updateCurrentTime || state.availableTimes.length == 0) {
        actions.setAvailableTime({
          times: _availableTimes,
          mode: updateTimeDimensionMode,
          period: "",
        });
      }
      if (_updateCurrentTime && _availableTimes.length) {
        actions.setCurrentTime({ time: _availableTimes[0] });
      }
    }
  ),
};

// const nodeEnv: string = (typeof process?.__ENV__ !== 'undefined' && __ENV__) as string;
const store = createStore(tdStoreModel);

export default store;
