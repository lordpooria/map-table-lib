## Custom Style Map Tranparent Background

This is main component of hesaba-time-dimension with custom style added to it's component

```tsx
import React from "react";

import HesabaTimeDimension from "@hesaba/map";

import data from "../data/data.json";

export default function TranparentBackground() {
  const clockClasses = useClockStyles();
  const playerClasses = useSliderStyles();
  const otherClasses = useOtherClasses();
  const map = useMap();
  return (
    <HesabaTimeDimension
      data={data as any}
      map={map}
      // layerProps={{
      //   addlastPoint: true,
      // }}
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
}
```

If you use material ui library on your project you could add styles like this:

```tsx
import { createStyles, makeStyles, SliderClassKey } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { brown } from "@material-ui/core/colors";

const THUMB_SIZE = 15;
const FOCUS_THUMB_SIZE = 18;
const RAIL_HEIGHT = 1;
const TRACK_HEIGHT = 5;

const SLIDER_COLOR = blue[500];
const ICON_COLOR = brown[500];
const ICON_BORDER_WIDTH = 3;
const ROOT_BACKGROUND_COLOR = "#DDDDDDAA";

export const useSliderStyles = makeStyles((theme) =>
  createStyles({
    root: {
      color: SLIDER_COLOR,
      height: 3,
      padding: "13px 0",
    },
    thumb: {
      height: THUMB_SIZE,
      width: THUMB_SIZE,
      borderRadius: THUMB_SIZE / 2,
      backgroundColor: SLIDER_COLOR,
      border: "1px solid currentColor",
      marginTop: -6,
      marginLeft: -3,
      // boxShadow: "#ebebeb 0 2px 2px",
      "&:focus, &:hover, &$active": {
        boxShadow: "#888 0 2px 3px 1px",
        height: FOCUS_THUMB_SIZE,
        width: FOCUS_THUMB_SIZE,
        borderRadius: FOCUS_THUMB_SIZE / 2,
        marginTop: -FOCUS_THUMB_SIZE / 2,
        marginLeft: -3.5,
      },
      "& .bar": {
        // display: inline-block !important;
        height: 9,
        width: 1,
        backgroundColor: "#FFF",
        marginLeft: 1,
        marginRight: 1,
      },
    },
    active: {},
    track: {
      height: TRACK_HEIGHT,
      bottom: 11,
    },
    rail: {
      color: SLIDER_COLOR,
      opacity: 1,
      height: RAIL_HEIGHT,
    },
  })
);

export const useOtherClasses = makeStyles((theme) =>
  createStyles({
    icons: {
      fill: ICON_COLOR,
    },
    iconButton: {
      borderColor: ICON_COLOR,
      borderWidth: ICON_BORDER_WIDTH,
    },
    root: {
      backgroundColor: ROOT_BACKGROUND_COLOR,
    },
    dateClasses: {
      backgroundColor: ROOT_BACKGROUND_COLOR,
      fontSize: 8,
      fontFamily: "roboto",
    },
    amPmClasses: {
      backgroundColor: ROOT_BACKGROUND_COLOR,
      fontSize: 8,
      fontFamily: "roboto",
    },
  })
);

export const useClockStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    clockFace: {
      backgroundColor: `${ROOT_BACKGROUND_COLOR} !important`,
    },

    markBody: {
      backgroundColor: `${SLIDER_COLOR} !important`,
    },
    handBody: {
      backgroundColor: `${SLIDER_COLOR} !important`,
    },
    middleCircle: {
      backgroundColor: `${ICON_COLOR} !important`,
    },
  })
);
```
