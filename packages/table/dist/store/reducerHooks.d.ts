/// <reference types="ts-toolbelt" />
import { VTStoreModel } from ".";
export declare const useTStoreActions: <Result>(mapActions: (actions: import("easy-peasy").Actions<VTStoreModel>) => Result) => Result;
export declare const useStoreDispatch: () => import("easy-peasy").Dispatch<VTStoreModel, import("redux").AnyAction>;
export declare const useTStoreState: <Result>(mapState: (state: import("easy-peasy").StateMapper<import("Object/Pick")._Pick<VTStoreModel, import("Object/FilterKeys")._FilterKeys<VTStoreModel, import("easy-peasy").ActionTypes, "default">>>) => Result, equalityFn?: ((prev: Result, next: Result) => boolean) | undefined) => Result;
export declare const useStore: () => import("easy-peasy").Store<VTStoreModel, import("easy-peasy").EasyPeasyConfig<undefined, {}>>;
