"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualTableRow = VirtualTableRow;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _reducerHooks = require("../../store/reducerHooks");

var _Cell = _interopRequireDefault(require("../../cell/Cell"));

var _themeConstants = require("../../utils/themeConstants");

var _constants = require("../../utils/constants");

var _commonStyles = _interopRequireDefault(require("../../styles/commonStyles"));

var _helper = require("../../utils/helper");

var _TableRowProvider = require("../../container/TableRowProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useStyles = (0, _core.makeStyles)(theme => (0, _core.createStyles)({
  evenRow: {
    backgroundColor: "#f8f8f0"
  },
  oddRow: {},
  tableRow: {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    marginTop: _themeConstants.commonSidebar.itemHeight
  },
  tableRowCommon: {
    borderBottom: `solid ${theme.palette.grey[300]} 1px`,
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)"
    }
  },
  rowCell: {},
  selected: {
    backgroundColor: "rgba(100,100,255,0.1)"
  },
  activatedRow: {
    backgroundColor: "rgba(255,100,255,0.1)"
  }
}));

function VirtualTableRow(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(SingleVirtualTableRow, props));
}

const SingleVirtualTableRow = ({
  style,
  rowIndex,
  selectable,
  classes,
  width,
  CheckboxProps,
  onRowClick,
  extraStyles,
  selectedRowStyle,
  ...rest
}) => {
  const rowClasses = useStyles();
  const commonClasses = (0, _commonStyles.default)();
  const visibleColumns = (0, _reducerHooks.useTStoreState)(state => state.visibleColumns);
  const visibleRows = (0, _reducerHooks.useTStoreState)(state => state.visibleRows);
  const toggleSingleRow = (0, _reducerHooks.useTStoreActions)(actions => actions.toggleSingleRow);
  const calcRowWidth = (0, _helper.useCalcTableWidth)(visibleColumns, width);
  const {
    activeRow
  } = (0, _TableRowProvider.useTableRowState)();
  const onRowSelect = (0, _react.useCallback)(() => {
    onRowClick && onRowClick(rowIndex);
  }, [onRowClick]);
  return _react.default.createElement("div", {
    style: { ...style,
      ...extraStyles,
      ...(activeRow === rowIndex && selectedRowStyle),
      width: calcRowWidth()
    },
    className: (0, _clsx.default)(_constants.HESABA_TABLE_ROW_CLASS, rowClasses.tableRow, (0, _helper.chooseClass)(rowClasses.tableRowCommon, classes === null || classes === void 0 ? void 0 : classes.root), {
      [rowClasses.selected]: visibleRows[rowIndex].selected
    }, {
      [rowClasses.activatedRow]: activeRow === rowIndex
    }, {
      [(classes === null || classes === void 0 ? void 0 : classes.evenRow) || "tempEvenRow"]: (classes === null || classes === void 0 ? void 0 : classes.evenRow) && rowIndex % 2 === 0
    }, {
      [(classes === null || classes === void 0 ? void 0 : classes.oddRow) || "tempOddRow"]: (classes === null || classes === void 0 ? void 0 : classes.oddRow) && rowIndex % 2 !== 0
    }),
    onClick: onRowSelect
  }, selectable && _react.default.createElement(_core.Checkbox, _extends({
    checked: visibleRows[rowIndex].selected,
    onChange: () => {
      toggleSingleRow({
        index: rowIndex
      });
    },
    color: "primary",
    classes: {
      root: commonClasses.checkbox
    },
    onClick: e => e.stopPropagation()
  }, CheckboxProps)), visibleColumns.map((props, colIndex) => _react.default.createElement(_react.Fragment, {
    key: props.key
  }, _react.default.createElement(_Cell.default, _extends({}, props, rest, {
    colIndex: colIndex,
    row: visibleRows[rowIndex],
    rowIndex: rowIndex,
    columnsLength: visibleColumns.length,
    colKey: props.key
  })))));
};

var _default = VirtualTableRow;
exports.default = _default;
//# sourceMappingURL=VirtualTableRow.js.map