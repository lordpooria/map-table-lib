import BaseMap from "./BaseMap";
import {
  useSliderStyles,
  useOtherClasses,
  useClockStyles,
} from "../styles/transparent.styles";
import {
  useSliderStyles as useSliderStyles2,
  useOtherClasses as useOtherClasses2,
  useClockStyles as useClockStyles2,
} from "../styles/player-thumb.styles";
import { commonGeojsonProps } from "../utils/constants";
import theme from "../styles/theme";

export const MaterialThemeObject = () => {
  return <BaseMap theme={theme} />;
};

export const TransparentBackgroundTimeDimension = () => {
  const clockClasses = useClockStyles();
  const playerClasses = useSliderStyles();
  const otherClasses = useOtherClasses();
  return (
    <BaseMap
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

export const WithDifferentPlayerThumb = () => {
  const clockClasses = useClockStyles2();
  const playerClasses = useSliderStyles2();
  const otherClasses = useOtherClasses2();

  return (
    <BaseMap
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
