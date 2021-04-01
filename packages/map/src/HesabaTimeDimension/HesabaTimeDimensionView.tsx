import React from "react";
import { useLayer } from "../layer";

import { PlayerController } from "../player";
import { TimeComponent } from "../timer";
import LegendComponent from "../legend/LegendComponent";
import { useMap } from "react-leaflet";
import { TimeDimensionViewProps } from "../types/HesabaTimeDimension";

const HesabaTimeDimensionView = ({
  data,
  playerProps,
  timeProps,
  layerProps,
  geojsonProps,
  extralLayerProps = {},
}: // addLayer,
// removeLayer,
// map,
TimeDimensionViewProps) => {
  const map = useMap();
  useLayer(data as any, map, geojsonProps, layerProps, extralLayerProps);

  return (
    <>
      <PlayerController leafletMap={map} {...playerProps} />
      <TimeComponent {...timeProps} />
      <LegendComponent legends={[0, 1, 2, 3, 4]} />
    </>
  );
};

export default HesabaTimeDimensionView;
