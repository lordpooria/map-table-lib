"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.tdStoreTableModel = void 0;

var _easyPeasy = require("easy-peasy");

const tdStoreTableModel = {
  tabs: [],
  tabIndex: "0",
  indicatorColor: "#FFF",
  setTabs: (0, _easyPeasy.action)((state, tabs) => {
    state.tabs = tabs;
    state.tabIndex = tabs[0].id;
    state.indicatorColor = tabs[0].color;
  }),
  setTabIndex: (0, _easyPeasy.action)((state, {
    tabIndex,
    color
  }) => {
    state.tabIndex = tabIndex;
    state.indicatorColor = color;
  })
};
exports.tdStoreTableModel = tdStoreTableModel;
var _default = tdStoreTableModel;
exports.default = _default;
//# sourceMappingURL=tableReducer.js.map