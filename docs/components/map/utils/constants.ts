import L from "leaflet";

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

export const commonMapProps = {
  center: [35.76498031616211, 51.33673858642578],
  zoom: 13,
  zoomControl: false,
};
