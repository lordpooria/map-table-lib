import {
  AvailableTimes,
  DurationType,
  Period,
  TimeZone,
  UTCType,
} from "../types/common";
import { parse, Duration } from "iso8601-duration";

export function getDisplayDateFormat(date: Date, timeZone: TimeZone) {
  //   var timeZone = this._getCurrentTimeZone();
  if (timeZone.toLowerCase() == "utc") {
    return date.toISOString();
  }
  if (timeZone.toLowerCase() == "local") {
    return date.toLocaleString();
  }
  return date.toLocaleString([], {
    timeZone: timeZone,
    timeZoneName: "short",
  });
}
export function getDisplayNoTimeError() {
  return "Time not available";
}

export function getTimeDuration(ISODuration: string) {
  return parse(ISODuration);
}

export function addTimeDuration(
  date: any,
  duration: DurationType | Duration,
  utc?: UTCType
) {
  if (typeof utc === "undefined") {
    utc = true;
  }
  let parsedDuration: Duration | undefined;
  if (typeof duration == "string") {
    parsedDuration = getTimeDuration(duration);
  } else {
    parsedDuration = duration;
  }
  // var l = duration.length;
  var get = utc ? "getUTC" : "get";
  var set = utc ? "setUTC" : "set";

  if (parsedDuration?.years) {
    date[set + "FullYear"](date[get + "FullYear"]() + parsedDuration.years);
  }
  if (parsedDuration?.months) {
    date[set + "Month"](date[get + "Month"]() + parsedDuration.months);
  }
  if (parsedDuration?.weeks) {
    // weeks
    date[set + "Date"](date[get + "Date"]() + parsedDuration.weeks * 7);
  }
  if (parsedDuration?.days) {
    date[set + "Date"](date[get + "Date"]() + parsedDuration?.days);
  }
  if (parsedDuration?.hours) {
    date[set + "Hours"](date[get + "Hours"]() + parsedDuration?.hours);
  }
  if (parsedDuration?.minutes) {
    date[set + "Minutes"](date[get + "Minutes"]() + parsedDuration?.minutes);
  }
  if (parsedDuration?.seconds) {
    date[set + "Seconds"](date[get + "Seconds"]() + parsedDuration?.seconds);
  }
}

export function subtractTimeDuration(
  date: any,
  duration: Duration | DurationType,
  utc: UTCType
) {
  let parsedDuration: Duration | undefined;

  if (typeof duration == "string") {
    parsedDuration = getTimeDuration(duration);
  } else {
    parsedDuration = duration;
  }

  if (typeof duration == "string") {
  }
  const subDuration = Object.entries(parsedDuration).reduce(
    (acc, [key, val]) => ({ ...acc, [key]: -val }),
    {} as Duration
  );

  // for (var i = 0, l = Object.keys(duration.length; i < l; i++) {
  //   subDuration.push(-duration[i]);
  // }
  addTimeDuration(date, subDuration, utc);
}

export function parseAndExplodeTimeRange(
  timeRange: string,
  overwritePeriod: Period
) {
  var tr = timeRange.split("/");
  var startTime = new Date(Date.parse(tr[0]));
  var endTime = new Date(Date.parse(tr[1]));
  var period = tr.length > 2 && tr[2].length ? tr[2] : "P1D";
  if (overwritePeriod !== undefined && overwritePeriod !== null) {
    period = overwritePeriod;
  }
  return explodeTimeRange(startTime, endTime, period);
}

export function explodeTimeRange(
  startTime: Date,
  endTime: Date,
  ISODuration: Period,
  validTimeRange?: string
) {
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
    if (
      validTimeRange === undefined ||
      (currentTime.getUTCHours() >= minHour &&
        currentTime.getUTCHours() <= maxHour)
    ) {
      if (
        (currentTime.getUTCHours() != minHour ||
          currentTime.getUTCMinutes() >= minMinutes) &&
        (currentTime.getUTCHours() != maxHour ||
          currentTime.getUTCMinutes() <= maxMinutes)
      ) {
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

export function parseTimeInterval(timeInterval: string) {
  var parts = timeInterval.split("/");
  if (parts.length != 2) {
    throw "Incorrect ISO9601 TimeInterval: " + timeInterval;
  }
  var startTime: Date | number = Date.parse(parts[0]);
  var endTime = null;
  var duration = null;
  if (isNaN(startTime)) {
    // -> format duration/endTime
    duration = getTimeDuration(parts[0]);
    endTime = Date.parse(parts[1]);
    startTime = new Date(endTime);
    subtractTimeDuration(startTime, duration, true);
    endTime = new Date(endTime);
  } else {
    endTime = Date.parse(parts[1]);
    if (isNaN(endTime)) {
      // -> format startTime/duration
      duration = getTimeDuration(parts[1]);
      endTime = new Date(startTime);
      addTimeDuration(endTime, duration, true);
    } else {
      // -> format startTime/endTime
      endTime = new Date(endTime);
    }
    startTime = new Date(startTime);
  }
  return [startTime, endTime];
}

export function parseTimesExpression(
  times: AvailableTimes | undefined,
  overwritePeriod: Period
) {
  var result: AvailableTimes = [];
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
        result = result.concat(
          parseAndExplodeTimeRange(timeRange, overwritePeriod)
        );
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

export function intersect_arrays(
  arrayA: AvailableTimes,
  arrayB: AvailableTimes
): AvailableTimes {
  var a = arrayA.slice(0);
  var b = arrayB.slice(0);
  var result: AvailableTimes = [];
  while (a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) {
      a.shift();
    } else if (a[0] > b[0]) {
      b.shift();
    } /* they're equal */ else {
      result.push(a.shift() as number);
      b.shift();
    }
  }
  return result;
}

export function union_arrays(
  arrayA: AvailableTimes,
  arrayB: AvailableTimes
): AvailableTimes {
  var a = arrayA.slice(0);
  var b = arrayB.slice(0);
  var result: AvailableTimes = [];
  while (a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) {
      result.push(a.shift() as number);
    } else if (a[0] > b[0]) {
      result.push(b.shift() as number);
    } /* they're equal */ else {
      result.push(a.shift() as number);
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

export function sort_and_deduplicate(arr: AvailableTimes) {
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

