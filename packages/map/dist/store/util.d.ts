import { AvailableTimes, FormattedData, Mode, Period, SyncedLayer } from "../types/common";
export declare function seekNearestTimeIndex(_: number, formattedData: FormattedData): number;
export declare function getLowerLimit(_: number, upperLimit: number, availableTimes: AvailableTimes): number;
export declare function getLowerLimitIndex(index: number, upperLimit: number, availableTimes: AvailableTimes): number;
export declare function getUpperLimit(_: number, lowerLimit: number, availableTimes: AvailableTimes): number;
export declare function getUpperLimitIndex(index: number, lowerLimit: number, availableTimes: AvailableTimes): number;
export declare function setAvailableTime(mode: Mode, times: AvailableTimes | undefined, period: Period, availableTimes: AvailableTimes): AvailableTimes;
export declare function getCurrentTime(loadingTimeIndex: number, currentTimeIndex: number, availableTimes: AvailableTimes): number | null;
export declare function checkSyncedLayersReady(time: number, syncedLayers: SyncedLayer): boolean;
