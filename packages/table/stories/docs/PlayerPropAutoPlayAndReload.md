## Player Props Auto play and loop

This is main component of hesaba-time-dimension with custom player props you could set your player to be auto play and reload when it's finished

```tsx
import React from "react";

import HesabaTimeDimension from "@hesaba/map";

import data from "../data/data.json";

export default function AutoPlayAndReload() {
  const map = useMap();
  return (
    <HesabaTimeDimension
      data={data as any}
      map={map}
      playerProps={{ loop: true, autoPlay: true }}
    />
  );
}
```
