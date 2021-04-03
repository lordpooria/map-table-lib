import { createStyles, makeStyles } from "@material-ui/core";

const ICON_SIZE = 0.75;

const useStyles = makeStyles((theme) =>
  createStyles({
    playerRoot: {
      position: "absolute",
      display: "flex",
      width: "60%",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "4px 16px",
      zIndex: 1000,
      bottom: 20,
      left: 20,
      borderRadius: "50em",
      backgroundColor: "#fff",
      border: `solid 1px ${theme.palette.grey["300"]}`,
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
    icon: {
      width: `${ICON_SIZE}em`,
      height: `${ICON_SIZE}em`,
      fill: `${theme.palette.primary.main}`,
    },
    playIcon: {
      width: `${ICON_SIZE}em`,
      height: `${ICON_SIZE}em`,
      borderRadius: "0.5em",
      border: `solid 2px ${theme.palette.primary.main}`,
    },
    whiteIcon: {
      width: `${ICON_SIZE}em`,
      height: `${ICON_SIZE}em`,
      margin: "0 4px",
      fill: `${theme.palette.primary.main}`,
    },
  })
);

export default useStyles;
