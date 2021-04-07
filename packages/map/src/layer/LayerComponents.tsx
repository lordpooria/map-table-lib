import { CommonLayerComponentProps } from "../types/layer";
import React from "react";
import { CircleMarker, Polyline } from "react-leaflet";

type LatLng = [number, number];

interface CircleProps extends CommonLayerComponentProps {
  coordinates: LatLng | Array<LatLng>;
}

export function TDCircleMarker({ coordinates, pathOptions }: CircleProps) {
  return (
    <CircleMarker
      center={coordinates as any}
      pathOptions={pathOptions}
      radius={2}
    />
  );
}

interface PolylineProps extends CommonLayerComponentProps {
  coordinates: Array<LatLng>;
}
export function TDPolyline({ coordinates, pathOptions }: PolylineProps) {
  return (
    <Polyline
      pathOptions={pathOptions}
      positions={coordinates.map((c) => [c[1], c[0]])}
    />
  );
}
