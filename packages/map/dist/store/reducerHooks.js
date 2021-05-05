"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTDStore = exports.useTDStoreState = exports.useTDStoreDispatch = exports.useTDStoreActions = void 0;

var _easyPeasy = require("easy-peasy");

const typedHooks = (0, _easyPeasy.createTypedHooks)();
const useTDStoreActions = typedHooks.useStoreActions;
exports.useTDStoreActions = useTDStoreActions;
const useTDStoreDispatch = typedHooks.useStoreDispatch;
exports.useTDStoreDispatch = useTDStoreDispatch;
const useTDStoreState = typedHooks.useStoreState;
exports.useTDStoreState = useTDStoreState;
const useTDStore = typedHooks.useStore;
exports.useTDStore = useTDStore;
//# sourceMappingURL=reducerHooks.js.map