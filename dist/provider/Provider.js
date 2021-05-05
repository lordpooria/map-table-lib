import React, { Fragment } from "react";
import { StoreProvider, useStore } from "easy-peasy";
import store from "../store/store";
var Wrapper = function (_a) {
    var _b;
    var children = _a.children;
    var easyPeasyStore = useStore();
    var isWrapepdWithReactFlowProvider = (_b = easyPeasyStore === null || easyPeasyStore === void 0 ? void 0 : easyPeasyStore.getState()) === null || _b === void 0 ? void 0 : _b.tdVersion;
    if (isWrapepdWithReactFlowProvider) {
        // we need to wrap it with a fragment because t's not allowed for children to be a ReactNode
        // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
        return React.createElement(Fragment, null, children);
    }
    return React.createElement(StoreProvider, { store: store }, children);
};
Wrapper.displayName = "TDProvider";
export default Wrapper;
