// We want to always get from source
import data from "../../data/small_data.json";
import HesabaTimeDimension from "@hesaba/map";
import styles from "./styles.module.css";

import NumberFormat from "react-number-format";

const Tooltip = ({ properties }: { properties: Record<string, any> }) => {
  return (
    <>
      <div>
        <span
          
          style={{ color: properties.color, fontFamily: "inherit" }}
        >
          نام کاربری:
        </span>
        <NumberFormat
          format="(###) ###-####"
          mask="_"
          readOnly
          value={properties.id}
          style={{
            color: properties.color,
            borderWidth: 0,
            fontFamily: "inherit",
          }}
        />
      </div>
    </>
  );
};

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
        layerProps={{ToolTipComponent:Tooltip}}
        timeProps={{ am: "AM", pm: "PM", noTimeError: "No time Available" }}

      />
    </div>
  );
}
