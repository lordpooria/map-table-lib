import React from "react";

interface Props {}

const Overlay = ({}: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        overflow: "hidden",
      }}
    ></div>
  );
};

export default Overlay;
