## Custom Font Family ClassName

You could add font family like this with className approach

***but you should consider !important in styels***

```tsx
import React from "react";

import HesabaTimeDimension from "@hesaba/map";

import data from "../data/data.json";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: { fontFamily: "Arial, Helvetica, sans-serif !important" },
});

export default function BaseMapScreen() {
 return(
  return (
    <HesabaTimeDimension
      mapProps={{
        center: [35.76498031616211, 51.33673858642578],
        zoom: 13,
        zoomControl: false,
        className: classes.container
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
