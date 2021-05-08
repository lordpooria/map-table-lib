import BaseMap from "./BaseMap";
import NumberFormat from "react-number-format";
import { ExternalLegendsComponent } from "@hesaba/packages/map/dist/types/legend";

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

function MapComponent(props: any) {
  return <BaseMap LegendComponent={CustomLegendComponent} />;
}
export default MapComponent;
