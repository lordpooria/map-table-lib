import { useLocalStore } from "easy-peasy";
import React, { memo, useCallback, useEffect } from "react";
import { NextIcon } from "@hesaba/assets";
import { PauseIcon } from "@hesaba/assets";
import { PlayIcon } from "@hesaba/assets";
import { PreviousIcon } from "@hesaba/assets";

import { playerStoreModel } from "./playerReducer";

import { usePlayer } from "./usePlayer";

import { PlayerCompleteProps } from "../types/PlayerControl";
import { ButtonTooltip, useTranslation } from "@hesaba/theme-language";
import { useTDStoreActions } from "../store/reducerHooks";
import useStyles from "./PlayerControl.styles";
import { withStyles } from "@material-ui/core";
import clsx from "clsx";
import { PlayReverseIcon } from "@hesaba/assets";
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
}))(ButtonTooltip);

const BUFFER = 5;

const PlayerControl = memo(
  ({
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
    const { t } = useTranslation();

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
    const rootClass = clsx(playerClasses.commonPlayerRoot, classes?.root, {
      [playerClasses.playerRoot]: !classes?.root,
    });
    const iconClass = classes?.icons || playerClasses.icon;
    const speedIconClass = clsx(classes?.icons, playerClasses.marginIcon, {
      [playerClasses.icon]: !classes?.icons,
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
        className={rootClass}
      >
        <div className={playerClasses.iconContainer}>
          <RenderComponent Component={backwardButton}>
            <BorderIconButton
              title={t("player.previousTime")}
              className={classes?.iconButton}
              onClick={() => {
                previousTime({ numSteps: timeSteps, loop });
              }}
            >
              <PreviousIcon className={iconClass} />
            </BorderIconButton>
          </RenderComponent>

          <RenderComponent Component={playReverseButton}>
            <BorderIconButton
              title={t("player.playReverse")}
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
                <PauseIcon className={iconClass} />
              ) : (
                <PlayReverseIcon className={iconClass} />
              )}
            </BorderIconButton>
          </RenderComponent>

          <RenderComponent Component={playButton}>
            <BorderIconButton
              title={t("player.play")}
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
                <PauseIcon className={iconClass} />
              ) : (
                <PlayIcon className={iconClass} />
              )}
            </BorderIconButton>
          </RenderComponent>

          <RenderComponent Component={forwardButton}>
            <BorderIconButton
              title={t("player.nextTime")}
              className={classes?.iconButton}
              onClick={() => {
                nextTime({ numSteps: timeSteps, loop });
              }}
            >
              <NextIcon className={iconClass} />
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
            whiteIconClasses={speedIconClass}
            setTransitionTime={setTransitionTime}
            min={minSpeed}
            max={maxSpeed}
            speedSliderValue={state.speedSlider}
          />
        </RenderComponent>
      </div>
    );
  }
);

export default PlayerControl;
