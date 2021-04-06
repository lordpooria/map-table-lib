import React from "react";
import { PlayerCompleteProps } from "../PlayerControl.types";
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
declare const SpeedSlider: React.MemoExoticComponent<({ speedStep, classes, speedSliderClasses, whiteIconClasses, speedIcon, setTransitionTime, min, max, speedSliderValue, }: Props) => JSX.Element>;
export default SpeedSlider;
