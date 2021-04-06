## Player Props Custom Component

### leaflet and react-lealfet peer depencencies to this library you should install them

This MapProvider is required to use this library so you should add this as wrapper of hesaba-time-dimension if you wanna this component see Basic Map example

You could pass custom component for each player buttons and icons or also you could remove them

```tsx
import React from "react";

import HesabaTimeDimension, { useTDStoreActions } from "@hesaba/map";

import data from "../data/data.json";
import MapProvider from "./container/MapProvider";

const BackwardButton = () => {
  const previousTime = useTDStoreActions((actions) => actions.previousTime);

  return (
    <button onClick={() => previousTime({ numSteps: 1, loop: false })}>
      back
    </button>
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

export default function BaseMapScreen() {
  return (
    <MapProvider>
      <CustomButtonComponent />
    </MapProvider>
  );
}
```
