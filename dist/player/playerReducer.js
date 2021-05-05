import { action } from "easy-peasy";
var DEFAULT_TRANSITION = 1000;
export var playerStoreModel = {
    smallPlayerSize: false,
    isPlaying: false,
    isReversePlaying: false,
    isRecording: false,
    transitionTime: DEFAULT_TRANSITION,
    bufferSize: 5,
    timeSliderRange: { min: 0, max: 0 },
    speedSliderRange: { min: 0, max: 0 },
    timeSlider: 0,
    speedSlider: Math.round(10000 / DEFAULT_TRANSITION) / 10,
    setPlayerSize: action(function (state, _a) {
        var isSmall = _a.isSmall;
        state.smallPlayerSize = isSmall;
    }),
    setPlay: action(function (state, isPlaying) {
        state.isPlaying = isPlaying;
    }),
    setReversePlay: action(function (state, isPlaying) {
        state.isReversePlaying = isPlaying;
    }),
    setRecording: action(function (state, isRecording) {
        state.isRecording = isRecording;
    }),
    setTimeSliderRange: action(function (state, timeSlider) {
        state.timeSliderRange = timeSlider;
    }),
    setTimeSliderValue: action(function (state, timeSlider) {
        state.timeSlider = timeSlider;
    }),
    setSpeedSliderRange: action(function (state, speedSlider) {
        state.speedSliderRange = speedSlider;
    }),
    setSpeedSliderValue: action(function (state, speedSlider) {
        state.speedSlider = speedSlider;
    }),
    setTransitionTime: action(function (state, _a) {
        var transitionTime = _a.transitionTime, bufferSize = _a.bufferSize;
        state.bufferSize = bufferSize;
        state.transitionTime = transitionTime;
        state.speedSlider = Math.round(10000 / transitionTime) / 10;
    }),
    animationFinished: action(function () { }),
};
