/// <reference types="react" />
import { PlayerProps } from "../player/PlayerControl.types";
import { TimeProps } from "../timer/TimeComponent.types";
import { GeoJSONOptions } from "leaflet";
import { TDLayerOptions } from "./layer";
import { GeoJSONData } from "./common";
import { LegendsContainerProps } from "./legend";
import { MapContainerProps } from "react-leaflet";
import { TdTableProps } from "./TableType";
export interface HesabaTimeDimensionProps {
    data: GeoJSONData;
    mapProps: MapContainerProps & {
        classes?: {
            root?: string;
        };
    };
    children?: React.ReactNode;
    playerProps?: PlayerProps;
    timeProps?: TimeProps;
    geojsonProps?: GeoJSONOptions;
    layerProps?: TDLayerOptions;
    extralLayerProps?: any;
    tableProps?: TdTableProps;
    withTable?: boolean;
    LegendComponent?: LegendsContainerProps["LegendComponent"];
    theme?: any;
}
export interface TimeDimensionViewProps {
    data: GeoJSONData;
    playerProps: PlayerProps;
    timeProps: TimeProps;
    geojsonProps: GeoJSONOptions;
    layerProps: TDLayerOptions;
    extralLayerProps: any;
    LegendComponent?: LegendsContainerProps["LegendComponent"];
}
