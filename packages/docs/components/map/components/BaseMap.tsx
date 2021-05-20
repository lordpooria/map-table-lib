import data from "../assets/data.json";
import HesabaTimeDimension from "@hesaba/map";
import { makeStyles } from "@material-ui/core";
import { commonMapProps } from "../utils/constants";

const useStyles = makeStyles({
  root2: { width: "70vw", height: "70vh" },
  map: { width: "100%", height: "100%" },
});

function MapComponent(props: any) {
  const classes = useStyles();
  return (
    <HesabaTimeDimension
      mapProps={{
        ...commonMapProps,
        className: classes.map,
      }}
      classes={{ tdRoot: classes.root2 }}
      data={data as any}
      {...props}
    />
  );
}
export default MapComponent;
