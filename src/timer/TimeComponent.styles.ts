import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: AppTheme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    zIndex: 1000,
    top: 20,
    right: 20,
  },
  clockWrapper: {
    position: "relative",
  },
  amPm: {
    fontSize: 12,
    fontWeight: 800,
    padding: 4,
    // backgroundColor: "#555",
    color: "#555",
    position: "absolute",
    bottom: 10,
    left: "50%",
    transform: "translate(-50%)",
  },
  dateWrapper: {
    backgroundColor: theme.pallete.backgrounds.common,
    marginTop: 8,
    padding: "0 4px",
    borderRadius: "99em",
  },
}));

export default useStyles;
