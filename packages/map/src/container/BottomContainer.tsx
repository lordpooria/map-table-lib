import React from "react";

import { makeStyles } from "@material-ui/core";
import { PlayerController } from "../player";
import LegendContainer from "../legend/LegendComponent";

import { useMap } from "react-leaflet";
import { BottomContainerProps } from "../types";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 1000,
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap-reverse",
    alignItems: "flex-start",
  },
  playerWrapper: {
    flex: 1,
  },
});

const BottomContainer = ({
  playerProps,
  LegendComponent,
}: BottomContainerProps) => {
  const classes = useStyles();
  const map = useMap();
  return (
    <div className={classes.root}>
      <div className={classes.playerWrapper}>
        <PlayerController leafletMap={map} {...playerProps} />
      </div>
      <LegendContainer LegendComponent={LegendComponent} />
    </div>
  );
};

export default BottomContainer;
