"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PlayIcon = ({
  className,
  style
}) => {
  return _react.default.createElement(_SvgIcon.default, {
    className: className,
    id: "mdi-play",
    style: style
  }, _react.default.createElement("path", {
    d: "M8,5.14V19.14L19,12.14L8,5.14Z"
  }));
};

var _default = PlayIcon;
exports.default = _default;
//# sourceMappingURL=PlayIcon.js.map