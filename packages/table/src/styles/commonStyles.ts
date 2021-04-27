import { CHECKBOX_SIZE } from "../utils/themeConstants";
import { createStyles, makeStyles } from "@material-ui/core";

const style = makeStyles(() =>
  createStyles({
    tableCell: {
      overflow: "hidden",
      // margin: 4,
      // whiteSpace: "nowrap",
      display: "flex",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      "& >button": {
        opacity: 0,
      },
      "&:hover >button": {
        opacity: 1,
      },
      // textAlign: "center",
    },
    checkbox: {
      width: CHECKBOX_SIZE,
      height: CHECKBOX_SIZE,
    },
  })
);

export default style;
