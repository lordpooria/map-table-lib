"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chooseClass = chooseClass;
exports.useCalcTableWidth = void 0;

var _react = require("react");

var _TableSizeProvider = require("../container/TableSizeProvider");

var _themeConstants = require("./themeConstants");

const useCalcTableWidth = (columns, width) => {
  const {
    totalWidth
  } = (0, _TableSizeProvider.useTableSizeState)();
  const calcRowWidth = (0, _react.useCallback)(() => {
    if (totalWidth) return totalWidth > width ? totalWidth : width;
    const totalColumnSize = columns.reduce((acc, cur) => acc + ((cur === null || cur === void 0 ? void 0 : cur.minWidth) || _themeConstants.ROW_MIN_WIDTH + _themeConstants.RESIZE_HANDLE_WIDTH), _themeConstants.CHECKBOX_SIZE);
    return totalColumnSize > width ? totalColumnSize : width;
  }, [columns, width, totalWidth]);
  return calcRowWidth;
};

exports.useCalcTableWidth = useCalcTableWidth;

function chooseClass(common, user) {
  return user ? user : common;
}
//# sourceMappingURL=helper.js.map