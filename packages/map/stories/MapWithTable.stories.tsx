import React from "react";
import "leaflet/dist/leaflet.css";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./utils/data/multiUserData.json";
// export default { title: "Basic Map" };
import { storiesOf } from "@storybook/react";
import {
  baseLayerProps,
  baseMapProps,
  commonGeojsonProps,
} from "./utils/constants";
import theme from "./custom.styles/theme";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mapRoot: {
    border: "none",

    width: "48vw",
    marginRight: 8,
  },
  tableRoot: {
    width: "48vw",
  },
  root: {
    padding: 10,
    borderRadius: 10,
    boxShadow: "0 0 5px #444",
  },
}));

storiesOf("Map With Table", module).add("Simple Map", () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HesabaTimeDimension
        data={data as any}
        mapProps={{ ...baseMapProps, className: classes.mapRoot }}
        tableProps={{ classes: { root: classes.tableRoot } }}
        layerProps={baseLayerProps}
        theme={theme}
        withTable
      />
    </div>
  );
});
