import { createTypedHooks } from "easy-peasy";
import { VTStoreModel } from ".";

const typedHooks = createTypedHooks<VTStoreModel>();

export const useTStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useTStoreState = typedHooks.useStoreState;
export const useStore = typedHooks.useStore;
