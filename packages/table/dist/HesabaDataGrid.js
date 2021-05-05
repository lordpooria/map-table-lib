"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Wrapper = _interopRequireDefault(require("./container/Wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HesabaDataGrid = ({
  direction = "ltr"
}) => {
  return _react.default.createElement(_Wrapper.default, {
    direction: direction
  });
};

var _default = HesabaDataGrid;
exports.default = _default;
//# sourceMappingURL=HesabaDataGrid.js.map