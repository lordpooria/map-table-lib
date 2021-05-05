"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderComponent = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RenderComponent = ({
  children,
  Component
}) => {
  if (typeof Component === "boolean") {
    if (Component) return children;else return null;
  }

  return _react.default.createElement(Component, null);
};

exports.RenderComponent = RenderComponent;
//# sourceMappingURL=helperComponent.js.map