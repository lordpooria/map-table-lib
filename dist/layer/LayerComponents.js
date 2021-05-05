import { __assign } from "tslib";
import React from "react";
import { CircleMarker, Polyline, Tooltip } from "react-leaflet";
export function TDCircleMarker(_a) {
    var coordinates = _a.coordinates, pathOptions = _a.pathOptions, circleProps = _a.circleProps, ToolTipComponent = _a.ToolTipComponent, properties = _a.properties;
    return (React.createElement(React.Fragment, null,
        React.createElement(CircleMarker, __assign({ center: [coordinates[1], coordinates[0]], pathOptions: pathOptions, radius: 6 }, circleProps), ToolTipComponent === false ? null : typeof ToolTipComponent !==
            "boolean" && ToolTipComponent ? (React.createElement(Tooltip, null,
            React.createElement(ToolTipComponent, { properties: properties }))) : (React.createElement(Tooltip, null, Object.keys(properties).map(function (k, index) { return (React.createElement("div", { key: k + "-" + index },
            k,
            ":",
            properties[k])); }))))));
}
export function TDPolyline(_a) {
    var coordinates = _a.coordinates, pathOptions = _a.pathOptions, polylineProps = _a.polylineProps;
    return (React.createElement(Polyline, __assign({ pathOptions: pathOptions, positions: coordinates.map(function (c) { return [c[1], c[0]]; }) }, polylineProps)));
}
