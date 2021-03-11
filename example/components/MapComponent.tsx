// We want to always get from source
import data from "../data/track_bus699.json";
import "leaflet/dist/leaflet.css";
import HesabaTimeDimension from "@hesaba/map";
import L from "leaflet";
// import MyMapContainer from "./Player";
const defaultPosition = {
  lat: 40.72332345541449,
  lng: -73.99,
  zoom: 15,
};

var icon = L.icon({
  iconUrl: "./bus.png",
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

const MapComponent = () => (
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
  />
);

export default MapComponent;
