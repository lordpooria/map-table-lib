import { VTStoreModel } from ".";
import { VTStoreTableSize } from "./tableSize";
export declare const useTStoreActions: <Result>(mapActions: (actions: import("easy-peasy").ActionMapper<VTStoreModel, import("easy-peasy").ValidActionProperties<VTStoreModel>>) => Result) => Result;
export declare const useStoreDispatch: () => import("easy-peasy").Dispatch<VTStoreModel, import("redux").AnyAction>;
export declare const useTStoreState: <Result>(mapState: (state: import("easy-peasy").StateMapper<{
    VTVersion: string;
    settings: {
        direction: import("..").PageDir;
        lang: string;
    };
    visibleRows: import("..").TableRows;
    enhancedColumns: import("..").TableColumns<any>;
    showFilter: boolean;
    filters: import("../types/VirtualTableFilter").TableFilterType[];
    numRowsSelected: import("easy-peasy").Computed<VTStoreModel, number, {}>;
    selectedRows: import("easy-peasy").Computed<VTStoreModel, number[], {}>;
    visibleColumns: import("easy-peasy").Computed<VTStoreModel, import("..").TableColumns<any>, {}>;
    stickyColumns: import("easy-peasy").Computed<VTStoreModel, import("..").TableColumns<any>, {}>;
}>) => Result, equalityFn?: ((prev: Result, next: Result) => boolean) | undefined) => Result;
export declare const useStore: () => import("easy-peasy").Store<VTStoreModel, import("easy-peasy").EasyPeasyConfig<undefined, {}>>;
export declare const useTableSizeStoreActions: <Result>(mapActions: (actions: import("easy-peasy").ActionMapper<VTStoreTableSize, import("easy-peasy").ValidActionProperties<VTStoreTableSize>>) => Result) => Result;
export declare const useTableSizeStoreDispatch: () => import("easy-peasy").Dispatch<VTStoreTableSize, import("redux").AnyAction>;
export declare const useTableSizeStoreState: <Result>(mapState: (state: import("easy-peasy").StateMapper<{
    currentWidths: Record<string, number>;
    totalWidth: number;
}>) => Result, equalityFn?: ((prev: Result, next: Result) => boolean) | undefined) => Result;
export declare const useTableSizeStore: () => import("easy-peasy").Store<VTStoreTableSize, import("easy-peasy").EasyPeasyConfig<undefined, {}>>;
