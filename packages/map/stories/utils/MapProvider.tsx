import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Props {
  children: React.ReactNode;
}

const MapProvider = ({ children }: Props) => {
  return (
    <MapContainer
      style={{ height: "90vh", width: "90vw" }}
      center={[35.76498031616211, 51.33673858642578]}
      zoom={13}
      zoomControl={false}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
};

export default MapProvider;
