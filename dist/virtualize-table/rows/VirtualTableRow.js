import { __assign, __rest } from "tslib";
import React, { useCallback } from "react";
import clsx from "clsx";
import { Checkbox, createStyles, makeStyles } from "@material-ui/core";
import { useTStoreActions, useTStoreState } from "../../store/reducerHooks";
import Cell from "../../cell/Cell";
import { Fragment } from "react";
import { commonSidebar } from "../../utils/themeConstants";
import { HESABA_TABLE_ROW_CLASS } from "../../utils/constants";
import useCommonStyles from "../../styles/commonStyles";
import { chooseClass, useCalcTableWidth } from "../../utils/helper";
import { useTableRowState } from "../../container/TableRowProvider";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        evenRow: {
            backgroundColor: "#f8f8f0",
        },
        oddRow: {},
        tableRow: {
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            marginTop: commonSidebar.itemHeight,
        },
        tableRowCommon: {
            borderBottom: "solid " + theme.palette.grey[300] + " 1px",
            "&:hover": {
                backgroundColor: "rgba(0,0,0,0.1)",
            },
        },
        rowCell: {},
        selected: { backgroundColor: "rgba(100,100,255,0.1)" },
        activatedRow: { backgroundColor: "rgba(255,100,255,0.1)" },
    });
});
export function VirtualTableRow(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(SingleVirtualTableRow, __assign({}, props))));
}
var SingleVirtualTableRow = function (_a) {
    var _b, _c, _d, _e;
    var style = _a.style, rowIndex = _a.rowIndex, selectable = _a.selectable, classes = _a.classes, width = _a.width, CheckboxProps = _a.CheckboxProps, onRowClick = _a.onRowClick, extraStyles = _a.extraStyles, selectedRowStyle = _a.selectedRowStyle, rest = __rest(_a, ["style", "rowIndex", "selectable", "classes", "width", "CheckboxProps", "onRowClick", "extraStyles", "selectedRowStyle"]);
    var rowClasses = useStyles();
    var commonClasses = useCommonStyles();
    var visibleColumns = useTStoreState(function (state) { return state.visibleColumns; });
    var visibleRows = useTStoreState(function (state) { return state.visibleRows; });
    var toggleSingleRow = useTStoreActions(function (actions) { return actions.toggleSingleRow; });
    var calcRowWidth = useCalcTableWidth(visibleColumns, width);
    var activeRow = useTableRowState().activeRow;
    var onRowSelect = useCallback(function () {
        onRowClick && onRowClick(rowIndex);
    }, [onRowClick]);
    return (React.createElement("div", { style: __assign(__assign(__assign(__assign({}, style), extraStyles), (activeRow === rowIndex && selectedRowStyle)), { width: calcRowWidth() }), className: clsx(HESABA_TABLE_ROW_CLASS, rowClasses.tableRow, chooseClass(rowClasses.tableRowCommon, classes === null || classes === void 0 ? void 0 : classes.root), (_b = {}, _b[rowClasses.selected] = visibleRows[rowIndex].selected, _b), (_c = {}, _c[rowClasses.activatedRow] = activeRow === rowIndex, _c), (_d = {},
            _d[(classes === null || classes === void 0 ? void 0 : classes.evenRow) || "tempEvenRow"] = (classes === null || classes === void 0 ? void 0 : classes.evenRow) && rowIndex % 2 === 0,
            _d), (_e = {},
            _e[(classes === null || classes === void 0 ? void 0 : classes.oddRow) || "tempOddRow"] = (classes === null || classes === void 0 ? void 0 : classes.oddRow) && rowIndex % 2 !== 0,
            _e)), onClick: onRowSelect },
        selectable && (React.createElement(Checkbox, __assign({ checked: visibleRows[rowIndex].selected, onChange: function () {
                toggleSingleRow({ index: rowIndex });
            }, 
            // name={name}
            color: "primary", classes: { root: commonClasses.checkbox }, onClick: function (e) { return e.stopPropagation(); } }, CheckboxProps))),
        visibleColumns.map(function (props, colIndex) { return (React.createElement(Fragment, { key: props.key },
            React.createElement(Cell, __assign({}, props, rest, { colIndex: colIndex, row: visibleRows[rowIndex], rowIndex: rowIndex, columnsLength: visibleColumns.length, colKey: props.key })))); })));
};
export default VirtualTableRow;
