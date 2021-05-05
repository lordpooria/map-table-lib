"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _store = require("../../store");

var _sliders = require("../../sliders");

var _core = require("@material-ui/core");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function valueText(value) {
  return value;
}

const TimeSlider = props => {
  const [timeSliderRange, setTimeSliderRange] = (0, _react.useState)({
    min: 0,
    max: 0
  });
  const [timeSlider, setTimeSlider] = (0, _react.useState)(0);
  const formattedData = (0, _store.useTDStoreState)(state => state.formattedData);
  const currentTimeIndex = (0, _store.useTDStoreState)(state => state.currentTimeIndex);
  (0, _react.useEffect)(() => {
    if (currentTimeIndex >= 0) {
      setTimeSlider(currentTimeIndex);
    }
  }, [currentTimeIndex]);
  (0, _react.useEffect)(() => {
    const max = formattedData.length - 1;
    if (max > 0) setTimeSliderRange({
      min: 0,
      max
    });
  }, [formattedData]);
  return _react.default.createElement(TimeSliderStateless, _extends({}, props, timeSliderRange, {
    timeSliderValue: timeSlider
  }));
};

const TimeSliderStateless = (0, _react.memo)(({
  timeSteps,
  classes,
  playerSliderClasses: playerSlider,
  timeSliderValue,
  min,
  max
}) => {
  const setCurrentTimeIndex = (0, _store.useTDStoreActions)(actions => actions.setCurrentTimeIndex);
  const commonClasses = (0, _sliders.useCommonSliderStyles)();
  return _react.default.createElement("div", {
    className: (classes === null || classes === void 0 ? void 0 : classes.playerSliderWrapper) || playerSlider
  }, _react.default.createElement(_core.Slider, {
    component: "div",
    classes: (classes === null || classes === void 0 ? void 0 : classes.playerSlider) || commonClasses,
    valueLabelDisplay: "auto",
    ThumbComponent: _sliders.PlayerThumb,
    ValueLabelComponent: _sliders.ValueLabelComponent,
    value: timeSliderValue,
    valueLabelFormat: valueText,
    step: timeSteps,
    min: min,
    max: max,
    onChange: (_, index) => {
      setCurrentTimeIndex({
        index: index
      });
    }
  }));
});
var _default = TimeSlider;
exports.default = _default;
//# sourceMappingURL=TimeSlider.js.map