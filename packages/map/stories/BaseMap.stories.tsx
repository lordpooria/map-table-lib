import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";

import data from "./utils/data/small_data.json";
import { storiesOf } from "@storybook/react";
import { baseMapProps } from "./utils/constants";
import BaseMapMD from "./docs/BaseMap.md";
import React, { useState } from "react";
import { DocsProvider } from "./docs/DocsProvider";

export const SimpleMap = () => {
  return <HesabaTimeDimension mapProps={baseMapProps} data={data as any} />;
};

SimpleMap.parameters = {
  docs: {
    page: () => {
      return (
        <DocsProvider MDFile={BaseMapMD}>
          <SimpleMap />
        </DocsProvider>
      );
    },
  },
};

export default {
  title: "Base Map",
};
