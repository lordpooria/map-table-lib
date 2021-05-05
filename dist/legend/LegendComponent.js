import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React, { memo } from "react";
import { useTDStoreState } from "../store";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        root: {
            backgroundColor: "#FFF",
            borderRadius: 5,
            // border: `solid 1px ${theme.palette.grey["300"]}`,
        },
        itemContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 4,
        },
        indicatorBox: {
            border: "solid 2px " + theme.palette.grey["300"],
            width: 10,
            height: 10,
            borderRadius: 1,
            margin: "0 4px",
        },
        text: {
            color: theme.palette.grey["600"],
            fontSize: 11,
            margin: "4px 0",
        },
    });
});
var LegendContainer = function (_a) {
    var _b;
    var LegendComponent = _a.LegendComponent, classes = _a.classes;
    var legendClasses = useStyles();
    var users = useTDStoreState(function (state) { return state.users; });
    var currentData = useTDStoreState(function (state) { return state.currentData; });
    return (React.createElement("div", { className: clsx(legendClasses.root, classes === null || classes === void 0 ? void 0 : classes.root) }, LegendComponent ? (React.createElement(LegendComponent, { properties: (_b = currentData === null || currentData === void 0 ? void 0 : currentData.features) === null || _b === void 0 ? void 0 : _b.map(function (d) { return d.properties; }) })) : (React.createElement(LegendStateLess, { users: users }))));
};
var LegendStateLess = memo(function (_a) {
    var users = _a.users, classes = _a.classes;
    var legendClasses = useStyles();
    return (React.createElement(React.Fragment, null, users &&
        Object.keys(users).map(function (k) { return (React.createElement("div", { key: k, className: clsx(legendClasses.itemContainer, classes === null || classes === void 0 ? void 0 : classes.item) },
            React.createElement("span", { className: clsx(legendClasses.text, classes === null || classes === void 0 ? void 0 : classes.item) }, k),
            React.createElement("div", { className: clsx(legendClasses.indicatorBox, classes === null || classes === void 0 ? void 0 : classes.colorIndicator), style: { backgroundColor: users[k] } }))); })));
});
export default LegendContainer;
