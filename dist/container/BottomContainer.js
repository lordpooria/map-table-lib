import { __assign } from "tslib";
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
