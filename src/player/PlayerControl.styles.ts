import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: AppTheme) => ({
  playerRoot: {
    position: "absolute",
    display: "flex",
    width: "60%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
    zIndex: 1000,
    bottom: 20,
    left: 20,
    borderRadius: "50em",
    backgroundColor: theme.pallete.backgrounds.common,
  },

  playerSlider: {
    display: "flex",
    flex: 3,
    minWidth: 100,
    marginRight: 8,
    alignItems: "center",
  },
  speedSlider: {
    display: "flex",
    flex: 1,
    margin: "0 8px",
    alignItems: "center",
  },
  controller: {
    display: "flex",
    alignItems: "center",
  },
  icon: { width: "0.75em", height: "0.75em" },
  playIcon: {
    width: "0.75em",
    height: "0.75em",
    borderRadius: "0.5em",
    border: "solid 2px #000",
  },
  whiteIcon: { width: "0.75em", height: "0.75em", margin: "0 4px" },
}));

export default useStyles;
