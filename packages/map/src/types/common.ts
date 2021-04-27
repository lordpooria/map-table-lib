import { Feature, Position, FeatureCollection } from "geojson";
import theme from "../styles/theme";
import { GeoJSON } from "leaflet";

export type AppTheme = typeof theme;

export type AppGeoJSONLayer = GeoJSON<any>;

export type CurrentData = { time: number; features: Array<Feature> };
export type FormattedData = Array<CurrentData>;
export type Users = Record<string, string>;
export type GeoJSONData = (FeatureCollection | Users)[];

export type TDTimes = Array<string | number>;
export type TDCoordinates = Position | Array<Position>;

export type TDFeature = Feature & {
  featureTimes?: TDTimes;
  geometry: {
    geometries?: Array<Position>;
    coordinates: TDCoordinates;
  };
};

export type TimeZone = string;

export type AvailableTimes = Array<number>;
export type Mode = "extremes" | "intersect" | "union" | "replace";

export type SyncedLayer = Array<any>;

export type Period = string;

export type UTCType = boolean;
export type DurationType = string;
