// We want to always get from source
import data from "../data/small_data.json";
import HesabaTimeDimension from "@hesaba/map";

export default function MapComponent() {
  return (
    <div>
      Hellp
      <HesabaTimeDimension
        mapProps={{
          center: [35.76498031616211, 51.33673858642578],
          zoom: 13,
          zoomControl: false,
        }}
        data={data as any}
      />
    </div>
  );
}
