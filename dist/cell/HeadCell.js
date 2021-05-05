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
import { createStyles, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { DATA_FIELD, DRAG_CLASS, HESABA_TABLE_HEADER_CLASS, } from "../utils/constants";
import { RESIZE_HANDLE_WIDTH, ROW_MIN_WIDTH } from "../utils/themeConstants";
import HeaderMenu from "../virtualize-table/header/HeaderMenu";
import useCommonStyles from "../styles/commonStyles";
import DividerIcon from "../assets/icons/common/DividerIcon";
import { useTableSizeState } from "../container/TableSizeProvider";
var useHeadStyles = makeStyles(function (theme) {
    return createStyles({
        columnContainer: {
            display: "flex",
            top: 0,
            left: 0,
            position: "sticky",
            zIndex: 2,
            backgroundColor: "rgba(255,255,255,0.8)",
            alignItems: "center",
            borderBottom: "solid " + theme.palette.grey[300] + " 1px",
        },
        titleText: {
            flex: 1,
            fontFamily: "inherit",
        },
        dividerIcon: {
            pointerEvents: "none",
            display: "inline-block",
            // width: 1.5,
            // height: "100%",
            // backgroundColor: "#444",
            width: RESIZE_HANDLE_WIDTH,
            height: RESIZE_HANDLE_WIDTH,
        },
        dividerIconWrapper: {
            cursor: "col-resize",
            opacity: 0.4,
            "&:hover": {
                opacity: 1,
            },
        },
    });
});
var HeadCell = function (_a) {
    var _b = _a.minWidth, minWidth = _b === void 0 ? ROW_MIN_WIDTH : _b, label = _a.label, colKey = _a.colKey, CellComponent = _a.CellComponent, HeaderComponent = _a.HeaderComponent, visible = _a.visible, sorted = _a.sorted, sortable = _a.sortable, resizable = _a.resizable, colIndex = _a.colIndex, 
    // currentWidths,
    classes = _a.classes, sticky = _a.sticky, DividerProps = _a.DividerProps, rest = __rest(_a, ["minWidth", "label", "colKey", "CellComponent", "HeaderComponent", "visible", "sorted", "sortable", "resizable", "colIndex", "classes", "sticky", "DividerProps"]);
    var cellClasses = useHeadStyles();
    var commonClasses = useCommonStyles();
    var currentWidths = useTableSizeState().currentWidths;
    // const setStickyColumn = useStoreActions((actions) => actions.setStickyColumn);
    var calcMinWidth = currentWidths[rest[DATA_FIELD]]
        ? currentWidths[rest[DATA_FIELD]]
        : minWidth;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", __assign({ className: clsx(commonClasses.tableCell, HESABA_TABLE_HEADER_CLASS, classes === null || classes === void 0 ? void 0 : classes.root), style: {
                minWidth: calcMinWidth || minWidth,
                width: calcMinWidth || minWidth,
            } }, rest),
            React.createElement(React.Fragment, null,
                React.createElement(Typography, { align: "center", className: clsx(cellClasses.titleText, classes === null || classes === void 0 ? void 0 : classes.title) }, label),
                React.createElement(HeaderMenu, { index: colIndex, sortable: sortable, columnKey: colKey, sorted: sorted }))),
        resizable && (React.createElement("div", { className: clsx(DRAG_CLASS, cellClasses.dividerIconWrapper) },
            React.createElement(DividerIcon, __assign({ className: clsx(cellClasses.dividerIcon, classes === null || classes === void 0 ? void 0 : classes.divider) }, DividerProps))))));
};
export default HeadCell;
