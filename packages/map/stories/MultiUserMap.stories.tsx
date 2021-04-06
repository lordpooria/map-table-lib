import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./utils/data/data2.json";
// export default { title: "Basic Map" };
import { storiesOf } from "@storybook/react";
import { commonGeojsonProps } from "./utils/constants";
import MapProvider from "./utils/MapProvider";
import { useMap } from "react-leaflet";
import CustomStyleMDPlayerThumb from "./docs/MultiUserMap.md";

const MultiUserMap = () => {
  const map = useMap();
  return <HesabaTimeDimension map={map} data={data as any} />;
};

storiesOf("Map With MultiUser", module).add(
  "Map With Multi User Map",
  () => (
    <MapProvider>
      <MultiUserMap />
    </MapProvider>
  ),
  {
    readme: {
      content: CustomStyleMDPlayerThumb,
      sidebar: "Please Read me2",
      // This is not necessary in normal situation. The reason for
      // `includePropTables` is needed here is because `ButtonWithPropTypes` is
      // specified in `excludePropTables` at `config.js`
    },
  }
);
