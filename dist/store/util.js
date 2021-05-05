import { explodeTimeRange, intersect_arrays, parseTimesExpression, union_arrays, } from "../utils/utils";
export function seekNearestTimeIndex(_, formattedData) {
    var newIndex = 0;
    for (; newIndex < formattedData.length; newIndex++) {
        // if (time < formattedData[newIndex][0].properties.time) {
        //   break;
        // }
    }
    // We've found the first index greater than the time. Return the previous
    if (newIndex > 0) {
        newIndex--;
    }
    return newIndex;
}
export function getLowerLimit(_, upperLimit, availableTimes) {
    // var index = seekNearestTimeIndex(time, availableTimes);
    return getLowerLimitIndex(0, upperLimit, availableTimes);
}
export function getLowerLimitIndex(index, upperLimit, availableTimes) {
    return Math.min(Math.max(index || 0, 0), upperLimit || availableTimes.length - 1);
}
export function getUpperLimit(_, lowerLimit, availableTimes) {
    // var index = seekNearestTimeIndex(time, availableTimes);
    return getUpperLimitIndex(0, lowerLimit, availableTimes);
}
export function getUpperLimitIndex(index, lowerLimit, availableTimes) {
    return Math.max(Math.min(index, availableTimes.length - 1), lowerLimit || 0);
}
export function setAvailableTime(mode, times, period, availableTimes) {
    if (mode == "extremes" && times) {
        return explodeTimeRange(new Date(times[0]), new Date(times[times.length - 1]), period);
    }
    else {
        var parsedTimes = parseTimesExpression(times, period);
        if (availableTimes.length === 0) {
            return parsedTimes;
        }
        else if (mode == "intersect") {
            return intersect_arrays(parsedTimes, availableTimes);
        }
        else if (mode == "union") {
            return union_arrays(parsedTimes, availableTimes);
        }
        else if (mode == "replace") {
            return parsedTimes;
        }
        else {
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
export function getCurrentTime(loadingTimeIndex, currentTimeIndex, availableTimes) {
    var index = -1;
    if (loadingTimeIndex !== -1) {
        index = loadingTimeIndex;
    }
    else {
        index = getCurrentTimeIndex(currentTimeIndex, availableTimes);
    }
    if (index >= 0) {
        return availableTimes[index];
    }
    else {
        return null;
    }
}
export function checkSyncedLayersReady(time, syncedLayers) {
    for (var i = 0, len = syncedLayers.length; i < len; i++) {
        if (syncedLayers[i].isReady) {
            if (!syncedLayers[i].isReady(time)) {
                return false;
            }
        }
    }
    return true;
}
