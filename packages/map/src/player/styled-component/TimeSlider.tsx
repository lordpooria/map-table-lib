import clsx from "clsx";
import React, { memo, useEffect, useState } from "react";
import { useTDStoreActions, useTDStoreState } from "../../store";
import { PlayerCompleteProps } from "../PlayerControl.types";
import {
  PlayerSlider as Slider,
  PlayerThumb,
  ValueLabelComponent,
} from "../../sliders"

interface Props {
  timeSteps: PlayerCompleteProps["timeSteps"];
  classes: PlayerCompleteProps["classes"];
  playerSliderClasses?: string;
}

function valueText(value: number) {
  return value;
}

const TimeSlider = (props: Props) => {
  const [timeSliderRange, setTimeSliderRange] = useState({ min: 0, max: 0 });
  const [timeSlider, setTimeSlider] = useState(0);

  const formattedData = useTDStoreState((state) => state.formattedData);

  const currentTimeIndex = useTDStoreState((state) => state.currentTimeIndex);

  useEffect(() => {
    if (currentTimeIndex >= 0) {
      setTimeSlider(currentTimeIndex);
    }
  }, [currentTimeIndex]);

  useEffect(() => {
    const max = formattedData.length - 1;
    if (max > 0) setTimeSliderRange({ min: 0, max });
  }, [formattedData]);

  return (
    <TimeSliderStateless
      {...props}
      {...timeSliderRange}
      timeSliderValue={timeSlider}
    />
  );
};

const TimeSliderStateless = memo(
  ({
    timeSteps,
    classes,
    playerSliderClasses: playerSlider,
    timeSliderValue,
    min,
    max,
  }: Props & { min: number; max: number; timeSliderValue: number }) => {
    const setCurrentTimeIndex = useTDStoreActions(
      (actions) => actions.setCurrentTimeIndex
    );
    return (
      <div className={clsx(playerSlider, classes?.playerSliderWrapper)}>
        {/* <PlayCircleIcon className={classes.whiteIcon} /> */}

        <Slider
          classes={classes?.playerSlider}
          valueLabelDisplay="auto"
          ThumbComponent={PlayerThumb as any}
          ValueLabelComponent={ValueLabelComponent}
          value={timeSliderValue}
          valueLabelFormat={valueText}
          step={timeSteps}
          min={min}
          max={max}
          onChange={(_, index) => {
            setCurrentTimeIndex({ index: index as number });
          }}
        />
      </div>
    );
  }
);

export default TimeSlider;
