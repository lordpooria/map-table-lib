// We want to always get from source
import { MapContainer } from "react-leaflet";
import dynamic from "next/dynamic";
import data from "../data/track_bus699.json";
import "leaflet/dist/leaflet.css";
import HesabaTimeDimension from "hesaba-timedimension";

import MyMapContainer from "./Player";
const defaultPosition = {
  lat: 40.72332345541449,
  lng: -73.99,
  zoom: 15,
};

const MapComponent = () => <HesabaTimeDimension data={data as any}/>;

export default MapComponent;
