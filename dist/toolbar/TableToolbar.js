import { __assign, __rest } from "tslib";
import React, { useState } from "react";
import { createStyles, FormControlLabel, IconButton, makeStyles, Menu, MenuItem, Switch, Typography, } from "@material-ui/core";
import MoreVert from "../assets/icons/common/MoreVertIcon";
import { useTStoreActions, useTStoreState } from "../store/reducerHooks";
import clsx from "clsx";
import { DEFAULT_TOOLBAR_HEIGHT } from "../utils/themeConstants";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        toolbarContainer: {
            borderBottom: "solid " + theme.palette.grey[300] + " 1px",
            display: "flex",
            alignItems: "center",
        },
        tools: {
            display: "flex",
            alignItems: "center",
            flex: 1,
        },
        title: { padding: "0 " + theme.spacing(1) },
        icon: {
            fill: theme.palette.secondary.main,
        },
    });
});
export var TableToolbar = function (_a) {
    var title = _a.title, height = _a.height, classes = _a.classes, rest = __rest(_a, ["title", "height", "classes"]);
    var toolbarClasses = useStyles();
    return (React.createElement("div", { style: { height: height || DEFAULT_TOOLBAR_HEIGHT }, className: clsx(toolbarClasses.toolbarContainer, classes === null || classes === void 0 ? void 0 : classes.root) },
        React.createElement("div", { className: clsx(toolbarClasses.tools) },
            React.createElement(ToolbarMoreVert, { classes: classes }),
            rest.operationOnRows && React.createElement(ToolbarOperation, __assign({}, rest))),
        React.createElement(Typography, { align: "center", className: toolbarClasses.title }, title !== null && title !== void 0 ? title : "")));
};
export function ToolbarMoreVert(_a) {
    var _b;
    var classes = _a.classes;
    var _c = useState(null), anchorEl = _c[0], setAnchorEl = _c[1];
    var open = Boolean(anchorEl);
    var enhancedColumns = useTStoreState(function (state) { return state.enhancedColumns; });
    var toolbarClasses = useStyles();
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var toggleVisibleColumns = useTStoreActions(function (actions) { return actions.toggleVisibleColumns; });
    var toggleShowFilter = useTStoreActions(function (actions) { return actions.toggleShowFilter; });
    return (React.createElement(React.Fragment, null,
        React.createElement(IconButton, { onClick: handleClick, className: classes === null || classes === void 0 ? void 0 : classes.iconButton },
            React.createElement(MoreVert, { className: clsx((_b = {}, _b[toolbarClasses.icon] = !(classes === null || classes === void 0 ? void 0 : classes.icon), _b), classes === null || classes === void 0 ? void 0 : classes.icon) })),
        React.createElement(Menu, { disableScrollLock: true, id: "long-menu", anchorEl: anchorEl, keepMounted: true, open: open, onClose: handleClose, className: classes === null || classes === void 0 ? void 0 : classes.menu },
            React.createElement(MenuItem, { className: classes === null || classes === void 0 ? void 0 : classes.menuItem, onClick: function () {
                    toggleShowFilter(true);
                    handleClose();
                } }, "filter"), enhancedColumns === null || enhancedColumns === void 0 ? void 0 :
            enhancedColumns.map(function (c, index) { return (React.createElement(MenuItem, { key: c.key, className: classes === null || classes === void 0 ? void 0 : classes.menuItem },
                React.createElement(FormControlLabel, { control: React.createElement(Switch, { checked: c.visible, onChange: function () { return toggleVisibleColumns({ index: index }); }, name: c.label }), label: c.label }))); }))));
}
export function ToolbarOperation(_a) {
    var operationOnRows = _a.operationOnRows;
    var numRowsSelected = useTStoreState(function (state) { return state.numRowsSelected; });
    return (React.createElement(React.Fragment, null, operationOnRows &&
        numRowsSelected > 0 &&
        operationOnRows.map(function (Component, index) { return (React.createElement(Component, { key: index })); })));
}
