import React from "react";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./utils/data/multiUserData.json";

import { baseMapProps } from "./utils/constants";

import FontFamilyAndTimeProps from "./docs/FontFamilyAndTimeProps.md";
import { DocsProvider } from "./docs/DocsProvider";
import "./custom.styles/map.css";

export const SetFontFamily = () => (
  <HesabaTimeDimension mapProps={baseMapProps} data={data as any} />
);

SetFontFamily.parameters = {
  docs: {
    page: () => {
      return (
        <DocsProvider MDFile={FontFamilyAndTimeProps}>
          <SetFontFamily />
        </DocsProvider>
      );
    },
  },
};

export const SetTimeComponentProps = () => (
  <HesabaTimeDimension mapProps={baseMapProps} data={data as any} 
  timeProps={{am:"ق.ظ",pm:"ب.ظ",}}/>
);

SetTimeComponentProps.parameters = {
  docs: {
    page: () => {
      return (
        <DocsProvider MDFile={FontFamilyAndTimeProps}>
          <SetTimeComponentProps />
        </DocsProvider>
      );
    },
  },
};
export default {
  title: "Font Family And Time Props",
};
