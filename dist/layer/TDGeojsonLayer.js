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
import React, { Fragment } from "react";
import { useTDStoreState } from "../store/reducerHooks";
import { TDCircleMarker, TDPolyline } from "./LayerComponents";
export default function TDGeojsonLayer(_a) {
    var pathOptions = _a.pathOptions, circleProps = _a.circleProps, polylineProps = _a.polylineProps, ToolTipComponent = _a.ToolTipComponent;
    var currentData = useTDStoreState(function (state) { return state.currentData; });
    return (React.createElement(React.Fragment, null, currentData === null || currentData === void 0 ? void 0 : currentData.features.map(function (f, index) {
        var _a, _b;
        return (React.createElement(Fragment, { key: (((_a = f === null || f === void 0 ? void 0 : f.properties) === null || _a === void 0 ? void 0 : _a.id) || ((_b = f === null || f === void 0 ? void 0 : f.properties) === null || _b === void 0 ? void 0 : _b.username)) + "-" + index }, f.geometry.geometries.map(function (g) {
            var _a, _b;
            return g.type === "Point" ? (React.createElement(TDCircleMarker, { coordinates: g.coordinates, pathOptions: __assign({ color: (_a = f === null || f === void 0 ? void 0 : f.properties) === null || _a === void 0 ? void 0 : _a.color }, pathOptions), circleProps: circleProps, ToolTipComponent: ToolTipComponent, properties: f.properties })) : (React.createElement(TDPolyline, { coordinates: g.coordinates, pathOptions: __assign({ color: (_b = f === null || f === void 0 ? void 0 : f.properties) === null || _b === void 0 ? void 0 : _b.color }, pathOptions), polylineProps: polylineProps }));
        })));
    })));
}
