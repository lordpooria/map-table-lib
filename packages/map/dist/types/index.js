"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HesabaTimeDimension = require("./HesabaTimeDimension");

Object.keys(_HesabaTimeDimension).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _HesabaTimeDimension[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _HesabaTimeDimension[key];
    }
  });
});

var _common = require("./common");

Object.keys(_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _common[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _common[key];
    }
  });
});

var _layer = require("./layer");

Object.keys(_layer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _layer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _layer[key];
    }
  });
});

var _legend = require("./legend");

Object.keys(_legend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _legend[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _legend[key];
    }
  });
});
//# sourceMappingURL=index.js.map