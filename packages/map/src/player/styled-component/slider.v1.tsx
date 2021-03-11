import * as React from "react";
import {
  Slider,
  Tooltip,
  ValueLabelProps,
  withStyles,
} from "@material-ui/core";

export const PlayerSlider = withStyles({
  root: {
    color: "#1f6a6d",
    height: 3,
    padding: "13px 0",
  },
  thumb: {
    height: 9,
    width: 9,
    backgroundColor: "#1f6a6d",
    border: "1px solid currentColor",
    marginTop: -3,
    marginLeft: -3,
    // boxShadow: "#ebebeb 0 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#888 0 2px 3px 1px",
      width: 14,
      height: 14,
      marginTop: -6,
      marginLeft: -6,
    },
    "& .bar": {
      // display: inline-block !important;
      height: 7.5,
      width: 1,
      backgroundColor: "#FFF",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: "#1f6a6d",
    opacity: 1,
    height: 0.5,
  },
})(Slider);

export const PlayerThumb = React.forwardRef((props: any, ref) => {
  return (
    <span {...props} ref={ref}>
      {/* <span className="bar" />
      <span className="bar" /> */}
    </span>
  );
});

export function ValueLabelComponent(props: ValueLabelProps) {
  return <Tooltip title={props.value}>{props.children}</Tooltip>;
}
