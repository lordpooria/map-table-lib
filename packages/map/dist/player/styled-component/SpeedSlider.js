"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _helperComponent = require("../helperComponent");

var _sliders = require("../../sliders");

var _GaugeIcon = _interopRequireDefault(require("../../assets/icons/common/GaugeIcon"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function valuetext(value) {
  return `${value}fps`;
}

const SpeedSlider = (0, _react.memo)(({
  speedStep,
  classes,
  speedSliderClasses,
  whiteIconClasses,
  speedIcon,
  setTransitionTime,
  min,
  max,
  speedSliderValue
}) => {
  const commonClasses = (0, _sliders.useCommonSliderStyles)();
  return _react.default.createElement("div", {
    className: (classes === null || classes === void 0 ? void 0 : classes.speedSliderWrapper) || speedSliderClasses
  }, _react.default.createElement(_helperComponent.RenderComponent, {
    Component: speedIcon
  }, _react.default.createElement(_GaugeIcon.default, {
    className: whiteIconClasses
  })), _react.default.createElement(_core.Slider, {
    classes: (classes === null || classes === void 0 ? void 0 : classes.speedSlider) || commonClasses,
    ThumbComponent: _sliders.PlayerThumb,
    ValueLabelComponent: _sliders.ValueLabelComponent,
    valueLabelDisplay: "auto",
    value: speedSliderValue,
    valueLabelFormat: valuetext,
    step: speedStep,
    min: min,
    max: max,
    onChange: (_, v) => {
      setTransitionTime(1000 / +v);
    }
  }));
});
var _default = SpeedSlider;
exports.default = _default;
//# sourceMappingURL=SpeedSlider.js.map