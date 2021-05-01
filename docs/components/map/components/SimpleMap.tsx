import BaseMap from "./BaseMap";

function MapComponent() {
  return (
    <BaseMap
      playerProps={{
        timeSteps: 1,
      }}
    />
  );
}
export default MapComponent;
