import React from "react";
import { useLayer } from "../layer";
import { GeoJsonObject } from "geojson";
import  { GeoJSONOptions } from "leaflet";
import { PlayerController } from "../player";
import { TimeComponent } from "../timer";
import LegendComponent from "../legend/LegendComponent";
import { useMap } from "react-leaflet";
import { PlayerProps } from "../player/PlayerControl.types";
import { TimeProps } from "../timer/TimeComponent.types";
import { TDLayerOptions } from "../layer/layer.type";

interface Props {
  data: GeoJsonObject;
  playerProps: PlayerProps;
  timeProps: TimeProps;
  geojsonProps: GeoJSONOptions;
  layerProps: TDLayerOptions;
  extralLayerProps: any;
}

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
Props) => {
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
