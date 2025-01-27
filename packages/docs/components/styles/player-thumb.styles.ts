import { createStyles, makeStyles } from "@material-ui/core";

const THUMB_HEIGHT = 12;
const FOCUS_THUMB_HEIGHT = 21;
const RAIL_HEIGHT = 3.5;
const TRACK_HEIGHT = 7.5;

const SLIDER_COLOR = "#1f6a6d";
const ICON_COLOR = "#444444";
const ICON_BORDER_WIDTH = 1;

export const useSliderStyles = makeStyles((theme) =>
  createStyles({
    root: {
      color: SLIDER_COLOR,
      height: 3,
      padding: "13px 0",
    },
    thumb: {
      height: THUMB_HEIGHT,
      width: THUMB_HEIGHT / 3,
      borderRadius: 3,
      backgroundColor: SLIDER_COLOR,
      border: "1px solid currentColor",
      marginTop: -THUMB_HEIGHT / 2,
      marginLeft: -THUMB_HEIGHT / 4,
      "&:focus, &:hover, &$active": {
        boxShadow: "#888 0 2px 3px 1px",
        height: FOCUS_THUMB_HEIGHT,
        width: FOCUS_THUMB_HEIGHT / 3,
        marginTop: -FOCUS_THUMB_HEIGHT / 2,
        marginLeft: -FOCUS_THUMB_HEIGHT / 4,
      },
      "& .bar": {
        height: TRACK_HEIGHT,
        width: 1,
        backgroundColor: "#FFF",
        marginLeft: 1,
        marginRight: 1,
      },
    },
    active: {},
    track: {
      height: 3,
      bottom: 14,
    },
    rail: {
      color: SLIDER_COLOR,
      opacity: 0.5,
      height: RAIL_HEIGHT,
      bottom: 14,
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
      "&:hover": {
        backgroundColor: `${ICON_COLOR}88`,
      },
      borderWidth: ICON_BORDER_WIDTH,
    },
    root: {},
    dateClasses: {
      fontSize: 12,
      fontFamily: "arial",
    },
    amPmClasses: {
      fontSize: 12,
      fontFamily: "arial",
    },
  })
);

export const useClockStyles = makeStyles((theme) =>
  createStyles({
    root: {},

    markBody: {
      backgroundColor: `${SLIDER_COLOR} !important`,
    },
    handBody: {
      backgroundColor: `${SLIDER_COLOR} !important`,
    },
    middleCircle: {
      backgroundColor: `${ICON_COLOR} !important`,
    },
    secondMarkClasses: {
      backgroundColor: `${ICON_COLOR} !important`,
    },
  })
);
