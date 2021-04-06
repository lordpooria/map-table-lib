import { AvailableTimes, FormattedData, Mode, Period, SyncedLayer } from "../types/common";
export declare function seekNearestTimeIndex(time: number, formattedData: FormattedData): number;
export declare function getLowerLimit(time: number, upperLimit: number, availableTimes: AvailableTimes): number;
export declare function getLowerLimitIndex(index: number, upperLimit: number, availableTimes: AvailableTimes): number;
export declare function getUpperLimit(time: number, lowerLimit: number, availableTimes: AvailableTimes): number;
export declare function getUpperLimitIndex(index: number, lowerLimit: number, availableTimes: AvailableTimes): number;
export declare function setAvailableTime(mode: Mode, times: AvailableTimes | undefined, period: Period, availableTimes: AvailableTimes): AvailableTimes;
export declare function getCurrentTime(loadingTimeIndex: number, currentTimeIndex: number, availableTimes: AvailableTimes): number | null;
export declare function checkSyncedLayersReady(time: number, syncedLayers: SyncedLayer): boolean;
