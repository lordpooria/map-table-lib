import React from "react";
import TDProvider from "./Provider";
import { TileLayer, MapContainer } from "react-leaflet";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
  ThemeProvider,
} from "@material-ui/core/styles";
import rawThemeObj from "../styles/theme";

import HesabaTimeDimensionView from "./HesabaTimeDimensionView";
import useStyles from "./HesabaTimeDimension.styles";
import clsx from "clsx";

import TDTable from "../table/TDTable";
import { HesabaTimeDimensionProps } from "../types/HesabaTimeDimension";

const HesabaTimeDimension = ({
  withTable = false,
  ...props
}: HesabaTimeDimensionProps) => {
  let theme = createMuiTheme(rawThemeObj as ThemeOptions);
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex" }}>
        <TDProvider>
          <CommonMap {...props} />
        </TDProvider>
        {withTable && <TDTable data={props.data} />}
      </div>
    </ThemeProvider>
  );
};

const CommonMap = ({
  data,
  mapProps,
  children,
  playerProps = {},
  timeProps = {},
  geojsonProps = {},
  layerProps,
  extralLayerProps,
}: HesabaTimeDimensionProps) => {
  const classes = useStyles();
  console.log(data);
  return (
    <MapContainer
      className={clsx(classes.mapRoot, mapProps.classes?.root)}
      {...mapProps}
    >
      {children ? (
        children
      ) : (
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      )}
      <HesabaTimeDimensionView
        data={data}
        playerProps={playerProps}
        timeProps={timeProps}
        geojsonProps={geojsonProps}
        layerProps={layerProps}
        extralLayerProps={extralLayerProps}
      />
    </MapContainer>
  );
};

export default HesabaTimeDimension;
