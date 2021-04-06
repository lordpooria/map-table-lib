import data from "./utils/data/small_data.json";
import { TileLayer } from "react-leaflet";
import L from "leaflet";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import { storiesOf } from "@storybook/react";
import { _getFeatureTimes } from "../src/utils/layer.util";
import { baseMapProps, commonGeojsonProps } from "./utils/constants";
export default { title: "Different Data Map" };

function getFeatureBetweenDates(feature, minTime, maxTime) {
  let featureStringTimes = _getFeatureTimes(feature);
  console.log(featureStringTimes)
  if (featureStringTimes.length === 0) {
    return feature;
  }
  let featureTimes = [];
  let l = featureStringTimes.length;
  for (let i = 0; i < l; i++) {
    let time = featureStringTimes[i];
    if (typeof time === "string") {
      time = Date.parse(time.trim());
    }
    featureTimes.push(time);
  }
  if (featureTimes[0] > maxTime || featureTimes[l - 1] < minTime) {
    return null;
  }
  return feature;
}

const Template = (args) => <HesabaTimeDimension {...args} />;

export const ParseDifferentDataType = Template.bind({});

ParseDifferentDataType.args = {
  data,
  mapProps: baseMapProps,
  layerProps: {
    updateTimeDimensionMode: "replace",
    addlastPoint: true,
    duration: "PT2M",
    updateTimeDimension: true,
  },
  geojsonProps: commonGeojsonProps,
  extralLayerProps: { getFeatureBetweenDates },
  children: (
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  ),
};
