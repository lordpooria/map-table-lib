import React from "react";

import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { HandleProps } from "./HandTypes";

const useStyle = createUseStyles({
  hand: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    right: "50%",
  },
  body: {
    position: "absolute",
    backgroundColor: "black",
    transform: "translateX(-50%)",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.8)",
    borderRadius: "99em",
  },
});

export const Hand = ({
  angle = 0,
  // name,
  length = 100,
  oppositeLength = 10,
  width = 1,
  classes,
}: HandleProps) => {
  const handClasses = useStyle();
  return (
    <div
      className={clsx(handClasses.hand, classes?.hand)}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      <div
        className={clsx(handClasses.body, classes?.handBody)}
        style={{
          width: `${width}px`,
          top: `${50 - length / 2}%`,
          bottom: `${50 - oppositeLength / 2}%`,
        }}
      />
    </div>
  );
};
