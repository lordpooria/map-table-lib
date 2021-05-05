"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TablePagination = TablePagination;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _clsx = _interopRequireDefault(require("clsx"));

var _themeLanguage = require("@hesaba/theme-language");

var _ArrowRightIcon = _interopRequireDefault(require("../assets/icons/common/ArrowRightIcon"));

var _ArrowLeftIcon = _interopRequireDefault(require("../assets/icons/common/ArrowLeftIcon"));

var _reducerHooks = require("../store/reducerHooks");

var _themeConstants = require("../utils/themeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _core.makeStyles)(theme => (0, _core.createStyles)({
  paginationRoot: {
    display: "flex",
    width: "100%",
    border: 0,
    flexWrap: "wrap",
    borderTop: `solid 1px ${theme.palette.grey[300]}`,
    alignItems: "center",
    justifyContent: "space-between"
  },
  actions: {
    flexShrink: 0,
    marginLeft: 20
  },
  toolbar: {
    minHeight: 52,
    paddingRight: 2
  },
  spacer: {
    flex: "1 1 100%"
  },
  caption: {
    flexShrink: 0
  },
  selectRoot: {
    fontFamily: "inherit"
  },
  selectRootLTR: {
    marginRight: 32,
    marginLeft: 8
  },
  selectRootRTL: {
    marginRight: 8,
    marginLeft: 32
  },
  select: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: "right",
    textAlignLast: "right"
  },
  selectIcon: {},
  input: {
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0
  },
  menuItem: {},
  selectContainer: {
    display: "flex"
  }
}));

function ActionsComponent({
  page,
  onPageChange,
  count,
  rowsPerPage
}) {
  const {
    t
  } = (0, _themeLanguage.useTranslation)();

  const handleBackButtonClick = event => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onPageChange(event, page + 1);
  };

  return _react.default.createElement("div", {
    style: {
      display: "flex",
      direction: "ltr"
    }
  }, _react.default.createElement(_themeLanguage.ButtonTooltip, {
    title: t === null || t === void 0 ? void 0 : t.prev,
    onClick: handleBackButtonClick,
    disabled: page === 0,
    color: "inherit"
  }, _react.default.createElement(_ArrowLeftIcon.default, null)), _react.default.createElement(_themeLanguage.ButtonTooltip, {
    title: t === null || t === void 0 ? void 0 : t.next,
    onClick: handleNextButtonClick,
    disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false,
    color: "inherit"
  }, _react.default.createElement(_ArrowRightIcon.default, null)));
}

function defaultLabelDisplayedRows({
  from,
  to,
  count
}) {
  const {
    t
  } = (0, _themeLanguage.useTranslation)();
  return `${from}-${to} ${t === null || t === void 0 ? void 0 : t.of} ${count !== -1 ? count : `${t === null || t === void 0 ? void 0 : t.moreThan}${to}`}`;
}

function TablePagination({
  classes,
  width,
  rowsPerPageOptions = [10, 25, 50, 100],
  page,
  count,
  rowsPerPage,
  onRowsPerPageChange,
  height,
  ...rest
}) {
  const paginationClasses = useStyles();
  const {
    t
  } = (0, _themeLanguage.useTranslation)();
  const {
    direction
  } = (0, _themeLanguage.useLanguageState)();
  const numRowsSelected = (0, _reducerHooks.useTStoreState)(state => state.numRowsSelected);

  const getLabelDisplayedRowsTo = () => {
    if (count === -1) return (page + 1) * rowsPerPage;
    return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
  };

  return _react.default.createElement("div", {
    className: (0, _clsx.default)(paginationClasses.paginationRoot, classes === null || classes === void 0 ? void 0 : classes.root),
    style: {
      width,
      direction,
      height: height || _themeConstants.DEFAULT_PAGINATION_HEIGHT
    }
  }, _react.default.createElement(_core.Toolbar, {
    className: paginationClasses.toolbar
  }, _react.default.createElement("div", {
    className: paginationClasses.spacer
  }), _react.default.createElement(_themeLanguage.WithFontTypography, {
    color: "inherit",
    variant: "body2",
    className: paginationClasses.caption
  }, t === null || t === void 0 ? void 0 : t.rowPerPage), _react.default.createElement(_core.Select, {
    classes: {
      select: paginationClasses.select,
      icon: paginationClasses.selectIcon
    },
    input: _react.default.createElement(_core.InputBase, {
      className: (0, _clsx.default)((0, _clsx.default)(paginationClasses.input, paginationClasses.selectRoot, {
        [paginationClasses.selectRootLTR]: direction === "ltr"
      }, {
        [paginationClasses.selectRootRTL]: direction !== "ltr"
      }))
    }),
    value: rowsPerPage,
    onChange: onRowsPerPageChange
  }, rowsPerPageOptions.map(rowsPerPageOption => _react.default.createElement(_core.MenuItem, {
    className: paginationClasses.menuItem,
    key: rowsPerPageOption,
    value: rowsPerPageOption
  }, rowsPerPageOption))), _react.default.createElement(_themeLanguage.WithFontTypography, {
    color: "inherit",
    variant: "body2",
    className: paginationClasses.caption
  }, defaultLabelDisplayedRows({
    from: count === 0 ? 0 : page * rowsPerPage + 1,
    to: getLabelDisplayedRowsTo(),
    count: count === -1 ? -1 : count
  })), _react.default.createElement(ActionsComponent, rest)), numRowsSelected > 0 && _react.default.createElement(_themeLanguage.WithFontTypography, null, numRowsSelected, " ", t.rowSelected));
}
//# sourceMappingURL=index.js.map