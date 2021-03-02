import { Typography } from "@material-ui/core";
import { useLocalStore } from "easy-peasy";
import React, { useEffect } from "react";
import NextIcon from "../assets/icons/common/NextIcon";
import PauseIcon from "../assets/icons/common/PauseIcon";
import PlayIcon from "../assets/icons/common/PlayIcon";
import PreviousIcon from "../assets/icons/common/PreviousIcon";

import { playerStoreModel } from "./playerReducer";
import {
  PlayerSlider,
  PlayerThumb,
  ValueLabelComponent,
} from "./styled-component/slider";
import { usePlayer } from "./usePlayer";
// import { useMap } from "react-leaflet";

import { PlayerCompleteProps } from "./PlayerControl.types";
import { SmallIconButton } from "./styled-component/StyledButton";
import { useTDStoreActions, useTDStoreState } from "../store/reducerHooks";
import useStyles from "./PlayerControl.styles";

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
}: // loadingTimeout = 3000,
PlayerCompleteProps) => {
  const [state, actions] = useLocalStore(() => playerStoreModel);
  const classes = useStyles();
  const availableTimes = useTDStoreState((state) => state.availableTimes);
  const currentTimeIndex = useTDStoreState((state) => state.currentTimeIndex);
  const setCurrentTimeIndex = useTDStoreActions(
    (actions) => actions.setCurrentTimeIndex
  );
  const previousTime = useTDStoreActions((actions) => actions.previousTime);
  const nextTime = useTDStoreActions((actions) => actions.nextTime);
  // const [sliderVal, setSliderVal] = useState(0);
  // const leafletMap = useMap();
  // const timeDimension = leafletMap.timeDimension;
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
    bufferSize: state.bufferSize,
    loop,
    transitionTime: state.transitionTime,
    animationFinished: actions.animationFinished,
    setPlay: actions.setPlay,
    steps: timeSteps,
    startedOver,
    autoPlay,
  });

  useEffect(() => {
    actions.setSpeedSliderRange({
      min: minSpeed,
      max: maxSpeed,
    });
  }, [minSpeed, maxSpeed]);

  return (
    <div
      onMouseEnter={() => leafletMap.dragging.disable()}
      onMouseLeave={() => leafletMap.dragging.enable()}
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
      <PlayerSlider
        style={{ flex: 3, minWidth: 100, margin: "0 8px" }}
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

      <div
        style={{
          display: "flex",
          flex: 1,
          margin: "0 8px",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            color: "#FFF",
            fontSize: 8,
            backgroundColor: "#555",
            padding: "0 4px",
            margin: "0 4px",
          }}
        >
          FPS
        </Typography>
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
      {/* <IconButton onClick={takeSnapshot}>snapshot</IconButton> */}

      {/* <button
        onClick={() => {
          if (state.isRecording) {
            stopRecording();
          } else {
            startRecording();
          }
        }}
      >
        {state.isRecording ? "stop" : "record"}
      </button> */}
    </div>
  );
};

export default PlayerControl;
