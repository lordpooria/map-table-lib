import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    tdRoot: { display: "flex" },
    mapRoot: {
      width: "95vw",
      height: "95vh",
      border: " 1px solid black",
      position: "relative",
    },
    mapRootWithTable: {
      width: "50vw",
      height: "95vh",
      border: " 1px solid black",
      position: "relative",
    },
    tableRoot: {
      width: "50vw",
      height: "80vh",
     
    },
  })
);

export default useStyles;
