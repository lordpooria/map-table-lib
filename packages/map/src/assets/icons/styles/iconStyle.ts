import { createStyles, makeStyles } from "@material-ui/core";

const style = makeStyles(() =>
  createStyles({
    root: {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: "inherit",
      flexShrink: 0,
      fontSize: 24,
    },
  })
);

export default style;
