"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStore = exports.useTStoreState = exports.useStoreDispatch = exports.useTStoreActions = void 0;

var _easyPeasy = require("easy-peasy");

const typedHooks = (0, _easyPeasy.createTypedHooks)();
const useTStoreActions = typedHooks.useStoreActions;
exports.useTStoreActions = useTStoreActions;
const useStoreDispatch = typedHooks.useStoreDispatch;
exports.useStoreDispatch = useStoreDispatch;
const useTStoreState = typedHooks.useStoreState;
exports.useTStoreState = useTStoreState;
const useStore = typedHooks.useStore;
exports.useStore = useStore;
//# sourceMappingURL=reducerHooks.js.map