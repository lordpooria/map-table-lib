"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StyledButton = require("./StyledButton");

Object.keys(_StyledButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _StyledButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _StyledButton[key];
    }
  });
});
//# sourceMappingURL=index.js.map