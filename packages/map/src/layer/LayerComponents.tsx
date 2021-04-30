import {
  CommonLayerComponentProps,
  CircleLayerProps,
  PolylineLayerProps,
} from "../types/layer";
import React from "react";
import { CircleMarker, Polyline, Tooltip } from "react-leaflet";

type LatLng = [number, number];

type CircleProps = CommonLayerComponentProps &
  CircleLayerProps & {
    coordinates: LatLng | Array<LatLng>;
  };

export function TDCircleMarker({
  coordinates,
  pathOptions,
  circleProps,
  ToolTipComponent,
  properties,
}: CircleProps) {
  return (
    <>
      <CircleMarker
        center={[coordinates[1], coordinates[0]] as any}
        pathOptions={pathOptions}
        radius={6}
        {...circleProps}
      >
        {ToolTipComponent === false ? null : typeof ToolTipComponent !==
            "boolean" && ToolTipComponent ? (
          <Tooltip>
            <ToolTipComponent properties={properties} />
          </Tooltip>
        ) : (
          <Tooltip>
            {Object.keys(properties).map((k,index) => (
              <div key={`${k}-${index}`}>
                {k}:{properties[k]}
              </div>
            ))}
          </Tooltip>
        )}
      </CircleMarker>
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
