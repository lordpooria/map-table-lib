// We want to always get from source
import data from "../../data/small_data.json";
import HesabaTimeDimension from "@hesaba/map";
import styles from "./styles.module.css";

export default function MapComponent() {
  return (
    <div>
      <HesabaTimeDimension
        mapProps={{
          center: [35.76498031616211, 51.33673858642578],
          zoom: 13,
          zoomControl: false,
          className: styles.map,
        }}
        data={data as any}
      />
    </div>
  );
}
