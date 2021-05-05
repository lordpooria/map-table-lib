"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

const useStyles = (0, _core.makeStyles)(() => (0, _core.createStyles)({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    zIndex: 1000,
    top: 20,
    right: 20
  },
  clockWrapper: {
    position: "relative"
  },
  amPm: {
    fontSize: 12,
    fontWeight: 800,
    padding: 4,
    color: "#444",
    position: "absolute",
    bottom: 10,
    left: "50%",
    transform: "translate(-50%)",
    fontFamily: "inherit"
  },
  dateWrapper: {
    backgroundColor: "#FFF",
    marginTop: 8,
    padding: "0 4px",
    borderRadius: "99em"
  },
  date: {
    padding: 4,
    margin: 0,
    fontFamily: "inherit"
  }
}));
var _default = useStyles;
exports.default = _default;
//# sourceMappingURL=TimeComponent.styles.js.map