import clsx from "clsx";
import React, { memo } from "react";

import { RenderComponent } from "../helperComponent";
import { PlayerCompleteProps } from "../../types/PlayerControl";
import {
  PlayerSlider as Slider,
  PlayerThumb,
  ValueLabelComponent,
} from "../../sliders";
import GaugeIcon from "../../assets/icons/common/GaugeIcon";

function valuetext(value: number) {
  return `${value}fps`;
}

interface Props {
  speedStep: PlayerCompleteProps["speedStep"];
  classes: PlayerCompleteProps["classes"];
  speedIcon: PlayerCompleteProps["speedIcon"];
  speedSliderClasses?: string;
  whiteIconClasses?: string;
  setTransitionTime: (_: number) => void;
  min: number;
  max: number;
  speedSliderValue: number;
}

const SpeedSlider = memo(
  ({
    speedStep,
    classes,
    speedSliderClasses,
    whiteIconClasses,
    speedIcon,
    setTransitionTime,
    min,
    max,
    speedSliderValue,
  }: Props) => {
    return (
      <div className={clsx(speedSliderClasses, classes?.speedSliderWrapper)}>
        <RenderComponent Component={speedIcon}>
          <GaugeIcon className={clsx(whiteIconClasses, classes?.icons)} />
        </RenderComponent>

        <Slider
          classes={classes?.speedSlider}
          ThumbComponent={PlayerThumb as any}
          ValueLabelComponent={ValueLabelComponent}
          style={{}}
          valueLabelDisplay="auto"
          value={speedSliderValue}
          valueLabelFormat={valuetext}
          step={speedStep}
          min={min}
          max={max}
          onChange={(_, v) => {
            setTransitionTime(1000 / +v);
          }}
        />
      </div>
    );
  }
);

export default SpeedSlider;
