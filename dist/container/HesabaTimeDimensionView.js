import { __assign, __rest } from "tslib";
import React from "react";
import { TimeComponent } from "../timer";
import GeoJSONLayer from "../layer/TDGeojsonLayer";
import BottomContainer from "./BottomContainer";
var HesabaTimeDimensionView = function (_a) {
    var timeProps = _a.timeProps, layerProps = _a.layerProps, rest = __rest(_a, ["timeProps", "layerProps"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(BottomContainer, __assign({}, rest)),
        React.createElement(TimeComponent, __assign({}, timeProps)),
        React.createElement(GeoJSONLayer, __assign({}, layerProps))));
};
export default HesabaTimeDimensionView;
