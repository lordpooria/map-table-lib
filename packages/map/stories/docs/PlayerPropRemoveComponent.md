## Player Props Remove Component

### leaflet and react-lealfet peer depencencies to this library you should install them

This MapProvider is required to use this library so you should add this as wrapper of hesaba-time-dimension if you wanna this component see Basic Map example


You could remove player component or icons 

```tsx
import React from "react";

import HesabaTimeDimension from "@hesaba/map";

import data from "../data/data.json";
import MapProvider from "./container/MapProvider";


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
      }}
    />
  );
};

export default function BaseMapScreen() {
 return(
   <MapProvider>
      <PlayerRemoveComponents />
    </MapProvider>
 )
}

```

