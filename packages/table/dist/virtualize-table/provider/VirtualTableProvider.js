"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _VirtualContext = _interopRequireDefault(require("../../store/VirtualContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VirtualTableProvider = ({
  children
}) => {
  return _react.default.createElement(_VirtualContext.default.Provider, null, children);
};

var _default = VirtualTableProvider;
exports.default = _default;
//# sourceMappingURL=VirtualTableProvider.js.map