import { createUseStyles } from "react-jss";

const style = createUseStyles(() => ({
  root: {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "inherit",
    flexShrink: 0,
    fontSize: 24,
  },
}));

export default style;
