import React, { FC } from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
  ThemeProvider,
} from "@material-ui/core/styles";

import TDProvider from "./Provider";
import rawThemeObj from "../styles/theme";
import useStyles from "./HesabaTimeDimension.styles";
import HesabaTimeDimensionView from "./HesabaTimeDimensionView";
import "leaflet/dist/leaflet.css";

// import TDTable from "../table/TDTable";
import { HesabaTimeDimensionProps } from "../types/HesabaTimeDimension";
import { useParseData } from "../hooks/useParseData";
import { MapContainer, TileLayer } from "react-leaflet";
import clsx from "clsx";
// import TDTable from "../table/TDTable";

const HesabaTimeDimension: FC<HesabaTimeDimensionProps> = (
  props: HesabaTimeDimensionProps
) => {
  let theme = createMuiTheme(rawThemeObj as ThemeOptions);
  theme = responsiveFontSizes(theme);

  return (
    <TDProvider>
      <ThemeProvider theme={theme}>
        <CommonMap {...props} />
      </ThemeProvider>
    </TDProvider>
  );
};

const CommonMap: FC<HesabaTimeDimensionProps> = ({
  data,
  children,
  playerProps = {},
  timeProps = {},
  geojsonProps = {},
  layerProps = {},
  extralLayerProps,
  mapProps: { className, ...mapProps },
  LegendComponent,
}: // withTable,
HesabaTimeDimensionProps) => {
  useParseData(data);
  const classes = useStyles();
  return (
    <MapContainer className={clsx(classes.mapRoot, className)} {...mapProps}>
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
        LegendComponent={LegendComponent}
      />
      {/* {withTable && <TDTable />} */}
    </MapContainer>
  );
};

export default HesabaTimeDimension;
