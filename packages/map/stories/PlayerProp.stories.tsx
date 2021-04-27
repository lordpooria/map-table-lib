import React from "react";

import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./utils/data/small_data.json";

import { baseMapProps, commonGeojsonProps } from "./utils/constants";
import { useTDStoreActions } from "../src/store/reducerHooks";

import PlayerPropAutoPlayAndReload from "./docs/PlayerPropAutoPlayAndReload.md";
import PlayerPropSlidersProps from "./docs/PlayerPropSlidersProps.md";
import PlayerPropCustomComponent from "./docs/PlayerPropCustomComponent.md";
import PlayerPropRemoveComponent from "./docs/PlayerPropRemoveComponent.md";
import { DocsProvider } from "./docs/DocsProvider";
import { useState } from "react";
import { useEffect } from "react";

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

AutoPlayAndReload.parameters = {
  docs: {
    page: () => {
      return (
        <DocsProvider MDFile={PlayerPropSlidersProps}>
          <AutoPlayAndReload />
        </DocsProvider>
      );
    },
  },
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

SliderAndSpeedsProps.parameters = {
  docs: {
    page: () => {
      return (
        <DocsProvider MDFile={PlayerPropAutoPlayAndReload}>
          <SliderAndSpeedsProps />
        </DocsProvider>
      );
    },
  },
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

PlayerCustomButtonComponents.parameters = {
  docs: {
    page: () => {
      return (
        <DocsProvider MDFile={PlayerPropCustomComponent}>
          <PlayerCustomButtonComponents />
        </DocsProvider>
      );
    },
  },
};

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

PlayerAddRemoveComponents.parameters = {
  docs: {
    page: () => {
      return (
        <DocsProvider MDFile={PlayerPropRemoveComponent}>
          <PlayerAddRemoveComponents />
        </DocsProvider>
      );
    },
  },
};
export default {
  title: "Player props",
};
