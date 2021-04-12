import { CommonLayerComponentProps, CircleLayerProps, PolylineLayerProps } from "../types/layer";
declare type LatLng = [number, number];
declare type CircleProps = CommonLayerComponentProps & CircleLayerProps & {
    coordinates: LatLng | Array<LatLng>;
};
export declare function TDCircleMarker({ coordinates, pathOptions, circleProps, ToolTipComponent, properties, }: CircleProps): JSX.Element;
declare type PolylineProps = CommonLayerComponentProps & PolylineLayerProps & {
    coordinates: Array<LatLng>;
};
export declare function TDPolyline({ coordinates, pathOptions, polylineProps, }: PolylineProps): JSX.Element;
export {};
