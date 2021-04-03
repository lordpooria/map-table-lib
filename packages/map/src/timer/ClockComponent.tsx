import React, { memo } from "react";
import Clock, { ClockValue } from "react-clock";
import { TimeProps } from "./TimeComponent.types";

interface Props {
  displayTime: ClockValue;
  clockProps: TimeProps["clockProps"];
}

const ClockComponent = memo(({ displayTime, clockProps }: Props) => (
  <Clock value={displayTime} size={80} renderNumbers={true} {...clockProps} />
));

export default ClockComponent;
