import BaseMap from "./BaseMap";

function MapComponent(props: any) {
  return (
    <div
      style={{
        width: "70vw",
        height: "80vh",
        borderRadius: 15,
        boxShadow: "0 0 5px #444",
        overflow: "hidden",
      }}
    >
      <BaseMap withTable />
    </div>
  );
}
export default MapComponent;
