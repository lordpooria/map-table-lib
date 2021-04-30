import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";

import data from "./utils/data/small_data.json";
import { baseMapProps } from "./utils/constants";
import React from "react";

export const SimpleMap = () => {
  return <HesabaTimeDimension mapProps={baseMapProps} data={data as any} />;
};


export default {
  title: "Base Map",
};
