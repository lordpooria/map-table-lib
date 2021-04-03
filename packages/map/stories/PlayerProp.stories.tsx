import React from "react";
import "leaflet/dist/leaflet.css";
import { TileLayer } from "react-leaflet";
import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./small_data.json";
// export default { title: "Basic Map" };
import { storiesOf } from "@storybook/react";
import { baseLayerProps, baseMapProps, commonGeojsonProps } from "./constants";
import { useTDStoreActions } from "../src/store/reducerHooks";

const INITIAL_SPEED = 20;

const BackwardButton = () => {
  const previousTime = useTDStoreActions((actions) => actions.previousTime);

  return (
    <button onClick={() => previousTime({ numSteps: 1, loop: false })}>
      back
    </button>
  );
};

storiesOf("Player props", module)
  .add("auto play & reload", () => (
    <HesabaTimeDimension
      data={data as any}
      mapProps={baseMapProps}
      layerProps={{ ...baseLayerProps, addlastPoint: true }}
      playerProps={{ loop: true, autoPlay: true }}
      geojsonProps={commonGeojsonProps}
    />
  ))
  .add("slider and speeds props", () => (
    <HesabaTimeDimension
      data={data as any}
      mapProps={baseMapProps}
      layerProps={{ ...baseLayerProps, addlastPoint: true }}
      geojsonProps={commonGeojsonProps}
      playerProps={{
        timeSteps: 2,
        speedStep: 5,
        minSpeed: 1,
        maxSpeed: 100,
        transitionTime: 1000 / INITIAL_SPEED,
      }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </HesabaTimeDimension>
  ))
  .add("player custom button components", () => (
    <HesabaTimeDimension
      data={data as any}
      mapProps={baseMapProps}
      layerProps={{ ...baseLayerProps, addlastPoint: true }}
      geojsonProps={commonGeojsonProps}
      playerProps={{
        backwardButton: BackwardButton,
      }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </HesabaTimeDimension>
  ))
  .add("player remove components", () => (
    <HesabaTimeDimension
      data={data as any}
      mapProps={baseMapProps}
      layerProps={{ ...baseLayerProps, addlastPoint: true }}
      geojsonProps={commonGeojsonProps}
      playerProps={{
        speedIcon: false,
      }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </HesabaTimeDimension>
  )).add("player remove components2", () => (
    <HesabaTimeDimension
      data={data as any}
      mapProps={baseMapProps}
      layerProps={{ ...baseLayerProps, addlastPoint: true }}
      geojsonProps={commonGeojsonProps}
      playerProps={{
        speedSlider: false,
      }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </HesabaTimeDimension>
  )).add("extra buttons", () => (
    <HesabaTimeDimension
      data={data as any}
      mapProps={baseMapProps}
      layerProps={{ ...baseLayerProps, addlastPoint: true }}
      geojsonProps={commonGeojsonProps}
      playerProps={{
        playReverseButton: true,
      }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </HesabaTimeDimension>
  ));
