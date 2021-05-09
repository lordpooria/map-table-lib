import { createStyles, makeStyles } from "@material-ui/core";

const style = makeStyles((theme) =>
  createStyles({
    root: {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: "currentColor",
      flexShrink: 0,
      fontSize: 24,
      transition: theme.transitions.create("fill", {
        duration: theme.transitions.duration.shorter,
      }),
    },
  })
);
export default style;
