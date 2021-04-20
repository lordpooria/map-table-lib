import React, { FC } from "react";

import { StyleProvider } from "@hesaba/theme-language";

import TDProvider from "./Provider";
import useStyles from "./HesabaTimeDimension.styles";
import HesabaTimeDimensionView from "./HesabaTimeDimensionView";
import "leaflet/dist/leaflet.css";

import { HesabaTimeDimensionProps } from "../types/HesabaTimeDimension";
import { useParseData } from "../hooks/useParseData";
import { MapContainer, TileLayer } from "react-leaflet";
import clsx from "clsx";
import TDTable from "../table/TDTable";
import ThemeMaker from "./ThemeProvider";
import { TableStoreProvider } from "@hesaba/table";

const HesabaTimeDimension: FC<HesabaTimeDimensionProps> = (
  props: HesabaTimeDimensionProps
) => {
  return (
    <TDProvider>
      <StyleProvider theme={props.theme} direction="ltr" language="en">
        <ThemeMaker>
          <CommonMap {...props} />
        </ThemeMaker>
      </StyleProvider>
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
  withTable,
  tableProps,
  theme,
}: HesabaTimeDimensionProps) => {
  useParseData(data);
  const classes = useStyles();
  return (
    <div className={classes.tdRoot}>
      <MapContainer
        className={clsx(
          {
            [classes.mapRoot]: !withTable,
            [classes.mapRootWithTable]: withTable,
          },
          className
        )}
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
          LegendComponent={LegendComponent}
        />
      </MapContainer>
      {withTable && (
        
        <TableStoreProvider>
          <TDTable
            className={classes.tableRoot}
            theme={theme}
            {...tableProps}
          />
        </TableStoreProvider>
      )}
    </div>
  );
};

export default HesabaTimeDimension;
