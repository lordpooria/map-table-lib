import { Feature, Position } from "geojson";

export type TDTimes = Array<string | number>;
export type TDCoordinates = Position | Array<Position>;

export type TDFeature = Feature & {
  featureTimes?: TDTimes;
  geometry: {
    geometries?: Array<Position>;
    coordinates: TDCoordinates
  };
};


export type TimeZone = string;

export type AvailableTimes = Array<number>;
export type Mode = "extremes" | "intersect" | "union" | "replace";

export type SyncedLayer = Array<any>

export type Period = string

export type UTCType = boolean;
export type DurationType = string;
