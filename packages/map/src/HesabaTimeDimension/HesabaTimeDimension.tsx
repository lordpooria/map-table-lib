import React from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
  ThemeProvider,
} from "@material-ui/core/styles";

import TDProvider from "./Provider";
import rawThemeObj from "../styles/theme";

import HesabaTimeDimensionView from "./HesabaTimeDimensionView";
import "leaflet/dist/leaflet.css";

// import TDTable from "../table/TDTable";
import { HesabaTimeDimensionProps } from "../types/HesabaTimeDimension";
import { useParseData } from "../hooks/useParseData";
import { MapContainer } from "react-leaflet";

const HesabaTimeDimension = ({
  withTable = false,
  ...props
}: HesabaTimeDimensionProps) => {
  let theme = createMuiTheme(rawThemeObj as ThemeOptions);
  theme = responsiveFontSizes(theme);

  return (
    <MapContainer {...props.mapProps}>
      <ThemeProvider theme={theme}>
        <div style={{ display: "flex" }}>
          <TDProvider>
            <CommonMap {...props} />
          </TDProvider>
          {/* {withTable && <TDTable />} */}
        </div>
      </ThemeProvider>
    </MapContainer>
  );
};

const CommonMap = ({
  data,

  playerProps = {},
  timeProps = {},
  geojsonProps = {},
  layerProps = {},
  extralLayerProps,

  LegendComponent,
}: HesabaTimeDimensionProps) => {
  useParseData(data);

  return (
    <HesabaTimeDimensionView
      data={data}
      playerProps={playerProps}
      timeProps={timeProps}
      geojsonProps={geojsonProps}
      layerProps={layerProps}
      extralLayerProps={extralLayerProps}
      LegendComponent={LegendComponent}
    />
  );
};

export default HesabaTimeDimension;
