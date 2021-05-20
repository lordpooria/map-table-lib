import HesabaTimeDimension from "../src";

import React from "react";

import { makeStyles } from "@material-ui/core";
import data from "./data.json";

const useStyles = makeStyles({
  root: { width: "70vw", height: "70vh" },
  map: { width: "100vw", height: "100vh" },
});

export const BaseMap = () => {
  const classes = useStyles();
  return (
    <div style={{ padding: 16,width: "100vw", height: "100vh" }}>
      <HesabaTimeDimension
        mapProps={{
          center: [35.76498031616211, 51.33673858642578],
          zoom: 13,
          zoomControl: false,
          // className: classes.map,
        }}
        classes={{ tdRoot: classes.root }}
        data={data as any}
      withTable
      />
    </div>
  );
};

export default {
  title: "map",
};
