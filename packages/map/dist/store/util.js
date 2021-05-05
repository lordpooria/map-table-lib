"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seekNearestTimeIndex = seekNearestTimeIndex;
exports.getLowerLimit = getLowerLimit;
exports.getLowerLimitIndex = getLowerLimitIndex;
exports.getUpperLimit = getUpperLimit;
exports.getUpperLimitIndex = getUpperLimitIndex;
exports.setAvailableTime = setAvailableTime;
exports.getCurrentTime = getCurrentTime;
exports.checkSyncedLayersReady = checkSyncedLayersReady;

var _utils = require("../utils/utils");

function seekNearestTimeIndex(_, formattedData) {
  let newIndex = 0;

  for (; newIndex < formattedData.length; newIndex++) {}

  if (newIndex > 0) {
    newIndex--;
  }

  return newIndex;
}

function getLowerLimit(_, upperLimit, availableTimes) {
  return getLowerLimitIndex(0, upperLimit, availableTimes);
}

function getLowerLimitIndex(index, upperLimit, availableTimes) {
  return Math.min(Math.max(index || 0, 0), upperLimit || availableTimes.length - 1);
}

function getUpperLimit(_, lowerLimit, availableTimes) {
  return getUpperLimitIndex(0, lowerLimit, availableTimes);
}

function getUpperLimitIndex(index, lowerLimit, availableTimes) {
  return Math.max(Math.min(index, availableTimes.length - 1), lowerLimit || 0);
}

function setAvailableTime(mode, times, period, availableTimes) {
  if (mode == "extremes" && times) {
    return (0, _utils.explodeTimeRange)(new Date(times[0]), new Date(times[times.length - 1]), period);
  } else {
    const parsedTimes = (0, _utils.parseTimesExpression)(times, period);

    if (availableTimes.length === 0) {
      return parsedTimes;
    } else if (mode == "intersect") {
      return (0, _utils.intersect_arrays)(parsedTimes, availableTimes);
    } else if (mode == "union") {
      return (0, _utils.union_arrays)(parsedTimes, availableTimes);
    } else if (mode == "replace") {
      return parsedTimes;
    } else {
      throw "Merge available times mode not implemented: " + mode;
    }
  }
}

function getCurrentTimeIndex(currentTimeIndex, availableTimes) {
  if (currentTimeIndex === -1) {
    return availableTimes.length - 1;
  }

  return currentTimeIndex;
}

function getCurrentTime(loadingTimeIndex, currentTimeIndex, availableTimes) {
  var index = -1;

  if (loadingTimeIndex !== -1) {
    index = loadingTimeIndex;
  } else {
    index = getCurrentTimeIndex(currentTimeIndex, availableTimes);
  }

  if (index >= 0) {
    return availableTimes[index];
  } else {
    return null;
  }
}

function checkSyncedLayersReady(time, syncedLayers) {
  for (var i = 0, len = syncedLayers.length; i < len; i++) {
    if (syncedLayers[i].isReady) {
      if (!syncedLayers[i].isReady(time)) {
        return false;
      }
    }
  }

  return true;
}
//# sourceMappingURL=util.js.map