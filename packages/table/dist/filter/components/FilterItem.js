"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

require("./utilsFilter");

var _FilterFields = require("./FilterFields");

var _reducerHooks = require("../../store/reducerHooks");

var _TrashIcon = _interopRequireDefault(require("../../assets/icons/common/TrashIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _core.makeStyles)(theme => (0, _core.createStyles)({
  deleteButton: {},
  inputs: {
    width: 150
  },
  autoComplete: {
    margin: theme.spacing(1)
  }
}));

const FilterItem = ({
  filter,
  columns,
  index
}) => {
  var _filter$column, _filter$column$2;

  const t = v => v;

  const classes = useStyles();
  const deleteFilter = (0, _reducerHooks.useTStoreActions)(actions => actions.filterDelete);
  if (!(filter !== null && filter !== void 0 && (_filter$column = filter.column) !== null && _filter$column !== void 0 && _filter$column.length)) return null;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.IconButton, {
    size: "small",
    className: classes.deleteButton,
    onClick: () => deleteFilter({
      index
    })
  }, _react.default.createElement(_TrashIcon.default, null)), filter === null || filter === void 0 ? void 0 : filter.column.map((column, columnIndex) => {
    var _filter$column$;

    return _react.default.createElement(_FilterFields.FilterColumn, {
      key: `${filter === null || filter === void 0 ? void 0 : (_filter$column$ = filter.column[0]) === null || _filter$column$ === void 0 ? void 0 : _filter$column$.type}-${columnIndex}`,
      filterIndex: index,
      value: column,
      columnIndex: columnIndex,
      columns: columns,
      classes: {
        root: classes.autoComplete,
        input: classes.inputs
      }
    });
  }), _react.default.createElement(_FilterFields.FilterOperations, {
    columnType: filter === null || filter === void 0 ? void 0 : (_filter$column$2 = filter.column[0]) === null || _filter$column$2 === void 0 ? void 0 : _filter$column$2.type,
    filterIndex: index,
    operation: filter.operation,
    classes: {
      root: classes.autoComplete,
      input: classes.inputs
    }
  }), filter.value.map((val, valIndex) => {
    var _filter$column$3, _filter$column$4;

    return _react.default.createElement(_FilterFields.FilterValues, {
      key: `${filter === null || filter === void 0 ? void 0 : (_filter$column$3 = filter.column[0]) === null || _filter$column$3 === void 0 ? void 0 : _filter$column$3.type}-${valIndex}`,
      filterIndex: index,
      valIndex: valIndex,
      val: val,
      columnType: filter === null || filter === void 0 ? void 0 : (_filter$column$4 = filter.column[0]) === null || _filter$column$4 === void 0 ? void 0 : _filter$column$4.type,
      label: t("value"),
      classes: {
        root: classes.autoComplete,
        input: classes.inputs
      }
    });
  }));
};

var _default = FilterItem;
exports.default = _default;
//# sourceMappingURL=FilterItem.js.map