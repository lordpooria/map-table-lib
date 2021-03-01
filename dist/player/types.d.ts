/// <reference types="react" />
import { ControlOptions, Map } from "leaflet";
declare type BufferFunc = (a: number, b: number, c: boolean) => number;
declare type Buffer = number | BufferFunc;
interface PlayerOwnProps {
    leafletMap: Map;
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
    buffer?: Buffer;
    loadingTimeout?: number;
}
export declare type PlayerProps = ControlOptions & PlayerOwnProps;
export interface PlayerCompleteProps extends PlayerOwnProps {
}
export {};
