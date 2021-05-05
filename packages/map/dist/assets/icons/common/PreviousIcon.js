"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PreviousIcon = ({
  className
}) => {
  return _react.default.createElement(_SvgIcon.default, {
    className: className,
    id: "mdi-skip-previous"
  }, _react.default.createElement("path", {
    d: "M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z"
  }));
};

var _default = PreviousIcon;
exports.default = _default;
//# sourceMappingURL=PreviousIcon.js.map