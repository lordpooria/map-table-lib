import { createStyles, makeStyles, Typography } from "@material-ui/core";
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
  })
);

function valuetext(value: number) {
  return `${value}fps`;
}

const PlayerControl = ({
  leafletMap,
  buffer = 5,
  loop = false,
  minBufferReady = 1,
  timeSteps = 1,
  autoPlay = false,
  startedOver = false,
  minSpeed = 0.1,
  maxSpeed = 10,
  loadingTimeout = 3000,
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
  // const [sliderVal, setSliderVal] = useState(0);
  // const leafletMap = useMap();
  // const timeDimension = leafletMap.timeDimension;
  useEffect(() => {
    if (currentTimeIndex >= 0) {
      actions.setTimeSliderValue(currentTimeIndex);
    }
  }, [currentTimeIndex]);

  // const update = useCallback(() => {
  //   if (!timeDimension) {
  //     return;
  //   }

  //   if (timeDimension.getCurrentTimeIndex() >= 0) {
  //     // const date = new Date(timeDimension.getCurrentTime());
  //     // setDisplayDate(getDisplayDateFormat(date, timeZone));

  //     actions.setTimeSliderValue(timeDimension.getCurrentTimeIndex());
  //   } else {
  //     // setDisplayDate(getDisplayNoTimeError());
  //   }
  // }, [timeDimension]);

  // const onTimeLoading = useCallback((data) => {
  //   // console.log("poorialogplayer", data);
  // }, []);

  useEffect(() => {
    const max = availableTimes.length - 1;
    if (max > 0) actions.setTimeSliderRange({ min: 0, max });
  }, [availableTimes]);

  // const onTimeLimitsChanged = useCallback(() => {}, [timeDimension]);

  const setTransitionTime = (transitionTime: number) => {
    let bufferSize;
    if (typeof buffer === "function") {
      bufferSize = buffer(transitionTime, minBufferReady, loop);
    } else {
      bufferSize = buffer;
    }

    actions.setTransitionTime({ bufferSize, transitionTime });

    // if (this._intervalID) {
    //   this.stop();
    //   //   this.start(_steps);
    // }
    // _onPlayerStateChange();
    // this.fire("speedchange", {
    //   transitionTime: transitionTime,
    //   buffer: _bufferSize.current,
    // });
  };
  const { start, stop } = usePlayer({
    // timeDimension,
    bufferSize: state.bufferSize,
    minBufferReady,
    loop,
    transitionTime: state.transitionTime,
    animationFinished: actions.animationFinished,
    setPlay: actions.setPlay,
    steps: timeSteps,
    startedOver,
    autoPlay,
    loadingTimeout,
  });

  useEffect(() => {
    // const speedSlider = Math.round(10000 / state.transitionTime) / 10;
    actions.setSpeedSliderRange({
      min: minSpeed,
      max: maxSpeed,
    });
  }, [minSpeed, maxSpeed]);
  // const [_, setRef] = useStopPropagation();

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
        // onMouseOver={(event) => {
        //   const index = Number(event.currentTarget.getAttribute("data-index"));
        //   setOpen(index);
        // }}
        valueLabelDisplay="auto"
        ThumbComponent={PlayerThumb as any}
        ValueLabelComponent={ValueLabelComponent}
        value={state.timeSlider}
        // getAriaValueText={valuetext}
        // aria-labelledby="discrete-slider"
        // valueLabelDisplay="auto"
        step={timeSteps}
        // marks
        min={state.timeSliderRange.min}
        max={state.timeSliderRange.max}
        onChange={(_, index) => {
          // var value = e.target.getValue();
          setCurrentTimeIndex({ index: index as number, loadingTimeout });
          // this._sliderTimeValueChanged(value);
          // this._slidingTimeSlider = false;
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
          // aria-labelledby="discrete-slider"
          // valueLabelDisplay="auto"
          step={timeSteps}
          // marks
          min={state.speedSliderRange.min}
          max={state.speedSliderRange.max}
          onChange={(_, v) => {
            // var value = e.target.getValue();

            setTransitionTime(1000 / +v);
            // this._sliderTimeValueChanged(value);
            // this._slidingTimeSlider = false;
          }}
        />
      </div>
      <SmallIconButton
        onClick={() => {
          previousTime({ numSteps: timeSteps, loadingTimeout, loop });
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
          nextTime({ numSteps: timeSteps, loadingTimeout, loop });
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
