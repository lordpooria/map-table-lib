import { createTypedHooks } from "easy-peasy";
import { VTStoreModel } from ".";
import { VTStoreTableSize } from "./tableSize";

const typedHooks = createTypedHooks<VTStoreModel>();

export const useTStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useTStoreState = typedHooks.useStoreState;
export const useStore = typedHooks.useStore;

const typedHooksTableSize = createTypedHooks<VTStoreTableSize>();

export const useTableSizeStoreActions = typedHooksTableSize.useStoreActions;
export const useTableSizeStoreDispatch = typedHooksTableSize.useStoreDispatch;
export const useTableSizeStoreState = typedHooksTableSize.useStoreState;
export const useTableSizeStore = typedHooksTableSize.useStore;
