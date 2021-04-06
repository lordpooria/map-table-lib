import React from "react";
import { useLayer } from "../layer";

import { PlayerController } from "../player";
import { TimeComponent } from "../timer";
import LegendComponent from "../legend/LegendComponent";

import { TimeDimensionViewProps } from "../types/HesabaTimeDimension";

const HesabaTimeDimensionView = ({
  // data,
  playerProps,
  timeProps,
  // layerProps,
  geojsonProps,
  map,
}: // extralLayerProps = {},
// addLayer,
// removeLayer,
// map,
TimeDimensionViewProps) => {
  // const map = useMap();
  useLayer(map, geojsonProps);

  return (
    <>
      <PlayerController leafletMap={map} {...playerProps} />
      <TimeComponent {...timeProps} />
      <LegendComponent />
    </>
  );
};

export default HesabaTimeDimensionView;
