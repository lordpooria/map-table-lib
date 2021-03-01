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
  setPlay: (_: boolean) => void;
}

export const usePlayer = ({
  loop,
  transitionTime,
  animationFinished,

  steps,
  startedOver,
  autoPlay = false,
  setPlay,
}: Props) => {
  const intervalID = useRef<number | undefined>(undefined);

  const nextTime = useTDStoreActions((actions) => actions.nextTime);
  const setCurrentTimeIndex = useTDStoreActions(
    (actions) => actions.setCurrentTimeIndex
  );

  const availableTimes = useTDStoreState((state) => state.availableTimes);
  const upperLimitIndex = useTDStoreState((state) => state.upperLimitIndex);
  const lowerLimitIndex = useTDStoreState((state) => state.lowerLimitIndex);
  const currentTimeIndex = useTDStoreState((state) => state.currentTimeIndex);

  const play = useCallback(() => {
    nextTime({ numSteps: steps, loop });
  }, [steps, loop]);

  useEffect(() => {
    if (intervalID.current) {
      stop();
      start();
    }
  }, [transitionTime]);

  const stop = useCallback(() => {
    if (!intervalID.current) return;
    clearInterval(intervalID.current);
    setPlay(false);
    intervalID.current = undefined;
  }, [setPlay]);

  const _getMaxIndex = useCallback(() => {
    return Math.min(availableTimes.length - 1, upperLimitIndex || Infinity);
  }, [availableTimes, upperLimitIndex]);

  const _tick = useCallback(
    (currentTimeIndex) => {
      const maxIndex = _getMaxIndex();
      const maxForward = currentTimeIndex >= maxIndex && steps > 0;
      const maxBackward = currentTimeIndex == 0 && steps < 0;
      console.log(currentTimeIndex, maxIndex, steps);
      if (maxForward || maxBackward) {
        // we reached the last step
        if (!loop) {
          stop();
          animationFinished();
          return;
        }
      }

      play();
    },
    [play, stop, loop, _getMaxIndex]
  );

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
    intervalID.current = window.setInterval(_tick, transitionTime);
    if (!startOver) _tick(currentTimeIndex);
  }, [
    currentTimeIndex,
    startedOver,
    setCurrentTimeIndex,
    lowerLimitIndex,
    setPlay,
    transitionTime,
  ]);

  useEffect(() => {
    if (autoPlay) {
      start();
    }
  }, [autoPlay, availableTimes]);

  return { start, stop };
};
