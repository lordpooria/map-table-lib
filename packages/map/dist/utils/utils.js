"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDisplayDateFormat = getDisplayDateFormat;
exports.getTimeDuration = getTimeDuration;
exports.addTimeDuration = addTimeDuration;
exports.subtractTimeDuration = subtractTimeDuration;
exports.parseAndExplodeTimeRange = parseAndExplodeTimeRange;
exports.explodeTimeRange = explodeTimeRange;
exports.parseTimeInterval = parseTimeInterval;
exports.parseTimesExpression = parseTimesExpression;
exports.intersect_arrays = intersect_arrays;
exports.union_arrays = union_arrays;
exports.sort_and_deduplicate = sort_and_deduplicate;

var _iso8601Duration = require("iso8601-duration");

function getDisplayDateFormat(date, timeZone) {
  if (timeZone.toLowerCase() == "utc") {
    return date.toISOString();
  }

  if (timeZone.toLowerCase() == "local") {
    return date.toLocaleString();
  }

  return date.toLocaleString([], {
    timeZone: timeZone,
    timeZoneName: "short"
  });
}

function getTimeDuration(ISODuration) {
  return (0, _iso8601Duration.parse)(ISODuration);
}

function addTimeDuration(date, duration, utc) {
  var _parsedDuration, _parsedDuration2, _parsedDuration3, _parsedDuration4, _parsedDuration6, _parsedDuration8, _parsedDuration10;

  if (typeof utc === "undefined") {
    utc = true;
  }

  let parsedDuration;

  if (typeof duration == "string") {
    parsedDuration = getTimeDuration(duration);
  } else {
    parsedDuration = duration;
  }

  var get = utc ? "getUTC" : "get";
  var set = utc ? "setUTC" : "set";

  if ((_parsedDuration = parsedDuration) !== null && _parsedDuration !== void 0 && _parsedDuration.years) {
    date[set + "FullYear"](date[get + "FullYear"]() + parsedDuration.years);
  }

  if ((_parsedDuration2 = parsedDuration) !== null && _parsedDuration2 !== void 0 && _parsedDuration2.months) {
    date[set + "Month"](date[get + "Month"]() + parsedDuration.months);
  }

  if ((_parsedDuration3 = parsedDuration) !== null && _parsedDuration3 !== void 0 && _parsedDuration3.weeks) {
    date[set + "Date"](date[get + "Date"]() + parsedDuration.weeks * 7);
  }

  if ((_parsedDuration4 = parsedDuration) !== null && _parsedDuration4 !== void 0 && _parsedDuration4.days) {
    var _parsedDuration5;

    date[set + "Date"](date[get + "Date"]() + ((_parsedDuration5 = parsedDuration) === null || _parsedDuration5 === void 0 ? void 0 : _parsedDuration5.days));
  }

  if ((_parsedDuration6 = parsedDuration) !== null && _parsedDuration6 !== void 0 && _parsedDuration6.hours) {
    var _parsedDuration7;

    date[set + "Hours"](date[get + "Hours"]() + ((_parsedDuration7 = parsedDuration) === null || _parsedDuration7 === void 0 ? void 0 : _parsedDuration7.hours));
  }

  if ((_parsedDuration8 = parsedDuration) !== null && _parsedDuration8 !== void 0 && _parsedDuration8.minutes) {
    var _parsedDuration9;

    date[set + "Minutes"](date[get + "Minutes"]() + ((_parsedDuration9 = parsedDuration) === null || _parsedDuration9 === void 0 ? void 0 : _parsedDuration9.minutes));
  }

  if ((_parsedDuration10 = parsedDuration) !== null && _parsedDuration10 !== void 0 && _parsedDuration10.seconds) {
    var _parsedDuration11;

    date[set + "Seconds"](date[get + "Seconds"]() + ((_parsedDuration11 = parsedDuration) === null || _parsedDuration11 === void 0 ? void 0 : _parsedDuration11.seconds));
  }
}

function subtractTimeDuration(date, duration, utc) {
  let parsedDuration;

  if (typeof duration == "string") {
    parsedDuration = getTimeDuration(duration);
  } else {
    parsedDuration = duration;
  }

  if (typeof duration == "string") {}

  const subDuration = Object.entries(parsedDuration).reduce((acc, [key, val]) => ({ ...acc,
    [key]: -val
  }), {});
  addTimeDuration(date, subDuration, utc);
}

