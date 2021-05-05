"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PlayReverseIcon = ({
  className,
  style
}) => {
  return _react.default.createElement(_SvgIcon.default, {
    className: className,
    id: "mdi-step-backward-2",
    style: style
  }, _react.default.createElement("path", {
    d: "M17,5H14V19H17V5M12,5L1,12L12,19V5M22,5H19V19H22V5Z"
  }));
};

var _default = PlayReverseIcon;
exports.default = _default;
//# sourceMappingURL=PlayReverseIcon.js.map