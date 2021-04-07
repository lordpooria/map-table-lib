// import {  Mode } from "./common";

import { PathOptions } from "leaflet";

export type TDLayerOptions = CommonLayerComponentProps & {
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
