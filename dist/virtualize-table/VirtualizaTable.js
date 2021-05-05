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
import React, { memo, useCallback, useRef } from "react";
import { useTableResizer } from "../hooks/useTableResizer";
import useTableData from "../hooks/useTableData";
import { TableToolbar } from "../toolbar/TableToolbar";
import TableFilter from "../filter/VirtualTableFilter";
import VirtualTableContainer from "./container-virtual/VirtualTableContainer";
import Overlay from "./overlay";
import VirtualList from "./container-virtual/VirtualList";
import { TablePagination } from "../Pagination";
import { calcTableHeght } from "../utils/theme";
/**
 * Decorator component that automatically adjusts the width and height of a single child
 */
var VirtualizaTable = memo(function (_a) {
    var _b;
    var rows = _a.rows, columns = _a.columns, _c = _a.width, width = _c === void 0 ? "100%" : _c, height = _a.height, _d = _a.hasFilter, hasFilter = _d === void 0 ? true : _d, _e = _a.hasToolbar, hasToolbar = _e === void 0 ? true : _e, title = _a.title, operationOnRows = _a.operationOnRows, classes = _a.classes, pagination = _a.pagination, tableDataParser = _a.tableDataParser, VTContainerProps = _a.VTContainerProps, VTToolbarProps = _a.VTToolbarProps, rest = __rest(_a, ["rows", "columns", "width", "height", "hasFilter", "hasToolbar", "title", "operationOnRows", "classes", "pagination", "tableDataParser", "VTContainerProps", "VTToolbarProps"]);
    useTableData(columns, rows, tableDataParser);
    var setTableRef = useTableResizer().setTableRef;
    var staticGrid = useRef();
    var mainList = useRef();
    var onScroll = useCallback(function (_a) {
        var scrollOffset = _a.scrollOffset, scrollUpdateWasRequested = _a.scrollUpdateWasRequested;
        if (!scrollUpdateWasRequested && staticGrid.current) {
            staticGrid.current.scrollTo(scrollOffset);
        }
    }, []);
    return (React.createElement(VirtualTableContainer, __assign({ classes: classes === null || classes === void 0 ? void 0 : classes.table }, VTContainerProps, { width: width }),
        hasToolbar && (React.createElement(TableToolbar, __assign({ title: title, operationOnRows: operationOnRows, classes: classes === null || classes === void 0 ? void 0 : classes.toolbar }, VTToolbarProps))),
        React.createElement("div", { role: "table", className: (_b = classes === null || classes === void 0 ? void 0 : classes.table) === null || _b === void 0 ? void 0 : _b.container, style: { display: "flex" } },
            React.createElement(Overlay, null),
            React.createElement(VirtualList, __assign({ ref: mainList, width: width, onScroll: onScroll, classes: classes, setTableRef: setTableRef, height: calcTableHeght(hasToolbar, VTToolbarProps === null || VTToolbarProps === void 0 ? void 0 : VTToolbarProps.height, pagination, height) }, rest)),
            React.createElement(Overlay, null)),
        hasFilter && React.createElement(TableFilter, null),
        pagination && (React.createElement(TablePagination, __assign({}, pagination, { classes: classes === null || classes === void 0 ? void 0 : classes.footer, width: width })))));
});
export default VirtualizaTable;
