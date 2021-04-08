import { CircleMarkerProps } from "@react-leaflet/core";
import { PathOptions } from "leaflet";
import { PolylineProps } from "react-leaflet";
export declare type TDLayerOptions = CommonLayerComponentProps & CircleLayerProps & PolylineLayerProps & {};
export interface CommonLayerComponentProps {
    pathOptions?: PathOptions;
}
export declare type CircleLayerProps = {
    circleProps?: Partial<CircleMarkerProps>;
};
export declare type PolylineLayerProps = {
    polylineProps?: Partial<PolylineProps>;
};
