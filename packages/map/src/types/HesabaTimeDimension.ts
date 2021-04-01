import { GeoJsonObject } from "geojson";
import { MapContainerProps } from "react-leaflet";
import { PlayerProps } from "../player/PlayerControl.types";
import { TimeProps } from "../timer/TimeComponent.types";
import { GeoJSONOptions } from "leaflet";
import { TDLayerOptions } from "./layer";

export interface HesabaTimeDimensionProps {
  data: GeoJsonObject;
  mapProps: MapContainerProps & {
    classes?: { root?: string };
  };
  children?: React.ReactNode;
  playerProps?: PlayerProps;
  timeProps?: TimeProps;
  geojsonProps?: GeoJSONOptions;
  layerProps: TDLayerOptions;
  extralLayerProps?: any;
  withTable?: boolean;
}

export interface TimeDimensionViewProps {
    data: GeoJsonObject;
    playerProps: PlayerProps;
    timeProps: TimeProps;
    geojsonProps: GeoJSONOptions;
    layerProps: TDLayerOptions;
    extralLayerProps: any;
  }
  