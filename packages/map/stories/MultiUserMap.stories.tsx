import React from "react";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./utils/data/multiUserData.json";

import { storiesOf } from "@storybook/react";
import { baseMapProps } from "./utils/constants";

import CustomStyleMDPlayerThumb from "./docs/MultiUserMap.md";
import { DocsProvider } from "./docs/DocsProvider";

export const MapWithMultiUserMap = () => (
  <HesabaTimeDimension mapProps={baseMapProps} data={data as any} />
);

MapWithMultiUserMap.parameters = {
  docs: {
    page: () => {
      return (
        <DocsProvider MDFile={CustomStyleMDPlayerThumb}>
          <MapWithMultiUserMap />
        </DocsProvider>
      );
    },
  },
};
export default {
  title: "Map With MultiUser",
};
