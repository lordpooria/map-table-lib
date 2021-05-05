import { __assign } from "tslib";
import React, { memo, useCallback, useEffect } from "react";
import { HesabaVirtualTable, ToolbarMoreVert, useTStoreState, } from "@hesaba/table";
import clsx from "clsx";
import { Tabs, Tab, makeStyles } from "@material-ui/core";
import { useTDStoreState } from "../store";
import tdStoreTableModel from "./tableReducer";
import { useLocalStore } from "easy-peasy";
import { tableDataParser, commonSchemaColumns } from "./table.utils";
import { colourNameToHex } from "../utils/colorConverter";
import { useAutoScroll } from "./useAutoScroll";
var useStyles = makeStyles(function (theme) { return ({
    root: { width: "100%", backgroundColor: "#FFF", display: "flex" },
    header: {
        backgroundColor: "#f1ece7",
        borderBottom: "none",
    },
    tabRoot: { borderTopRightRadius: theme.shape.borderRadius * 2 },
    scrollButton: {
        color: "#000",
        borderTopRightRadius: theme.shape.borderRadius * 2,
    },
    tableContainer: { borderWidth: 0 },
    row: {
        // backgroundColor: "#FFF",
        border: "#999",
        borderBottom: "solid 1px",
        "&:hover": {
            backgroundColor: "rgba(0,0,0,0.1)",
            border: "none",
        },
    },
}); });
function calcTableHeight(height, theme) {
    var _a, _b, _c, _d;
    if ((_b = (_a = theme === null || theme === void 0 ? void 0 : theme.mixins) === null || _a === void 0 ? void 0 : _a.toolbar) === null || _b === void 0 ? void 0 : _b.minHeight) {
        return height - ((_d = (_c = theme === null || theme === void 0 ? void 0 : theme.mixins) === null || _c === void 0 ? void 0 : _c.toolbar) === null || _d === void 0 ? void 0 : _d.minHeight);
    }
    return height - 60;
}
var TDTableContainer = memo(function (props) {
    var onRowClick = useAutoScroll();
    return React.createElement(TDTable, __assign({}, props, { onRowClick: onRowClick }));
});
var TDTable = memo(function (_a) {
    var className = _a.className, tableClasses = _a.tableClasses, tableProps = _a.tableProps, operationOnRows = _a.operationOnRows, onRowClick = _a.onRowClick, customSchemaColumns = _a.schemaColumns, theme = _a.theme, height = _a.height, width = _a.width, initialWidth = _a.initialWidth;
    var tabClasses = useStyles();
    var _b = useLocalStore(function () { return tdStoreTableModel; }), state = _b[0], actions = _b[1];
    var users = useTDStoreState(function (state) { return state.users; });
    var formattedData = useTDStoreState(function (state) { return state.formattedData; });
    var dataParser = useCallback(function (col, row) {
        return tableDataParser(col, row, state.tabIndex);
    }, [state.tabIndex]);
    useEffect(function () {
        if (users && formattedData) {
            actions.setTabs(Object.keys(users).map(function (k) { return ({
                id: "" + k,
                username: k,
                color: users[k],
            }); }));
        }
    }, [users, formattedData]);
    return (React.createElement("div", { className: clsx(className, tableClasses === null || tableClasses === void 0 ? void 0 : tableClasses.root), id: "hesaba-table" },
        React.createElement("div", { style: {}, className: clsx(tabClasses.root, tableClasses === null || tableClasses === void 0 ? void 0 : tableClasses.tabbar) },
            React.createElement(MoreVert, null),
            React.createElement(Tabs, { value: state.tabIndex, scrollButtons: "auto", variant: "scrollable", classes: {
                    root: tabClasses.tabRoot,
                    scrollButtons: tabClasses.scrollButton,
                }, onChange: function (_, tabIndex) {
                    return actions.setTabIndex({
                        tabIndex: tabIndex,
                        color: (users && users[tabIndex]) || "",
                    });
                }, TabIndicatorProps: {
                    style: { backgroundColor: state.indicatorColor },
                } }, state.tabs.map(function (_a) {
                var username = _a.username, color = _a.color, id = _a.id;
                return (React.createElement(Tab, { key: username, value: id, label: username, wrapped: true, style: { color: color } }));
            }))),
        operationOnRows && React.createElement(Operations, { operationOnRows: operationOnRows }),
        React.createElement(HesabaVirtualTable, __assign({ width: width || initialWidth, height: calcTableHeight(height, theme), columns: customSchemaColumns || commonSchemaColumns, rows: formattedData, selectable: true, resizable: true, sortable: true, VTRowProps: {
                onRowClick: onRowClick,
                selectedRowStyle: {
                    borderRight: "solid 2px  " + state.indicatorColor,
                    backgroundColor: colourNameToHex(state.indicatorColor) + "22",
                },
            }, hasToolbar: false, tableDataParser: dataParser, theme: theme, classes: {
                table: { root: tabClasses.tableContainer },
                header: { root: tabClasses.header },
                row: { root: tabClasses.row },
            }, VTCommonTableElProps: {
                CheckboxProps: { style: { color: state.indicatorColor } },
            }, VTHeaderProps: {
                DividerProps: { style: { fill: state.indicatorColor } },
            } }, tableProps))));
});
var useMenuStyles = makeStyles({
    icon: {},
    iconButton: { color: "#444" },
    menu: { display: "flex" },
    menuItem: {},
});
var MoreVert = memo(function () {
    var classes = useMenuStyles();
    return React.createElement(ToolbarMoreVert, { classes: { iconButton: classes.iconButton } });
});
var Operations = memo(function (_a) {
    var operationOnRows = _a.operationOnRows;
    var numRowsSelected = useTStoreState(function (state) { return state.numRowsSelected; });
    return (React.createElement(React.Fragment, null, numRowsSelected && operationOnRows && (React.createElement("div", null, operationOnRows.map(function (Component, index) { return (React.createElement(Component, { index: index })); })))));
});
export default TDTableContainer;
