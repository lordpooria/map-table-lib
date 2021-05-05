"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

const ICON_SIZE = 0.75;
const useStyles = (0, _core.makeStyles)(theme => (0, _core.createStyles)({
  commonPlayerRoot: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: 700,
    minWidth: 200,
    alignItems: "center",
    justifyContent: "space-between",
    padding: "4px 16px",
    marginRight: 32,
    marginTop: 16,
    borderRadius: "50em",
    backgroundColor: "#fff"
  },
  playerRoot: {
    padding: "4px 16px",
    borderRadius: "50em",
    backgroundColor: "#fff"
  },
  iconContainer: {
    display: "flex"
  },
  playerSlider: {
    flex: 3,
    display: "flex",
    margin: "0 16px",
    alignItems: "center"
  },
  speedSlider: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    minWidth: 50
  },
  controller: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    width: `${ICON_SIZE}em`,
    height: `${ICON_SIZE}em`,
    fill: `${theme.palette.primary.main}`
  },
  playIcon: {
    width: `${ICON_SIZE}em`,
    height: `${ICON_SIZE}em`,
    borderRadius: "0.5em",
    border: `solid 2px ${theme.palette.primary.main}`
  },
  marginIcon: {
    margin: "0 4px"
  }
}));
var _default = useStyles;
exports.default = _default;
//# sourceMappingURL=PlayerControl.styles.js.map