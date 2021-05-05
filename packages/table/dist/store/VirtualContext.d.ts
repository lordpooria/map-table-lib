/// <reference types="react" />
/// <reference types="ts-toolbelt" />
declare const VirtualTableStore: {
    Provider: import("react").FC<{
        runtimeModel?: import("./index").VTStoreModel | undefined;
        injections?: {} | ((previousInjections: {}) => {}) | undefined;
    }>;
    useStore: () => import("easy-peasy").Store<import("./index").VTStoreModel, import("easy-peasy").EasyPeasyConfig<undefined, {}>>;
    useStoreState: <Result = any>(mapState: (state: import("easy-peasy").StateMapper<import("Object/Pick")._Pick<import("./index").VTStoreModel, import("Object/FilterKeys")._FilterKeys<import("./index").VTStoreModel, import("easy-peasy").ActionTypes, "default">>>) => Result, equalityFn?: ((prev: Result, next: Result) => boolean) | undefined) => Result;
    useStoreActions: <Result_1 = any>(mapActions: (actions: import("easy-peasy").Actions<import("./index").VTStoreModel>) => Result_1) => Result_1;
    useStoreDispatch: () => import("easy-peasy").Dispatch<import("./index").VTStoreModel, import("redux").AnyAction>;
    useStoreRehydrated: () => boolean;
};
export default VirtualTableStore;
