"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducerHooks = require("./reducerHooks");

Object.keys(_reducerHooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _reducerHooks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reducerHooks[key];
    }
  });
});
//# sourceMappingURL=index.js.map