## Basic map example

The only require field for this component is `data` and `mapProps`

```tsx
import React from "react";

import HesabaTimeDimension from "@hesaba/map";

import data from "../data/data.json";
import "./css/map.css";


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
If your app define fonts like this on the root (named all.css): 
```ts
@font-face {
  font-family: Vazir;
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url("../fonts/Vazir-Thin-FD.ttf") format("truetype");
}
@font-face {
  font-family: Vazir;
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url("../fonts/Vazir-Light-FD.ttf") format("truetype");
}

@font-face {
  font-family: Vazir;
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("../fonts/Vazir-Medium-FD.ttf") format("truetype");
}
@font-face {
  font-family: Vazir;
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("../fonts/Vazir-Bold-FD.ttf") format("truetype");
}
@font-face {
  font-family: Vazir;
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url("../fonts/Vazir-Black-FD.ttf") format("truetype");
}

body {
  color: rgba(0, 0, 0, 0.87);
  font-family: Vazir, Arial, sans-serif;
  font-weight: 500;
  background-color: #fafafa;
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

```

You could add map.css like this to push your font family to the map component:

```ts
.leaflet-container {
  font-family: Vazir;
}

```

You also could add this global inside all.css 