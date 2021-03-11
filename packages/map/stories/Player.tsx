import React, { useRef } from "react";
import {
  MapContainer,
  useMap,
  TileLayer,
  Marker,
  GeoJSON,
} from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import { useGeoJSONLayer } from "../src/layer/leaflet.timedimension.layer.geojson.copy";
import data from "./me.json";
import LegendComponent from "../src/legend/LegendComponent";
import TimerComponent from "../src/timer/TimerComponent";

import PlayerControl from "../src/player/PlayerControl";
import { _getFeatureTimes } from "../src/layer/layer.util";

interface Props {}

function getFeatureBetweenDates(feature, minTime, maxTime) {
  let featureStringTimes = _getFeatureTimes(feature);
  if (featureStringTimes.length === 0) {
    return feature;
  }
  let featureTimes = [];
  let l = featureStringTimes.length;
  for (let i = 0; i < l; i++) {
    let time = featureStringTimes[i];
    if (typeof time === "string" || time instanceof String) {
      time = Date.parse(time.trim());
    }
    featureTimes.push(time);
  }
  if (featureTimes[0] > maxTime || featureTimes[l - 1] < minTime) {
    return null;
  }
  return feature;
}

function MyMapContainer() {
  const leafletMapRef = useMap();
  const ref = useRef();
  // useController(leafletMapRef);
  useGeoJSONLayer(
    data as any,
    {
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
      style: function (feature) {
        return { color: feature.properties.color };
      },
    },
    {
      updateTimeDimension: true,
      updateTimeDimensionMode: "replace",
      duration: "PT10M",
    },
    { getFeatureBetweenDates }
  );

  return (
    <>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Controller
            loop={true}
            minBufferReady={1}
            autoPlay={true}
            startOver={true}
          /> */}
      <TimerComponent timeZone="" />

      <PlayerControl />

      <LegendComponent legends={[0, 10, 20, 50, 100, 200, 500, 1000]} />
    </>
  );
}

export default MyMapContainer;
