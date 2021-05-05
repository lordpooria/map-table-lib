import { AvailableTimes, DurationType, Period, TimeZone, UTCType } from "../types/common";
import { Duration } from "iso8601-duration";
export declare function getDisplayDateFormat(date: Date, timeZone: TimeZone): string;
export declare function getTimeDuration(ISODuration: string): Duration;
export declare function addTimeDuration(date: any, duration: DurationType | Duration, utc?: UTCType): void;
export declare function subtractTimeDuration(date: any, duration: Duration | DurationType, utc: UTCType): void;
export declare function parseAndExplodeTimeRange(timeRange: string, overwritePeriod: Period): number[];
export declare function explodeTimeRange(startTime: Date, endTime: Date, ISODuration: Period, validTimeRange?: string): number[];
export declare function parseTimeInterval(timeInterval: string): Date[];
export declare function parseTimesExpression(times: AvailableTimes | undefined, overwritePeriod: Period): AvailableTimes;
export declare function intersect_arrays(arrayA: AvailableTimes, arrayB: AvailableTimes): AvailableTimes;
export declare function union_arrays(arrayA: AvailableTimes, arrayB: AvailableTimes): AvailableTimes;
export declare function sort_and_deduplicate(arr: AvailableTimes): number[];
