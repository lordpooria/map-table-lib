"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ArrowUp = ({
  className
}) => {
  return _react.default.createElement(_SvgIcon.default, {
    className: className,
    id: "mdi-arrow-up"
  }, _react.default.createElement("path", {
    d: "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"
  }));
};

var _default = ArrowUp;
exports.default = _default;
//# sourceMappingURL=ArrowUpIcon.js.map