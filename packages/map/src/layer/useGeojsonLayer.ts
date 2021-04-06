import { geoJSON, GeoJSONOptions, Map } from "leaflet";
import { Feature, Geometry } from "geojson";
import { useEffect, useRef } from "react";
import L from "leaflet";

import { _getFeatureBetweenDates, _getFeatureTimes } from "../utils/layer.util";
import { useTDStoreState } from "../store/reducerHooks";
import { CurrentData } from "../types/common";
// import { TDLayerOptions } from "../types";

const commonOption = {
  style: function (feature: Feature<Geometry, any> | undefined) {
    return { color: feature?.properties.color };
  },
  pointToLayer: function (
    feature: Feature<Geometry, any> | undefined,
    latLng: L.LatLng
  ) {
    return L.circleMarker(latLng, {
      radius: 7,
      color: feature?.properties.color,
      fillColor: feature?.properties.color,
      weight: 2,
      opacity: 0.7,
      fillOpacity: 0.1,
    });
  },
};

export const useLayer = (
  // data: GeoJSON,
  leafletMapRef: Map,
  options: GeoJSONOptions,
  // layerOptions?: TDLayerOptions
) =>
  // { getFeatureBetweenDates = _getFeatureBetweenDates }
  {
    // const leafletMapRef = useMap();
    // const currentTime = useTDStoreState((state) => state.currentTime);
    // const currentTimeIndex = useTDStoreState((state) => state.currentTimeIndex);
    const currentData = useTDStoreState((state) => state.currentData);
    // const prepareAvailableTimes = useTDStoreActions(
    //   (actions) => actions.prepareAvailableTimes
    // );
    // const layers = useParseLayer(data);
    const _loaded = useRef(false);
    const _currentLayer = useRef<AppGeoJSONLayer>();
    // const layer = useRef<AppGeoJSONLayer>();

    function _update(currentData: CurrentData) {
      // let maxTime = currentTimeIndex,
      //   minTime = 0;

      // if (duration) {
      //   const date = new Date(maxTime);
      //   subtractTimeDuration(date, duration, true);
      //   minTime = date.getTime();
      // }

      // new coordinates:

      const _layer = geoJSON(undefined, { ...commonOption, ...options });

      // const layers = layer.current.getLayers() as Array<any>;
      if (_currentLayer.current) {
        leafletMapRef.removeLayer(_currentLayer.current);
      }

      currentData.features.forEach((feature) => {
        _layer.addData(feature).bindTooltip(function () {
          return feature.properties?.id;
        });
        //   if (
        //     layerOptions?.addlastPoint &&
        //     (feature?.geometry as any)?.geometries?.length > 0
        //   ) {
        //     (feature?.geometry as any)?.geometries?.forEach((f: any) => {

        //       const properties = f.properties;
        //       if (!properties) return;
        //       properties.last = true;
        //       _layer.addData({
        //         type: "Feature",
        //         properties,
        //         geometry: {
        //           type: "Point",
        //           coordinates: (feature?.geometry as any).coordinates[
        //             (feature?.geometry as any).coordinates.length - 1
        //           ],
        //         },
        //       } as GeoJSON);
        //     });
        //   }
      });

      if (_layer.getLayers().length) {
        _layer.addTo(leafletMapRef);

        _currentLayer.current = _layer;
      }
    }

    // function _setAvailableTimes() {
    //   const times = extractAvailableTimes(layer.current);
    //   const _availableTimes = sort_and_deduplicate(times);
    //   prepareAvailableTimes({
    //     _availableTimes,
    //     updateCurrentTime,
    //     updateTimeDimensionMode,
    //     // loadingTimeout: 3000,
    //     // updateTimeDimension,
    //   });
    // }

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

    // useEffect(() => {
    // getFeatureBetweenDates && getFeatureBetweenDates({} as any,{} as any,{} as any)
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
    // }, [data]);

    useEffect(() => {
      if (!currentData || !_loaded) return;
      _update(currentData);
    }, [currentData]);

    return {};
  };
