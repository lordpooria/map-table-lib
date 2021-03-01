import React from "react";
import TDProvider from "./Provider";
import { GeoJsonObject } from "geojson";
import { TileLayer, MapContainer } from "react-leaflet";
// import { Map } from "leaflet";
import HesabaTimeDimensionView from "./HesabaTimeDimensionView";
const defaultPosition = {
  lat: 40.72332345541449,
  lng: -73.99,
  zoom: 15,
};
interface Props {
  data: GeoJsonObject;
  // map: Map;
  // addLayer: any;
  // removeLayer: any;
}

const HesabaTimeDimension = ({ data }: Props) => {
  
 
  return (
    <TDProvider>
      <MapContainer
        center={[36.72, -4.43]}
        zoom={defaultPosition.zoom}
        zoomControl={false}
        style={{
          width: "95vw",
          height: "95vh",
          border: " 1px solid black",
          position: "relative",
        }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <HesabaTimeDimensionView data={data} />
      </MapContainer>
    </TDProvider>
  );
};

export default HesabaTimeDimension;
