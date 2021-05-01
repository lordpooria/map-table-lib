import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";

import data from "./utils/data/small_data.json";

import { baseMapProps } from "./utils/constants";
import React from "react";
import { DocsProvider } from "./docs/DocsProvider";

export const CustomGeoJSONProps = () => (
  <HesabaTimeDimension
    mapProps={baseMapProps}
    data={data as any}
    layerProps={{
      circleProps: { radius: 10 },
      pathOptions: { fillColor: "#0FF", color: "#F0F" },
      polylineProps: {opacity:0.4},
    }}
  />
);

export default {
  title: "GeoJson Props",
};
