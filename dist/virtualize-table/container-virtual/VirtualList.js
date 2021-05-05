import { __assign, __rest } from "tslib";
import React, { forwardRef, memo } from "react";
import { VariableSizeList as List } from "react-window";
import VirtualTableRow from "../rows/VirtualTableRow";
import VirtualTableHeader from "../header/VirtualTableHeader";
import clsx from "clsx";
import { useTStoreState } from "../../store/reducerHooks";
import { commonSidebar } from "../../utils/themeConstants";
import { useLanguageState } from "@hesaba/theme-language";
import { MAIN_LIST_ID } from "../../utils/constants";
import { makeStyles } from "@material-ui/core";
var useStyles = makeStyles({
    root: {},
});
var outerElementTypeWithId = forwardRef(function (props, ref) {
    return React.createElement("div", __assign({ id: MAIN_LIST_ID }, props, { ref: ref }));
});
var VirtualList = memo(forwardRef(function (_a, ref) {
    var _b;
    var height = _a.height, width = _a.width, classes = _a.classes, onScroll = _a.onScroll, setTableRef = _a.setTableRef, extraStyle = _a.extraStyle, _c = _a.selectable, selectable = _c === void 0 ? false : _c, _d = _a.itemSize, itemSize = _d === void 0 ? function () { return commonSidebar.itemHeight; } : _d, resizable = _a.resizable, sortable = _a.sortable, VTCommonTableElProps = _a.VTCommonTableElProps, VTRowProps = _a.VTRowProps, VTFilterProps = _a.VTFilterProps, VTHeaderProps = _a.VTHeaderProps;
    var direction = useLanguageState().direction;
    var visibleRows = useTStoreState(function (state) { return state.visibleRows; });
    var numRowsSelected = useTStoreState(function (state) { return state.numRowsSelected; });
    var tableClasses = useStyles();
    if (!visibleRows || visibleRows.length === 0) {
        return null;
    }
    // const [rowSizes, setRowSizes] = useState(
    //   new Array(rows.length).fill(true).reduce((acc, item, i) => {
    //     acc[i] = 50;
    //     return acc;
    //   }, {})
    // );
    // function toggleSize(i: number) {
    //   if (ref) {
    //     (ref as any).resetAfterIndex(i);
    //   }
    //   setRowSizes((prevState: any) => ({
    //     ...prevState.rowSizes,
    //     [i]: prevState.rowSizes[i] === 50 ? 75 : 50,
    //   }));
    // }
    // function getSize(i: number) {
    //   return rowSizes[i];
    // }
    var innerElementType = function (_a) {
        var children = _a.children, style = _a.style, rest = __rest(_a, ["children", "style"]);
        return (React.createElement("div", __assign({}, rest, { style: __assign(__assign({}, style), extraStyle) }),
            React.createElement(VirtualTableHeader, __assign({ selectable: selectable, isSelected: numRowsSelected !== 0, classes: classes === null || classes === void 0 ? void 0 : classes.header, width: width, resizable: resizable, sortable: sortable }, VTCommonTableElProps, VTHeaderProps, VTFilterProps)),
            children));
    };
    return (React.createElement(List
    // style={{ position: "absolute", ...extraStyle }}
    , { 
        // style={{ position: "absolute", ...extraStyle }}
        ref: ref, direction: direction, height: height, itemCount: visibleRows.length, onScroll: onScroll, itemSize: itemSize, itemKey: function (index) { return "" + index; }, width: width, itemData: visibleRows, outerRef: setTableRef, innerElementType: innerElementType, className: clsx(tableClasses.root, (_b = classes === null || classes === void 0 ? void 0 : classes.table) === null || _b === void 0 ? void 0 : _b.root), outerElementType: outerElementTypeWithId }, function (_a) {
        var index = _a.index, rest = __rest(_a, ["index"]);
        return (React.createElement(VirtualTableRow, __assign({ rowIndex: index, selectable: selectable, classes: classes === null || classes === void 0 ? void 0 : classes.row, width: width }, VTCommonTableElProps, VTRowProps, rest)));
    }));
}));
export default VirtualList;
