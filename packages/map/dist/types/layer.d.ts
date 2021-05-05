import { CircleMarkerProps } from "@react-leaflet/core";
import { PathOptions } from "leaflet";
import React from "react";
import { PolylineProps } from "react-leaflet";
export declare type TDLayerOptions = CommonLayerComponentProps & CircleLayerProps & PolylineLayerProps & {};
export interface CommonLayerComponentProps {
    pathOptions?: PathOptions;
    ToolTipComponent?: React.FC<any> | boolean;
}
export declare type CircleLayerProps = {
    circleProps?: Partial<CircleMarkerProps>;
    properties?: any;
};
export declare type PolylineLayerProps = {
    polylineProps?: Partial<PolylineProps>;
};
