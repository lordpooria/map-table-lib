## Basic map example

### leaflet and react-lealfet peer depencencies to this library you should install them
This is common provider is required to use this library so you should add this as parent of hesaba-time-dimension  

```tsx
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Props {
  children: React.ReactNode;
}

export default function MapProvider({ children }: Props) {
  return (
    <MapContainer
      style={{ height: "90vh", width: "90vw" }}
      center={[35.76498031616211, 51.33673858642578]}
      zoom={13}
      zoomControl={false}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
}
```

```tsx
import React from "react";

import HesabaTimeDimension from "@hesaba/map";

import data from "../data/data.json";
import MapProvider from "./container/MapProvider"

function BasicMap = () => {
  const map = useMap();
  return <HesabaTimeDimension data={data} map={map} />;
};

export default function BaseMapScreen() {
 return(
   <MapProvider>
      <BasicMap />
    </MapProvider>
 )
}

```
