"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactVirtualizedAutoSizer = _interopRequireDefault(require("react-virtualized-auto-sizer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AutoSizer = ({
  className,
  width,
  height,
  children,
  onResize
}) => {
  const disableWidth = typeof width === "number";
  const disableHeight = typeof height === "number";

  if (disableWidth && disableHeight) {
    return _react.default.createElement("div", {
      className: className,
      style: {
        width,
        height,
        position: "relative"
      }
    }, children({
      width,
      height
    }));
  }

  return _react.default.createElement(_reactVirtualizedAutoSizer.default, {
    className: className,
    disableWidth: disableWidth,
    disableHeight: disableHeight,
    onResize: onResize
  }, children);
};

var _default = AutoSizer;
exports.default = _default;
//# sourceMappingURL=AutoSizer.js.map