## Basic map example

The only require field for this component is `data` and `mapProps`

```tsx
import React from "react";

import HesabaTimeDimension from "@hesaba/map";

import data from "../data/data.json";


export default function BaseMapScreen() {
 return(
  return (
    <HesabaTimeDimension
      mapProps={{
        center: [35.76498031616211, 51.33673858642578],
        zoom: 13,
        zoomControl: false,
      }}
      data={data as any}
    />
  );
 )
}

```