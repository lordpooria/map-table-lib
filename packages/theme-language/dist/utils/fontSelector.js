"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const fontSelector = lang => {
  let fontArray = [];

  switch (lang) {
    case "en":
      fontArray = ["Roboto", "Arial", "sans-serif"];
      break;

    case "fa":
      fontArray = ["Vazir", "Arial", "Roboto"];
      break;

    default:
      fontArray = ["Roboto", "Arial", "sans-serif"];
      break;
  }

  return fontArray.join(",");
};

var _default = fontSelector;
exports.default = _default;
//# sourceMappingURL=fontSelector.js.map