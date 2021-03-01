import React from "react";
import "leaflet/dist/leaflet.css";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./track_bus699.json";

export default { title: "Button" };
const defaultPosition = {
  lat: 40.72332345541449,
  lng: -73.99,
  zoom: 15,
};

export const primary = () => (
  <HesabaTimeDimension
    data={data as any}
    MapProps={{ center: [36.72, -4.43], zoom: 15 }}
  />
);
