import { Action } from "easy-peasy";
declare type SliderValue = {
    min: number;
    max: number;
};
export interface PlayerStoreModel {
    smallPlayerSize: boolean;
    isPlaying: boolean;
    isReversePlaying: boolean;
    isRecording: boolean;
    transitionTime: number;
    bufferSize: number;
    timeSliderRange: SliderValue;
    timeSlider: number;
    speedSliderRange: SliderValue;
    speedSlider: number;
    setPlayerSize: Action<PlayerStoreModel, {
        isSmall: boolean;
    }>;
    setPlay: Action<PlayerStoreModel, boolean>;
    setReversePlay: Action<PlayerStoreModel, boolean>;
    setRecording: Action<PlayerStoreModel, boolean>;
    setTimeSliderRange: Action<PlayerStoreModel, SliderValue>;
    setTimeSliderValue: Action<PlayerStoreModel, number>;
    setSpeedSliderRange: Action<PlayerStoreModel, SliderValue>;
    setSpeedSliderValue: Action<PlayerStoreModel, number>;
    setTransitionTime: Action<PlayerStoreModel, {
        transitionTime: number;
        bufferSize: number;
    }>;
    animationFinished: Action<PlayerStoreModel>;
}
export declare const playerStoreModel: PlayerStoreModel;
export {};
