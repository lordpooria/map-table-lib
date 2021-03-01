/*jshint indent: 4, browser:true*/
/*global L*/

import { useCallback, useEffect, useRef, useState } from "react";
import { useTDStoreActions, useTDStoreState } from "../store/reducerHooks";

/*
 * L.TimeDimension.Player
 */
//'use strict';
interface Props {
  // timeDimension: any;
  bufferSize: any;
  minBufferReady: any;
  loop: any;
  transitionTime: any;
  animationFinished: any;

  steps: number;
  loadingTimeout: number;
  startedOver: boolean;
  autoPlay: boolean;
  setPlay: (_: boolean) => void;
}

export const usePlayer = ({
  // timeDimension,
  loadingTimeout,
  bufferSize,
  minBufferReady,
  loop,
  transitionTime,
  animationFinished,

  steps,
  // startedOver,
  autoPlay = true,
  setPlay,
}: Props) => {
  const [paused, setPaused] = useState(false);

  const _intervalID = useRef<number>();
  const _waitingForBuffer = useRef(false);
  const prepareNextTimes = useTDStoreActions(
    (actions) => actions.prepareNextTimes
  );
  const nextTime = useTDStoreActions((actions) => actions.nextTime);
  const setCurrentTimeIndex = useTDStoreActions(
    (actions) => actions.setCurrentTimeIndex
  );
  const getNumberNextTimesReady = useTDStoreActions(
    (actions) => actions.getNumberNextTimesReady
  );
  const availableTimes = useTDStoreState((state) => state.availableTimes);
  const upperLimitIndex = useTDStoreState((state) => state.upperLimitIndex);
  const lowerLimitIndex = useTDStoreState((state) => state.lowerLimitIndex);
  const currentTimeIndex = useTDStoreState((state) => state.currentTimeIndex);
  const numberNextTimesReady = useTDStoreState(
    (state) => state.numberNextTimesReady
  );

  const play = useCallback(() => {
    pause();
    nextTime({ numSteps: steps, loop, loadingTimeout });
    if (bufferSize > 0) {
      prepareNextTimes({ numSteps: steps, howmany: minBufferReady, loop });
      // timeDimension.prepareNextTimes(steps, bufferSize, loop);
    }
  }, [steps, loop, loadingTimeout]);

  useEffect(() => {
    // If the player was waiting, check if all times are loaded
    if (_waitingForBuffer.current) {
      if (numberNextTimesReady < bufferSize) {
        console.log(
          "Waiting until buffer is loaded. " +
            numberNextTimesReady +
            " of " +
            bufferSize +
            " loaded"
        );
        _onPlayerWaiting({
          _bufferSize: bufferSize,
          available: numberNextTimesReady,
        });

        return;
      } else {
        // all times loaded
        console.log("Buffer is fully loaded!");
        _onPlayerStateChange();
        _waitingForBuffer.current = false;
      }
    } else {
      // check if player has to stop to wait and force to full all the buffer
      if (numberNextTimesReady < minBufferReady) {
        console.log(
          "Force wait for load buffer. " +
            numberNextTimesReady +
            " of " +
            bufferSize +
            " loaded"
        );
        _waitingForBuffer.current = true;

        _onPlayerWaiting({
          _bufferSize: bufferSize,
          available: numberNextTimesReady,
        });

        return;
      }
      play();
    }
  }, [numberNextTimesReady, play]);

  useEffect(() => {
    prepareNextTimes({ numSteps: steps, howmany: minBufferReady, loop });
  }, [availableTimes, upperLimitIndex, lowerLimitIndex, currentTimeIndex]);

  useEffect(() => {
    release(); // free clock
    _waitingForBuffer.current = false; // reset buffer
  }, [currentTimeIndex]);

  useEffect(() => {
    // function timeload(data) {
    //   release(); // free clock
    //   _waitingForBuffer.current = false; // reset buffer
    // }

    // timeDimension.on("timeload", timeload);

    // timeDimension.on("limitschanged availabletimeschanged timeload", changed);
    if (autoPlay) {
      start();
    }
    return () => {
      // timeDimension.off("timeload", timeload);
      // timeDimension.off(
      //   "limitschanged availabletimeschanged timeload",
      //   changed
      // );
    };
  }, [autoPlay]);

  useEffect(() => {
    if (_intervalID.current) {
      stop();
    }
    _onPlayerStateChange();
  }, [transitionTime]);

  function _onPlayerStateChange() {
    // if (this._buttonPlayPause) {
    if (isPlaying() && steps > 0) {
      // L.DomUtil.addClass(this._buttonPlayPause, "pause");
      // L.DomUtil.removeClass(this._buttonPlayPause, "play");
    } else {
      // L.DomUtil.removeClass(this._buttonPlayPause, "pause");
      // L.DomUtil.addClass(this._buttonPlayPause, "play");
    }
    if (isWaiting() && steps > 0) {
      // L.DomUtil.addClass(this._buttonPlayPause, "loading");
    } else {
      // this._buttonPlayPause.innerHTML = "";
      // L.DomUtil.removeClass(this._buttonPlayPause, "loading");
    }
    // }
    // if (this._buttonPlayReversePause) {
    if (isPlaying() && steps < 0) {
      // L.DomUtil.addClass(this._buttonPlayReversePause, "pause");
    } else {
      // L.DomUtil.removeClass(this._buttonPlayReversePause, "pause");
    }
    if (isWaiting() && steps < 0) {
      // L.DomUtil.addClass(this._buttonPlayReversePause, "loading");
    } else {
      // this._buttonPlayReversePause.innerHTML = "";
      // L.DomUtil.removeClass(this._buttonPlayReversePause, "loading");
    }
    // }
    // if (this._buttonLoop) {
    if (loop) {
      // L.DomUtil.addClass(this._buttonLoop, "looped");
    } else {
      // L.DomUtil.removeClass(this._buttonLoop, "looped");
    }
    // }
    // if (this._sliderSpeed && !this._draggingSpeed) {
    //   var speed = getTransitionTime() || 1000; //transitionTime
    //   speed = Math.round(10000 / speed) / 10; // 1s / transition
    //   this._sliderSpeed.setValue(speed);
    // }
  }

  function _tick() {
    var maxIndex = _getMaxIndex();
    var maxForward = currentTimeIndex >= maxIndex && steps > 0;
    var maxBackward = currentTimeIndex == 0 && steps < 0;

    if (maxForward || maxBackward) {
      // we reached the last step
      if (!loop) {
        pause();
        stop();
        // fire("animationfinished");
        animationFinished();
        return;
      }
    }

    if (paused) {
      return;
    }
    // var numberNextTimesReady = 0;
    // buffer = _bufferSize.current;

    if (minBufferReady > 0) {
      getNumberNextTimesReady({ numSteps: steps, loop, howmany: bufferSize });
      return;
    }
    play();
  }

  function _onPlayerWaiting(_: any) {
    // if (steps > 0) {
    //   L.DomUtil.addClass(this._buttonPlayPause, "loading");
    //   this._buttonPlayPause.innerHTML = this._getDisplayLoadingText(
    //     evt.available,
    //     evt.buffer
    //   );
    // }
    // if (steps < 0) {
    //   L.DomUtil.addClass(this._buttonPlayReversePause, "loading");
    //   this._buttonPlayReversePause.innerHTML = this._getDisplayLoadingText(
    //     evt.available,
    //     evt.buffer
    //   );
    // }
  }

  function _getMaxIndex() {
    return Math.min(availableTimes.length - 1, upperLimitIndex || Infinity);
  }

  function start() {
    if (_intervalID.current) return;
    // setSteps(numSteps || 1);
    _waitingForBuffer.current = false;
    var startOver = false;
    if (startOver) {
      if (currentTimeIndex === _getMaxIndex()) {
        setCurrentTimeIndex({ index: lowerLimitIndex || 0, loadingTimeout });
        // startedOver = true;
      }
    }
    release();
    setPlay(true);
    _intervalID.current = window.setInterval(_tick, transitionTime);
    if (!startOver) _tick();
    _onPlayerStateChange();
  }

  function stop() {
    if (!_intervalID.current) return;
    clearInterval(_intervalID.current);
    setPlay(false);
    _intervalID.current = undefined;
    _waitingForBuffer.current = false;
    _onPlayerStateChange();
  }
  //control
  function pause() {
    setPaused(true);
  }
  //control
  function release() {
    setPaused(false);
  }
  //control
  // function getTransitionTime() {
  //   return this._transitionTime;
  // }
  //control
  function isPlaying() {
    return _intervalID.current ? true : false;
  }

  //control
  function isWaiting() {
    return _waitingForBuffer.current;
  }
  //control
  // function isLooped() {
  //   return loop;
  // }
  //control
  // function setLooped(looped) {
  //   // this._loop = looped;
  //   _onPlayerStateChange();
  // }
  //control

  //control
  // function getSteps() {
  //   return steps;
  // }

  return { start, pause, isPlaying, stop };
};

// L.TimeDimension.Player = (L.Layer || L.Class).extend({
//   includes: L.Evented || L.Mixin.Events,
// });
