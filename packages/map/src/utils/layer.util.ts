import { TDFeature, TDTimes, TDCoordinates } from "../types/common";

export function _getFeatureTimes(feature: TDFeature): TDTimes {
  if (!feature.featureTimes) {
    if (!feature.properties) {
      feature.featureTimes = [];
    } else if (feature.properties.hasOwnProperty("coordTimes")) {
      feature.featureTimes = feature.properties.coordTimes;
    } else if (feature.properties.hasOwnProperty("times")) {
      feature.featureTimes = feature.properties.times;
    } else if (feature.properties.hasOwnProperty("linestringTimestamps")) {
      feature.featureTimes = feature.properties.linestringTimestamps;
    } else if (feature.properties.hasOwnProperty("time")) {
      feature.featureTimes = [feature.properties.time];
    } else {
      feature.featureTimes = [];
    }
    if (!feature.featureTimes) return [];
    // String dates to ms
    for (let i = 0, l = feature.featureTimes.length; i < l; i++) {
      let time = feature.featureTimes[i];
      if (typeof time === "string") {
        time = Date.parse(time.trim());
        feature.featureTimes[i] = time;
      }
    }
  }
  return feature.featureTimes;
}

export function _getFeatureBetweenDates(
  feature: TDFeature,
  minTime: number,
  maxTime: number
) {
  var featureTimes = _getFeatureTimes(feature);
  if (featureTimes.length == 0) {
    return feature;
  }

  var index_min = null,
    index_max = null,
    l = featureTimes.length;

  if (featureTimes[0] > maxTime || featureTimes[l - 1] < minTime) {
    return null;
  }

  if (featureTimes[l - 1] > minTime) {
    for (var i = 0; i < l; i++) {
      if (index_min === null && featureTimes[i] > minTime) {
        // set index_min the first time that current time is greater the minTime
        index_min = i;
      }
      if (featureTimes[i] > maxTime) {
        index_max = i;
        break;
      }
    }
  }
  if (index_min === null) {
    index_min = 0;
  }
  if (index_max === null) {
    index_max = l;
  }
  var new_coordinates: TDCoordinates = [];
  if (feature.geometry.geometries) {
  } else {
    if (typeof feature.geometry.coordinates[0] === "number") {
      new_coordinates = feature.geometry.coordinates;
    } else {
      new_coordinates = feature.geometry.coordinates.slice(
        index_min,
        index_max
      ) as TDCoordinates;
    }
  }
  return {
    type: "Feature",
    properties: feature.properties,
    geometry: {
      type: feature.geometry.type,
      coordinates: new_coordinates,
    },
  };
}
