import { DurationType, Mode } from "../types";
export declare type TDLayerOptions = {
    updateTimeDimension?: boolean;
    updateTimeDimensionMode?: Mode;
    addlastPoint?: boolean;
    waitForReady?: boolean;
    updateCurrentTime?: boolean;
    duration: DurationType;
};
