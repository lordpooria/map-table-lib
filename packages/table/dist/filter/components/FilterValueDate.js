"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FilterValueDateWrapper = void 0;

var _react = _interopRequireDefault(require("react"));

var _pickers = require("@material-ui/pickers");

var _dayjs = _interopRequireDefault(require("@date-io/dayjs"));

var _dayjs2 = _interopRequireDefault(require("dayjs"));

var _jalaliday = _interopRequireDefault(require("jalaliday"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dayjs2.default.extend(_jalaliday.default);

const FilterValueDateWrapper = ({
  children
}) => {
  const calendar = "jalali";
  return _react.default.createElement(_pickers.MuiPickersUtilsProvider, {
    utils: calendar === "jalali" ? _dayjs.default : _dayjs.default,
    locale: calendar === "jalali" ? "fa" : "en"
  }, children);
};

exports.FilterValueDateWrapper = FilterValueDateWrapper;

const FilterValueDate = ({
  filterIndex,
  valIndex,
  onSetFilter,
  value,
  classes,
  label
}) => {
  const handleChange = _ => date => {
    if (!date) return;
    onSetFilter(filterIndex, valIndex, date.toISOString());
  };

  return _react.default.createElement(FilterValueDateWrapper, null, _react.default.createElement(_pickers.DatePicker, {
    disableToolbar: true,
    variant: "inline",
    format: "MM/dd/yyyy",
    margin: "normal",
    id: "date-picker-inline",
    value: value,
    className: classes === null || classes === void 0 ? void 0 : classes.root,
    key: `date-${valIndex}`,
    onChange: handleChange(valIndex),
    label: label,
    inputVariant: "standard",
    InputProps: {
      classes: {
        root: classes === null || classes === void 0 ? void 0 : classes.input
      }
    },
    animateYearScrolling: true
  }));
};

var _default = FilterValueDate;
exports.default = _default;
//# sourceMappingURL=FilterValueDate.js.map