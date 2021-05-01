## Player Props Remove Component

You could remove player component or icons

```tsx
import React from "react";

import HesabaTimeDimension from "@hesaba/map";

import data from "../data/data.json";

export default function PlayerRemoveComponents() {
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
}
```
