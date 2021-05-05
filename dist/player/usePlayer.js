import { useCallback, useEffect, useRef } from "react";
import { useTDStoreActions, useTDStoreState } from "../store/reducerHooks";
export var usePlayer = function (_a) {
    var loop = _a.loop, transitionTime = _a.transitionTime, animationFinished = _a.animationFinished, steps = _a.steps, startedOver = _a.startedOver, autoPlay = _a.autoPlay, setPlay = _a.setPlay, setReversePlay = _a.setReversePlay, isReversePlaying = _a.isReversePlaying;
    var intervalID = useRef(undefined);
    var nextTime = useTDStoreActions(function (actions) { return actions.nextTime; });
    var previousTime = useTDStoreActions(function (actions) { return actions.previousTime; });
    var setCurrentTimeIndex = useTDStoreActions(function (actions) { return actions.setCurrentTimeIndex; });
    var formattedData = useTDStoreState(function (state) { return state.formattedData; });
    var upperLimitIndex = useTDStoreState(function (state) { return state.upperLimitIndex; });
    var lowerLimitIndex = useTDStoreState(function (state) { return state.lowerLimitIndex; });
    var currentTimeIndex = useTDStoreState(function (state) { return state.currentTimeIndex; });
    var play = useCallback(function () {
        nextTime({ numSteps: steps, loop: loop });
    }, [steps, loop]);
    var playReverse = useCallback(function () {
        previousTime({ numSteps: steps, loop: loop });
    }, [steps, loop]);
    useEffect(function () {
        if (intervalID.current) {
            if (isReversePlaying) {
                stop();
                startReverse();
            }
            else {
                stop();
                start();
            }
        }
    }, [transitionTime, isReversePlaying]);
    var stop = useCallback(function () {
        if (!intervalID.current)
            return;
        clearInterval(intervalID.current);
        setPlay(false);
        setReversePlay(false);
        intervalID.current = undefined;
    }, [setPlay, setReversePlay]);
    var _getMaxIndex = useCallback(function () {
        return Math.min(formattedData.length - 1, upperLimitIndex || Infinity);
    }, [formattedData, upperLimitIndex]);
    useEffect(function () {
        var maxIndex = _getMaxIndex();
        var maxForward = currentTimeIndex >= maxIndex && steps > 0;
        var maxBackward = currentTimeIndex == 0 && steps < 0;
        if (maxForward || maxBackward) {
            // we reached the last step
            if (!loop) {
                stop();
                animationFinished();
                return;
            }
        }
    }, [stop, loop, _getMaxIndex, currentTimeIndex]);
    var start = useCallback(function () {
        if (intervalID.current)
            return;
        var startOver = false;
        if (startedOver) {
            if (currentTimeIndex === _getMaxIndex()) {
                setCurrentTimeIndex({ index: lowerLimitIndex || 0 });
                startOver = true;
            }
        }
        setPlay(true);
        intervalID.current = window === null || window === void 0 ? void 0 : window.setInterval(play, transitionTime);
        if (!startOver)
            play();
    }, [
        play,
        startedOver,
        _getMaxIndex,
        currentTimeIndex,
        setCurrentTimeIndex,
        lowerLimitIndex,
        setPlay,
        transitionTime,
    ]);
    var startReverse = useCallback(function () {
        if (intervalID.current)
            return;
        var startOver = false;
        if (startedOver) {
            if (currentTimeIndex === 0) {
                setCurrentTimeIndex({ index: upperLimitIndex || _getMaxIndex() });
                startOver = true;
            }
        }
        setReversePlay(true);
        intervalID.current = window.setInterval(playReverse, transitionTime);
        if (!startOver)
            playReverse();
    }, [
        play,
        startedOver,
        currentTimeIndex,
        _getMaxIndex,
        setCurrentTimeIndex,
        upperLimitIndex,
        setReversePlay,
        transitionTime,
    ]);
    useEffect(function () {
        if (autoPlay) {
            start();
        }
    }, [autoPlay, formattedData]);
    useEffect(function () {
        return function () {
            intervalID.current && clearInterval(intervalID.current);
        };
    }, []);
    return { start: start, stop: stop, startReverse: startReverse };
};
