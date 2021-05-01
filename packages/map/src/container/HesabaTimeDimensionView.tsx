import React, { FC } from "react";

import { TimeComponent } from "../timer";

import { TimeDimensionViewProps } from "../types/HesabaTimeDimension";
import GeoJSONLayer from "../layer/TDGeojsonLayer";
import BottomContainer from "./BottomContainer";

const HesabaTimeDimensionView: FC<TimeDimensionViewProps> = ({
  timeProps,
  layerProps,
  ...rest
}: TimeDimensionViewProps) => {
  return (
    <>
      <BottomContainer {...rest} />
      <TimeComponent {...timeProps} />
      <GeoJSONLayer {...layerProps} />
    </>
  );
};

export default HesabaTimeDimensionView;
