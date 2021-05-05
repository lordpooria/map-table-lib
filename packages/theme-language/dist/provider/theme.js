"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = ThemeProvider;
exports.useThemeObject = useThemeObject;

var _react = _interopRequireWildcard(require("react"));

var _createTheme = require("../theme/createTheme");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ThemeContext = (0, _react.createContext)({});

function ThemeProvider({
  children,
  rawTheme = _createTheme.defaultTheme
}) {
  const theme = (0, _createTheme.useThemeCreator)(rawTheme);
  return _react.default.createElement(ThemeContext.Provider, {
    value: theme
  }, children);
}

function useThemeObject() {
  const theme = (0, _react.useContext)(ThemeContext);

  if (!theme) {
    throw new Error("Language Setting should use inside language provider");
  }

  return theme;
}
//# sourceMappingURL=theme.js.map