import React from "react";
import "leaflet/dist/leaflet.css";
import { TileLayer, useMap } from "react-leaflet";
import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./utils/data/small_data.json";
import multiUserData from "./utils/data/multiUserData.json";

// export default { title: "Basic Map" };
import { storiesOf } from "@storybook/react";

import MapProvider from "./utils/MapProvider";
import { ExternalLegendsComponent } from "../src/types";
import NumberFormat from "react-number-format";
import LegendCustomProps from "./docs/LegendCustomProps.md";

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

const CustomLegend = () => {
  const map = useMap();
  return (
    <HesabaTimeDimension
      map={map}
      data={data as any}
      LegendComponent={CustomLegendComponent}
    />
  );
};
const MultiUserCustomLegend = () => {
  const map = useMap();
  return (
    <HesabaTimeDimension
      map={map}
      data={multiUserData as any}
      LegendComponent={CustomLegendComponent}
    />
  );
};

storiesOf("Custom Legend", module)
  .add(
    "Base legend component",
    () => (
      <MapProvider>
        <CustomLegend />
      </MapProvider>
    ),
    {
      readme: {
        content: LegendCustomProps,
        sidebar: "Please Read me2",
        // This is not necessary in normal situation. The reason for
        // `includePropTables` is needed here is because `ButtonWithPropTypes` is
        // specified in `excludePropTables` at `config.js`
      },
    }
  )
  .add(
    "Mutiuser with custom legend component",
    () => (
      <MapProvider>
        <MultiUserCustomLegend />
      </MapProvider>
    ),
    {
      readme: {
        content: LegendCustomProps,
        sidebar: "Please Read me2",
        // This is not necessary in normal situation. The reason for
        // `includePropTables` is needed here is because `ButtonWithPropTypes` is
        // specified in `excludePropTables` at `config.js`
      },
    }
  );
