// We want to always get from source
import data from "../data/small_data.json";
import HesabaTimeDimension, { useTDStoreActions } from "@hesaba/map";
import L from "leaflet";
import { TileLayer, useMap } from "react-leaflet";
import Provider from "./map/Provider";
// import MyMapContainer from "./Player";

const BasicMap = () => {
  const map = useMap();
  return <HesabaTimeDimension data={data as any} map={map} />;
};

export default function MapComponent() {
  return (
    <HesabaTimeDimension
      mapProps={{
        center: [35.76498031616211, 51.33673858642578],
        zoom: 13,
        zoomControl: false,
        style: { width: "95vw", height: "95vh", border: " 1px solid black" },
      }}
      data={data as any}
    />
  );
}
