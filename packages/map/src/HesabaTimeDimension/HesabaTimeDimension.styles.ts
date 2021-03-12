import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    mapRoot: {
      width: "95vw",
      height: "95vh",
      border: " 1px solid black",
      position: "relative",
    },
  })
);

export default useStyles;
