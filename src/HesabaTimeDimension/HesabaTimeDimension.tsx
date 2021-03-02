import React from "react";
import TDProvider from "./Provider";
import { GeoJsonObject } from "geojson";
import { TileLayer, MapContainer, MapContainerProps } from "react-leaflet";
import { ThemeProvider } from "react-jss";
import theme from "../styles/theme";

import HesabaTimeDimensionView from "./HesabaTimeDimensionView";
// import useStyles from "./HesabaTimeDimension.styles";
import clsx from "clsx";
import { PlayerProps } from "../player/PlayerControl.types";
import { TimeProps } from "../timer/TimeComponent.types";
import { GeoJSONOptions } from "leaflet";
import { TDLayerOptions } from "../layer/layer.type";

interface Props {
  data: GeoJsonObject;
  mapProps: MapContainerProps & {
    classes?: { root?: string };
  };
  children?: React.ReactNode;
  playerProps?: PlayerProps;
  timeProps?: TimeProps;
  geojsonProps: GeoJSONOptions;
  layerProps: TDLayerOptions;
  extralLayerProps?: any;
}

const HesabaTimeDimension = ({
  data,
  mapProps,
  children,
  playerProps = {},
  timeProps = {},
  geojsonProps,
  layerProps,
  extralLayerProps,
}: Props) => {
  // const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <TDProvider>
        <MapContainer
          style={{
            width: "95vw",
            height: "95vh",
            border: " 1px solid black",
            position: "relative",
          }}
          className={clsx(mapProps.classes?.root)}
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
      </TDProvider>
    </ThemeProvider>
  );
};

export default HesabaTimeDimension;
