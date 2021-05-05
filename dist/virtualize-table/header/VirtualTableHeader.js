import { __assign, __rest } from "tslib";
import React from "react";
import { Checkbox, createStyles, makeStyles } from "@material-ui/core";
import { commonSidebar, RESIZE_HANDLE_WIDTH } from "../../utils/themeConstants";
import { Fragment } from "react";
import { useTStoreActions, useTStoreState } from "../../store/reducerHooks";
import HeadCell from "../../cell/HeadCell";
import { HESABA_TABLE_ROW_CLASS } from "../../utils/constants";
import clsx from "clsx";
import useCommonStyles from "../../styles/commonStyles";
import { chooseClass, useCalcTableWidth } from "../../utils/helper";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        headerContainer: {
            display: "flex",
            top: 0,
            position: "sticky",
            zIndex: 2,
            alignItems: "center",
        },
        commonHeaderContainer: {
            backgroundColor: "rgba(255,255,255,0.8)",
            borderBottom: "solid " + theme.palette.grey[300] + " 1px",
        },
        titleText: {
            flex: 1,
        },
        dividerIcon: {
            pointerEvents: "none",
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
var VirtualTableHeader = function (_a) {
    var selectable = _a.selectable, isSelected = _a.isSelected, classes = _a.classes, width = _a.width, CheckboxProps = _a.CheckboxProps, rest = __rest(_a, ["selectable", "isSelected", "classes", "width", "CheckboxProps"]);
    var tableClasses = useStyles();
    // const commonClasses = useCommonStyles();
    var commonClasses = useCommonStyles();
    var visibleColumns = useTStoreState(function (state) { return state.visibleColumns; });
    var toggleAllRows = useTStoreActions(function (actions) { return actions.toggleAllRows; });
    var calcRowWidth = useCalcTableWidth(visibleColumns, width);
    return (React.createElement("div", { style: {
            height: commonSidebar.itemHeight,
            width: calcRowWidth(),
        }, className: clsx(HESABA_TABLE_ROW_CLASS, tableClasses.headerContainer, chooseClass(tableClasses.commonHeaderContainer, classes === null || classes === void 0 ? void 0 : classes.root)) },
        selectable && (React.createElement(Checkbox, __assign({ className: clsx("HESABA_TABLE_HEADER_CLASS"), checked: isSelected, onChange: function () {
                toggleAllRows({ isSelected: isSelected });
            }, color: "primary", classes: { root: commonClasses.checkbox } }, CheckboxProps))),
        visibleColumns.map(function (props, index) { return (React.createElement(Fragment, { key: props.key },
            React.createElement(HeadCell, __assign({}, props, rest, { colIndex: index, colKey: props.key, classes: classes === null || classes === void 0 ? void 0 : classes.cell })))); })));
};
export default VirtualTableHeader;
