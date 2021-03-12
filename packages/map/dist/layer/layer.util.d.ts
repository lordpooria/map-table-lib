import { TDFeature, TDTimes, TDCoordinates } from "../types";
export declare function _getFeatureTimes(feature: TDFeature): TDTimes;
export declare function _getFeatureBetweenDates(feature: TDFeature, minTime: number, maxTime: number): TDFeature | {
    type: string;
    properties: import("geojson").GeoJsonProperties;
    geometry: {
        type: "Point" | "MultiPoint" | "LineString" | "MultiLineString" | "Polygon" | "MultiPolygon" | "GeometryCollection";
        coordinates: TDCoordinates;
    };
} | null;
