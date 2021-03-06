import React from "react";
import "leaflet/dist/leaflet.css";
import { TileLayer } from "react-leaflet";
import L from "leaflet";
import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./track_bus699.json";
// export default { title: "Basic Map" };
import { storiesOf } from "@storybook/react";

var icon = L.icon({
  iconUrl: "https://img.icons8.com/cotton/2x/bus--v2.png",
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

storiesOf("Basic Map", module)
  .add("Simple Map", () => (
    <HesabaTimeDimension
      data={data as any}
      mapProps={{ center: [36.72, -4.43], zoom: 15, }}
      layerProps={{
        updateTimeDimensionMode: "replace",
        duration: "PT2M",
        updateTimeDimension: true,
      }}
    />
  ))
  .add("Geojson Props", () => (
    <HesabaTimeDimension
      data={data as any}
      mapProps={{ center: [36.72, -4.43], zoom: 15 }}
      layerProps={{
        updateTimeDimensionMode: "replace",
        addlastPoint: true,
        duration: "PT2M",
        updateTimeDimension: true,
      }}
      geojsonProps={{
        pointToLayer: function (feature, latLng) {
          if (feature.properties.hasOwnProperty("last")) {
            return new L.Marker(latLng, {
              icon: icon,
            });
          }
          return L.circleMarker(latLng);
        },
      }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </HesabaTimeDimension>
  ));
