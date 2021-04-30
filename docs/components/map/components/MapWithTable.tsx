import BaseMap from "./BaseMap";

export default function MapComponent(props: any) {
  return (
    <BaseMap
      timeProps={{ am: "AM", pm: "PM", noTimeError: "No time Available" }}
    />
  );
}
