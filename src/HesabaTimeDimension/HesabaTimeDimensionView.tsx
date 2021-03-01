import React from "react";
import { useLayer } from "../layer";
import { GeoJsonObject } from "geojson";
import L from "leaflet";
import { PlayerController } from "../player";
import { TimeComponent } from "../timer";
import LegendComponent from "../legend/LegendComponent";
import { useMap } from "react-leaflet";

interface Props {
  data: GeoJsonObject;
  // addLayer: any;
  // removeLayer: any;
  // map: Map;
}
var icon = L.icon({
  iconUrl: "img/bus.png",
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});
const HesabaTimeDimensionView = ({
  data,
}: // addLayer,
// removeLayer,
// map,
Props) => {
  const map = useMap();
  useLayer(
    data as any,
    map,
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
      duration: "PT2M",
      addlastPoint: true,
    },
    {}
  );
  return (
    <>
      <PlayerController leafletMap={map} />
      <TimeComponent />
      <LegendComponent legends={[0, 1, 2, 3, 4]} />
    </>
  );
};

export default HesabaTimeDimensionView;
