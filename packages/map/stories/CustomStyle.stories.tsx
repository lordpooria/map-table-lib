import React from "react";
import "leaflet/dist/leaflet.css";
import { TileLayer } from "react-leaflet";
import L from "leaflet";
import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./track_bus699.json";
// export default { title: "Basic Map" };
import { storiesOf } from "@storybook/react";
import {
  useSliderStyles,
  useOtherClasses,
  useClockStyles,
} from "./custom.styles";

var icon = L.icon({
  iconUrl: "https://img.icons8.com/cotton/2x/bus--v2.png",
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

storiesOf("Custom Styles", module)
  .add("Player Styles", () => {
    return (
      <HesabaTimeDimension
        data={data as any}
        mapProps={{ center: [36.72, -4.43], zoom: 15, zoomControl: false }}
        layerProps={{
          updateTimeDimensionMode: "replace",
          duration: "PT2M",
          updateTimeDimension: true,
        }}
      />
    );
  })
  .add("Clock Styles", () => {
    const clockClasses = useClockStyles();
    const playerClasses = useSliderStyles();
    const otherClasses = useOtherClasses();
    return (
      <HesabaTimeDimension
        data={data as any}
        mapProps={{ center: [36.72, -4.43], zoom: 15 }}
        layerProps={{
          updateTimeDimensionMode: "replace",
          addlastPoint: true,
          duration: "PT2M",
          updateTimeDimension: true,
        }}
        timeProps={{
          clockProps: { classes: clockClasses, renderNumbers:true },
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
    );
  });
