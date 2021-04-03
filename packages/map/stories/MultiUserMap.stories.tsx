import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./data2.json";
// export default { title: "Basic Map" };
import { storiesOf } from "@storybook/react";
import { baseLayerProps, baseMapProps, commonGeojsonProps } from "./constants";

storiesOf("Map With MultiUser", module).add("Simple Map", () => (
  <HesabaTimeDimension
    data={data as any}
    mapProps={baseMapProps}
    layerProps={{
      updateTimeDimensionMode: "replace",
      addlastPoint: true,
      duration: "PT2M",
      updateTimeDimension: true,
    }}
    geojsonProps={commonGeojsonProps}
  />
));
