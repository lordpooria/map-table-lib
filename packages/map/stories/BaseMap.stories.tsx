// import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import PlayerControl from "../src/player/PlayerControl";
import withReadme from "storybook-readme/with-readme";
import data from "./utils/data/small_data.json";
// export default { title: "Basic Map" };
import { storiesOf } from "@storybook/react";
import {
  baseLayerProps,
  baseMapProps,
  commonGeojsonProps,
} from "./utils/constants";
import BaseMapMD from "./docs/BaseMap.md";
import Provider from "./utils/MapProvider";

const BasicMap = () => {
  const map = useMap();
  return (
    <HesabaTimeDimension
      data={data as any}
      geojsonProps={commonGeojsonProps}
      map={map}
    />
  );
};

storiesOf("Basic Map", module).add(
  "Simple Map",
  () => (
    <Provider>
      <BasicMap />
    </Provider>
  ),
  {
    readme: {
      content: BaseMapMD,
      sidebar: "Please Read me2",
      // This is not necessary in normal situation. The reason for
      // `includePropTables` is needed here is because `ButtonWithPropTypes` is
      // specified in `excludePropTables` at `config.js`
      includePropTables: [PlayerControl],
    },
  }
);
