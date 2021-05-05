"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _clsx = _interopRequireDefault(require("clsx"));

var _themeLanguage = require("@hesaba/theme-language");

var _helper = require("../../utils/helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _core.makeStyles)(theme => (0, _core.createStyles)({
  vtContainerRoot: {
    width: "100%"
  },
  commonVTContainer: {
    border: `solid 1px ${theme.palette.grey[300]}`
  }
}));

const VirtualTableContainer = ({
  children,
  classes,
  width
}) => {
  const containerClasses = useStyles();
  const {
    direction
  } = (0, _themeLanguage.useLanguageState)();
  return _react.default.createElement("div", {
    className: (0, _clsx.default)((0, _helper.chooseClass)(containerClasses.commonVTContainer, classes === null || classes === void 0 ? void 0 : classes.root), containerClasses.vtContainerRoot),
    style: {
      width,
      direction
    }
  }, children);
};

var _default = VirtualTableContainer;
exports.default = _default;
//# sourceMappingURL=VirtualTableContainer.js.map