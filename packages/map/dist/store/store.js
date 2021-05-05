"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.tdStoreModel = void 0;

var _easyPeasy = require("easy-peasy");

var _util = require("./util");

const tdStoreModel = {
  tdVersion: "1.0.0",
  lowerLimitIndex: 0,
  upperLimitIndex: 0,
  loadingTimeIndex: -1,
  currentTimeIndex: -1,
  currentTime: -1,
  currentData: null,
  users: null,
  numberNextTimesReady: 0,
  formattedData: [],
  availableTimes: [],
  syncedLayers: [],
  setTimeloadingIndex: (0, _easyPeasy.action)((state, {
    newTimeIndex
  }) => {
    state.loadingTimeIndex = newTimeIndex;
  }),
  setNewTimeIndex: (0, _easyPeasy.action)(state => {
    if (state.loadingTimeIndex === -1) {
      return;
    }

    state.currentData = state.formattedData[state.loadingTimeIndex];
    state.currentTime = state.formattedData[state.loadingTimeIndex].time;
    state.currentTimeIndex = state.loadingTimeIndex;
    state.loadingTimeIndex = -1;
  }),
  setData: (0, _easyPeasy.action)((state, {
    formattedData,
    users
  }) => {
    state.formattedData = formattedData;
    state.users = users;
  }),
  setAvailableTime: (0, _easyPeasy.action)((state, {
    times,
    mode,
    period
  }) => {
    const _availableTimes = (0, _util.setAvailableTime)(mode, times, period, state.availableTimes);

    if (_availableTimes !== undefined) state.availableTimes = _availableTimes;

    if (state.lowerLimitIndex) {
      const lowerLimitTime = state.availableTimes[state.lowerLimitIndex];
      state.lowerLimitIndex = (0, _util.getLowerLimit)(lowerLimitTime, state.upperLimitIndex, state.availableTimes);
    }

    if (state.upperLimitIndex) {
      const upperLimitTime = state.availableTimes[state.upperLimitIndex];
      state.upperLimitIndex = (0, _util.getUpperLimit)(upperLimitTime, state.upperLimitIndex, state.availableTimes);
    }
  }),
  setCurrentTime: (0, _easyPeasy.thunk)((actions, {
    time
  }, helper) => {
    const state = helper.getState();
    var index = (0, _util.seekNearestTimeIndex)(time, state.formattedData);
    actions.setCurrentTimeIndex({
      index
    });
  }),
  setCurrentTimeIndex: (0, _easyPeasy.thunk)((actions, {
    index
  }, helper) => {
    const state = helper.getState();
    var upperLimit = state.upperLimitIndex || state.formattedData.length - 1;
    var lowerLimit = state.lowerLimitIndex || 0;
    const newTimeIndex = Math.min(Math.max(lowerLimit, index), upperLimit);

    if (newTimeIndex < 0) {
      return;
    }

    actions.setTimeloadingIndex({
      newTimeIndex
    });
    actions.setNewTimeIndex();
  }),
  nextTime: (0, _easyPeasy.thunk)((actions, {
    numSteps,
    loop
  }, helper) => {
    const state = helper.getState();

    if (!numSteps) {
      numSteps = 1;
    }

    let newIndex = state.currentTimeIndex;
    var upperLimit = state.upperLimitIndex || state.formattedData.length - 1;
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

    if (newIndex < lowerLimit) {
      if (!!loop) {
        newIndex = upperLimit;
      } else {
        newIndex = lowerLimit;
      }
    }

    actions.setCurrentTimeIndex({
      index: newIndex
    });
  }),
  previousTime: (0, _easyPeasy.thunk)((actions, {
    numSteps,
    loop
  }) => {
    actions.nextTime({
      numSteps: numSteps * -1,
      loop
    });
  }),
  prepareNextTimes: (0, _easyPeasy.action)((state, {
    numSteps,
    howmany,
    loop
  }) => {
    if (!numSteps) {
      numSteps = 1;
    }

    let newIndex = state.currentTimeIndex;
    var currentIndex = newIndex;

    if (state.loadingTimeIndex > -1) {
      newIndex = state.loadingTimeIndex;
    }

    for (var i = 0, len = state.syncedLayers.length; i < len; i++) {
      if (state.syncedLayers[i].setMinimumForwardCache) {
        state.syncedLayers[i].setMinimumForwardCache(howmany);
      }
    }

    var count = howmany;
    const upperLimit = state.upperLimitIndex || state.formattedData.length - 1;
    const lowerLimit = state.lowerLimitIndex || 0;

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
        break;
      }

      state.loadingTimeIndex = newIndex;
      count--;
    }
  }),
  getNumberNextTimesReady: (0, _easyPeasy.action)((state, {
    numSteps,
    howmany,
    loop
  }) => {
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

      if ((0, _util.checkSyncedLayersReady)(time, state.syncedLayers)) {
        ready++;
      }

      count--;
    }

    state.numberNextTimesReady = ready;
  }),
  prepareAvailableTimes: (0, _easyPeasy.thunk)((actions, {
    _availableTimes,
    updateCurrentTime,
    updateTimeDimensionMode
  }, helper) => {
    const state = helper.getState();

    const _updateCurrentTime = updateCurrentTime || state.availableTimes.length == 0;

    if (_updateCurrentTime || state.availableTimes.length == 0) {
      actions.setAvailableTime({
        times: _availableTimes,
        mode: updateTimeDimensionMode,
        period: ""
      });
    }

    if (_updateCurrentTime && _availableTimes.length) {
      actions.setCurrentTime({
        time: _availableTimes[0]
      });
    }
  })
};
exports.tdStoreModel = tdStoreModel;
const store = (0, _easyPeasy.createStore)(tdStoreModel);
var _default = store;
exports.default = _default;
//# sourceMappingURL=store.js.map