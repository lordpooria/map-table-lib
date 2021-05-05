"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.vtStoreTableSize = void 0;

var _easyPeasy = require("easy-peasy");

const vtStoreTableSize = {
  currentWidths: {},
  totalWidth: 0,
  setSizes: (0, _easyPeasy.action)((state, {
    totalWidth,
    currentWidths
  }) => {
    state.currentWidths = currentWidths;
    state.totalWidth = totalWidth;
  }),
  setCurrentWidth: (0, _easyPeasy.action)((state, {
    currentWidths
  }) => {
    state.currentWidths = currentWidths;
  }),
  setTotalWidth: (0, _easyPeasy.action)((state, {
    totalWidth
  }) => {
    state.totalWidth = totalWidth;
  })
};
exports.vtStoreTableSize = vtStoreTableSize;
var _default = vtStoreTableSize;
exports.default = _default;
//# sourceMappingURL=tableSize.js.map