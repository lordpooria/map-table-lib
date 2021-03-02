import React from "react";
import "leaflet/dist/leaflet.css";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./track_bus699.json";
import me from "./me.json";
import { TileLayer } from "react-leaflet";
import L from "leaflet";
import { _getFeatureTimes } from "../src/layer";

export default { title: "Hesaba Map" };

var icon = L.icon({
  iconUrl: "./bus.png",
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

export const primary = () => (
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
  >
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </HesabaTimeDimension>
);

function getFeatureBetweenDates(feature, minTime, maxTime) {
  let featureStringTimes = _getFeatureTimes(feature);
  if (featureStringTimes.length === 0) {
    return feature;
  }
  let featureTimes = [];
  let l = featureStringTimes.length;
  for (let i = 0; i < l; i++) {
    let time = featureStringTimes[i];
    if (typeof time === "string") {
      time = Date.parse(time.trim());
    }
    featureTimes.push(time);
  }
  if (featureTimes[0] > maxTime || featureTimes[l - 1] < minTime) {
    return null;
  }
  return feature;
}

export const parseData = () => (
  <HesabaTimeDimension
    data={me as any}
    mapProps={{ center: [35.76498031616211, 51.33673858642578], zoom: 15 }}
    layerProps={{
      updateTimeDimensionMode: "replace",
      addlastPoint: true,
      duration: "PT2M",
      updateTimeDimension: true,
    }}
    geojsonProps={{
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
    }}
    extralLayerProps={{ getFeatureBetweenDates }}
  >
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </HesabaTimeDimension>
);
