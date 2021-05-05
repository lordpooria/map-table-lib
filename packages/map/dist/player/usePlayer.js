"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePlayer = void 0;

var _react = require("react");

var _reducerHooks = require("../store/reducerHooks");

const usePlayer = ({
  loop,
  transitionTime,
  animationFinished,
  steps,
  startedOver,
  autoPlay,
  setPlay,
  setReversePlay,
  isReversePlaying
}) => {
  const intervalID = (0, _react.useRef)(undefined);
  const nextTime = (0, _reducerHooks.useTDStoreActions)(actions => actions.nextTime);
  const previousTime = (0, _reducerHooks.useTDStoreActions)(actions => actions.previousTime);
  const setCurrentTimeIndex = (0, _reducerHooks.useTDStoreActions)(actions => actions.setCurrentTimeIndex);
  const formattedData = (0, _reducerHooks.useTDStoreState)(state => state.formattedData);
  const upperLimitIndex = (0, _reducerHooks.useTDStoreState)(state => state.upperLimitIndex);
  const lowerLimitIndex = (0, _reducerHooks.useTDStoreState)(state => state.lowerLimitIndex);
  const currentTimeIndex = (0, _reducerHooks.useTDStoreState)(state => state.currentTimeIndex);
  const play = (0, _react.useCallback)(() => {
    nextTime({
      numSteps: steps,
      loop
    });
  }, [steps, loop]);
  const playReverse = (0, _react.useCallback)(() => {
    previousTime({
      numSteps: steps,
      loop
    });
  }, [steps, loop]);
  (0, _react.useEffect)(() => {
    if (intervalID.current) {
      if (isReversePlaying) {
        stop();
        startReverse();
      } else {
        stop();
        start();
      }
    }
  }, [transitionTime, isReversePlaying]);
  const stop = (0, _react.useCallback)(() => {
    if (!intervalID.current) return;
    clearInterval(intervalID.current);
    setPlay(false);
    setReversePlay(false);
    intervalID.current = undefined;
  }, [setPlay, setReversePlay]);

  const _getMaxIndex = (0, _react.useCallback)(() => {
    return Math.min(formattedData.length - 1, upperLimitIndex || Infinity);
  }, [formattedData, upperLimitIndex]);

  (0, _react.useEffect)(() => {
    const maxIndex = _getMaxIndex();

    const maxForward = currentTimeIndex >= maxIndex && steps > 0;
    const maxBackward = currentTimeIndex == 0 && steps < 0;

    if (maxForward || maxBackward) {
      if (!loop) {
        stop();
        animationFinished();
        return;
      }
    }
  }, [stop, loop, _getMaxIndex, currentTimeIndex]);
  const start = (0, _react.useCallback)(() => {
    var _window;

    if (intervalID.current) return;
    var startOver = false;

    if (startedOver) {
      if (currentTimeIndex === _getMaxIndex()) {
        setCurrentTimeIndex({
          index: lowerLimitIndex || 0
        });
        startOver = true;
      }
    }

    setPlay(true);
    intervalID.current = (_window = window) === null || _window === void 0 ? void 0 : _window.setInterval(play, transitionTime);
    if (!startOver) play();
  }, [play, startedOver, _getMaxIndex, currentTimeIndex, setCurrentTimeIndex, lowerLimitIndex, setPlay, transitionTime]);
  const startReverse = (0, _react.useCallback)(() => {
    if (intervalID.current) return;
    var startOver = false;

    if (startedOver) {
      if (currentTimeIndex === 0) {
        setCurrentTimeIndex({
          index: upperLimitIndex || _getMaxIndex()
        });
        startOver = true;
      }
    }

    setReversePlay(true);
    intervalID.current = window.setInterval(playReverse, transitionTime);
    if (!startOver) playReverse();
  }, [play, startedOver, currentTimeIndex, _getMaxIndex, setCurrentTimeIndex, upperLimitIndex, setReversePlay, transitionTime]);
  (0, _react.useEffect)(() => {
    if (autoPlay) {
      start();
    }
  }, [autoPlay, formattedData]);
  (0, _react.useEffect)(() => {
    return () => {
      intervalID.current && clearInterval(intervalID.current);
    };
  }, []);
  return {
    start,
    stop,
    startReverse
  };
};

exports.usePlayer = usePlayer;
//# sourceMappingURL=usePlayer.js.map