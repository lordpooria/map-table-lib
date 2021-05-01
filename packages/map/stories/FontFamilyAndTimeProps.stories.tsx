import React from "react";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./utils/data/multiUserData.json";

import { baseMapProps } from "./utils/constants";

import { DocsProvider } from "./docs/DocsProvider";
import "./custom.styles/map.css";
import { makeStyles } from "@material-ui/core";

export const SetFontFamily = () => (
  <HesabaTimeDimension mapProps={baseMapProps} data={data as any} />
);

const useStyles = makeStyles({
  container: { fontFamily: "Arial, Helvetica, sans-serif !important" },
});

export const SetFontFamilyWithClassName = () => {
  const classes = useStyles();

  return (
    <HesabaTimeDimension
      mapProps={{ ...baseMapProps, className: classes.container }}
      data={data as any}
    />
  );
};

export const SetTimeComponentProps = () => (
  <HesabaTimeDimension
    mapProps={baseMapProps}
    data={data as any}
    timeProps={{ am: "AM", pm: "PM", noTimeError: "No time Available" }}
  />
);

export default {
  title: "Font Family And Time Props",
};
