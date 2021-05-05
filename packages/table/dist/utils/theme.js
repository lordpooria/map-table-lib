"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcTableHeght = calcTableHeght;
exports.default = void 0;

var _themeConstants = require("./themeConstants");

var _default = {
  typography: {
    useNextVariants: true,
    fontFamily: ["Roboto", "IRANSans", "Arial"].join(","),
    fontSize: 14
  }
};
exports.default = _default;

function calcTableHeght(hasToolbar, toolbarHeight, pagination, height) {
  if (!hasToolbar && !pagination) return height;
  let tableH = height;

  if (pagination) {
    if (pagination !== null && pagination !== void 0 && pagination.height) tableH -= pagination === null || pagination === void 0 ? void 0 : pagination.height;else tableH -= _themeConstants.DEFAULT_PAGINATION_HEIGHT;
  }

  if (hasToolbar) {
    if (toolbarHeight) tableH -= toolbarHeight;else tableH -= _themeConstants.DEFAULT_TOOLBAR_HEIGHT;
  }

  return tableH;
}
//# sourceMappingURL=theme.js.map