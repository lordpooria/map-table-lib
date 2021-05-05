"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.TableStoreProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var _easyPeasy = require("easy-peasy");

var _store = _interopRequireDefault(require("../store"));

var _ThemeProvider = _interopRequireDefault(require("./ThemeProvider"));

var _TableSizeProvider = require("./TableSizeProvider");

var _themeLanguage = require("@hesaba/theme-language");

var _TableRowProvider = require("./TableRowProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TableStoreProvider = ({
  children
}) => {
  var _easyPeasyStore$getSt;

  const easyPeasyStore = (0, _easyPeasy.useStore)();
  const isWrapepdWithCTProvider = easyPeasyStore === null || easyPeasyStore === void 0 ? void 0 : (_easyPeasyStore$getSt = easyPeasyStore.getState()) === null || _easyPeasyStore$getSt === void 0 ? void 0 : _easyPeasyStore$getSt.VTVersion;

  if (isWrapepdWithCTProvider) {
    return _react.default.createElement(_react.default.Fragment, null, children);
  }

  return _react.default.createElement(_TableSizeProvider.TableSizeProvider, null, _react.default.createElement(_TableRowProvider.TableRowProvider, null, _react.default.createElement(_easyPeasy.StoreProvider, {
    store: _store.default
  }, children)));
};

exports.TableStoreProvider = TableStoreProvider;

const Provider = ({
  children,
  direction,
  language,
  theme
}) => _react.default.createElement(_themeLanguage.StyleProvider, {
  language: language,
  direction: direction,
  theme: theme
}, _react.default.createElement(_ThemeProvider.default, null, children));

exports.Provider = Provider;
//# sourceMappingURL=Wrapper.js.map