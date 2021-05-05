"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Overlay = ({}) => {
  return _react.default.createElement("div", {
    style: {
      position: "absolute",
      pointerEvents: "none",
      right: 0,
      left: 0,
      top: 0,
      bottom: 0,
      overflow: "hidden"
    }
  });
};

var _default = Overlay;
exports.default = _default;
//# sourceMappingURL=index.js.map