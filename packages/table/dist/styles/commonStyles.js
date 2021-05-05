"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _themeConstants = require("../utils/themeConstants");

var _core = require("@material-ui/core");

const style = (0, _core.makeStyles)(() => (0, _core.createStyles)({
  tableCell: {
    overflow: "hidden",
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    "& >button": {
      opacity: 0
    },
    "&:hover >button": {
      opacity: 1
    }
  },
  checkbox: {
    width: _themeConstants.CHECKBOX_SIZE,
    height: _themeConstants.CHECKBOX_SIZE
  }
}));
var _default = style;
exports.default = _default;
//# sourceMappingURL=commonStyles.js.map