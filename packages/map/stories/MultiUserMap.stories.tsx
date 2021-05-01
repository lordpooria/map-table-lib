import React from "react";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./utils/data/multiUserData.json";

import { baseMapProps } from "./utils/constants";


export const MapWithMultiUserMap = () => (
  <HesabaTimeDimension mapProps={baseMapProps} data={data as any} />
);

export default {
  title: "Map With MultiUser",
};
