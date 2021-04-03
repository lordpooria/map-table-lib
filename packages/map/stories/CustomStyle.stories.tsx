import React from "react";
import "leaflet/dist/leaflet.css";
import { TileLayer } from "react-leaflet";
import L from "leaflet";
import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./small_data.json";
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
import { commonGeojsonProps, baseMapProps, baseLayerProps } from "./constants";

storiesOf("Custom Styles", module)
  .add("Version 1", () => {
    const clockClasses = useClockStyles();
    const playerClasses = useSliderStyles();
    const otherClasses = useOtherClasses();
    return (
      <HesabaTimeDimension
        data={data as any}
        mapProps={baseMapProps}
        layerProps={{
          ...baseLayerProps,
          addlastPoint: true,
        }}
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
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </HesabaTimeDimension>
    );
  })
  .add("Version 2", () => {
    const clockClasses = useClockStyles2();
    const playerClasses = useSliderStyles2();
    const otherClasses = useOtherClasses2();
    return (
      <HesabaTimeDimension
        data={data as any}
        mapProps={baseMapProps}
        layerProps={{ ...baseLayerProps, addlastPoint: true }}
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
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </HesabaTimeDimension>
    );
  });
