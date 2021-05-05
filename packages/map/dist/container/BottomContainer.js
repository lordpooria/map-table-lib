"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _player = require("../player");

var _LegendComponent = _interopRequireDefault(require("../legend/LegendComponent"));

var _reactLeaflet = require("react-leaflet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const useStyles = (0, _core.makeStyles)({
  root: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 1000,
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap-reverse",
    alignItems: "flex-start"
  },
  playerWrapper: {
    flex: 1
  }
});

const BottomContainer = ({
  playerProps,
  LegendComponent
}) => {
  const classes = useStyles();
  const map = (0, _reactLeaflet.useMap)();
  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement("div", {
    className: classes.playerWrapper
  }, _react.default.createElement(_player.PlayerController, _extends({
    leafletMap: map
  }, playerProps))), _react.default.createElement(_LegendComponent.default, {
    LegendComponent: LegendComponent
  }));
};

var _default = BottomContainer;
exports.default = _default;
//# sourceMappingURL=BottomContainer.js.map