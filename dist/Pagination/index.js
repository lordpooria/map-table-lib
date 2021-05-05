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
import { createStyles, InputBase, makeStyles, MenuItem, Select, Toolbar, } from "@material-ui/core";
import clsx from "clsx";
import { WithFontTypography, useTranslation, ButtonTooltip, useLanguageState, } from "@hesaba/theme-language";
import ArrowRightIcon from "../assets/icons/common/ArrowRightIcon";
import ArrowLeftIcon from "../assets/icons/common/ArrowLeftIcon";
import { useTStoreState } from "../store/reducerHooks";
import { DEFAULT_PAGINATION_HEIGHT } from "../utils/themeConstants";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        paginationRoot: {
            display: "flex",
            width: "100%",
            border: 0,
            flexWrap: "wrap",
            borderTop: "solid 1px " + theme.palette.grey[300],
            alignItems: "center",
            justifyContent: "space-between",
        },
        actions: {
            flexShrink: 0,
            marginLeft: 20,
        },
        toolbar: {
            minHeight: 52,
            paddingRight: 2,
        },
        spacer: {
            flex: "1 1 100%",
        },
        /* Styles applied to the caption Typography components if `variant="caption"`. */
        caption: {
            flexShrink: 0,
        },
        selectRoot: {
            fontFamily: "inherit",
        },
        selectRootLTR: {
            marginRight: 32,
            marginLeft: 8,
        },
        selectRootRTL: {
            marginRight: 8,
            marginLeft: 32,
        },
        /* Styles applied to the Select component `select` class. */
        select: {
            paddingLeft: 8,
            paddingRight: 24,
            textAlign: "right",
            textAlignLast: "right", // Align <select> on Chrome.
        },
        // TODO v5: remove
        /* Styles applied to the Select component `icon` class. */
        selectIcon: {},
        input: {
            color: "inherit",
            fontSize: "inherit",
            flexShrink: 0,
        },
        menuItem: {},
        selectContainer: { display: "flex" },
    });
});
function ActionsComponent(_a) {
    var page = _a.page, onPageChange = _a.onPageChange, count = _a.count, rowsPerPage = _a.rowsPerPage;
    var t = useTranslation().t;
    // const handleFirstPageButtonClick = (event: any) => {
    //   onPageChange(event, 0);
    // };
    var handleBackButtonClick = function (event) {
        onPageChange(event, page - 1);
    };
    var handleNextButtonClick = function (event) {
        onPageChange(event, page + 1);
    };
    // const handleLastPageButtonClick = (event: any) => {
    //   onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    // };
    return (React.createElement("div", { style: { display: "flex", direction: "ltr" } },
        React.createElement(ButtonTooltip, { title: t === null || t === void 0 ? void 0 : t.prev, onClick: handleBackButtonClick, disabled: page === 0, color: "inherit" },
            React.createElement(ArrowLeftIcon, null)),
        React.createElement(ButtonTooltip, { title: t === null || t === void 0 ? void 0 : t.next, onClick: handleNextButtonClick, disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false, color: "inherit" },
            React.createElement(ArrowRightIcon, null))));
}
function defaultLabelDisplayedRows(_a) {
    var from = _a.from, to = _a.to, count = _a.count;
    var t = useTranslation().t;
    return from + "-" + to + " " + (t === null || t === void 0 ? void 0 : t.of) + " " + (count !== -1 ? count : "" + (t === null || t === void 0 ? void 0 : t.moreThan) + to);
}
export function TablePagination(_a) {
    var _b, _c;
    var classes = _a.classes, width = _a.width, _d = _a.rowsPerPageOptions, rowsPerPageOptions = _d === void 0 ? [10, 25, 50, 100] : _d, page = _a.page, count = _a.count, rowsPerPage = _a.rowsPerPage, onRowsPerPageChange = _a.onRowsPerPageChange, height = _a.height, rest = __rest(_a, ["classes", "width", "rowsPerPageOptions", "page", "count", "rowsPerPage", "onRowsPerPageChange", "height"]);
    var paginationClasses = useStyles();
    var t = useTranslation().t;
    var direction = useLanguageState().direction;
    var numRowsSelected = useTStoreState(function (state) { return state.numRowsSelected; });
    var getLabelDisplayedRowsTo = function () {
        if (count === -1)
            return (page + 1) * rowsPerPage;
        return rowsPerPage === -1
            ? count
            : Math.min(count, (page + 1) * rowsPerPage);
    };
    return (React.createElement("div", { className: clsx(paginationClasses.paginationRoot, classes === null || classes === void 0 ? void 0 : classes.root), style: { width: width, direction: direction, height: height || DEFAULT_PAGINATION_HEIGHT } },
        React.createElement(Toolbar, { className: paginationClasses.toolbar },
            React.createElement("div", { className: paginationClasses.spacer }),
            React.createElement(WithFontTypography, { color: "inherit", variant: "body2", className: paginationClasses.caption }, t === null || t === void 0 ? void 0 : t.rowPerPage),
            React.createElement(Select, { classes: {
                    select: paginationClasses.select,
                    icon: paginationClasses.selectIcon,
                }, input: React.createElement(InputBase, { className: clsx(clsx(paginationClasses.input, paginationClasses.selectRoot, (_b = {}, _b[paginationClasses.selectRootLTR] = direction === "ltr", _b), (_c = {}, _c[paginationClasses.selectRootRTL] = direction !== "ltr", _c))) }), value: rowsPerPage, onChange: onRowsPerPageChange }, rowsPerPageOptions.map(function (rowsPerPageOption) { return (React.createElement(MenuItem, { className: paginationClasses.menuItem, key: rowsPerPageOption, value: rowsPerPageOption }, rowsPerPageOption)); })),
            React.createElement(WithFontTypography, { color: "inherit", variant: "body2", className: paginationClasses.caption }, defaultLabelDisplayedRows({
                from: count === 0 ? 0 : page * rowsPerPage + 1,
                to: getLabelDisplayedRowsTo(),
                count: count === -1 ? -1 : count,
            })),
            React.createElement(ActionsComponent, __assign({}, rest))),
        numRowsSelected > 0 && (React.createElement(WithFontTypography, null,
            numRowsSelected,
            " ",
            t.rowSelected))));
}
