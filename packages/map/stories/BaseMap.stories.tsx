// import "leaflet/dist/leaflet.css";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import PlayerControl from "../src/player/PlayerControl";
import data from "./utils/data/small_data.json";
// export default { title: "Basic Map" };
import { storiesOf } from "@storybook/react";
import { baseMapProps, commonGeojsonProps } from "./utils/constants";
import Provider from "./utils/MapProvider";

import BaseMapMD from "./docs/BaseMap.md";

storiesOf("Basic Map", module).add(
  "Simple Map",
  () => (
    <HesabaTimeDimension
      mapProps={baseMapProps}
      data={data as any}
      geojsonProps={commonGeojsonProps}
    />
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
