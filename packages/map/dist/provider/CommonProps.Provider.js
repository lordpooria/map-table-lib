"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CommonPropsProvider;
exports.useCommonProps = useCommonProps;
exports.useCommonPropsAction = useCommonPropsAction;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CommonPropsContext = (0, _react.createContext)({});

function CommonPropsProvider({
  children,
  state
}) {
  const [commonProps, setCommonProps] = (0, _react.useState)({
    withTable: false
  });
  (0, _react.useEffect)(() => {
    setCommonProps(state);
  }, [state]);
  return _react.default.createElement(CommonPropsContext.Provider, {
    value: {
      state: commonProps,
      action: setCommonProps
    }
  }, children);
}

function useCommonProps() {
  const {
    state
  } = (0, _react.useContext)(CommonPropsContext);

  if (!state) {
    throw new Error("use common props state inside privider");
  }

  return state;
}

function useCommonPropsAction() {
  const {
    action
  } = (0, _react.useContext)(CommonPropsContext);

  if (!action) {
    throw new Error("use common props action inside privider");
  }

  return action;
}
//# sourceMappingURL=CommonProps.Provider.js.map