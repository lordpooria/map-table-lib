import { Feature, Position, FeatureCollection } from "geojson";
import theme from "../styles/theme";
import { GeoJSON } from "leaflet";
export declare type AppTheme = typeof theme;
export declare type AppGeoJSONLayer = GeoJSON<any>;
export declare type CurrentData = {
    time: number;
    features: Array<Feature>;
};
export declare type FormattedData = Array<CurrentData>;
export declare type Users = Record<string, string>;
export declare type GeoJSONData = (FeatureCollection | Users)[];
export declare type TDTimes = Array<string | number>;
export declare type TDCoordinates = Position | Array<Position>;
export declare type TDFeature = Feature & {
    featureTimes?: TDTimes;
    geometry: {
        geometries?: Array<Position>;
        coordinates: TDCoordinates;
    };
};
export declare type TimeZone = string;
export declare type AvailableTimes = Array<number>;
export declare type Mode = "extremes" | "intersect" | "union" | "replace";
export declare type SyncedLayer = Array<any>;
export declare type Period = string;
export declare type UTCType = boolean;
export declare type DurationType = string;
