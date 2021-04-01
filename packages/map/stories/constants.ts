import L, { LatLngExpression } from "leaflet";
import { Mode } from "../src/types/common";

var icon = L.icon({
  iconUrl: "https://img.icons8.com/cotton/2x/bus--v2.png",
  iconSize: [22, 22],
  iconAnchor: [11, 11],
  
});

export const commonGeojsonProps = {
  pointToLayer: function (feature, latLng) {
    if (feature.properties.hasOwnProperty("last")) {
      return new L.Marker(latLng, {
        icon: icon,
      });
    }
    return L.circleMarker(latLng);
  },
};

export const baseLayerProps = {
  updateTimeDimensionMode: "replace" as Mode,
  duration: "PT2M",
  updateTimeDimension: true,
};

export const baseMapProps = {
  center: [36.72, -4.43] as LatLngExpression,
  zoom: 15,
  zoomControl: false,
};
