"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TDProvider: true
};
Object.defineProperty(exports, "TDProvider", {
  enumerable: true,
  get: function () {
    return _Provider.default;
  }
});
exports.default = void 0;

var _HesabaTimeDimension = _interopRequireDefault(require("./HesabaTimeDimension/HesabaTimeDimension"));

var _Provider = _interopRequireDefault(require("./provider/Provider"));

var _timer = require("./timer");

Object.keys(_timer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _timer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _timer[key];
    }
  });
});

var _common = require("./types/common");

Object.keys(_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _common[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _common[key];
    }
  });
});

var _store = require("./store");

Object.keys(_store).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _store[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _store[key];
    }
  });
});

var _legend = require("./legend");

Object.keys(_legend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _legend[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _legend[key];
    }
  });
});

var _utils = require("./utils/utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});

var _record = require("./record");

Object.keys(_record).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _record[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _record[key];
    }
  });
});

var _player = require("./player");

Object.keys(_player).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _player[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _player[key];
    }
  });
});

var _layer = require("./layer");

Object.keys(_layer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _layer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _layer[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _HesabaTimeDimension.default;
exports.default = _default;
//# sourceMappingURL=index.js.map