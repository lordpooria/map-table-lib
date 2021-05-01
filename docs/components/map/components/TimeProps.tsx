import BaseMap from "./BaseMap";

 function MapComponent(props: any) {
  return <BaseMap timeProps={{ am: "AM", pm: "PM", noTimeError: "No time Available" }} />;
}
export default MapComponent