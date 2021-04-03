/*
 * L.TimeDimension.Layer.GeoJson:
 */

import { geoJSON, GeoJSONOptions, Map } from "leaflet";
import { GeoJSON } from "geojson";
import { useEffect, useRef } from "react";
// import { useMap } from "react-leaflet";
import { sort_and_deduplicate, subtractTimeDuration } from "../utils/utils";

import { _getFeatureBetweenDates, _getFeatureTimes } from "../utils/layer.util";
import { useTDStoreActions, useTDStoreState } from "../store/reducerHooks";
import { CurrentData, Mode } from "../types/common";
import { TDLayerOptions } from "../types/layer";
import { extractAvailableTimes } from "../utils/geojson";
import { useParseLayer } from "./useParseLayer";

export const useLayer = (
  data: GeoJSON,
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
  // const currentTime = useTDStoreState((state) => state.currentTime);
  // const currentTimeIndex = useTDStoreState((state) => state.currentTimeIndex);
  const currentData = useTDStoreState((state) => state.currentData);
  const prepareAvailableTimes = useTDStoreActions(
    (actions) => actions.prepareAvailableTimes
  );
  const layers = useParseLayer(data);
  const _loaded = useRef(false);
  const _currentLayer = useRef<AppGeoJSONLayer>();
  const layer = useRef<AppGeoJSONLayer>();

  function _update(currentData: CurrentData) {
    // let maxTime = currentTimeIndex,
    //   minTime = 0;

    // if (duration) {
    //   const date = new Date(maxTime);
    //   subtractTimeDuration(date, duration, true);
    //   minTime = date.getTime();
    // }

    // new coordinates:

    const _layer = geoJSON(undefined, options);
    // const layers = layer.current.getLayers() as Array<any>;
    if (_currentLayer.current) {
      leafletMapRef.removeLayer(_currentLayer.current);
    }

    currentData.features.forEach((d) => {
      _layer.addData(d).bindTooltip(function () {
        return d.properties?.id ;
      });
    });

    if (_layer.getLayers().length) {
      _layer.addTo(leafletMapRef);

      _currentLayer.current = _layer;
    }

    /*  layers.forEach((lay) => {
      const feature = getFeatureBetweenDates(lay.feature, minTime, maxTime);

      if (feature) {
        _layer.addData(feature as GeoJSON);

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
            } as GeoJSON);
          }
        }
      }

      if (_currentLayer.current) {
        leafletMapRef.removeLayer(_currentLayer.current);
      }

      if (_layer.getLayers().length) {
        _layer.addTo(leafletMapRef);

        _currentLayer.current = _layer;
      }
    });*/
  }

  function _setAvailableTimes() {
    const times = extractAvailableTimes(layer.current);
    const _availableTimes = sort_and_deduplicate(times);
    prepareAvailableTimes({
      _availableTimes,
      updateCurrentTime,
      updateTimeDimensionMode,
      // loadingTimeout: 3000,
      // updateTimeDimension,
    });
  }

  // function _onReadyBaseLayer() {
  //   _loaded.current = true;
  //   _setAvailableTimes();
  //   // _update();
  // }
  // function eachLayer(method, context) {
  //   if (_currentLayer) {
  //     method.call(context, _currentLayer);
  //   }
  //   return method.call(method, context);

  // }

  useEffect(() => {
    // if (!data) return;
    // layer.current = geoJSON(data, {});
    // _setAvailableTimes();
    // if (layer.current) {
    //   if (waitForReady) {
    //     layer.current.on("ready", _onReadyBaseLayer);
    //   } else {
    //     _loaded.current = true;
    //   }
    // } else {
    //   _loaded.current = true;
    //   _setAvailableTimes();
    // }
    // // reload available times if data is added to the base layer
    // layer.current.on("layeradd", function () {
    //   if (_loaded.current) {
    //     _setAvailableTimes();
    //   }
    // });
  }, [data]);

  useEffect(() => {
    if (!currentData || !_loaded) return;
    _update(currentData);
  }, [currentData]);

  return {};
};
