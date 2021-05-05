"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _table = require("@hesaba/table");

var _clsx = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _store = require("../store");

var _tableReducer = _interopRequireDefault(require("./tableReducer"));

var _easyPeasy = require("easy-peasy");

var _table2 = require("./table.utils");

var _colorConverter = require("../utils/colorConverter");

var _useAutoScroll = require("./useAutoScroll");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useStyles = (0, _core.makeStyles)(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#FFF",
    display: "flex"
  },
  header: {
    backgroundColor: "#f1ece7",
    borderBottom: "none"
  },
  tabRoot: {
    borderTopRightRadius: theme.shape.borderRadius * 2
  },
  scrollButton: {
    color: "#000",
    borderTopRightRadius: theme.shape.borderRadius * 2
  },
  tableContainer: {
    borderWidth: 0
  },
  row: {
    border: "#999",
    borderBottom: "solid 1px",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
      border: "none"
    }
  }
}));

function calcTableHeight(height, theme) {
  var _theme$mixins, _theme$mixins$toolbar;

  if (theme !== null && theme !== void 0 && (_theme$mixins = theme.mixins) !== null && _theme$mixins !== void 0 && (_theme$mixins$toolbar = _theme$mixins.toolbar) !== null && _theme$mixins$toolbar !== void 0 && _theme$mixins$toolbar.minHeight) {
    var _theme$mixins2, _theme$mixins2$toolba;

    return height - (theme === null || theme === void 0 ? void 0 : (_theme$mixins2 = theme.mixins) === null || _theme$mixins2 === void 0 ? void 0 : (_theme$mixins2$toolba = _theme$mixins2.toolbar) === null || _theme$mixins2$toolba === void 0 ? void 0 : _theme$mixins2$toolba.minHeight);
  }

  return height - 60;
}

const TDTableContainer = (0, _react.memo)(props => {
  const onRowClick = (0, _useAutoScroll.useAutoScroll)();
  return _react.default.createElement(TDTable, _extends({}, props, {
    onRowClick: onRowClick
  }));
});
const TDTable = (0, _react.memo)(({
  className,
  tableClasses,
  tableProps,
  operationOnRows,
  onRowClick,
  schemaColumns: customSchemaColumns,
  theme,
  height,
  width,
  initialWidth
}) => {
  const tabClasses = useStyles();
  const [state, actions] = (0, _easyPeasy.useLocalStore)(() => _tableReducer.default);
  const users = (0, _store.useTDStoreState)(state => state.users);
  const formattedData = (0, _store.useTDStoreState)(state => state.formattedData);
  const dataParser = (0, _react.useCallback)((col, row) => {
    return (0, _table2.tableDataParser)(col, row, state.tabIndex);
  }, [state.tabIndex]);
  (0, _react.useEffect)(() => {
    if (users && formattedData) {
      actions.setTabs(Object.keys(users).map(k => ({
        id: `${k}`,
        username: k,
        color: users[k]
      })));
    }
  }, [users, formattedData]);
  return _react.default.createElement("div", {
    className: (0, _clsx.default)(className, tableClasses === null || tableClasses === void 0 ? void 0 : tableClasses.root),
    id: "hesaba-table"
  }, _react.default.createElement("div", {
    style: {},
    className: (0, _clsx.default)(tabClasses.root, tableClasses === null || tableClasses === void 0 ? void 0 : tableClasses.tabbar)
  }, _react.default.createElement(MoreVert, null), _react.default.createElement(_core.Tabs, {
    value: state.tabIndex,
    scrollButtons: "auto",
    variant: "scrollable",
    classes: {
      root: tabClasses.tabRoot,
      scrollButtons: tabClasses.scrollButton
    },
    onChange: (_, tabIndex) => actions.setTabIndex({
      tabIndex,
      color: users && users[tabIndex] || ""
    }),
    TabIndicatorProps: {
      style: {
        backgroundColor: state.indicatorColor
      }
    }
  }, state.tabs.map(({
    username,
    color,
    id
  }) => _react.default.createElement(_core.Tab, {
    key: username,
    value: id,
    label: username,
    wrapped: true,
    style: {
      color
    }
  })))), operationOnRows && _react.default.createElement(Operations, {
    operationOnRows: operationOnRows
  }), _react.default.createElement(_table.HesabaVirtualTable, _extends({
    width: width || initialWidth,
    height: calcTableHeight(height, theme),
    columns: customSchemaColumns || _table2.commonSchemaColumns,
    rows: formattedData,
    selectable: true,
    resizable: true,
    sortable: true,
    VTRowProps: {
      onRowClick,
      selectedRowStyle: {
        borderRight: `solid 2px  ${state.indicatorColor}`,
        backgroundColor: `${(0, _colorConverter.colourNameToHex)(state.indicatorColor)}22`
      }
    },
    hasToolbar: false,
    tableDataParser: dataParser,
    theme: theme,
    classes: {
      table: {
        root: tabClasses.tableContainer
      },
      header: {
        root: tabClasses.header
      },
      row: {
        root: tabClasses.row
      }
    },
    VTCommonTableElProps: {
      CheckboxProps: {
        style: {
          color: state.indicatorColor
        }
      }
    },
    VTHeaderProps: {
      DividerProps: {
        style: {
          fill: state.indicatorColor
        }
      }
    }
  }, tableProps)));
});
const useMenuStyles = (0, _core.makeStyles)({
  icon: {},
  iconButton: {
    color: "#444"
  },
  menu: {
    display: "flex"
  },
  menuItem: {}
});
const MoreVert = (0, _react.memo)(() => {
  const classes = useMenuStyles();
  return _react.default.createElement(_table.ToolbarMoreVert, {
    classes: {
      iconButton: classes.iconButton
    }
  });
});
const Operations = (0, _react.memo)(({
  operationOnRows
}) => {
  const numRowsSelected = (0, _table.useTStoreState)(state => state.numRowsSelected);
  return _react.default.createElement(_react.default.Fragment, null, numRowsSelected && operationOnRows && _react.default.createElement("div", null, operationOnRows.map((Component, index) => _react.default.createElement(Component, {
    index: index
  }))));
});
var _default = TDTableContainer;
exports.default = _default;
//# sourceMappingURL=TDTable.js.map