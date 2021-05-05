"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _timer = require("../timer");

var _TDGeojsonLayer = _interopRequireDefault(require("../layer/TDGeojsonLayer"));

var _BottomContainer = _interopRequireDefault(require("./BottomContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HesabaTimeDimensionView = ({
  timeProps,
  layerProps,
  ...rest
}) => {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_BottomContainer.default, rest), _react.default.createElement(_timer.TimeComponent, timeProps), _react.default.createElement(_TDGeojsonLayer.default, layerProps));
};

var _default = HesabaTimeDimensionView;
exports.default = _default;
//# sourceMappingURL=HesabaTimeDimensionView.js.map