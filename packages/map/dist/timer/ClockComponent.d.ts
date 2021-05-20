import React from "react";
import { ClockValue } from "@heasaba/clock";
import { TimeProps } from "./TimeComponent.types";
interface Props {
    displayTime: ClockValue;
    clockProps: TimeProps["clockProps"];
}
declare const ClockComponent: React.MemoExoticComponent<({ displayTime, clockProps }: Props) => JSX.Element>;
export default ClockComponent;
