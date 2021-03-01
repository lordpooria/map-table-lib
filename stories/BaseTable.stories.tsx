import React from "react";
// We want to always get from source
import { MapContainer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import TimeDimensionStore from "../src/store/TDContext";
import MyMapContainer from "./Player";

export default { title: "Button" };

const defaultPosition = {
  lat: 51.33673858642578,
  lng: 35.76498031616211,
  zoom: 15,
};

export const primary = () => (
  <TimeDimensionStore.Provider>
    <MapContainer
      center={[defaultPosition.lng, defaultPosition.lat]}
      zoom={defaultPosition.zoom}
      zoomControl={false}
      style={{
        width: "95vw",
        height: "95vh",
        border: " 1px solid black",
        position: "relative",
      }}
    >
      <MyMapContainer />
    </MapContainer>
  </TimeDimensionStore.Provider>
);
