"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleNumericInput = SimpleNumericInput;
exports.SimpleStringInput = SimpleStringInput;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SimpleNumericInput({
  filterIndex,
  valIndex,
  onSetFilter,
  value,
  label,
  classes
}) {
  const handleChange = _ => e => {
    if (!e.target.value) return;
    onSetFilter(filterIndex, valIndex, e.target.value);
  };

  return _react.default.createElement(_core.TextField, {
    classes: {
      root: (0, _clsx.default)(classes === null || classes === void 0 ? void 0 : classes.root, classes === null || classes === void 0 ? void 0 : classes.input)
    },
    key: `number-${valIndex}`,
    value: value,
    onChange: handleChange(valIndex),
    type: "number",
    label: label,
    variant: "standard"
  });
}

function SimpleStringInput({
  filterIndex,
  valIndex,
  onSetFilter,
  value,
  classes,
  label
}) {
  const handleChange = valIndex => e => {
    if (!e.target.value) return;
    onSetFilter(filterIndex, valIndex, e.target.value);
  };

  return _react.default.createElement(_core.TextField, {
    classes: {
      root: (0, _clsx.default)(classes === null || classes === void 0 ? void 0 : classes.root, classes === null || classes === void 0 ? void 0 : classes.input)
    },
    key: `string-${valIndex}`,
    value: value,
    onChange: handleChange(valIndex),
    label: label,
    variant: "standard"
  });
}
//# sourceMappingURL=FilterValues.js.map