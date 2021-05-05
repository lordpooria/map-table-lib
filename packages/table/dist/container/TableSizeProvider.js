"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableSizeProvider = TableSizeProvider;
exports.useTableSizeState = useTableSizeState;
exports.useTableSizeAction = useTableSizeAction;

var _easyPeasy = require("easy-peasy");

var _react = _interopRequireWildcard(require("react"));

var _tableSize = _interopRequireDefault(require("../store/tableSize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TableSizeActionContext = (0, _react.createContext)({});
const TableSizeStateContext = (0, _react.createContext)({});

function TableSizeProvider({
  children
}) {
  const [state, actions] = (0, _easyPeasy.useLocalStore)(() => _tableSize.default);
  return _react.default.createElement(TableSizeStateContext.Provider, {
    value: {
      state
    }
  }, _react.default.createElement(TableSizeActionContext.Provider, {
    value: {
      actions
    }
  }, children));
}

function useTableSizeState() {
  const {
    state
  } = (0, _react.useContext)(TableSizeStateContext);

  if (!state) {
    throw Error("use state inside provider");
  }

  return state;
}

function useTableSizeAction() {
  const {
    actions
  } = (0, _react.useContext)(TableSizeActionContext);

  if (!actions) {
    throw Error("use state inside provider");
  }

  return actions;
}
//# sourceMappingURL=TableSizeProvider.js.map