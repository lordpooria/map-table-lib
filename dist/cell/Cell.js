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
import { createStyles, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { DATA_FIELD } from "../utils/constants";
import { RESIZE_HANDLE_WIDTH, ROW_MIN_WIDTH } from "../utils/themeConstants";
import { useTableSizeState } from "../container/TableSizeProvider";
var useCellStyles = makeStyles(function () {
    return createStyles({
        rowCell: {},
        simpleCell: {
            fontFamily: "inherit",
        },
    });
});
var SimpleTableCell = function (_a) {
    var value = _a.value, className = _a.className;
    var classes = useCellStyles();
    return (React.createElement(Typography, { align: "center", className: clsx(classes.simpleCell, className) }, value));
};
var Cell = function (_a) {
    var _b;
    var label = _a.label, _c = _a.minWidth, minWidth = _c === void 0 ? ROW_MIN_WIDTH : _c, colKey = _a.colKey, _d = _a.CellComponent, CellComponent = _d === void 0 ? SimpleTableCell : _d, HeaderComponent = _a.HeaderComponent, visible = _a.visible, sorted = _a.sorted, row = _a.row, rowIndex = _a.rowIndex, colIndex = _a.colIndex, columnsLength = _a.columnsLength, 
    // currentWidths,
    classes = _a.classes, sticky = _a.sticky, custom = _a.custom, isScrolling = _a.isScrolling, rest = __rest(_a, ["label", "minWidth", "colKey", "CellComponent", "HeaderComponent", "visible", "sorted", "row", "rowIndex", "colIndex", "columnsLength", "classes", "sticky", "custom", "isScrolling"]);
    var cellClasses = useCellStyles();
    // const handleW = colIndex === columnsLength - 1 ? 0 : RESIZE_HANDLE_WIDTH;
    var currentWidths = useTableSizeState().currentWidths;
    var calcMinWidth = currentWidths[rest[DATA_FIELD]]
        ? currentWidths[rest[DATA_FIELD]] + RESIZE_HANDLE_WIDTH
        : minWidth + RESIZE_HANDLE_WIDTH;
    var value = typeof row[colKey] === "object" ? (_b = row[colKey]) === null || _b === void 0 ? void 0 : _b.value : row[colKey];
    return (React.createElement("div", __assign({}, rest, { key: colKey, style: {
            minWidth: calcMinWidth || minWidth,
            width: calcMinWidth || minWidth,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
        }, className: clsx(
        // commonClasses.tableCell,
        cellClasses.rowCell, classes === null || classes === void 0 ? void 0 : classes.root
        // { [classes.evenRow]: index % 2 === 0 },
        // { [classes.oddRow]: index % 2 !== 0 }
        ) }),
        React.createElement(CellComponent, { label: label, index: rowIndex, rowKey: rowIndex, row: row, value: value, className: classes === null || classes === void 0 ? void 0 : classes.simpleCell })));
};
export default Cell;
