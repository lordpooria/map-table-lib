import { DurationType, Mode } from "./common";

export type TDLayerOptions = {
  updateTimeDimension?: boolean;
  updateTimeDimensionMode?: Mode;
  addlastPoint?: boolean;
  waitForReady?: boolean;
  updateCurrentTime?: boolean;
  duration: DurationType;
};
