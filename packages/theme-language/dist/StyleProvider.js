"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _react = _interopRequireDefault(require("react"));

var _language = require("./provider/language");

var _theme = require("./provider/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StyleProvider({
  children,
  theme,
  language,
  direction
}) {
  return _react.default.createElement(_core.StylesProvider, {
    injectFirst: true
  }, _react.default.createElement(_language.LanguageProvider, {
    direction: direction,
    language: language
  }, _react.default.createElement(_theme.ThemeProvider, {
    rawTheme: theme
  }, children)));
}

var _default = StyleProvider;
exports.default = _default;
//# sourceMappingURL=StyleProvider.js.map