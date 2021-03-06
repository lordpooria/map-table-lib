import { TDStoreModel } from "./store";
export declare const useTDStoreActions: <Result>(mapActions: (actions: import("easy-peasy").ActionMapper<TDStoreModel, import("easy-peasy").ValidActionProperties<TDStoreModel>>) => Result) => Result;
export declare const useTDStoreDispatch: () => import("easy-peasy").Dispatch<TDStoreModel, import("redux").AnyAction>;
export declare const useTDStoreState: <Result>(mapState: (state: import("easy-peasy").StateMapper<{
    tdVersion: string;
    lowerLimitIndex: number;
    upperLimitIndex: number;
    loadingTimeIndex: number;
    currentTimeIndex: number;
    currentTime: number;
    numberNextTimesReady: number;
    availableTimes: import("..").AvailableTimes;
    syncedLayers: import("..").SyncedLayer;
}>) => Result, equalityFn?: ((prev: Result, next: Result) => boolean) | undefined) => Result;
export declare const useTDStore: () => import("easy-peasy").Store<TDStoreModel, import("easy-peasy").EasyPeasyConfig<undefined, {}>>;
