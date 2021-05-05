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
import React from "react";
import { makeStyles } from "@material-ui/core";
import { PlayerController } from "../player";
import LegendContainer from "../legend/LegendComponent";
import { useMap } from "react-leaflet";
var useStyles = makeStyles({
    root: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        zIndex: 1000,
        display: "flex",
        justifyContent: "flex-end",
        flexWrap: "wrap-reverse",
        alignItems: "flex-start",
    },
    playerWrapper: {
        flex: 1,
    },
});
var BottomContainer = function (_a) {
    var playerProps = _a.playerProps, LegendComponent = _a.LegendComponent;
    var classes = useStyles();
    var map = useMap();
    return (React.createElement("div", { className: classes.root },
        React.createElement("div", { className: classes.playerWrapper },
            React.createElement(PlayerController, __assign({ leafletMap: map }, playerProps))),
        React.createElement(LegendContainer, { LegendComponent: LegendComponent })));
};
export default BottomContainer;
