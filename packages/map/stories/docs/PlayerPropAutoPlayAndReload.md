## Player Props Auto play and loop

### leaflet and react-lealfet peer depencencies to this library you should install them

This MapProvider is required to use this library so you should add this as wrapper of hesaba-time-dimension if you wanna this component see Basic Map example


This is main component of hesaba-time-dimension with custom player props you could set your player to be auto play and reload when it's finished

```tsx
import React from "react";

import HesabaTimeDimension from "@hesaba/map";

import data from "../data/data.json";
import MapProvider from "./container/MapProvider"


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

export default function BaseMapScreen() {
 return(
   <MapProvider>
      <AutoPlayAndReload />
    </MapProvider>
 )
}

```

