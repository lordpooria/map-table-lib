import { useRef } from "react";
import {
  MapContainer,
  useMap,
  TileLayer,
  Marker,
  GeoJSON,
} from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import HesabaTimeDimenstion, {
  useLayer,
  _getFeatureTimes,
  PlayerController,
  TimeComponent,
} from "@hesaba/map";
import data from "../data/track_bus699.json";

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
var icon = L.icon({
  iconUrl: "img/bus.png",
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

function MyMapContainer() {
  const leafletMapRef = useMap();
  const ref = useRef();
  // useController(leafletMapRef);
  const addLayer = (layer: any) => {
    layer.addTo(leafletMapRef);
  };
  const removeLayer = (layer: any) => {
    leafletMapRef.removeLayer(layer);
  };
  useLayer(
    data as any,
    {
      pointToLayer: function (feature, latLng) {
        if (feature.properties.hasOwnProperty("last")) {
          return new L.Marker(latLng, {
            icon: icon,
          });
        }
        return L.circleMarker(latLng);
      },
    },
    {
      updateTimeDimension: true,
      updateTimeDimensionMode: "replace",
      duration: "PT10M",
    },
    { addLayer, removeLayer }
  );

  return (
    <>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <HesabaTimeDimenstion data={data} map={leafletMapRef}/> */}
      {/* <Controller
        loop={true}
        minBufferReady={1}
        autoPlay={true}
        startOver={true}
      /> */}
      {/* <TimeComponent timeZone="" /> */}

      <PlayerController leafletMap={leafletMapRef} />

      {/* <LegendComponent legends={[0, 10, 20, 50, 100, 200, 500, 1000]} /> */}
    </>
  );
}

export default MyMapContainer;
