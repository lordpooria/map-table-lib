import BaseMap from "./BaseMap";

function MapComponent(props: any) {
  return (
    <BaseMap
      layerProps={{
        circleProps: { radius: 10 },
        pathOptions: { fillColor: "#0FF", color: "#F0F" },
        polylineProps: { opacity: 0.4 },
      }}
    />
  );
}
export default MapComponent