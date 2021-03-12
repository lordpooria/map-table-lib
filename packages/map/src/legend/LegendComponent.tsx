import React, { Fragment } from "react";
import { LegendsProps } from "./types";

const LegendComponent = ({ legends }: LegendsProps) => {
  const getColor = (d: number) => {
    return d > 1000
      ? "#800026"
      : d > 500
      ? "#BD0026"
      : d > 200
      ? "#E31A1C"
      : d > 100
      ? "#FC4E2A"
      : d > 50
      ? "#FD8D3C"
      : d > 20
      ? "#FEB24C"
      : d > 10
      ? "#FED976"
      : "#FFEDA0";
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,
      }}
    >
      {legends.map((g) => (
        <Fragment key={g}>
          <i style={{ backgroundColor: getColor(g + 1) }}>{g}</i>
          <br />
        </Fragment>
      ))}
    </div>
  );
};

export default LegendComponent;
