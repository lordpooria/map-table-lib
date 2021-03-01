import { Action, Thunk } from "easy-peasy";
import { AvailableTimes, Mode, Period, SyncedLayer } from "../types";
export interface TDStoreModel {
    tdVersion: string;
    lowerLimitIndex: number;
    upperLimitIndex: number;
    loadingTimeIndex: number;
    currentTimeIndex: number;
    currentTime: number;
    numberNextTimesReady: number;
    availableTimes: AvailableTimes;
    syncedLayers: SyncedLayer;
    setTimeloadingIndex: Action<TDStoreModel, {
        newTimeIndex: number;
    }>;
    setNewTimeIndex: Action<TDStoreModel>;
    prepareNextTimes: Action<TDStoreModel, {
        numSteps: number;
        howmany: number;
        loop: boolean;
    }>;
    getNumberNextTimesReady: Action<TDStoreModel, {
        numSteps: number;
        howmany: number;
        loop: boolean;
    }>;
    setAvailableTime: Action<TDStoreModel, {
        times?: AvailableTimes;
        mode: Mode;
        period: Period;
    }>;
    setCurrentTimeIndex: Thunk<TDStoreModel, {
        index: number;
        loadingTimeout: number;
    }>;
    setCurrentTime: Thunk<TDStoreModel, {
        time: number;
        loadingTimeout: number;
    }>;
    nextTime: Thunk<TDStoreModel, {
        numSteps: number;
        loop: boolean;
        loadingTimeout: number;
    }>;
    previousTime: Thunk<TDStoreModel, {
        numSteps: number;
        loop: boolean;
        loadingTimeout: number;
    }>;
    prepareAvailableTimes: Thunk<TDStoreModel, {
        _availableTimes: AvailableTimes;
        updateCurrentTime: boolean;
        updateTimeDimensionMode: Mode;
        loadingTimeout: number;
    }>;
}
export declare const tdStoreModel: TDStoreModel;
declare const store: import("easy-peasy").Store<TDStoreModel, import("easy-peasy").EasyPeasyConfig<undefined, {}>>;
export default store;
