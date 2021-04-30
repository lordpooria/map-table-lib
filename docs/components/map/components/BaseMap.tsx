import data from "../assets/small_data.json";
import HesabaTimeDimension from "@hesaba/map";
import { makeStyles } from "@material-ui/core";
import { commonMapProps } from "../utils/constants";

const useStyles = makeStyles({
  root: { width: "70vw", height: "70vh" },
  map: { width: "100%", height: "100%" },
});

export default function MapComponent(props: any) {
  const classes = useStyles();
  return (
    <HesabaTimeDimension
      mapProps={{
        ...commonMapProps,
        className: classes.map,
      }}
      classes={{ tdRoot: classes.root }}
      data={data as any}
      {...props}
    />
  );
}
