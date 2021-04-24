/// <reference types="react" />
import { PlayerProps } from "./PlayerControl";
import { TimeProps } from "../timer/TimeComponent.types";
import { GeoJSONOptions } from "leaflet";
import { TDLayerOptions } from "./layer";
import { GeoJSONData } from "./common";
import { PublicLegendProps } from "./legend";
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
    LegendComponent?: PublicLegendProps["LegendComponent"];
    theme?: any;
}
export interface TimeDimensionViewProps {
    data: GeoJSONData;
    playerProps: PlayerProps;
    timeProps: TimeProps;
    geojsonProps: GeoJSONOptions;
    layerProps: TDLayerOptions;
    extralLayerProps: any;
    LegendComponent?: PublicLegendProps["LegendComponent"];
}
