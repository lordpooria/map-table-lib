import React from "react";
import "leaflet/dist/leaflet.css";
import { TileLayer } from "react-leaflet";
import L from "leaflet";
import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./track_bus699.json";
// export default { title: "Basic Map" };
import { storiesOf } from "@storybook/react";
import { baseLayerProps, baseMapProps, commonGeojsonProps } from "./constants";

storiesOf("Basic Map", module)
  .add("Simple Map", () => (
    <HesabaTimeDimension
      data={data as any}
      mapProps={baseMapProps}
      layerProps={baseLayerProps}
    />
  ))
  .add("Geojson & tile layer Props", () => (
    <HesabaTimeDimension
      data={data as any}
      mapProps={baseMapProps}
      layerProps={{
        ...baseLayerProps,
        updateTimeDimension: true,
      }}
      geojsonProps={commonGeojsonProps}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </HesabaTimeDimension>
  ));
