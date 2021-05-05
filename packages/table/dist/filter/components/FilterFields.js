"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterValues = exports.FilterOperations = exports.FilterColumn = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _lab = require("@material-ui/lab");

var _utilsFilter = require("./utilsFilter");

var _FilterValues = require("./FilterValues");

var _FilterValueDate = _interopRequireDefault(require("./FilterValueDate"));

var _reducerHooks = require("../../store/reducerHooks");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useStyles = (0, _core.makeStyles)(() => (0, _core.createStyles)({
  input: {
    borderColor: "transparent"
  }
}));
const FilterColumn = (0, _react.memo)(({
  value,
  filterIndex,
  columns,
  columnIndex,
  classes
}) => {
  const t = v => v;

  const inClasses = useStyles();
  const [inputValue, setInputValue] = (0, _react.useState)("");
  const filterSetColumn = (0, _reducerHooks.useTStoreActions)(actions => actions.filterSetColumn);
  return _react.default.createElement(_lab.Autocomplete, {
    value: value,
    onChange: (_, column) => {
      if (!column || typeof column === "string") return;
      filterSetColumn({
        column,
        columnIndex,
        filterIndex
      });
    },
    freeSolo: true,
    inputValue: inputValue,
    onInputChange: (_, newInputValue) => {
      setInputValue(newInputValue);
    },
    options: columns,
    className: (0, _clsx.default)(inClasses.input, classes === null || classes === void 0 ? void 0 : classes.root),
    getOptionLabel: option => option ? option.label : "",
    getOptionSelected: (option, value) => option !== null && option !== void 0 && option.label ? option.label === value.label : true,
    renderInput: params => _react.default.createElement(_core.TextField, _extends({}, params, {
      classes: {
        root: classes === null || classes === void 0 ? void 0 : classes.input
      },
      label: t("column"),
      variant: "standard"
    }))
  });
});
exports.FilterColumn = FilterColumn;
const FilterOperations = (0, _react.memo)(({
  operation,
  filterIndex,
  columnType,
  classes
}) => {
  const t = v => v;

  const inClasses = useStyles();
  const filterSetOperation = (0, _reducerHooks.useTStoreActions)(actions => actions.filterSetOperation);
  const [options, setOptions] = (0, _react.useState)((0, _utilsFilter.operations)(t).commonOperations);
  const [inputValue, setInputValue] = (0, _react.useState)("");
  const lastType = (0, _react.useRef)("");
  (0, _react.useEffect)(() => {
    if (!columnType) return;

    if (lastType.current !== columnType && columnType) {
      lastType.current = columnType;

      switch (columnType) {
        case "geographic":
          setOptions([...(0, _utilsFilter.operations)(t).mapOptions]);
          break;

        case "number":
          setOptions([...(0, _utilsFilter.operations)(t).commonOperations, ...(0, _utilsFilter.operations)(t).numericOptions]);
          break;

        case "string":
          setOptions([...(0, _utilsFilter.operations)(t).commonOperations, ...(0, _utilsFilter.operations)(t).stringOptions]);
          break;

        case "date":
          setOptions([...(0, _utilsFilter.operations)(t).commonOperations, ...(0, _utilsFilter.operations)(t).dateOptions]);
          break;

        default:
          setOptions((0, _utilsFilter.operations)(t).commonOperations);
      }
    }
  }, [columnType, t]);
  return _react.default.createElement(_lab.Autocomplete, {
    autoComplete: true,
    value: operation,
    onChange: (_, operation) => {
      if (!operation || typeof operation === "string") return;
      filterSetOperation({
        operation,
        filterIndex
      });
    },
    freeSolo: true,
    inputValue: inputValue,
    onInputChange: (_, newInputValue) => {
      setInputValue(newInputValue);
    },
    options: options,
    className: (0, _clsx.default)(inClasses.input, classes === null || classes === void 0 ? void 0 : classes.root),
    getOptionLabel: option => {
      var _option$name;

      return (_option$name = option === null || option === void 0 ? void 0 : option.name) !== null && _option$name !== void 0 ? _option$name : "";
    },
    getOptionSelected: (option, value) => !(option !== null && option !== void 0 && option.name) ? option.name === value.name : true,
    renderInput: params => _react.default.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center"
      }
    }, _react.default.createElement(_core.TextField, _extends({}, params, {
      classes: {
        root: classes === null || classes === void 0 ? void 0 : classes.input
      },
      label: t("op"),
      InputProps: { ...params.InputProps
      },
      variant: "standard"
    })))
  });
});
exports.FilterOperations = FilterOperations;
const FilterValues = (0, _react.memo)(({
  filterIndex,
  val,
  valIndex,
  columnType,
  label,
  classes
}) => {
  const filterSetValue = (0, _reducerHooks.useTStoreActions)(actions => actions.filterSetValue);

  const onSetFilter = (filterIndex, valueIndex, value) => {
    filterSetValue({
      filterIndex,
      valueIndex,
      value
    });
  };

  let FilterValue = undefined;

  if (columnType === "date") {
    FilterValue = _FilterValueDate.default;
  } else if (columnType === "number") {
    FilterValue = _FilterValues.SimpleNumericInput;
  } else {
    FilterValue = _FilterValues.SimpleStringInput;
  }

  return _react.default.createElement(FilterValue, {
    filterIndex: filterIndex,
    valIndex: valIndex,
    onSetFilter: onSetFilter,
    value: val,
    label: label,
    classes: classes
  });
});
exports.FilterValues = FilterValues;
//# sourceMappingURL=FilterFields.js.map