function parseAndExplodeTimeRange(timeRange, overwritePeriod) {
  var tr = timeRange.split("/");
  var startTime = new Date(Date.parse(tr[0]));
  var endTime = new Date(Date.parse(tr[1]));
  var period = tr.length > 2 && tr[2].length ? tr[2] : "P1D";

  if (overwritePeriod !== undefined && overwritePeriod !== null) {
    period = overwritePeriod;
  }

  return explodeTimeRange(startTime, endTime, period);
}

function explodeTimeRange(startTime, endTime, ISODuration, validTimeRange) {
  var duration = getTimeDuration(ISODuration);
  var result = [];
  var currentTime = new Date(startTime.getTime());
  var minHour = -1,
      minMinutes = -1,
      maxHour = -1,
      maxMinutes = -1;

  if (validTimeRange !== undefined) {
    var validTimeRangeArray = validTimeRange.split("/");
    minHour = +validTimeRangeArray[0].split(":")[0];
    minMinutes = +validTimeRangeArray[0].split(":")[1];
    maxHour = +validTimeRangeArray[1].split(":")[0];
    maxMinutes = +validTimeRangeArray[1].split(":")[1];
  }

  while (currentTime < endTime) {
    if (validTimeRange === undefined || currentTime.getUTCHours() >= minHour && currentTime.getUTCHours() <= maxHour) {
      if ((currentTime.getUTCHours() != minHour || currentTime.getUTCMinutes() >= minMinutes) && (currentTime.getUTCHours() != maxHour || currentTime.getUTCMinutes() <= maxMinutes)) {
        result.push(currentTime.getTime());
      }
    }

    addTimeDuration(currentTime, duration);
  }

  if (currentTime >= endTime) {
    result.push(endTime.getTime());
  }

  return result;
}

function parseTimeInterval(timeInterval) {
  var parts = timeInterval.split("/");

  if (parts.length != 2) {
    throw "Incorrect ISO9601 TimeInterval: " + timeInterval;
  }

  var startTime = Date.parse(parts[0]);
  var endTime = null;
  var duration = null;

  if (isNaN(startTime)) {
    duration = getTimeDuration(parts[0]);
    endTime = Date.parse(parts[1]);
    startTime = new Date(endTime);
    subtractTimeDuration(startTime, duration, true);
    endTime = new Date(endTime);
  } else {
    endTime = Date.parse(parts[1]);

    if (isNaN(endTime)) {
      duration = getTimeDuration(parts[1]);
      endTime = new Date(startTime);
      addTimeDuration(endTime, duration, true);
    } else {
      endTime = new Date(endTime);
    }

    startTime = new Date(startTime);
  }

  return [startTime, endTime];
}

function parseTimesExpression(times, overwritePeriod) {
  var result = [];

  if (!times) {
    return result;
  }

  if (typeof times == "string" || times instanceof String) {
    var timeRanges = times.split(",");
    var timeRange;
    var timeValue;

    for (var i = 0, l = timeRanges.length; i < l; i++) {
      timeRange = timeRanges[i];

      if (timeRange.split("/").length == 3) {
        result = result.concat(parseAndExplodeTimeRange(timeRange, overwritePeriod));
      } else {
        timeValue = Date.parse(timeRange);

        if (!isNaN(timeValue)) {
          result.push(timeValue);
        }
      }
    }
  } else {
    result = times;
  }

  return result.sort(function (a, b) {
    return a - b;
  });
}

function intersect_arrays(arrayA, arrayB) {
  var a = arrayA.slice(0);
  var b = arrayB.slice(0);
  var result = [];

  while (a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) {
      a.shift();
    } else if (a[0] > b[0]) {
      b.shift();
    } else {
        result.push(a.shift());
        b.shift();
      }
  }

  return result;
}

function union_arrays(arrayA, arrayB) {
  var a = arrayA.slice(0);
  var b = arrayB.slice(0);
  var result = [];

  while (a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) {
      result.push(a.shift());
    } else if (a[0] > b[0]) {
      result.push(b.shift());
    } else {
        result.push(a.shift());
        b.shift();
      }
  }

  if (a.length > 0) {
    result = result.concat(a);
  } else if (b.length > 0) {
    result = result.concat(b);
  }

  return result;
}

function sort_and_deduplicate(arr) {
  arr = arr.slice(0).sort(function (a, b) {
    return a - b;
  });
  var result = [];
  var last = null;

  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i] !== last) {
      result.push(arr[i]);
      last = arr[i];
    }
  }

  return result;
}
//# sourceMappingURL=utils.js.map