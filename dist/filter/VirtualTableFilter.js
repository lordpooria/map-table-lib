import React from "react";
import { useTStoreActions, useTStoreState } from "../store/reducerHooks";
import FilterItem from "./components/FilterItem";
import CloseIcon from "../assets/icons/common/CloseIcon";
import { IconButton, makeStyles, createStyles } from "@material-ui/core";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        rootFilter: {
            position: "absolute",
            backgroundColor: "#FFF",
            padding: theme.spacing(1),
            top: 20,
            left: 20,
            boxShadow: theme.shadows[2],
        },
        filterWrapper: {
            display: "flex",
            alignItems: "center",
        },
    });
});
var TableFilter = function (_a) {
    var classes = useStyles();
    var showFilter = useTStoreState(function (state) { return state.showFilter; });
    var toggleShowFilter = useTStoreActions(function (actions) { return actions.toggleShowFilter; });
    var handleClose = function () {
        toggleShowFilter(false);
    };
    // const filterAdd = useStoreActions((actions) => actions.filterAdd);
    var filters = useTStoreState(function (state) { return state.filters; });
    if (!showFilter)
        return null;
    return (React.createElement("div", { className: classes.rootFilter },
        React.createElement(IconButton, { size: "small", onClick: handleClose, style: { float: "right" } },
            React.createElement(CloseIcon, null)),
        filters.map(function (filter, index) { return (React.createElement("div", { key: filter.id, className: classes.filterWrapper },
            React.createElement(FilterItem, { filter: filter, index: index, columns: [] }))); }),
        React.createElement("div", { style: { width: "100%" } })));
};
export default TableFilter;
