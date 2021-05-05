"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  StyleProvider: true
};
Object.defineProperty(exports, "StyleProvider", {
  enumerable: true,
  get: function () {
    return _StyleProvider.default;
  }
});

var _language = require("./provider/language");

Object.keys(_language).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _language[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _language[key];
    }
  });
});

var _theme = require("./provider/theme");

Object.keys(_theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _theme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _theme[key];
    }
  });
});

var _createTheme = require("./theme/createTheme");

Object.keys(_createTheme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _createTheme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _createTheme[key];
    }
  });
});

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _useTranlation = require("./useTranlation");

Object.keys(_useTranlation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useTranlation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useTranlation[key];
    }
  });
});

var _typography = require("./typography");

Object.keys(_typography).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _typography[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _typography[key];
    }
  });
});

var _buttons = require("./buttons");

Object.keys(_buttons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _buttons[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _buttons[key];
    }
  });
});

var _StyleProvider = _interopRequireDefault(require("./StyleProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map