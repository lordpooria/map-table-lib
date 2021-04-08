import {
  CommonLayerComponentProps,
  CircleLayerProps,
  PolylineLayerProps,
} from "../types/layer";
import React from "react";
import { CircleMarker, Polyline } from "react-leaflet";

type LatLng = [number, number];

type CircleProps = CommonLayerComponentProps &
  CircleLayerProps & {
    coordinates: LatLng | Array<LatLng>;
  };

export function TDCircleMarker({
  coordinates,
  pathOptions,
  circleProps,
}: CircleProps) {
  return (
    <>
      <CircleMarker
        center={[coordinates[1], coordinates[0]] as any}
        pathOptions={pathOptions}
        radius={6}
        {...circleProps}
      />
    </>
  );
}

type PolylineProps = CommonLayerComponentProps &
  PolylineLayerProps & {
    coordinates: Array<LatLng>;
  };
export function TDPolyline({
  coordinates,
  pathOptions,
  polylineProps,
}: PolylineProps) {
  return (
    <Polyline
      pathOptions={pathOptions}
      positions={coordinates.map((c) => [c[1], c[0]])}
      {...polylineProps}
    />
  );
}
