"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarMoreVert = ToolbarMoreVert;
exports.ToolbarOperation = ToolbarOperation;
exports.TableToolbar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _MoreVertIcon = _interopRequireDefault(require("../assets/icons/common/MoreVertIcon"));

var _reducerHooks = require("../store/reducerHooks");

var _clsx = _interopRequireDefault(require("clsx"));

var _themeConstants = require("../utils/themeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _core.makeStyles)(theme => (0, _core.createStyles)({
  toolbarContainer: {
    borderBottom: `solid ${theme.palette.grey[300]} 1px`,
    display: "flex",
    alignItems: "center"
  },
  tools: {
    display: "flex",
    alignItems: "center",
    flex: 1
  },
  title: {
    padding: `0 ${theme.spacing(1)}`
  },
  icon: {
    fill: theme.palette.secondary.main
  }
}));

const TableToolbar = ({
  title,
  height,
  classes,
  ...rest
}) => {
  const toolbarClasses = useStyles();
  return _react.default.createElement("div", {
    style: {
      height: height || _themeConstants.DEFAULT_TOOLBAR_HEIGHT
    },
    className: (0, _clsx.default)(toolbarClasses.toolbarContainer, classes === null || classes === void 0 ? void 0 : classes.root)
  }, _react.default.createElement("div", {
    className: (0, _clsx.default)(toolbarClasses.tools)
  }, _react.default.createElement(ToolbarMoreVert, {
    classes: classes
  }), rest.operationOnRows && _react.default.createElement(ToolbarOperation, rest)), _react.default.createElement(_core.Typography, {
    align: "center",
    className: toolbarClasses.title
  }, title !== null && title !== void 0 ? title : ""));
};

exports.TableToolbar = TableToolbar;

function ToolbarMoreVert({
  classes
}) {
  const [anchorEl, setAnchorEl] = (0, _react.useState)(null);
  const open = Boolean(anchorEl);
  const enhancedColumns = (0, _reducerHooks.useTStoreState)(state => state.enhancedColumns);
  const toolbarClasses = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleVisibleColumns = (0, _reducerHooks.useTStoreActions)(actions => actions.toggleVisibleColumns);
  const toggleShowFilter = (0, _reducerHooks.useTStoreActions)(actions => actions.toggleShowFilter);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.IconButton, {
    onClick: handleClick,
    className: classes === null || classes === void 0 ? void 0 : classes.iconButton
  }, _react.default.createElement(_MoreVertIcon.default, {
    className: (0, _clsx.default)({
      [toolbarClasses.icon]: !(classes !== null && classes !== void 0 && classes.icon)
    }, classes === null || classes === void 0 ? void 0 : classes.icon)
  })), _react.default.createElement(_core.Menu, {
    disableScrollLock: true,
    id: "long-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: open,
    onClose: handleClose,
    className: classes === null || classes === void 0 ? void 0 : classes.menu
  }, _react.default.createElement(_core.MenuItem, {
    className: classes === null || classes === void 0 ? void 0 : classes.menuItem,
    onClick: () => {
      toggleShowFilter(true);
      handleClose();
    }
  }, "filter"), enhancedColumns === null || enhancedColumns === void 0 ? void 0 : enhancedColumns.map((c, index) => _react.default.createElement(_core.MenuItem, {
    key: c.key,
    className: classes === null || classes === void 0 ? void 0 : classes.menuItem
  }, _react.default.createElement(_core.FormControlLabel, {
    control: _react.default.createElement(_core.Switch, {
      checked: c.visible,
      onChange: () => toggleVisibleColumns({
        index
      }),
      name: c.label
    }),
    label: c.label
  })))));
}

function ToolbarOperation({
  operationOnRows
}) {
  const numRowsSelected = (0, _reducerHooks.useTStoreState)(state => state.numRowsSelected);
  return _react.default.createElement(_react.default.Fragment, null, operationOnRows && numRowsSelected > 0 && operationOnRows.map((Component, index) => _react.default.createElement(Component, {
    key: index
  })));
}
//# sourceMappingURL=TableToolbar.js.map