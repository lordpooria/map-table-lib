import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    mapRoot: (withTable:any) => ({
      width: withTable ? "50vw" : "95vw",
      height: "95vh",
      border: " 1px solid black",
      position: "relative",
    }),
  })
);

export default useStyles;
