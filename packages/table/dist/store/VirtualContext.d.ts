/// <reference types="react" />
declare const VirtualTableStore: {
    Provider: import("react").FC<{
        runtimeModel?: import(".").VTStoreModel | undefined;
        injections?: {} | ((previousInjections: {}) => {}) | undefined;
    }>;
    useStore: () => import("easy-peasy").Store<import(".").VTStoreModel, import("easy-peasy").EasyPeasyConfig<undefined, {}>>;
    useStoreState: <Result = any>(mapState: (state: import("easy-peasy").StateMapper<{
        settings: {
            direction: AppDirection;
            lang: string;
        };
        visibleRows: import("../types").TableRows;
        enhancedColumns: import("../types").TableColumns<any>;
        showFilter: boolean;
        filters: import("../filter/VirtualTableFilterType").TableFilterType[];
        numRowsSelected: import("easy-peasy").Computed<import(".").VTStoreModel, number, {}>;
        selectedRows: import("easy-peasy").Computed<import(".").VTStoreModel, number[], {}>;
        visibleColumns: import("easy-peasy").Computed<import(".").VTStoreModel, import("../types").TableColumns<any>, {}>;
        stickyColumns: import("easy-peasy").Computed<import(".").VTStoreModel, import("../types").TableColumns<any>, {}>;
    }>) => Result, equalityFn?: ((prev: Result, next: Result) => boolean) | undefined) => Result;
    useStoreActions: <Result_1 = any>(mapActions: (actions: import("easy-peasy").ActionMapper<import(".").VTStoreModel, import("easy-peasy").ValidActionProperties<import(".").VTStoreModel>>) => Result_1) => Result_1;
    useStoreDispatch: () => import("easy-peasy").Dispatch<import(".").VTStoreModel, import("redux").AnyAction>;
    useStoreRehydrated: () => boolean;
};
export default VirtualTableStore;
