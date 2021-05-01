import React, { memo } from "react";

import { RenderComponent } from "../helperComponent";
import { PlayerCompleteProps } from "../../types/PlayerControl";
import {
  PlayerThumb,
  useCommonSliderStyles,
  ValueLabelComponent,
} from "../../sliders";
import GaugeIcon from "../../assets/icons/common/GaugeIcon";
import { Slider } from "@material-ui/core";

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
    const commonClasses = useCommonSliderStyles();
    return (
      <div className={classes?.speedSliderWrapper || speedSliderClasses}>
        <RenderComponent Component={speedIcon}>
          <GaugeIcon className={whiteIconClasses} />
        </RenderComponent>

        <Slider
          classes={classes?.speedSlider || commonClasses}
          ThumbComponent={PlayerThumb as any}
          ValueLabelComponent={ValueLabelComponent}
          valueLabelDisplay="auto"
          value={speedSliderValue}
          valueLabelFormat={valuetext}
          step={speedStep}
          min={min}
          max={max}
          onChange={(_: any, v: any) => {
            setTransitionTime(1000 / +v);
          }}
        />
      </div>
    );
  }
);

export default SpeedSlider;
