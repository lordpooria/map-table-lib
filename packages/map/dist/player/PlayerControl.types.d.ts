/// <reference types="react" />
import { SliderClassKey } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import { ControlOptions, Map } from "leaflet";
interface PlayerOwnProps {
    leafletMap: Map;
}
export declare type PlayerProps = {
    autoPlay?: boolean;
    minSpeed?: number;
    maxSpeed?: number;
    speedSlider?: boolean;
    startedOver?: boolean;
    backwardButton?: React.ReactNode | boolean;
    forwardButton?: React.ReactNode | boolean;
    playButton?: React.ReactNode | boolean;
    playReverseButton?: React.ReactNode | boolean;
    loopButton?: React.ReactNode | boolean;
    timeSlider?: React.ReactNode | boolean;
    timeSliderDragUpdate?: React.ReactNode | boolean;
    limitSliders?: React.ReactNode | boolean;
    limitMinimumRange?: React.ReactNode | boolean;
    speedStep?: number;
    timeSteps?: number;
    minBufferReady?: number;
    transitionTime?: number;
    loop?: boolean;
    buffer?: number;
    classes?: PlayerClasses;
};
export declare type PlayerCombinedProps = ControlOptions & PlayerOwnProps & PlayerProps;
export declare type PlayerClasses = {
    speedSlider?: Partial<ClassNameMap<SliderClassKey>>;
    speedSliderWrapper?: string;
    playerSlider?: Partial<ClassNameMap<SliderClassKey>>;
    playerSliderWrapper?: string;
    icons?: string;
    iconButton?: string;
    root?: string;
};
export interface PlayerCompleteProps extends PlayerCombinedProps {
}
export {};
