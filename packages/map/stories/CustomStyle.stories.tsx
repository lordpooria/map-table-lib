import React from "react";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./utils/data/small_data.json";

// export default { title: "Basic Map" };
import {
  useSliderStyles,
  useOtherClasses,
  useClockStyles,
} from "./custom.styles/custom.styles";
import {
  useSliderStyles as useSliderStyles2,
  useOtherClasses as useOtherClasses2,
  useClockStyles as useClockStyles2,
} from "./custom.styles/custom.styles2";
import { commonGeojsonProps, baseMapProps } from "./utils/constants";
import { DocsProvider } from "./docs/DocsProvider";

export const TransparentBackgroundTimeDimension = () => {
  const clockClasses = useClockStyles();
  const playerClasses = useSliderStyles();
  const otherClasses = useOtherClasses();
  return (
    <HesabaTimeDimension
      data={data as any}
      mapProps={baseMapProps}
      timeProps={{
        clockProps: { classes: clockClasses, renderNumbers: true },
        dateClasses: otherClasses.dateClasses,
        amPmClasses: otherClasses.amPmClasses,
        dateWrapperClasses: otherClasses.root,
      }}
      playerProps={{
        classes: {
          playerSlider: playerClasses,
          speedSlider: playerClasses,
          icons: otherClasses.icons,
          iconButton: otherClasses.iconButton,
          root: otherClasses.root,
        },
      }}
      geojsonProps={commonGeojsonProps}
    />
  );
};

export const WithDifferentPlayerThumb = () => {
  const clockClasses = useClockStyles2();
  const playerClasses = useSliderStyles2();
  const otherClasses = useOtherClasses2();

  return (
    <HesabaTimeDimension
      data={data as any}
      mapProps={baseMapProps}
      timeProps={{
        clockProps: { classes: clockClasses, renderNumbers: true },
        dateClasses: otherClasses.dateClasses,
        amPmClasses: otherClasses.amPmClasses,
      }}
      playerProps={{
        classes: {
          playerSlider: playerClasses,
          speedSlider: playerClasses,
          icons: otherClasses.icons,
          iconButton: otherClasses.iconButton,
          root: otherClasses.root,
        },
      }}
      geojsonProps={commonGeojsonProps}
    />
  );
};

export default {
  title: "Custom Styles",
};
