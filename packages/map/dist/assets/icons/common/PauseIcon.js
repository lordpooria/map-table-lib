"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PauseIcon = ({
  className,
  style
}) => {
  return _react.default.createElement(_SvgIcon.default, {
    className: className,
    id: "mdi-pause",
    style: style
  }, _react.default.createElement("path", {
    d: "M14,19H18V5H14M6,19H10V5H6V19Z"
  }));
};

var _default = PauseIcon;
exports.default = _default;
//# sourceMappingURL=PauseIcon.js.map