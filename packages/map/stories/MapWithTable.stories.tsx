import React from "react";
import "leaflet/dist/leaflet.css";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./utils/data/multiUserData.json";

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

    width: "50%",
    height: "100vh",
    marginRight: 8,
  },
  tableRoot: {
    width: "50%",
  },
  root: {
    padding: 10,
    width: "100vw",
    borderRadius: 10,
    boxShadow: "0 0 5px #444",
  },
}));

export const BaseTable = () => {
  const classes = useStyles();
  return (
    <div style={{ width: "80vw", height: "80vh" }}>
      <HesabaTimeDimension
        data={data as any}
        mapProps={{ ...baseMapProps }}
        classes={{ table: { root: classes.tableRoot } }}
        theme={theme}
        withTable
      />
    </div>
  );
};

export default {
  title: "Map With Table",
};
