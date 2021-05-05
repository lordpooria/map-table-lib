"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timerStoreModel = void 0;

var _easyPeasy = require("easy-peasy");

const timerStoreModel = {
  displayDate: "",
  displayTime: "",
  isAM: true,
  setDisplayDate: (0, _easyPeasy.action)((state, {
    displayDate,
    displayTime,
    isAM
  }) => {
    state.displayDate = displayDate;
    state.displayTime = displayTime;
    state.isAM = isAM;
  })
};
exports.timerStoreModel = timerStoreModel;
//# sourceMappingURL=timeReducer.js.map