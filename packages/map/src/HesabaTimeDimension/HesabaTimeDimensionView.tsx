import React from "react";

import { PlayerController } from "../player";
import { TimeComponent } from "../timer";
import LegendContainer from "../legend/LegendComponent";

import { TimeDimensionViewProps } from "../types/HesabaTimeDimension";
import GeoJSONLayer from "../layer/TDGeojsonLayer";
import { useMap } from "react-leaflet";

const HesabaTimeDimensionView = ({
  playerProps,
  timeProps,
  LegendComponent,
  layerProps,
}: TimeDimensionViewProps) => {
  const map = useMap();

  return (
    <>
      <PlayerController leafletMap={map} {...playerProps} />
      <TimeComponent {...timeProps} />
      <LegendContainer LegendComponent={LegendComponent} />
      <GeoJSONLayer {...layerProps} />
    </>
  );
};

export default HesabaTimeDimensionView;
