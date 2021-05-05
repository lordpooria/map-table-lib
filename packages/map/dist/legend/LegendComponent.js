"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireWildcard(require("react"));

var _store = require("../store");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _core.makeStyles)(theme => (0, _core.createStyles)({
  root: {
    backgroundColor: "#FFF",
    borderRadius: 5
  },
  itemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 4
  },
  indicatorBox: {
    border: `solid 2px ${theme.palette.grey["300"]}`,
    width: 10,
    height: 10,
    borderRadius: 1,
    margin: "0 4px"
  },
  text: {
    color: theme.palette.grey["600"],
    fontSize: 11,
    margin: "4px 0"
  }
}));

const LegendContainer = ({
  LegendComponent,
  classes
}) => {
  var _currentData$features;

  const legendClasses = useStyles();
  const users = (0, _store.useTDStoreState)(state => state.users);
  const currentData = (0, _store.useTDStoreState)(state => state.currentData);
  return _react.default.createElement("div", {
    className: (0, _clsx.default)(legendClasses.root, classes === null || classes === void 0 ? void 0 : classes.root)
  }, LegendComponent ? _react.default.createElement(LegendComponent, {
    properties: currentData === null || currentData === void 0 ? void 0 : (_currentData$features = currentData.features) === null || _currentData$features === void 0 ? void 0 : _currentData$features.map(d => d.properties)
  }) : _react.default.createElement(LegendStateLess, {
    users: users
  }));
};

const LegendStateLess = (0, _react.memo)(({
  users,
  classes
}) => {
  const legendClasses = useStyles();
  return _react.default.createElement(_react.default.Fragment, null, users && Object.keys(users).map(k => _react.default.createElement("div", {
    key: k,
    className: (0, _clsx.default)(legendClasses.itemContainer, classes === null || classes === void 0 ? void 0 : classes.item)
  }, _react.default.createElement("span", {
    className: (0, _clsx.default)(legendClasses.text, classes === null || classes === void 0 ? void 0 : classes.item)
  }, k), _react.default.createElement("div", {
    className: (0, _clsx.default)(legendClasses.indicatorBox, classes === null || classes === void 0 ? void 0 : classes.colorIndicator),
    style: {
      backgroundColor: users[k]
    }
  }))));
});
var _default = LegendContainer;
exports.default = _default;
//# sourceMappingURL=LegendComponent.js.map