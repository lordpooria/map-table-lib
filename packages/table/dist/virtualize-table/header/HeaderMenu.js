"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _reducerHooks = require("../../store/reducerHooks");

var _MoreVertIcon = _interopRequireDefault(require("../../assets/icons/common/MoreVertIcon"));

var _ArrowDownIcon = _interopRequireDefault(require("../../assets/icons/common/ArrowDownIcon"));

var _ArrowUpIcon = _interopRequireDefault(require("../../assets/icons/common/ArrowUpIcon"));

var _themeLanguage = require("@hesaba/theme-language");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const HeaderIconButton = (0, _core.withStyles)(() => ({
  root: {
    margin: 4
  }
}))(_themeLanguage.SmallIconButton);
const useStyles = (0, _core.makeStyles)(() => (0, _core.createStyles)({
  icons: {
    width: 14,
    height: 14
  }
}));
const OPTIONS = {
  sortAsc: "Sort ASC",
  sortDesc: "Sort DESC",
  hideColumn: "Hide Column",
  filter: "Filter",
  stick: "Stick"
};

const HeaderMenu = ({
  index,
  sortable,
  columnKey,
  sorted
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = (0, _react.useState)(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const sortTable = (0, _reducerHooks.useTStoreActions)(actions => actions.sortTable);
  const filterAdd = (0, _reducerHooks.useTStoreActions)(actions => actions.filterAdd);
  const toggleVisibleColumns = (0, _reducerHooks.useTStoreActions)(actions => actions.toggleVisibleColumns);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortDesc = () => sortTable({
    index,
    sortType: "DESC",
    columnKey: columnKey
  });

  const sortAsc = () => sortTable({
    index,
    sortType: "ASC",
    columnKey: columnKey
  });

  return _react.default.createElement(_react.default.Fragment, null, sortable && sorted === "DESC" && _react.default.createElement(HeaderIconButton, {
    onClick: sortAsc
  }, _react.default.createElement(_ArrowUpIcon.default, {
    className: classes.icons
  })), sortable && sorted === "ASC" && _react.default.createElement(HeaderIconButton, {
    onClick: sortDesc
  }, _react.default.createElement(_ArrowDownIcon.default, {
    className: classes.icons
  })), _react.default.createElement(HeaderIconButton, {
    onClick: handleClick
  }, _react.default.createElement(_MoreVertIcon.default, {
    className: classes.icons
  })), _react.default.createElement(_core.Menu, {
    disableScrollLock: true,
    id: "long-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: open,
    onClose: handleClose,
    PaperProps: {
      style: {}
    }
  }, sortable && _react.default.createElement(_core.MenuItem, {
    onClick: sortAsc
  }, OPTIONS.sortAsc), sortable && _react.default.createElement(_core.MenuItem, {
    onClick: sortDesc
  }, OPTIONS.sortDesc), _react.default.createElement(_core.MenuItem, {
    onClick: () => toggleVisibleColumns({
      index
    })
  }, OPTIONS.hideColumn), _react.default.createElement(_core.MenuItem, {
    onClick: () => {
      filterAdd({
        columnKey
      });
    }
  }, OPTIONS.filter)));
};

var _default = HeaderMenu;
exports.default = _default;
//# sourceMappingURL=HeaderMenu.js.map