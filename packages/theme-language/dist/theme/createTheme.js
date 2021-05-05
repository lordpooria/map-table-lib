"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useThemeCreator = useThemeCreator;
exports.defaultTheme = void 0;

var _core = require("@material-ui/core");

var _language = require("../provider/language");

var _fontSelector = _interopRequireDefault(require("../utils/fontSelector"));

var _colors = require("@material-ui/core/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultTheme = {
  palette: {
    primary: _colors.indigo,
    secondary: _colors.red,
    error: _colors.red
  },
  typography: {
    fontFamily: 'Vazir,Roboto,"Helvetica Neue",Arial,sans-serif',
    headline: {
      fontSize: "1rem"
    },
    subheading: {
      fontSize: "0.8125rem"
    },
    button: {
      fontWeight: 400,
      textTransform: "initial"
    }
  },
  shape: {
    borderRadius: 4
  },
  mixins: {
    toolbar: {
      minHeight: 50
    }
  }
};
exports.defaultTheme = defaultTheme;

function useThemeCreator(rawTheme) {
  const langSetting = (0, _language.useLanguageState)();
  const localtypography = {
    fontFamily: (0, _fontSelector.default)(langSetting.lang),
    ...rawTheme.typography
  };
  const localRawThemeObj = { ...localtypography,
    ...rawTheme,
    direction: langSetting.direction
  };
  let theme = (0, _core.createMuiTheme)(localRawThemeObj);
  theme = (0, _core.responsiveFontSizes)(theme);
  return theme;
}
//# sourceMappingURL=createTheme.js.map