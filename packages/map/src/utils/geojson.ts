import { _getFeatureTimes } from "./layer.util";
import { AppGeoJSONLayer } from "../types/common";
export function extractAvailableTimes(layer: AppGeoJSONLayer | undefined) {
  const times: Array<any> = [];
  if (!layer) return [];
  const _layers = layer.getLayers() as Array<any>;

  _layers.forEach((lay) => {
    if (lay.feature) {
      var featureTimes = _getFeatureTimes(lay.feature);
      for (var j = 0, m = featureTimes.length; j < m; j++) {
        times.push(featureTimes[j]);
      }
    }
  });

  return times;
}
export function extractExtraData(layer: AppGeoJSONLayer | undefined) {
  const times: Array<any> = [];
  if (!layer) return [];
  const _layers = layer.getLayers() as Array<any>;

  _layers.forEach((lay) => {
    if (lay.feature) {
      var featureTimes = _getFeatureTimes(lay.feature);
      for (var j = 0, m = featureTimes.length; j < m; j++) {
        times.push(featureTimes[j]);
      }
    }
  });

  return times;
}
