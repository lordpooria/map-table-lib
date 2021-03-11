import { action, Action } from "easy-peasy";

type SliderValue = { min: number; max: number };

const DEFAULT_TRANSITION = 1000;

export interface PlayerStoreModel {
  isPlaying: boolean;
  isRecording: boolean;
  transitionTime: number;
  bufferSize: number;
  timeSliderRange: SliderValue;
  timeSlider: number;
  speedSliderRange: SliderValue;
  speedSlider: number;
  setPlay: Action<PlayerStoreModel, boolean>;
  setRecording: Action<PlayerStoreModel, boolean>;

  setTimeSliderRange: Action<PlayerStoreModel, SliderValue>;
  setTimeSliderValue: Action<PlayerStoreModel, number>;
  setSpeedSliderRange: Action<PlayerStoreModel, SliderValue>;
  setSpeedSliderValue: Action<PlayerStoreModel, number>;

  setTransitionTime: Action<
    PlayerStoreModel,
    { transitionTime: number; bufferSize: number }
  >;

  animationFinished: Action<PlayerStoreModel>;
}

export const playerStoreModel: PlayerStoreModel = {
  isPlaying: false,
  isRecording: false,
  transitionTime: DEFAULT_TRANSITION,
  bufferSize: 5,
  timeSliderRange: { min: 0, max: 0 },
  speedSliderRange: { min: 0, max: 0 },
  timeSlider: 0,
  speedSlider: Math.round(10000 / DEFAULT_TRANSITION) / 10,

  setPlay: action((state, isPlaying) => {
    state.isPlaying = isPlaying;
  }),
  setRecording: action((state, isRecording) => {
    state.isRecording = isRecording;
  }),
  setTimeSliderRange: action((state, timeSlider) => {
    state.timeSliderRange = timeSlider;
  }),
  setTimeSliderValue: action((state, timeSlider) => {
    state.timeSlider = timeSlider;
  }),
  setSpeedSliderRange: action((state, speedSlider) => {
    state.speedSliderRange = speedSlider;
  }),
  setSpeedSliderValue: action((state, speedSlider) => {
    state.speedSlider = speedSlider;
  }),
  setTransitionTime: action((state, { transitionTime, bufferSize }) => {
    state.bufferSize = bufferSize;
    state.transitionTime = transitionTime;
    state.speedSlider = Math.round(10000 / transitionTime) / 10;
  }),

  animationFinished: action(() => {}),
};
