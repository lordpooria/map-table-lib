import { DurationType, Mode } from "../types";

export type TDLayerOptions = {
  updateTimeDimension?: boolean;
  updateTimeDimensionMode?: Mode;
  addlastPoint?: boolean;
  waitForReady?: boolean;
  updateCurrentTime?: boolean;
  duration: DurationType;
};
