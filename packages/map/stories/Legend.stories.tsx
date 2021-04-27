import React from "react";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./utils/data/small_data.json";
import multiUserData from "./utils/data/multiUserData.json";

import { ExternalLegendsComponent } from "../src/types";
import NumberFormat from "react-number-format";
import LegendCustomProps from "./docs/LegendCustomProps.md";
import { baseMapProps } from "./utils/constants";
import { DocsProvider } from "./docs/DocsProvider";

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

export const BaseLegendComponent = () => (
  <HesabaTimeDimension
    mapProps={baseMapProps}
    data={data as any}
    LegendComponent={CustomLegendComponent}
  />
);

BaseLegendComponent.parameters = {
  docs: {
    page: () => {
      return (
        <DocsProvider MDFile={LegendCustomProps}>
          <BaseLegendComponent />
        </DocsProvider>
      );
    },
  },
};
export const MutiuserWithCustomLegendComponent = () => (
  <HesabaTimeDimension
    mapProps={baseMapProps}
    data={multiUserData as any}
    LegendComponent={CustomLegendComponent}
  />
);

MutiuserWithCustomLegendComponent.parameters = {
  docs: {
    page: () => {
      return (
        <DocsProvider MDFile={LegendCustomProps}>
          <MutiuserWithCustomLegendComponent />
        </DocsProvider>
      );
    },
  },
};

export default {
  title: "Custom Legend",
};
