"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HesabaVirtualTable = void 0;

var _react = _interopRequireDefault(require("react"));

var _Wrapper = require("./container/Wrapper");

var _VirtualizaTable = _interopRequireDefault(require("./virtualize-table/VirtualizaTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HesabaVirtualTable = ({
  direction,
  language,
  theme,
  ...props
}) => {
  return _react.default.createElement(_Wrapper.TableStoreProvider, null, _react.default.createElement(_Wrapper.Provider, {
    direction: direction,
    language: language,
    theme: theme
  }, _react.default.createElement(_VirtualizaTable.default, props)));
};

exports.HesabaVirtualTable = HesabaVirtualTable;
var _default = HesabaVirtualTable;
exports.default = _default;
//# sourceMappingURL=HesabaVirtualTable.js.map