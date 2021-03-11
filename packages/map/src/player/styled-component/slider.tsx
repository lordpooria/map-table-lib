import * as React from "react";
import {
  Slider,
  Tooltip,
  ValueLabelProps,
  withStyles,
} from "@material-ui/core";

export const PlayerSlider = withStyles({
  root: {
    color: "#f1a83a",
    height: 3,
    padding: "13px 0",
  },
  thumb: {
    height: 12,
    width: 4,
    borderRadius: 3,
    backgroundColor: "#f1a83a",
    border: "1px solid currentColor",
    marginTop: -6,
    marginLeft: -3,
    // boxShadow: "#ebebeb 0 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#888 0 2px 3px 1px",
      height: 21,
      width: 7,
      marginTop: -10,
      marginLeft: -3.5,
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
    color: "#f1a83a",
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

/**
 * @ignore - internal component.
 */
export function ValueLabelComponent(props: ValueLabelProps) {
  const { children, open, value } = props;
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

