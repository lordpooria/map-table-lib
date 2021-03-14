import { useLocalStore } from "easy-peasy";
import React, { useEffect } from "react";
import NextIcon from "../assets/icons/common/NextIcon";
import PauseIcon from "../assets/icons/common/PauseIcon";
import PlayIcon from "../assets/icons/common/PlayIcon";
import GaugeIcon from "../assets/icons/common/GaugeIcon";
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
import { withStyles } from "@material-ui/core";
import clsx from "clsx";
import PlayReverseIcon from "../assets/icons/common/PlayReverseIcon";

const BorderIconButton = withStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.primary.main} `,
    margin: 4,
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main}55`,
    },
  },
}))(SmallIconButton);

const BUFFER = 5;
function valuetext(value: number) {
  return `${value}fps`;
}

const RenderComponent = ({ children, Component }: any) => {
  if (typeof Component === "boolean") {
    if (Component) return children;
    else return null;
  }

  return <Component />;
};

const PlayerControl = ({
  leafletMap,
  // buffer = 5,
  loop = false,
  timeSteps = 1,
  autoPlay = false,
  startedOver = true,
  minSpeed = 0.1,
  maxSpeed = 10,
  classes,
  transitionTime,
  backwardButton = true,
  forwardButton = true,
  playButton = true,
  timeSlider = true,
  speedSlider = true,
  speedIcon = true,
  playReverseButton = false,
}: PlayerCompleteProps) => {
  const [state, actions] = useLocalStore(() => playerStoreModel);
  const playerClasses = useStyles();
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
    if (typeof transitionTime === "number") {
      actions.setTransitionTime({ bufferSize: BUFFER, transitionTime });
    }
  }, [transitionTime]);

  useEffect(() => {
    const max = availableTimes.length - 1;
    if (max > 0) actions.setTimeSliderRange({ min: 0, max });
  }, [availableTimes]);

  const setTransitionTime = (transitionTime: number) => {
    actions.setTransitionTime({ bufferSize: BUFFER, transitionTime });
  };
  const { start, stop, startReverse } = usePlayer({
    // timeDimension,
    bufferSize: state.bufferSize,
    // minBufferReady ,
    loop,
    transitionTime: state.transitionTime,
    animationFinished: actions.animationFinished,
    setPlay: actions.setPlay,
    setReversePlay: actions.setReversePlay,
    steps: timeSteps,
    startedOver,
    autoPlay,
    isReversePlaying: state.isReversePlaying,
  });

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
      className={clsx(playerClasses.playerRoot, classes?.root)}
    >
      <div style={{ marginRight: 4 }}>
        <RenderComponent Component={backwardButton}>
          <BorderIconButton
            className={classes?.iconButton}
            onClick={() => {
              previousTime({ numSteps: timeSteps, loop });
            }}
          >
            <PreviousIcon
              className={clsx(playerClasses.icon, classes?.icons)}
            />
          </BorderIconButton>
        </RenderComponent>

        <RenderComponent Component={playReverseButton}>
          <BorderIconButton
            className={classes?.iconButton}
            onClick={() => {
              if (state.isReversePlaying) {
                stop();
              } else {
                startReverse();
              }
            }}
          >
            {state.isReversePlaying ? (
              <PauseIcon className={clsx(playerClasses.icon, classes?.icons)} />
            ) : (
              <PlayReverseIcon
                className={clsx(playerClasses.icon, classes?.icons)}
              />
            )}
          </BorderIconButton>
        </RenderComponent>

        <RenderComponent Component={playButton}>
          <BorderIconButton
            className={classes?.iconButton}
            onClick={() => {
              if (state.isPlaying) {
                stop();
              } else {
                start();
              }
            }}
          >
            {state.isPlaying ? (
              <PauseIcon className={clsx(playerClasses.icon, classes?.icons)} />
            ) : (
              <PlayIcon className={clsx(playerClasses.icon, classes?.icons)} />
            )}
          </BorderIconButton>
        </RenderComponent>

        <RenderComponent Component={forwardButton}>
          <BorderIconButton
            className={classes?.iconButton}
            onClick={() => {
              nextTime({ numSteps: timeSteps, loop });
            }}
          >
            <NextIcon className={clsx(playerClasses.icon, classes?.icons)} />
          </BorderIconButton>
        </RenderComponent>
      </div>

      <RenderComponent Component={timeSlider}>
        <div
          className={clsx(
            playerClasses.playerSlider,
            classes?.playerSliderWrapper
          )}
        >
          {/* <PlayCircleIcon className={classes.whiteIcon} /> */}

          <PlayerSlider
            classes={classes?.playerSlider}
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
      </RenderComponent>

      <RenderComponent Component={speedSlider}>
        <div
          className={clsx(
            playerClasses.speedSlider,
            classes?.speedSliderWrapper
          )}
        >
          <RenderComponent Component={speedIcon}>
            <GaugeIcon
              className={clsx(playerClasses.whiteIcon, classes?.icons)}
            />
          </RenderComponent>

          <PlayerSlider
            classes={classes?.speedSlider}
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
      </RenderComponent>
    </div>
  );
};

export default PlayerControl;
