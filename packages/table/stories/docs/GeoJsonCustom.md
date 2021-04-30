## Custom GeoJSON layer Props

You can Customize GeoJSON layer props as well, Right now we just has polyline props, circle props and path options.

```tsx
import React from "react";

import HesabaTimeDimension from "@hesaba/map";

import data from "../data/data.json";


export default function BaseMapScreen() {
 return(
  return (
     <HesabaTimeDimension
    mapProps={baseMapProps}
    data={data as any}
    layerProps={{
      circleProps: { radius: 10 },
      pathOptions: { fillColor: "#0FF", color: "#F0F" },
      polylineProps: {opacity:0.4},
    }}
  />
  );
 )
}

```
