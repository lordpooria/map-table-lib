import React from "react";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./utils/data/small_data.json";

import { baseMapProps, commonGeojsonProps } from "./utils/constants";
import { useTDStoreActions } from "../src/store/reducerHooks";

const INITIAL_SPEED = 20;

const BackwardButton = () => {
  const previousTime = useTDStoreActions((actions) => actions.previousTime);

  return (
    <button onClick={() => previousTime({ numSteps: 1, loop: false })}>
      back
    </button>
  );
};

export const AutoPlayAndReload = () => {
  const props = JSON.parse(
    JSON.stringify({
      data: data as any,
      mapProps: baseMapProps,
      playerProps: { loop: true, autoPlay: true },
    })
  );
  return <HesabaTimeDimension {...props} />;
};

export const SliderAndSpeedsProps = () => {
  const props = JSON.parse(
    JSON.stringify({
      data: data as any,
      mapProps: baseMapProps,
      geojsonProps: commonGeojsonProps,
      playerProps: {
        timeSteps: 2,
        speedStep: 5,
        minSpeed: 1,
        maxSpeed: 100,
        transitionTime: 1000 / INITIAL_SPEED,
      },
    })
  );
  return <HesabaTimeDimension {...props} />;
};


export const PlayerCustomButtonComponents = () => (
  <HesabaTimeDimension
    data={data as any}
    mapProps={baseMapProps}
    playerProps={{
      backwardButton: BackwardButton,
    }}
  />
);


export const PlayerAddRemoveComponents = () => (
  <HesabaTimeDimension
    data={data as any}
    mapProps={baseMapProps}
    playerProps={{
      speedIcon: false,
      forwardButton: false,
      speedSlider: false,
      playReverseButton: true,
    }}
  />
);

export default {
  title: "Player props",
};
