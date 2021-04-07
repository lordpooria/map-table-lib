## Player Props Sliders Props

### leaflet and react-lealfet peer depencencies to this library you should install them

This MapProvider is required to use this library so you should add this as wrapper of hesaba-time-dimension if you wanna this component see Basic Map example


This is main component of hesaba-time-dimension with custom sliders props. Here we set time and speed slider steps (default is 1) and also change range of speed slider. You also could set player start initially.

```tsx
import React from "react";

import HesabaTimeDimension from "@hesaba/map";

import data from "../data/data.json";
import MapProvider from "./container/MapProvider";

const INITIAL_SPEED = 20;

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

export default function BaseMapScreen() {
 return(
   <MapProvider>
      <SlidersProps />
    </MapProvider>
 )
}

```

