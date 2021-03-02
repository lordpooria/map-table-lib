// We want to always get from source
import { MapContainer } from "react-leaflet";
import dynamic from "next/dynamic";

import "leaflet/dist/leaflet.css";


// import MyMapContainer from "../components/Player";
const MapComponent = dynamic(import("../components/MapComponent"), {
  ssr: false,
});

export default function Index() {
  return(<MapComponent />);
}
