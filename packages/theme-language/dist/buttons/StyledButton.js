"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonTooltip = ButtonTooltip;
exports.SmallIconButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SmallIconButton = (0, _core.withStyles)(() => ({
  root: {
    padding: "2px"
  }
}))(_core.IconButton);
exports.SmallIconButton = SmallIconButton;

function ButtonTooltip({
  title,
  ...rest
}) {
  return _react.default.createElement(_core.Tooltip, {
    title: title
  }, _react.default.createElement(SmallIconButton, rest));
}
//# sourceMappingURL=StyledButton.js.map