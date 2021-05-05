"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValueLabelComponent = ValueLabelComponent;
exports.PlayerThumb = exports.useCommonSliderStyles = void 0;

var React = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useCommonSliderStyles = (0, _core.makeStyles)(theme => ({
  root: {
    color: `${theme.palette.secondary.main}`,
    height: 3,
    padding: "13px 0"
  },
  thumb: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    backgroundColor: `${theme.palette.secondary.main}`,
    border: "1px solid currentColor",
    marginTop: -6,
    marginLeft: -3,
    "&:focus, &:hover, &$active": {
      boxShadow: "#888 0 2px 3px 1px",
      height: 18,
      width: 18,
      borderRadius: 9,
      marginTop: -9,
      marginLeft: -3.5
    },
    "& .bar": {
      height: 9,
      width: 1,
      backgroundColor: "#FFF",
      marginLeft: 1,
      marginRight: 1
    }
  },
  active: {},
  track: {
    height: 6,
    bottom: 11
  },
  rail: {
    color: `${theme.palette.secondary.main}`,
    opacity: 1,
    height: 2
  }
}));
exports.useCommonSliderStyles = useCommonSliderStyles;
const PlayerThumb = React.forwardRef((props, ref) => {
  return React.createElement("span", _extends({}, props, {
    ref: ref
  }));
});
exports.PlayerThumb = PlayerThumb;

function ValueLabelComponent(props) {
  const {
    children,
    open,
    value
  } = props;
  return React.createElement(_core.Tooltip, {
    open: open,
    enterTouchDelay: 0,
    placement: "top",
    title: value
  }, children);
}
//# sourceMappingURL=slider.js.map