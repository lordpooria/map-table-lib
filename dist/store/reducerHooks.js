import { createTypedHooks } from "easy-peasy";
var typedHooks = createTypedHooks();
export var useTDStoreActions = typedHooks.useStoreActions;
export var useTDStoreDispatch = typedHooks.useStoreDispatch;
export var useTDStoreState = typedHooks.useStoreState;
export var useTDStore = typedHooks.useStore;
