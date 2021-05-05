import { _getFeatureTimes } from "./layer.util";
export function extractAvailableTimes(layer) {
    var times = [];
    if (!layer)
        return [];
    var _layers = layer.getLayers();
    _layers.forEach(function (lay) {
        if (lay.feature) {
            var featureTimes = _getFeatureTimes(lay.feature);
            for (var j = 0, m = featureTimes.length; j < m; j++) {
                times.push(featureTimes[j]);
            }
        }
    });
    return times;
}
export function extractExtraData(layer) {
    var times = [];
    if (!layer)
        return [];
    var _layers = layer.getLayers();
    _layers.forEach(function (lay) {
        if (lay.feature) {
            var featureTimes = _getFeatureTimes(lay.feature);
            for (var j = 0, m = featureTimes.length; j < m; j++) {
                times.push(featureTimes[j]);
            }
        }
    });
    return times;
}
