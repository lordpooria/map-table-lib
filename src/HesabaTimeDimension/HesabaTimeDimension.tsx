import React from "react";
import TDProvider from "./Provider";
import { GeoJsonObject } from "geojson";
import { TileLayer, MapContainer, MapContainerProps } from "react-leaflet";
import { ThemeProvider } from "react-jss";
import theme from "../styles/theme";

import HesabaTimeDimensionView from "./HesabaTimeDimensionView";
import useStyles from "./HesabaTimeDimension.styles";

interface Props {
  data: GeoJsonObject;
  MapProps: MapContainerProps & {
    classes?: { root?: string };
  };
}

const HesabaTimeDimension = ({ data, MapProps }: Props) => {
  const classes = useStyles();
  return (
    <TDProvider>
      <ThemeProvider theme={theme}>
        <MapContainer className={classes.mapRoot} {...MapProps}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <HesabaTimeDimensionView data={data} />
        </MapContainer>
      </ThemeProvider>
    </TDProvider>
  );
};

export default HesabaTimeDimension;
