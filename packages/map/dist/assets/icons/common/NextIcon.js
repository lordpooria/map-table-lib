"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NextIcon = ({
  className
}) => {
  return _react.default.createElement(_SvgIcon.default, {
    className: className,
    id: "mdi-skip-next"
  }, _react.default.createElement("path", {
    d: "M16,18H18V6H16M6,18L14.5,12L6,6V18Z"
  }));
};

var _default = NextIcon;
exports.default = _default;
//# sourceMappingURL=NextIcon.js.map