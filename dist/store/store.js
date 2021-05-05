import { action, createStore, thunk } from "easy-peasy";
import { seekNearestTimeIndex, getLowerLimit, getUpperLimit, setAvailableTime, checkSyncedLayersReady, } from "./util";
export var tdStoreModel = {
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
    setTimeloadingIndex: action(function (state, _a) {
        var newTimeIndex = _a.newTimeIndex;
        state.loadingTimeIndex = newTimeIndex;
    }),
    setNewTimeIndex: action(function (state) {
        if (state.loadingTimeIndex === -1) {
            return;
        }
        state.currentData = state.formattedData[state.loadingTimeIndex];
        state.currentTime = state.formattedData[state.loadingTimeIndex].time;
        state.currentTimeIndex = state.loadingTimeIndex;
        // console.log("END -- Current time: " + new Date(time).toISOString());
        state.loadingTimeIndex = -1;
    }),
    setData: action(function (state, _a) {
        var formattedData = _a.formattedData, users = _a.users;
        state.formattedData = formattedData;
        state.users = users;
    }),
    setAvailableTime: action(function (state, _a) {
        var times = _a.times, mode = _a.mode, period = _a.period;
        var _availableTimes = setAvailableTime(mode, times, period, state.availableTimes);
        if (_availableTimes !== undefined)
            state.availableTimes = _availableTimes;
        if (state.lowerLimitIndex) {
            var lowerLimitTime = state.availableTimes[state.lowerLimitIndex];
            state.lowerLimitIndex = getLowerLimit(lowerLimitTime, state.upperLimitIndex, state.availableTimes);
        }
        if (state.upperLimitIndex) {
            var upperLimitTime = state.availableTimes[state.upperLimitIndex];
            state.upperLimitIndex = getUpperLimit(upperLimitTime, state.upperLimitIndex, state.availableTimes);
        }
    }),
    setCurrentTime: thunk(function (actions, _a, helper) {
        var time = _a.time;
        var state = helper.getState();
        var index = seekNearestTimeIndex(time, state.formattedData);
        actions.setCurrentTimeIndex({ index: index });
    }),
    setCurrentTimeIndex: thunk(function (actions, _a, helper) {
        var index = _a.index;
        var state = helper.getState();
        var upperLimit = state.upperLimitIndex || state.formattedData.length - 1;
        var lowerLimit = state.lowerLimitIndex || 0;
        //clamp the value
        var newTimeIndex = Math.min(Math.max(lowerLimit, index), upperLimit);
        if (newTimeIndex < 0) {
            return;
        }
        actions.setTimeloadingIndex({ newTimeIndex: newTimeIndex });
        // const newTime = state.availableTimes[newTimeIndex];
        // console.log("INIT -- Current time: " + new Date(newTime).toISOString());
        // if (
        //   checkSyncedLayersReady(
        //     state.availableTimes[state.loadingTimeIndex],
        //     state.syncedLayers
        //   )
        // ) {
        actions.setNewTimeIndex();
        // } else {
        //   // add timeout of 3 seconds if layers doesn't response
        //   setTimeout(actions.setNewTimeIndex, 3000);
        // }
    }),
    nextTime: thunk(function (actions, _a, helper) {
        var numSteps = _a.numSteps, loop = _a.loop;
        var state = helper.getState();
        if (!numSteps) {
            numSteps = 1;
        }
        var newIndex = state.currentTimeIndex;
        var upperLimit = state.upperLimitIndex || state.formattedData.length - 1;
        var lowerLimit = state.lowerLimitIndex || 0;
        if (state.loadingTimeIndex > -1) {
            newIndex = state.loadingTimeIndex;
        }
        newIndex = newIndex + numSteps;
        if (newIndex > upperLimit) {
            if (!!loop) {
                newIndex = lowerLimit;
            }
            else {
                newIndex = upperLimit;
            }
        }
        // loop backwards
        if (newIndex < lowerLimit) {
            if (!!loop) {
                newIndex = upperLimit;
            }
            else {
                newIndex = lowerLimit;
            }
        }
        actions.setCurrentTimeIndex({ index: newIndex });
    }),
    previousTime: thunk(function (actions, _a) {
        var numSteps = _a.numSteps, loop = _a.loop;
        actions.nextTime({ numSteps: numSteps * -1, loop: loop });
    }),
    prepareNextTimes: action(function (state, _a) {
        var numSteps = _a.numSteps, howmany = _a.howmany, loop = _a.loop;
        if (!numSteps) {
            numSteps = 1;
        }
        var newIndex = state.currentTimeIndex;
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
        var upperLimit = state.upperLimitIndex || state.formattedData.length - 1;
        var lowerLimit = state.lowerLimitIndex || 0;
        while (count > 0) {
            newIndex = newIndex + numSteps;
            if (newIndex > upperLimit) {
                if (!!loop) {
                    newIndex = lowerLimit;
                }
                else {
                    break;
                }
            }
            if (newIndex < lowerLimit) {
                if (!!loop) {
                    newIndex = upperLimit;
                }
                else {
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
    getNumberNextTimesReady: action(function (state, _a) {
        var numSteps = _a.numSteps, howmany = _a.howmany, loop = _a.loop;
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
                }
                else {
                    count = 0;
                    ready = howmany;
                    break;
                }
            }
            if (newIndex < lowerLimit) {
                if (!!loop) {
                    newIndex = upperLimit;
                }
                else {
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
    prepareAvailableTimes: thunk(function (actions, _a, helper) {
        var _availableTimes = _a._availableTimes, updateCurrentTime = _a.updateCurrentTime, updateTimeDimensionMode = _a.updateTimeDimensionMode;
        var state = helper.getState();
        var _updateCurrentTime = updateCurrentTime || state.availableTimes.length == 0;
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
    }),
};
// const nodeEnv: string = (typeof process?.__ENV__ !== 'undefined' && __ENV__) as string;
var store = createStore(tdStoreModel);
export default store;
