import { GeoJSONOptions, Map } from "leaflet";
import { GeoJsonObject } from "geojson";
import { _getFeatureBetweenDates } from "./layer.util";
import { TDLayerOptions } from "./layer.type";
export declare const useLayer: (data: GeoJsonObject, leafletMapRef: Map, options: GeoJSONOptions, { updateTimeDimensionMode, addlastPoint, waitForReady, updateCurrentTime, duration, }: TDLayerOptions, { getFeatureBetweenDates }: {
    getFeatureBetweenDates?: typeof _getFeatureBetweenDates | undefined;
}) => {};
