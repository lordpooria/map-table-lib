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

// import TDTable from "../table/TDTable";
import { HesabaTimeDimensionProps } from "../types/HesabaTimeDimension";
import { useParseData } from "../hooks/useParseData";

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
        {/* {withTable && <TDTable />} */}
      </div>
    </ThemeProvider>
  );
};

const CommonMap = ({
  data,

  playerProps = {},
  timeProps = {},
  geojsonProps = {},
  layerProps={},
  extralLayerProps,
  map,
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
      map={map}
    />
  );
};

export default HesabaTimeDimension;
