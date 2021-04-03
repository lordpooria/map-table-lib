import React from "react";
import "leaflet/dist/leaflet.css";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./small_data.json";
// export default { title: "Basic Map" };
import { storiesOf } from "@storybook/react";
import { baseLayerProps, baseMapProps, commonGeojsonProps } from "./constants";

storiesOf("Map With Table", module).add("Simple Map", () => (
  <HesabaTimeDimension
    data={data as any}
    mapProps={baseMapProps}
    layerProps={baseLayerProps}
    withTable
  />
));
