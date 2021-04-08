// import {  Mode } from "./common";

import { CircleMarkerProps } from "@react-leaflet/core";
import { PathOptions } from "leaflet";
import { PolylineProps } from "react-leaflet";

export type TDLayerOptions = CommonLayerComponentProps &
  CircleLayerProps &
  PolylineLayerProps & {
    // updateTimeDimension?: boolean;
    // updateTimeDimensionMode?: Mode;
    // addlastPoint?: boolean;
    // waitForReady?: boolean;
    // updateCurrentTime?: boolean;
    // duration: DurationType;
    /*
     * Draw how many data at a time default is 1 means proceed data one at a time
     */
    // stackFrame?: number;
  };

export interface CommonLayerComponentProps {
  pathOptions?: PathOptions;
}

export type CircleLayerProps = { circleProps?: Partial<CircleMarkerProps> };
export type PolylineLayerProps = { polylineProps?: Partial<PolylineProps> };
