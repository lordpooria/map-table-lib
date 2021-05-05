"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playerStoreModel = void 0;

var _easyPeasy = require("easy-peasy");

const DEFAULT_TRANSITION = 1000;
const playerStoreModel = {
  smallPlayerSize: false,
  isPlaying: false,
  isReversePlaying: false,
  isRecording: false,
  transitionTime: DEFAULT_TRANSITION,
  bufferSize: 5,
  timeSliderRange: {
    min: 0,
    max: 0
  },
  speedSliderRange: {
    min: 0,
    max: 0
  },
  timeSlider: 0,
  speedSlider: Math.round(10000 / DEFAULT_TRANSITION) / 10,
  setPlayerSize: (0, _easyPeasy.action)((state, {
    isSmall
  }) => {
    state.smallPlayerSize = isSmall;
  }),
  setPlay: (0, _easyPeasy.action)((state, isPlaying) => {
    state.isPlaying = isPlaying;
  }),
  setReversePlay: (0, _easyPeasy.action)((state, isPlaying) => {
    state.isReversePlaying = isPlaying;
  }),
  setRecording: (0, _easyPeasy.action)((state, isRecording) => {
    state.isRecording = isRecording;
  }),
  setTimeSliderRange: (0, _easyPeasy.action)((state, timeSlider) => {
    state.timeSliderRange = timeSlider;
  }),
  setTimeSliderValue: (0, _easyPeasy.action)((state, timeSlider) => {
    state.timeSlider = timeSlider;
  }),
  setSpeedSliderRange: (0, _easyPeasy.action)((state, speedSlider) => {
    state.speedSliderRange = speedSlider;
  }),
  setSpeedSliderValue: (0, _easyPeasy.action)((state, speedSlider) => {
    state.speedSlider = speedSlider;
  }),
  setTransitionTime: (0, _easyPeasy.action)((state, {
    transitionTime,
    bufferSize
  }) => {
    state.bufferSize = bufferSize;
    state.transitionTime = transitionTime;
    state.speedSlider = Math.round(10000 / transitionTime) / 10;
  }),
  animationFinished: (0, _easyPeasy.action)(() => {})
};
exports.playerStoreModel = playerStoreModel;
//# sourceMappingURL=playerReducer.js.map