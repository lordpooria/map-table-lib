"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reducerHooks = require("../store/reducerHooks");

var _FilterItem = _interopRequireDefault(require("./components/FilterItem"));

var _CloseIcon = _interopRequireDefault(require("../assets/icons/common/CloseIcon"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _core.makeStyles)(theme => (0, _core.createStyles)({
  rootFilter: {
    position: "absolute",
    backgroundColor: "#FFF",
    padding: theme.spacing(1),
    top: 20,
    left: 20,
    boxShadow: theme.shadows[2]
  },
  filterWrapper: {
    display: "flex",
    alignItems: "center"
  }
}));

const TableFilter = ({}) => {
  const classes = useStyles();
  const showFilter = (0, _reducerHooks.useTStoreState)(state => state.showFilter);
  const toggleShowFilter = (0, _reducerHooks.useTStoreActions)(actions => actions.toggleShowFilter);

  const handleClose = () => {
    toggleShowFilter(false);
  };

  const filters = (0, _reducerHooks.useTStoreState)(state => state.filters);
  if (!showFilter) return null;
  return _react.default.createElement("div", {
    className: classes.rootFilter
  }, _react.default.createElement(_core.IconButton, {
    size: "small",
    onClick: handleClose,
    style: {
      float: "right"
    }
  }, _react.default.createElement(_CloseIcon.default, null)), filters.map((filter, index) => _react.default.createElement("div", {
    key: filter.id,
    className: classes.filterWrapper
  }, _react.default.createElement(_FilterItem.default, {
    filter: filter,
    index: index,
    columns: []
  }))), _react.default.createElement("div", {
    style: {
      width: "100%"
    }
  }));
};

var _default = TableFilter;
exports.default = _default;
//# sourceMappingURL=VirtualTableFilter.js.map