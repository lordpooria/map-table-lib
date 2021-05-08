import React from "react";
import clsx from "clsx";
import { MarkProps } from "./MarkTypes";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  mark: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    right: "50%",
  },
  body: {
    position: "absolute",
    backgroundColor: "#000",
    transform: "translateX(-50%)",
    borderRadius: "99em",
    // boxShadow: "2px 2px 5px rgba(0,0,0,0.4)",
  },
  number: {
    position: "absolute",
    left: "-40px",
    width: "80px",
    textAlign: "center",
    // textShadow: "2px 2px 5px rgba(0,0,0,0.4)",
  },
});

export const Mark = ({
  angle = 0,
  length,
  // name,
  width = 1,
  number,
  classes,
}: MarkProps) => {
  const markClasses = useStyle();
  return (
    <div
      className={clsx(markClasses.mark, classes?.mark)}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      <div
        className={clsx(markClasses.body, classes?.markBody)}
        style={{
          width: `${width}px`,
          top: 0,
          bottom: `${100 - length / 2}%`,
        }}
      />
      {number && (
        <div
          className={markClasses.number}
          style={{
            transform: `rotate(-${angle}deg)`,
            top: `${length / 2}%`,
          }}
        >
          {number}
        </div>
      )}
    </div>
  );
};
