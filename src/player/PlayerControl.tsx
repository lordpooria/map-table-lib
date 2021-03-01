import { createStyles, makeStyles } from "@material-ui/core";
import { useLocalStore } from "easy-peasy";
import React, { useEffect } from "react";
import NextIcon from "../assets/icons/common/NextIcon";
import PauseIcon from "../assets/icons/common/PauseIcon";
import PlayIcon from "../assets/icons/common/PlayIcon";
import GaugeIcon from "../assets/icons/common/GaugeIcon";
import PlayCircleIcon from "../assets/icons/common/PlayCircleIcon";
import PreviousIcon from "../assets/icons/common/PreviousIcon";

import { playerStoreModel } from "./playerReducer";
import {
  PlayerSlider,
  PlayerThumb,
  ValueLabelComponent,
} from "./styled-component/slider";
import { usePlayer } from "./usePlayer";

// import { useMap } from "react-leaflet";

import { PlayerCompleteProps } from "./types";
import { SmallIconButton } from "./styled-component/StyledButton";
import { useTDStoreActions, useTDStoreState } from "../store/reducerHooks";

const useStyle = makeStyles(() =>
  createStyles({
    playerContainer: {
      padding: 10,
      backgroundColor: "rgba(255,255,255,0.2)",
      zIndex: 1000,
      position: "absolute",
      bottom: 20,
      left: 20,

      width: "50vw",
      minWidth: 300,
    },
    controller: {
      display: "flex",
      alignItems: "center",
    },
    icon: { width: "0.75em", height: "0.75em" },
    playIcon: {
      width: "0.75em",
      height: "0.75em",
      borderRadius: "0.5em",
      border: "solid 2px #000",
    },
    whiteIcon: { width: "0.75em", height: "0.75em", margin: "0 4px" },
  })
);

function valuetext(value: number) {
  return `${value}fps`;
}

const PlayerControl = ({
  leafletMap,
  buffer = 5,
  loop = false,
  timeSteps = 1,
  autoPlay = false,
  startedOver = false,
  minSpeed = 0.1,
  maxSpeed = 10,
  // loadingTimeout = 3000,
}: PlayerCompleteProps) => {
  const [state, actions] = useLocalStore(() => playerStoreModel);
  const classes = useStyle();
  const availableTimes = useTDStoreState((state) => state.availableTimes);
  const currentTimeIndex = useTDStoreState((state) => state.currentTimeIndex);
  const setCurrentTimeIndex = useTDStoreActions(
    (actions) => actions.setCurrentTimeIndex
  );
  const previousTime = useTDStoreActions((actions) => actions.previousTime);
  const nextTime = useTDStoreActions((actions) => actions.nextTime);
  
  // const leafletMap = useMap();
  
  useEffect(() => {
    if (currentTimeIndex >= 0) {
      actions.setTimeSliderValue(currentTimeIndex);
    }
  }, [currentTimeIndex]);


  useEffect(() => {
    const max = availableTimes.length - 1;
    if (max > 0) actions.setTimeSliderRange({ min: 0, max });
  }, [availableTimes]);



  const setTransitionTime = (transitionTime: number) => {
    actions.setTransitionTime({ bufferSize: buffer, transitionTime });

  };
  const { start, stop } = usePlayer({
    // timeDimension,
    bufferSize: state.bufferSize,
    // minBufferReady ,
    loop,
    transitionTime: state.transitionTime,
    animationFinished: actions.animationFinished,
    setPlay: actions.setPlay,
    steps: timeSteps,
    startedOver,
    autoPlay,
  });

  // const { startRecording, stopRecording } = useVideoRecorder({
  //   setRecording: actions.setRecording,
  // });

  useEffect(() => {
    actions.setSpeedSliderRange({
      min: minSpeed,
      max: maxSpeed,
    });
  }, [minSpeed, maxSpeed]);

  return (
    <div
      onMouseEnter={() => {
        leafletMap.dragging.disable();
        leafletMap.doubleClickZoom.disable();
      }}
      onMouseLeave={() => {
        leafletMap.dragging.enable();
        leafletMap.doubleClickZoom.enable();
      }}
      style={{
        position: "absolute",
        display: "flex",
        width: "60%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        zIndex: 1000,
        bottom: 20,
        left: 20,
        borderRadius: "50em",
        // border: "solid 2px #444",
        backgroundColor: "rgba(68,68,68,0.3)",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 3,
          minWidth: 100,
          marginRight: 8,
          alignItems: "center",
        }}
      >
        <PlayCircleIcon className={classes.whiteIcon} />
        <PlayerSlider
          style={{}}
          valueLabelDisplay="auto"
          ThumbComponent={PlayerThumb as any}
          ValueLabelComponent={ValueLabelComponent}
          value={state.timeSlider}
          step={timeSteps}
          min={state.timeSliderRange.min}
          max={state.timeSliderRange.max}
          onChange={(_, index) => {
            setCurrentTimeIndex({ index: index as number });
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          margin: "0 8px",
          alignItems: "center",
        }}
      >
        <GaugeIcon className={classes.whiteIcon} />
        <PlayerSlider
          ThumbComponent={PlayerThumb as any}
          ValueLabelComponent={ValueLabelComponent}
          style={{}}
          valueLabelDisplay="auto"
          value={state.speedSlider}
          valueLabelFormat={valuetext}
          step={timeSteps}
          min={state.speedSliderRange.min}
          max={state.speedSliderRange.max}
          onChange={(_, v) => {
            setTransitionTime(1000 / +v);
          }}
        />
      </div>
      <SmallIconButton
        onClick={() => {
          previousTime({ numSteps: timeSteps, loop });
        }}
      >
        <PreviousIcon className={classes.icon} />
      </SmallIconButton>
      <SmallIconButton
        onClick={() => {
          if (state.isPlaying) {
            stop();
          } else {
            start();
          }
        }}
      >
        {state.isPlaying ? (
          <PauseIcon className={classes.icon} />
        ) : (
          <PlayIcon className={classes.icon} />
        )}
      </SmallIconButton>
      <SmallIconButton
        onClick={() => {
          nextTime({ numSteps: timeSteps, loop });
        }}
      >
        <NextIcon className={classes.icon} />
      </SmallIconButton>
    </div>
  );
};

export default PlayerControl;
