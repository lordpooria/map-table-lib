import { VTStoreModel } from ".";
export declare const useTStoreActions: <Result>(mapActions: (actions: import("easy-peasy").ActionMapper<VTStoreModel, import("easy-peasy").ValidActionProperties<VTStoreModel>>) => Result) => Result;
export declare const useStoreDispatch: () => import("easy-peasy").Dispatch<VTStoreModel, import("redux").AnyAction>;
export declare const useTStoreState: <Result>(mapState: (state: import("easy-peasy").StateMapper<{
    settings: {
        direction: import("../types").PageDir;
        lang: string;
    };
    visibleRows: import("../types").TableRows;
    enhancedColumns: import("../types").TableColumns<any>;
    showFilter: boolean;
    filters: import("../filter/VirtualTableFilterType").TableFilterType[];
    numRowsSelected: import("easy-peasy").Computed<VTStoreModel, number, {}>;
    selectedRows: import("easy-peasy").Computed<VTStoreModel, number[], {}>;
    visibleColumns: import("easy-peasy").Computed<VTStoreModel, import("../types").TableColumns<any>, {}>;
    stickyColumns: import("easy-peasy").Computed<VTStoreModel, import("../types").TableColumns<any>, {}>;
}>) => Result, equalityFn?: ((prev: Result, next: Result) => boolean) | undefined) => Result;
export declare const useStore: () => import("easy-peasy").Store<VTStoreModel, import("easy-peasy").EasyPeasyConfig<undefined, {}>>;
