import { PlayerProps } from "../player/PlayerControl.types";
import { TimeProps } from "../timer/TimeComponent.types";
import { GeoJSONOptions, Map } from "leaflet";
import { TDLayerOptions } from "./layer";
import { GeoJSONData } from "./common";

export interface HesabaTimeDimensionProps {
  data: GeoJSONData;
  // mapProps: MapContainerProps & {
  //   classes?: { root?: string };
  // };
  // children?: React.ReactNode;
  playerProps?: PlayerProps;
  timeProps?: TimeProps;
  geojsonProps?: GeoJSONOptions;
  layerProps?: TDLayerOptions;
  extralLayerProps?: any;
  withTable?: boolean;
  map: Map;
}

export interface TimeDimensionViewProps {
  data: GeoJSONData;
  playerProps: PlayerProps;
  timeProps: TimeProps;
  geojsonProps: GeoJSONOptions;
  layerProps?: TDLayerOptions;
  extralLayerProps: any;
  map: Map;
}
