import React from "react";
import { StoreProvider, useStore } from "easy-peasy";
import store from "../store";
import ThemeMaker from "./ThemeProvider";
import { TableSizeProvider } from "./TableSizeProvider";
import { StyleProvider } from "@hesaba/theme-language";
import { TableRowProvider } from "./TableRowProvider";
export var TableStoreProvider = function (_a) {
    var _b;
    var children = _a.children;
    var easyPeasyStore = useStore();
    var isWrapepdWithCTProvider = (_b = easyPeasyStore === null || easyPeasyStore === void 0 ? void 0 : easyPeasyStore.getState()) === null || _b === void 0 ? void 0 : _b.VTVersion;
    if (isWrapepdWithCTProvider) {
        return React.createElement(React.Fragment, null, children);
    }
    return (React.createElement(TableSizeProvider, null,
        React.createElement(TableRowProvider, null,
            React.createElement(StoreProvider, { store: store }, children))));
};
export var Provider = function (_a) {
    var children = _a.children, direction = _a.direction, language = _a.language, theme = _a.theme;
    return (React.createElement(StyleProvider, { language: language, direction: direction, theme: theme },
        React.createElement(ThemeMaker, null, children)));
};
export default Provider;
