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

var _HeaderMenu = _interopRequireDefault(require("../virtualize-table/header/HeaderMenu"));

var _commonStyles = _interopRequireDefault(require("../styles/commonStyles"));

var _DividerIcon = _interopRequireDefault(require("../assets/icons/common/DividerIcon"));

var _TableSizeProvider = require("../container/TableSizeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useHeadStyles = (0, _core.makeStyles)(theme => (0, _core.createStyles)({
  columnContainer: {
    display: "flex",
    top: 0,
    left: 0,
    position: "sticky",
    zIndex: 2,
    backgroundColor: "rgba(255,255,255,0.8)",
    alignItems: "center",
    borderBottom: `solid ${theme.palette.grey[300]} 1px`
  },
  titleText: {
    flex: 1,
    fontFamily: "inherit"
  },
  dividerIcon: {
    pointerEvents: "none",
    display: "inline-block",
    width: _themeConstants.RESIZE_HANDLE_WIDTH,
    height: _themeConstants.RESIZE_HANDLE_WIDTH
  },
  dividerIconWrapper: {
    cursor: "col-resize",
    opacity: 0.4,
    "&:hover": {
      opacity: 1
    }
  }
}));

const HeadCell = ({
  minWidth = _themeConstants.ROW_MIN_WIDTH,
  label,
  colKey,
  CellComponent,
  HeaderComponent,
  visible,
  sorted,
  sortable,
  resizable,
  colIndex,
  classes,
  sticky,
  DividerProps,
  ...rest
}) => {
  const cellClasses = useHeadStyles();
  const commonClasses = (0, _commonStyles.default)();
  const {
    currentWidths
  } = (0, _TableSizeProvider.useTableSizeState)();
  const calcMinWidth = currentWidths[rest[_constants.DATA_FIELD]] ? currentWidths[rest[_constants.DATA_FIELD]] : minWidth;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", _extends({
    className: (0, _clsx.default)(commonClasses.tableCell, _constants.HESABA_TABLE_HEADER_CLASS, classes === null || classes === void 0 ? void 0 : classes.root),
    style: {
      minWidth: calcMinWidth || minWidth,
      width: calcMinWidth || minWidth
    }
  }, rest), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.Typography, {
    align: "center",
    className: (0, _clsx.default)(cellClasses.titleText, classes === null || classes === void 0 ? void 0 : classes.title)
  }, label), _react.default.createElement(_HeaderMenu.default, {
    index: colIndex,
    sortable: sortable,
    columnKey: colKey,
    sorted: sorted
  }))), resizable && _react.default.createElement("div", {
    className: (0, _clsx.default)(_constants.DRAG_CLASS, cellClasses.dividerIconWrapper)
  }, _react.default.createElement(_DividerIcon.default, _extends({
    className: (0, _clsx.default)(cellClasses.dividerIcon, classes === null || classes === void 0 ? void 0 : classes.divider)
  }, DividerProps))));
};

var _default = HeadCell;
exports.default = _default;
//# sourceMappingURL=HeadCell.js.map