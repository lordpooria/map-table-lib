"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ArrowLeftIcon = ({
  className
}) => {
  return _react.default.createElement(_SvgIcon.default, {
    className: className,
    id: "mdi-chevron-left"
  }, _react.default.createElement("path", {
    d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
  }));
};

var _default = ArrowLeftIcon;
exports.default = _default;
//# sourceMappingURL=ArrowLeftIcon.js.map