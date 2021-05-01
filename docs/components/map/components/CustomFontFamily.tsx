import BaseMap from "./BaseMap";
import { makeStyles } from "@material-ui/core";
import { commonMapProps } from "../utils/constants";
// import "../styles/map.css";

const useStyles = makeStyles({
  container: {
    width: "70vw",
    height: "70vh",
    fontFamily: "Vazir !important",
  },
//   root: { width: "200px", height: "70vh" },
});

 function SetFontFamilyWithClassName() {
  const classes = useStyles();

  return (
    <BaseMap
      mapProps={{
        ...commonMapProps,
        className: classes.container,
      }}
    //   classes={{ tdRoot: classes.root }}
    />
    // <BaseMap mapProps={{ ...baseMapProps, className: classes.container }} />
  );
}
export default SetFontFamilyWithClassName