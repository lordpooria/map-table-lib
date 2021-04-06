import { Action, Thunk } from "easy-peasy";
import { AvailableTimes, FormattedData, CurrentData, Mode, Period, SyncedLayer, Users } from "../types/common";
export interface TDStoreModel {
    tdVersion: string;
    lowerLimitIndex: number;
    upperLimitIndex: number;
    loadingTimeIndex: number;
    currentTimeIndex: number;
    currentTime: number;
    currentData: CurrentData | null;
    users: Users | null;
    formattedData: FormattedData;
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
    setData: Action<TDStoreModel, {
        formattedData: FormattedData;
        users: Users;
    }>;
    setCurrentTimeIndex: Thunk<TDStoreModel, {
        index: number;
    }>;
    setCurrentTime: Thunk<TDStoreModel, {
        time: number;
    }>;
    nextTime: Thunk<TDStoreModel, {
        numSteps: number;
        loop: boolean;
    }>;
    previousTime: Thunk<TDStoreModel, {
        numSteps: number;
        loop: boolean;
    }>;
    prepareAvailableTimes: Thunk<TDStoreModel, {
        _availableTimes: AvailableTimes;
        updateCurrentTime: boolean;
        updateTimeDimensionMode: Mode;
    }>;
}
export declare const tdStoreModel: TDStoreModel;
declare const store: import("easy-peasy").Store<TDStoreModel, import("easy-peasy").EasyPeasyConfig<undefined, {}>>;
export default store;
