import React from "react";
import { GeoJsonObject } from "geojson";
import { MapContainerProps } from "react-leaflet";
import { PlayerProps } from "../player/PlayerControl.types";
import { TimeProps } from "../timer/TimeComponent.types";
import { GeoJSONOptions } from "leaflet";
import { TDLayerOptions } from "../layer/layer.type";
interface Props {
    data: GeoJsonObject;
    mapProps: MapContainerProps & {
        classes?: {
            root?: string;
        };
    };
    children?: React.ReactNode;
    playerProps?: PlayerProps;
    timeProps?: TimeProps;
    geojsonProps?: GeoJSONOptions;
    layerProps: TDLayerOptions;
    extralLayerProps?: any;
}
declare const HesabaTimeDimension: (props: Props) => JSX.Element;
export default HesabaTimeDimension;
