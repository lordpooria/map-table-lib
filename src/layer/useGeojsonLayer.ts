/*
 * L.TimeDimension.Layer.GeoJson:
 */

import { geoJSON, GeoJSON, GeoJSONOptions,Map } from "leaflet";
import { GeoJsonObject } from "geojson";
import { useEffect, useRef } from "react";
// import { useMap } from "react-leaflet";
import { sort_and_deduplicate, subtractTimeDuration } from "../utils/utils";

import { _getFeatureBetweenDates, _getFeatureTimes } from "./layer.util";
import { useTDStoreActions, useTDStoreState } from "../store/reducerHooks";
import { Mode } from "../types/index";
import { TDLayerOptions } from "./layer.type";

export const useLayer = (
  data: GeoJsonObject,
  leafletMapRef: Map,
  options: GeoJSONOptions,
  {
    // updateTimeDimension = false,
    updateTimeDimensionMode = "extremes" as Mode,
    addlastPoint = false,
    waitForReady = false,
    updateCurrentTime = false,
    duration,
  }: TDLayerOptions,
  { getFeatureBetweenDates = _getFeatureBetweenDates }
) => {
  // const leafletMapRef = useMap();
  const currentTime = useTDStoreState((state) => state.currentTime);
  const prepareAvailableTimes = useTDStoreActions(
    (actions) => actions.prepareAvailableTimes
  );

  const _loaded = useRef(false);
  const _currentLayer = useRef<GeoJSON<any>>();
  const layer = useRef<GeoJSON<any>>();

  function _update(currentTimeIndex: number) {
    if (!layer.current) return;
    if (!_loaded) {
      return;
    }

    let maxTime = currentTimeIndex,
      minTime = 0;

    if (duration) {
      const date = new Date(maxTime);
      subtractTimeDuration(date, duration, true);
      minTime = date.getTime();
    }

    // new coordinates:

    const _layer = geoJSON(undefined, options);
    const layers = layer.current.getLayers() as Array<any>;

    layers.forEach((lay) => {
      const feature = getFeatureBetweenDates(lay.feature, minTime, maxTime);

      if (feature) {
        _layer.addData(feature as GeoJsonObject);

        if (addlastPoint && feature.geometry.type == "LineString") {
          if (feature.geometry.coordinates.length > 0) {
            const properties = feature.properties;
            if (!properties) return;
            properties.last = true;
            _layer.addData({
              type: "Feature",
              properties,
              geometry: {
                type: "Point",
                coordinates:
                  feature.geometry.coordinates[
                    feature.geometry.coordinates.length - 1
                  ],
              },
            } as GeoJsonObject);
          }
        }
      }

      if (_currentLayer.current) {
        // removeLayer(_currentLayer.current);
        leafletMapRef.removeLayer(_currentLayer.current);
      }

      if (_layer.getLayers().length) {
        // addLayer(_layer);
        _layer.addTo(leafletMapRef);

        _currentLayer.current = _layer;
      }
    });
  }

  function _setAvailableTimes() {
    const times: Array<any> = [];
    if (!layer.current) return;
    const _layers = layer.current.getLayers() as Array<any>;
    console.warn(_layers);
    _layers.forEach((lay) => {
      if (lay.feature) {
        var featureTimes = _getFeatureTimes(lay.feature);
        for (var j = 0, m = featureTimes.length; j < m; j++) {
          times.push(featureTimes[j]);
        }
      }
    });
    // for (let i = 0, l = _layers.length; i < l; i++) {}

    const _availableTimes = sort_and_deduplicate(times);
    prepareAvailableTimes({
      _availableTimes,
      updateCurrentTime,
      updateTimeDimensionMode,
      // loadingTimeout: 3000,
      // updateTimeDimension,
    });
  }

  function _onReadyBaseLayer() {
    _loaded.current = true;
    _setAvailableTimes();
    // _update();
  }
  // function eachLayer(method, context) {
  //   if (_currentLayer) {
  //     method.call(context, _currentLayer);
  //   }
  //   return method.call(method, context);

  // }

  useEffect(() => {
    // console.log(layer);
    if (!data) return;

    layer.current = geoJSON(data, options);

    _setAvailableTimes();

    if (layer.current) {
      if (waitForReady) {
        layer.current.on("ready", _onReadyBaseLayer);
      } else {
        _loaded.current = true;
      }
    } else {
      _loaded.current = true;
      _setAvailableTimes();
    }
    // reload available times if data is added to the base layer
    layer.current.on("layeradd", function () {
      if (_loaded.current) {
        _setAvailableTimes();
      }
    });
  }, [data]);

  useEffect(() => {
    _update(currentTime);
  }, [currentTime]);

  return {};
};
