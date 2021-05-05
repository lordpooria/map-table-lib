"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TDGeojsonLayer;

var _react = _interopRequireWildcard(require("react"));

var _reducerHooks = require("../store/reducerHooks");

var _LayerComponents = require("./LayerComponents");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TDGeojsonLayer({
  pathOptions,
  circleProps,
  polylineProps,
  ToolTipComponent
}) {
  const currentData = (0, _reducerHooks.useTDStoreState)(state => state.currentData);
  return _react.default.createElement(_react.default.Fragment, null, currentData === null || currentData === void 0 ? void 0 : currentData.features.map((f, index) => {
    var _f$properties, _f$properties2;

    return _react.default.createElement(_react.Fragment, {
      key: `${(f === null || f === void 0 ? void 0 : (_f$properties = f.properties) === null || _f$properties === void 0 ? void 0 : _f$properties.id) || (f === null || f === void 0 ? void 0 : (_f$properties2 = f.properties) === null || _f$properties2 === void 0 ? void 0 : _f$properties2.username)}-${index}`
    }, f.geometry.geometries.map(g => {
      var _f$properties3, _f$properties4;

      return g.type === "Point" ? _react.default.createElement(_LayerComponents.TDCircleMarker, {
        coordinates: g.coordinates,
        pathOptions: {
          color: f === null || f === void 0 ? void 0 : (_f$properties3 = f.properties) === null || _f$properties3 === void 0 ? void 0 : _f$properties3.color,
          ...pathOptions
        },
        circleProps: circleProps,
        ToolTipComponent: ToolTipComponent,
        properties: f.properties
      }) : _react.default.createElement(_LayerComponents.TDPolyline, {
        coordinates: g.coordinates,
        pathOptions: {
          color: f === null || f === void 0 ? void 0 : (_f$properties4 = f.properties) === null || _f$properties4 === void 0 ? void 0 : _f$properties4.color,
          ...pathOptions
        },
        polylineProps: polylineProps
      });
    }));
  }));
}
//# sourceMappingURL=TDGeojsonLayer.js.map