"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractAvailableTimes = extractAvailableTimes;
exports.extractExtraData = extractExtraData;

var _layer = require("./layer.util");

function extractAvailableTimes(layer) {
  const times = [];
  if (!layer) return [];

  const _layers = layer.getLayers();

  _layers.forEach(lay => {
    if (lay.feature) {
      var featureTimes = (0, _layer._getFeatureTimes)(lay.feature);

      for (var j = 0, m = featureTimes.length; j < m; j++) {
        times.push(featureTimes[j]);
      }
    }
  });

  return times;
}

function extractExtraData(layer) {
  const times = [];
  if (!layer) return [];

  const _layers = layer.getLayers();

  _layers.forEach(lay => {
    if (lay.feature) {
      var featureTimes = (0, _layer._getFeatureTimes)(lay.feature);

      for (var j = 0, m = featureTimes.length; j < m; j++) {
        times.push(featureTimes[j]);
      }
    }
  });

  return times;
}
//# sourceMappingURL=geojson.js.map