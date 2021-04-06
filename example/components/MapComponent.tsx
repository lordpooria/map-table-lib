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
    <Provider>
      <BasicMap />
    </Provider>
  );
}
