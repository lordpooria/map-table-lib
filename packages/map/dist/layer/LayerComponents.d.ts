/// <reference types="react" />
declare type LatLng = [number, number];
interface CircleProps {
    coordinates: LatLng | Array<LatLng>;
}
export declare function TDCircleMarker({ coordinates }: CircleProps): JSX.Element;
interface PolylineProps {
    coordinates: Array<LatLng>;
}
export declare function TDPolyline({ coordinates }: PolylineProps): JSX.Element;
export {};
