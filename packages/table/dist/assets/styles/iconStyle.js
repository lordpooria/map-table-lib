"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

const style = (0, _core.makeStyles)(theme => (0, _core.createStyles)({
  root: {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    fontSize: 24,
    transition: theme.transitions.create("fill", {
      duration: theme.transitions.duration.shorter
    })
  }
}));
var _default = style;
exports.default = _default;
//# sourceMappingURL=iconStyle.js.map