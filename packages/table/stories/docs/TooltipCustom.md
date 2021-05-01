## Basic map example

Tooltip by default export all variable in properties of each feature but you customize it's component (like what you could do on legend component)
 
```tsx
import React from "react";

import HesabaTimeDimension from "@hesaba/map";

import data from "../data/data.json";
import NumberFormat from "react-number-format";


const Tooltip = ({ properties }: { properties: Record<string, any> }) => {
  return (
    <>
      <div>
        <Typography
          variant="caption"
          style={{ color: properties.color, fontFamily: "inherit" }}
        >
          نام کاربری:
        </Typography>
        <NumberFormat
          format="(###) ###-####"
          mask="_"
          readOnly
          value={properties.id}
          style={{
            color: properties.color,
            borderWidth: 0,
            fontFamily: "inherit",
          }}
        />
      </div>
    </>
  );
};


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
       layerProps={{ ToolTipComponent: Tooltip }}
    />
  );
 )
}

```

You could simply remove tool tip by passing false as ToolTipComponent value 