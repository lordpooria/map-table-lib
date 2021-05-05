var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { Provider, TableStoreProvider } from "./container/Wrapper";
import VirtualizaTable from "./virtualize-table/VirtualizaTable";
/**
 * Decorator component that automatically adjusts the width and height of a single child
 */
export var HesabaVirtualTable = function (_a) {
    var direction = _a.direction, language = _a.language, theme = _a.theme, props = __rest(_a, ["direction", "language", "theme"]);
    return (React.createElement(TableStoreProvider, null,
        React.createElement(Provider, { direction: direction, language: language, theme: theme },
            React.createElement(VirtualizaTable, __assign({}, props)))));
};
export default HesabaVirtualTable;
