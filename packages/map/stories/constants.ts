import L, { LatLngExpression } from "leaflet";
import { Mode } from "../src/types/common";

var icon = L.icon({
  iconUrl: "https://img.icons8.com/cotton/2x/bus--v2.png",
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

export const commonGeojsonProps = {
  style: function (feature) {
    return { color: feature.properties.color };
  },

  pointToLayer: function (feature, latLng) {
    return L.circleMarker(latLng, {
      radius: 7,
      color: feature.properties.color,
      fillColor: feature.properties.color,
      weight: 2,
      opacity: 0.7,
      fillOpacity: 0.1,
    });
  },
};
export const trackGeojsonProps = {
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
  center: [35.76498031616211, 51.33673858642578] as LatLngExpression,
  zoom: 13,
  zoomControl: false,
};
