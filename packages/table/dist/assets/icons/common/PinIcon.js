"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PinIcon = ({
  className
}) => {
  return _react.default.createElement(_SvgIcon.default, {
    className: className,
    id: "mdi-pin"
  }, _react.default.createElement("path", {
    d: "M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z"
  }));
};

var _default = PinIcon;
exports.default = _default;
//# sourceMappingURL=PinIcon.js.map