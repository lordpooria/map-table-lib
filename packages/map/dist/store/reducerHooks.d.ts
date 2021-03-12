/// <reference types="@hesaba/table/node_modules/ts-toolbelt" />
import { TDStoreModel } from "./store";
export declare const useTDStoreActions: <Result>(mapActions: (actions: import("easy-peasy").Actions<TDStoreModel>) => Result) => Result;
export declare const useTDStoreDispatch: () => import("easy-peasy").Dispatch<TDStoreModel, import("redux").AnyAction>;
export declare const useTDStoreState: <Result>(mapState: (state: import("easy-peasy").StateMapper<import("Object/Pick")._Pick<TDStoreModel, import("Object/FilterKeys")._FilterKeys<TDStoreModel, import("easy-peasy").ActionTypes, "default">>>) => Result, equalityFn?: ((prev: Result, next: Result) => boolean) | undefined) => Result;
export declare const useTDStore: () => import("easy-peasy").Store<TDStoreModel, import("easy-peasy").EasyPeasyConfig<undefined, {}>>;
