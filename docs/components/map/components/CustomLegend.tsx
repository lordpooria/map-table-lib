import BaseMap from "./BaseMap";
import { Typography } from "@material-ui/core";
import NumberFormat from "react-number-format";
import { ExternalLegendsComponent } from "@hesaba/map/dist/types/legend";

const CustomLegendComponent = ({ properties }: ExternalLegendsComponent) => {
  if (!properties) return null;

  return (
    <>
      {properties
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((prop) => (
          <div key={prop.id} style={{ padding: 4 }}>
            <NumberFormat
              format="(###) ###-####"
              mask="_"
              readOnly
              value={prop.id}
              style={{ color: prop.color }}
            />
          </div>
        ))}
    </>
  );
};

export default function MapComponent(props: any) {
  return <BaseMap LegendComponent={CustomLegendComponent} />;
}
