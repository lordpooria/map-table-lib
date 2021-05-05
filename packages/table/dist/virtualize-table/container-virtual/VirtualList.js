"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactWindow = require("react-window");

var _VirtualTableRow = _interopRequireDefault(require("../rows/VirtualTableRow"));

var _VirtualTableHeader = _interopRequireDefault(require("../header/VirtualTableHeader"));

var _clsx = _interopRequireDefault(require("clsx"));

var _reducerHooks = require("../../store/reducerHooks");

var _themeConstants = require("../../utils/themeConstants");

var _themeLanguage = require("@hesaba/theme-language");

var _constants = require("../../utils/constants");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useStyles = (0, _core.makeStyles)({
  root: {}
});
const outerElementTypeWithId = (0, _react.forwardRef)((props, ref) => {
  return _react.default.createElement("div", _extends({
    id: _constants.MAIN_LIST_ID
  }, props, {
    ref: ref
  }));
});
const VirtualList = (0, _react.memo)((0, _react.forwardRef)(({
  height,
  width,
  classes,
  onScroll,
  setTableRef,
  extraStyle,
  selectable = false,
  itemSize = () => _themeConstants.commonSidebar.itemHeight,
  resizable,
  sortable,
  VTCommonTableElProps,
  VTRowProps,
  VTFilterProps,
  VTHeaderProps
}, ref) => {
  var _classes$table;

  const {
    direction
  } = (0, _themeLanguage.useLanguageState)();
  const visibleRows = (0, _reducerHooks.useTStoreState)(state => state.visibleRows);
  const numRowsSelected = (0, _reducerHooks.useTStoreState)(state => state.numRowsSelected);
  const tableClasses = useStyles();

  if (!visibleRows || visibleRows.length === 0) {
    return null;
  }

  const innerElementType = ({
    children,
    style,
    ...rest
  }) => _react.default.createElement("div", _extends({}, rest, {
    style: { ...style,
      ...extraStyle
    }
  }), _react.default.createElement(_VirtualTableHeader.default, _extends({
    selectable: selectable,
    isSelected: numRowsSelected !== 0,
    classes: classes === null || classes === void 0 ? void 0 : classes.header,
    width: width,
    resizable: resizable,
    sortable: sortable
  }, VTCommonTableElProps, VTHeaderProps, VTFilterProps)), children);

  return _react.default.createElement(_reactWindow.VariableSizeList, {
    ref: ref,
    direction: direction,
    height: height,
    itemCount: visibleRows.length,
    onScroll: onScroll,
    itemSize: itemSize,
    itemKey: index => `${index}`,
    width: width,
    itemData: visibleRows,
    outerRef: setTableRef,
    innerElementType: innerElementType,
    className: (0, _clsx.default)(tableClasses.root, classes === null || classes === void 0 ? void 0 : (_classes$table = classes.table) === null || _classes$table === void 0 ? void 0 : _classes$table.root),
    outerElementType: outerElementTypeWithId
  }, ({
    index,
    ...rest
  }) => _react.default.createElement(_VirtualTableRow.default, _extends({
    rowIndex: index,
    selectable: selectable,
    classes: classes === null || classes === void 0 ? void 0 : classes.row,
    width: width
  }, VTCommonTableElProps, VTRowProps, rest)));
}));
var _default = VirtualList;
exports.default = _default;
//# sourceMappingURL=VirtualList.js.map