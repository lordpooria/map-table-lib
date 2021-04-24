import { useLocalStore } from "easy-peasy";
import React, { useCallback, useEffect } from "react";
import NextIcon from "../assets/icons/common/NextIcon";
import PauseIcon from "../assets/icons/common/PauseIcon";
import PlayIcon from "../assets/icons/common/PlayIcon";
import PreviousIcon from "../assets/icons/common/PreviousIcon";

import { playerStoreModel } from "./playerReducer";

import { usePlayer } from "./usePlayer";

import { PlayerCompleteProps } from "../types/PlayerControl";
import { SmallIconButton } from "@hesaba/theme-language"
import { useTDStoreActions } from "../store/reducerHooks";
import useStyles from "./PlayerControl.styles";
import { withStyles } from "@material-ui/core";
import clsx from "clsx";
import PlayReverseIcon from "../assets/icons/common/PlayReverseIcon";
import TimeSlider from "./styled-component/TimeSlider";
import { RenderComponent } from "./helperComponent";
import SpeedSlider from "./styled-component/SpeedSlider";

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

const PlayerControl = ({
  leafletMap,
  loop = false,
  timeSteps = 1,
  speedStep = 1,
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

  const previousTime = useTDStoreActions((actions) => actions.previousTime);
  const nextTime = useTDStoreActions((actions) => actions.nextTime);

  useEffect(() => {
    if (typeof transitionTime === "number") {
      actions.setTransitionTime({ bufferSize: BUFFER, transitionTime });
    }
  }, [transitionTime]);

  const setTransitionTime = useCallback((transitionTime: number) => {
    actions.setTransitionTime({ bufferSize: BUFFER, transitionTime });
  }, []);

  const { start, stop, startReverse } = usePlayer({
    bufferSize: state.bufferSize,

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
        <TimeSlider
          timeSteps={timeSteps}
          classes={classes}
          playerSliderClasses={playerClasses.playerSlider}
        />
      </RenderComponent>

      <RenderComponent Component={speedSlider}>
        <SpeedSlider
          speedStep={speedStep}
          classes={classes}
          speedIcon={speedIcon}
          speedSliderClasses={playerClasses.speedSlider}
          whiteIconClasses={playerClasses.whiteIcon}
          setTransitionTime={setTransitionTime}
          min={minSpeed}
          max={maxSpeed}
          speedSliderValue={state.speedSlider}
        />
      </RenderComponent>
    </div>
  );
};

export default PlayerControl;
