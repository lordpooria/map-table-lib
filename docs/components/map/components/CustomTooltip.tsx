import BaseMap from "./BaseMap";
import { Typography } from "@material-ui/core";
import NumberFormat from "react-number-format";

const Tooltip = ({ properties }: { properties: Record<string, any> }) => {
  return (
    <>
      <div>
        <Typography
          variant="caption"
          style={{ color: properties.color, fontFamily: "inherit" }}
        >
          نام کاربری:
        </Typography>
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

function MapComponent(props: any) {
  return <BaseMap layerProps={{ ToolTipComponent: Tooltip }} />;
}
export default MapComponent