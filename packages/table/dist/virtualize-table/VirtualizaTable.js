"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useTableResizer = require("../hooks/useTableResizer");

var _useTableData = _interopRequireDefault(require("../hooks/useTableData"));

var _TableToolbar = require("../toolbar/TableToolbar");

var _VirtualTableFilter = _interopRequireDefault(require("../filter/VirtualTableFilter"));

var _VirtualTableContainer = _interopRequireDefault(require("./container-virtual/VirtualTableContainer"));

var _overlay = _interopRequireDefault(require("./overlay"));

var _VirtualList = _interopRequireDefault(require("./container-virtual/VirtualList"));

var _Pagination = require("../Pagination");

var _theme = require("../utils/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const VirtualizaTable = (0, _react.memo)(({
  rows,
  columns,
  width = "100%",
  height,
  hasFilter = true,
  hasToolbar = true,
  title,
  operationOnRows,
  classes,
  pagination,
  tableDataParser,
  VTContainerProps,
  VTToolbarProps,
  ...rest
}) => {
  var _classes$table;

  (0, _useTableData.default)(columns, rows, tableDataParser);
  const {
    setTableRef
  } = (0, _useTableResizer.useTableResizer)();
  const staticGrid = (0, _react.useRef)();
  const mainList = (0, _react.useRef)();
  const onScroll = (0, _react.useCallback)(({
    scrollOffset,
    scrollUpdateWasRequested
  }) => {
    if (!scrollUpdateWasRequested && staticGrid.current) {
      staticGrid.current.scrollTo(scrollOffset);
    }
  }, []);
  return _react.default.createElement(_VirtualTableContainer.default, _extends({
    classes: classes === null || classes === void 0 ? void 0 : classes.table
  }, VTContainerProps, {
    width: width
  }), hasToolbar && _react.default.createElement(_TableToolbar.TableToolbar, _extends({
    title: title,
    operationOnRows: operationOnRows,
    classes: classes === null || classes === void 0 ? void 0 : classes.toolbar
  }, VTToolbarProps)), _react.default.createElement("div", {
    role: "table",
    className: classes === null || classes === void 0 ? void 0 : (_classes$table = classes.table) === null || _classes$table === void 0 ? void 0 : _classes$table.container,
    style: {
      display: "flex"
    }
  }, _react.default.createElement(_overlay.default, null), _react.default.createElement(_VirtualList.default, _extends({
    ref: mainList,
    width: width,
    onScroll: onScroll,
    classes: classes,
    setTableRef: setTableRef,
    height: (0, _theme.calcTableHeght)(hasToolbar, VTToolbarProps === null || VTToolbarProps === void 0 ? void 0 : VTToolbarProps.height, pagination, height)
  }, rest)), _react.default.createElement(_overlay.default, null)), hasFilter && _react.default.createElement(_VirtualTableFilter.default, null), pagination && _react.default.createElement(_Pagination.TablePagination, _extends({}, pagination, {
    classes: classes === null || classes === void 0 ? void 0 : classes.footer,
    width: width
  })));
});
var _default = VirtualizaTable;
exports.default = _default;
//# sourceMappingURL=VirtualizaTable.js.map