import React from "react";
import "leaflet/dist/leaflet.css";
import { TileLayer, useMap } from "react-leaflet";
import HesabaTimeDimension from "../src/HesabaTimeDimension/HesabaTimeDimension";
import data from "./utils/data/small_data.json";
import multiData from "./utils/data/data2.json";

import { storiesOf } from "@storybook/react";
import {
  baseLayerProps,
  baseMapProps,
  commonGeojsonProps,
} from "./utils/constants";
import { useTDStoreActions } from "../src/store/reducerHooks";
import MapProvider from "./utils/MapProvider";
import PlayerPropAutoPlayAndReload from "./docs/PlayerPropAutoPlayAndReload.md";
import PlayerPropSlidersProps from "./docs/PlayerPropSlidersProps.md";
import PlayerPropCustomComponent from "./docs/PlayerPropCustomComponent.md";
import PlayerPropRemoveComponent from "./docs/PlayerPropRemoveComponent.md";

const INITIAL_SPEED = 20;

const BackwardButton = () => {
  const previousTime = useTDStoreActions((actions) => actions.previousTime);

  return (
    <button onClick={() => previousTime({ numSteps: 1, loop: false })}>
      back
    </button>
  );
};

const AutoPlayAndReload = () => {
  const map = useMap();
  return (
    <HesabaTimeDimension
      data={data as any}
      map={map}
      playerProps={{ loop: true, autoPlay: true }}
    />
  );
};

const SlidersProps = () => {
  const map = useMap();
  return (
    <HesabaTimeDimension
      data={data as any}
      map={map}
      geojsonProps={commonGeojsonProps}
      playerProps={{
        timeSteps: 2,
        speedStep: 5,
        minSpeed: 1,
        maxSpeed: 100,
        transitionTime: 1000 / INITIAL_SPEED,
      }}
    />
  );
};

const CustomButtonComponent = () => {
  const map = useMap();

  return (
    <HesabaTimeDimension
      data={data as any}
      map={map}
      playerProps={{
        backwardButton: BackwardButton,
      }}
    />
  );
};

const PlayerRemoveComponents = () => {
  const map = useMap();

  return (
    <HesabaTimeDimension
      data={data as any}
      map={map}
      playerProps={{
        speedIcon: false,
        forwardButton: false,
        speedSlider: false,
        playReverseButton: true,
      }}
    />
  );
};

const PlayerExtraButtons = () => {
  const map = useMap();

  return (
    <HesabaTimeDimension
      data={data as any}
      map={map}
      playerProps={{
        speedIcon: false,
        forwardButton: false,
        speedSlider: false,
      }}
    />
  );
};

storiesOf("Player props", module)
  .add(
    "auto play & reload",
    () => (
      <MapProvider>
        <AutoPlayAndReload />
      </MapProvider>
    ),
    {
      readme: {
        content: PlayerPropSlidersProps,
        sidebar: "Please Read me2",
        // This is not necessary in normal situation. The reason for
        // `includePropTables` is needed here is because `ButtonWithPropTypes` is
        // specified in `excludePropTables` at `config.js`
      },
    }
  )
  .add(
    "slider and speeds props",
    () => (
      <MapProvider>
        <SlidersProps />
      </MapProvider>
    ),
    {
      readme: {
        content: PlayerPropAutoPlayAndReload,
        sidebar: "Please Read me2",
        // This is not necessary in normal situation. The reason for
        // `includePropTables` is needed here is because `ButtonWithPropTypes` is
        // specified in `excludePropTables` at `config.js`
      },
    }
  )
  .add(
    "player custom button components",
    () => (
      <MapProvider>
        <CustomButtonComponent />
      </MapProvider>
    ),
    {
      readme: {
        content: PlayerPropCustomComponent,
        sidebar: "Please Read me2",
        // This is not necessary in normal situation. The reason for
        // `includePropTables` is needed here is because `ButtonWithPropTypes` is
        // specified in `excludePropTables` at `config.js`
      },
    }
  )
  .add(
    "player remove components",
    () => (
      <MapProvider>
        <PlayerRemoveComponents />
      </MapProvider>
    ),
    {
      readme: {
        content: PlayerPropRemoveComponent,
        sidebar: "Please Read me2",
        // This is not necessary in normal situation. The reason for
        // `includePropTables` is needed here is because `ButtonWithPropTypes` is
        // specified in `excludePropTables` at `config.js`
      },
    }
  );
