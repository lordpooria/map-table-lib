import React, { useState } from "react";
import { createStyles, makeStyles, Menu, MenuItem, withStyles, } from "@material-ui/core";
import { useTStoreActions } from "../../store/reducerHooks";
import MoreVert from "../../assets/icons/common/MoreVertIcon";
import ArrowDown from "../../assets/icons/common/ArrowDownIcon";
import ArrowUp from "../../assets/icons/common/ArrowUpIcon";
import { SmallIconButton } from "@hesaba/theme-language";
// import PinIcon from "/assets/icons/common/PinIcon";
var HeaderIconButton = withStyles(function () { return ({
    root: { margin: 4 },
}); })(SmallIconButton);
var useStyles = makeStyles(function () {
    return createStyles({
        icons: { width: 14, height: 14 },
    });
});
var OPTIONS = {
    sortAsc: "Sort ASC",
    sortDesc: "Sort DESC",
    hideColumn: "Hide Column",
    filter: "Filter",
    stick: "Stick",
};
var HeaderMenu = function (_a) {
    var index = _a.index, sortable = _a.sortable, columnKey = _a.columnKey, sorted = _a.sorted;
    var classes = useStyles();
    var _b = useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var sortTable = useTStoreActions(function (actions) { return actions.sortTable; });
    var filterAdd = useTStoreActions(function (actions) { return actions.filterAdd; });
    // const setStickyColumn = useTStoreActions(
    //   (actions) => actions.setStickyColumn
    // );
    var toggleVisibleColumns = useTStoreActions(function (actions) { return actions.toggleVisibleColumns; });
    var handleClose = function () {
        setAnchorEl(null);
    };
    var sortDesc = function () {
        return sortTable({ index: index, sortType: "DESC", columnKey: columnKey });
    };
    var sortAsc = function () {
        return sortTable({ index: index, sortType: "ASC", columnKey: columnKey });
    };
    // const stickColumn = () => setStickyColumn({ index });
    return (React.createElement(React.Fragment, null,
        sortable && sorted === "DESC" && (React.createElement(HeaderIconButton, { onClick: sortAsc },
            React.createElement(ArrowUp, { className: classes.icons }))),
        sortable && sorted === "ASC" && (React.createElement(HeaderIconButton, { onClick: sortDesc },
            React.createElement(ArrowDown, { className: classes.icons }))),
        React.createElement(HeaderIconButton, { onClick: handleClick },
            React.createElement(MoreVert, { className: classes.icons })),
        React.createElement(Menu, { disableScrollLock: true, id: "long-menu", anchorEl: anchorEl, keepMounted: true, open: open, onClose: handleClose, PaperProps: {
                style: {
                //   maxHeight: ITEM_HEIGHT * 4.5,
                // width: "20ch",
                },
            } },
            sortable && React.createElement(MenuItem, { onClick: sortAsc }, OPTIONS.sortAsc),
            sortable && React.createElement(MenuItem, { onClick: sortDesc }, OPTIONS.sortDesc),
            React.createElement(MenuItem, { onClick: function () { return toggleVisibleColumns({ index: index }); } }, OPTIONS.hideColumn),
            React.createElement(MenuItem, { onClick: function () {
                    filterAdd({ columnKey: columnKey });
                } }, OPTIONS.filter))));
};
export default HeaderMenu;
