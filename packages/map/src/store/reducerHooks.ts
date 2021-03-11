import { createTypedHooks } from "easy-peasy";
import { TDStoreModel } from "./store";

const typedHooks = createTypedHooks<TDStoreModel>();

export const useTDStoreActions = typedHooks.useStoreActions;
export const useTDStoreDispatch = typedHooks.useStoreDispatch;
export const useTDStoreState = typedHooks.useStoreState;
export const useTDStore = typedHooks.useStore;
