import { useCallback, useEffect, useRef } from "react";
import { useTDStoreActions, useTDStoreState } from "../store/reducerHooks";

interface Props {
  bufferSize: any;
  // minBufferReady: number;
  loop: any;
  transitionTime: any;
  animationFinished: any;

  steps: number;
  // loadingTimeout: number;
  startedOver: boolean;
  autoPlay: boolean;
  isReversePlaying: boolean;
  setPlay: (_: boolean) => void;
  setReversePlay: (_: boolean) => void;
}

export const usePlayer = ({
  loop,
  transitionTime,
  animationFinished,

  steps,
  startedOver,
  autoPlay,
  setPlay,
  setReversePlay,
  isReversePlaying,
}: Props) => {
  const intervalID = useRef<number | undefined>(undefined);

  const nextTime = useTDStoreActions((actions) => actions.nextTime);
  const previousTime = useTDStoreActions((actions) => actions.previousTime);
  const setCurrentTimeIndex = useTDStoreActions(
    (actions) => actions.setCurrentTimeIndex
  );

  const formattedData = useTDStoreState((state) => state.formattedData);
  const upperLimitIndex = useTDStoreState((state) => state.upperLimitIndex);
  const lowerLimitIndex = useTDStoreState((state) => state.lowerLimitIndex);

  const currentTimeIndex = useTDStoreState((state) => state.currentTimeIndex);

  const play = useCallback(() => {
    nextTime({ numSteps: steps, loop });
  }, [steps, loop]);

  const playReverse = useCallback(() => {
    previousTime({ numSteps: steps, loop });
  }, [steps, loop]);

  useEffect(() => {
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

  const stop = useCallback(() => {
    if (!intervalID.current) return;
    clearInterval(intervalID.current);
    setPlay(false);
    setReversePlay(false);
    intervalID.current = undefined;
  }, [setPlay,setReversePlay]);

  const _getMaxIndex = useCallback(() => {
    return Math.min(formattedData.length - 1, upperLimitIndex || Infinity);
  }, [formattedData, upperLimitIndex]);

  useEffect(() => {
    const maxIndex = _getMaxIndex();
    const maxForward = currentTimeIndex >= maxIndex && steps > 0;
    const maxBackward = currentTimeIndex == 0 && steps < 0;

    if (maxForward || maxBackward) {
      // we reached the last step
      if (!loop) {
        stop();
        animationFinished();
        return;
      }
    }
  }, [stop, loop, _getMaxIndex, currentTimeIndex]);

  const start = useCallback(() => {
    if (intervalID.current) return;

    var startOver = false;

    if (startedOver) {
      if (currentTimeIndex === _getMaxIndex()) {
        setCurrentTimeIndex({ index: lowerLimitIndex || 0 });
        startOver = true;
      }
    }

    setPlay(true);
    intervalID.current = window.setInterval(play, transitionTime);
    if (!startOver) play();
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

  const startReverse = useCallback(() => {
    if (intervalID.current) return;

    var startOver = false;

    if (startedOver) {
      if (currentTimeIndex === 0) {
        setCurrentTimeIndex({ index: upperLimitIndex || _getMaxIndex() });
        startOver = true;
      }
    }

    setReversePlay(true);
    intervalID.current = window.setInterval(playReverse, transitionTime);
    if (!startOver) playReverse();
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

  useEffect(() => {
    if (autoPlay) {
      start();
    }
  }, [autoPlay, formattedData]);

  return { start, stop, startReverse };
};
