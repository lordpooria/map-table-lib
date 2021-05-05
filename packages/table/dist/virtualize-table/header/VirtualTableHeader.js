"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _themeConstants = require("../../utils/themeConstants");

var _reducerHooks = require("../../store/reducerHooks");

var _HeadCell = _interopRequireDefault(require("../../cell/HeadCell"));

var _constants = require("../../utils/constants");

var _clsx = _interopRequireDefault(require("clsx"));

var _commonStyles = _interopRequireDefault(require("../../styles/commonStyles"));

var _helper = require("../../utils/helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useStyles = (0, _core.makeStyles)(theme => (0, _core.createStyles)({
  headerContainer: {
    display: "flex",
    top: 0,
    position: "sticky",
    zIndex: 2,
    alignItems: "center"
  },
  commonHeaderContainer: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderBottom: `solid ${theme.palette.grey[300]} 1px`
  },
  titleText: {
    flex: 1
  },
  dividerIcon: {
    pointerEvents: "none",
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

const VirtualTableHeader = ({
  selectable,
  isSelected,
  classes,
  width,
  CheckboxProps,
  ...rest
}) => {
  const tableClasses = useStyles();
  const commonClasses = (0, _commonStyles.default)();
  const visibleColumns = (0, _reducerHooks.useTStoreState)(state => state.visibleColumns);
  const toggleAllRows = (0, _reducerHooks.useTStoreActions)(actions => actions.toggleAllRows);
  const calcRowWidth = (0, _helper.useCalcTableWidth)(visibleColumns, width);
  return _react.default.createElement("div", {
    style: {
      height: _themeConstants.commonSidebar.itemHeight,
      width: calcRowWidth()
    },
    className: (0, _clsx.default)(_constants.HESABA_TABLE_ROW_CLASS, tableClasses.headerContainer, (0, _helper.chooseClass)(tableClasses.commonHeaderContainer, classes === null || classes === void 0 ? void 0 : classes.root))
  }, selectable && _react.default.createElement(_core.Checkbox, _extends({
    className: (0, _clsx.default)("HESABA_TABLE_HEADER_CLASS"),
    checked: isSelected,
    onChange: () => {
      toggleAllRows({
        isSelected
      });
    },
    color: "primary",
    classes: {
      root: commonClasses.checkbox
    }
  }, CheckboxProps)), visibleColumns.map((props, index) => _react.default.createElement(_react.Fragment, {
    key: props.key
  }, _react.default.createElement(_HeadCell.default, _extends({}, props, rest, {
    colIndex: index,
    colKey: props.key,
    classes: classes === null || classes === void 0 ? void 0 : classes.cell
  })))));
};

var _default = VirtualTableHeader;
exports.default = _default;
//# sourceMappingURL=VirtualTableHeader.js.map