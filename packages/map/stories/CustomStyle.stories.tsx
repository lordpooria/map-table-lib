import React from "react";
import "leaflet/dist/leaflet.css";
import { TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./utils/data/small_data.json";
import MapProvider from "./utils/MapProvider";
import CustomStyleTransparentMD from "./docs/CustomStyleTransparent.md";
import CustomStyleMDPlayerThumb from "./docs/CustomStylePlayerThumb.md";
// export default { title: "Basic Map" };
import { storiesOf } from "@storybook/react";
import {
  useSliderStyles,
  useOtherClasses,
  useClockStyles,
} from "./custom.styles/custom.styles";
import {
  useSliderStyles as useSliderStyles2,
  useOtherClasses as useOtherClasses2,
  useClockStyles as useClockStyles2,
} from "./custom.styles/custom.styles2";
import {
  commonGeojsonProps,
  baseMapProps,
  baseLayerProps,
} from "./utils/constants";

const TranparentBackground = () => {
  const clockClasses = useClockStyles();
  const playerClasses = useSliderStyles();
  const otherClasses = useOtherClasses();
  const map = useMap();
  return (
    <HesabaTimeDimension
      data={data as any}
      map={map}
      // layerProps={{
      //   addlastPoint: true,
      // }}
      timeProps={{
        clockProps: { classes: clockClasses, renderNumbers: true },
        dateClasses: otherClasses.dateClasses,
        amPmClasses: otherClasses.amPmClasses,
      }}
      playerProps={{
        classes: {
          playerSlider: playerClasses,
          speedSlider: playerClasses,
          icons: otherClasses.icons,
          iconButton: otherClasses.iconButton,
          root: otherClasses.root,
        },
      }}
      geojsonProps={commonGeojsonProps}
    />
  );
};

const DifferentPlayerThumb = () => {
  const clockClasses = useClockStyles2();
  const playerClasses = useSliderStyles2();
  const otherClasses = useOtherClasses2();
  const map = useMap();
  return (
    <HesabaTimeDimension
      data={data as any}
      map={map}
      // layerProps={{  addlastPoint: true }}
      timeProps={{
        clockProps: { classes: clockClasses, renderNumbers: true },
        dateClasses: otherClasses.dateClasses,
        amPmClasses: otherClasses.amPmClasses,
      }}
      playerProps={{
        classes: {
          playerSlider: playerClasses,
          speedSlider: playerClasses,
          icons: otherClasses.icons,
          iconButton: otherClasses.iconButton,
          root: otherClasses.root,
        },
      }}
      geojsonProps={commonGeojsonProps}
    />
  );
};

storiesOf("Custom Styles", module)
  .add(
    "Transparent background time dimension",
    () => {
      return (
        <MapProvider>
          <TranparentBackground />
        </MapProvider>
      );
    },
    {
      readme: {
        content: CustomStyleTransparentMD,
        sidebar: "Please Read me2",
        // This is not necessary in normal situation. The reason for
        // `includePropTables` is needed here is because `ButtonWithPropTypes` is
        // specified in `excludePropTables` at `config.js`
      },
    }
  )
  .add(
    "With Different Player Thumb",
    () => {
      return (
        <MapProvider>
          <DifferentPlayerThumb />
        </MapProvider>
      );
    },
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
