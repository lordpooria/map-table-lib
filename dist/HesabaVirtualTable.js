import { __assign, __rest } from "tslib";
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
