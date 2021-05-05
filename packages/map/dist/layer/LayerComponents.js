"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TDCircleMarker = TDCircleMarker;
exports.TDPolyline = TDPolyline;

var _react = _interopRequireDefault(require("react"));

var _reactLeaflet = require("react-leaflet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function TDCircleMarker({
  coordinates,
  pathOptions,
  circleProps,
  ToolTipComponent,
  properties
}) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactLeaflet.CircleMarker, _extends({
    center: [coordinates[1], coordinates[0]],
    pathOptions: pathOptions,
    radius: 6
  }, circleProps), ToolTipComponent === false ? null : typeof ToolTipComponent !== "boolean" && ToolTipComponent ? _react.default.createElement(_reactLeaflet.Tooltip, null, _react.default.createElement(ToolTipComponent, {
    properties: properties
  })) : _react.default.createElement(_reactLeaflet.Tooltip, null, Object.keys(properties).map((k, index) => _react.default.createElement("div", {
    key: `${k}-${index}`
  }, k, ":", properties[k])))));
}

function TDPolyline({
  coordinates,
  pathOptions,
  polylineProps
}) {
  return _react.default.createElement(_reactLeaflet.Polyline, _extends({
    pathOptions: pathOptions,
    positions: coordinates.map(c => [c[1], c[0]])
  }, polylineProps));
}
//# sourceMappingURL=LayerComponents.js.map