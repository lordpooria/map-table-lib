"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _constants = require("../utils/constants");

var _themeConstants = require("../utils/themeConstants");

var _TableSizeProvider = require("../container/TableSizeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useCellStyles = (0, _core.makeStyles)(() => (0, _core.createStyles)({
  rowCell: {},
  simpleCell: {
    fontFamily: "inherit"
  }
}));

const SimpleTableCell = ({
  value,
  className
}) => {
  const classes = useCellStyles();
  return _react.default.createElement(_core.Typography, {
    align: "center",
    className: (0, _clsx.default)(classes.simpleCell, className)
  }, value);
};

const Cell = ({
  label,
  minWidth = _themeConstants.ROW_MIN_WIDTH,
  colKey,
  CellComponent = SimpleTableCell,
  HeaderComponent,
  visible,
  sorted,
  row,
  rowIndex,
  colIndex,
  columnsLength,
  classes,
  sticky,
  custom,
  isScrolling,
  ...rest
}) => {
  var _row$colKey;

  const cellClasses = useCellStyles();
  const {
    currentWidths
  } = (0, _TableSizeProvider.useTableSizeState)();
  const calcMinWidth = currentWidths[rest[_constants.DATA_FIELD]] ? currentWidths[rest[_constants.DATA_FIELD]] + _themeConstants.RESIZE_HANDLE_WIDTH : minWidth + _themeConstants.RESIZE_HANDLE_WIDTH;
  const value = typeof row[colKey] === "object" ? (_row$colKey = row[colKey]) === null || _row$colKey === void 0 ? void 0 : _row$colKey.value : row[colKey];
  return _react.default.createElement("div", _extends({}, rest, {
    key: colKey,
    style: {
      minWidth: calcMinWidth || minWidth,
      width: calcMinWidth || minWidth,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "normal"
    },
    className: (0, _clsx.default)(cellClasses.rowCell, classes === null || classes === void 0 ? void 0 : classes.root)
  }), _react.default.createElement(CellComponent, {
    label: label,
    index: rowIndex,
    rowKey: rowIndex,
    row: row,
    value: value,
    className: classes === null || classes === void 0 ? void 0 : classes.simpleCell
  }));
};

var _default = Cell;
exports.default = _default;
//# sourceMappingURL=Cell.js.map