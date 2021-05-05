"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _themeLanguage = require("@hesaba/theme-language");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ThemeMaker = ({
  children
}) => {
  const theme = (0, _themeLanguage.useThemeObject)();
  return _react.default.createElement(_styles.StylesProvider, {
    injectFirst: true
  }, _react.default.createElement(_styles.ThemeProvider, {
    theme: theme
  }, children));
};

var _default = ThemeMaker;
exports.default = _default;
//# sourceMappingURL=ThemeProvider.js.map