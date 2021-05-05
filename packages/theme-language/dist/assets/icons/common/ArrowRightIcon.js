"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ArrowRightIcon = ({
  className
}) => {
  return _react.default.createElement(_SvgIcon.default, {
    className: className,
    id: "mdi-chevron-right"
  }, _react.default.createElement("path", {
    d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
  }));
};

var _default = ArrowRightIcon;
exports.default = _default;
//# sourceMappingURL=ArrowRightIcon.js.map