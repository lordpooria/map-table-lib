import React, { FC, useRef, useState } from "react";

import { StyleProvider } from "@hesaba/theme-language";
import { TableStoreProvider } from "@hesaba/table";

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
import { SplitPane } from "react-collapse-pane";
import { IconButton } from "@material-ui/core";
import { Map } from "leaflet";

const HesabaTimeDimension: FC<HesabaTimeDimensionProps> = (
  props: HesabaTimeDimensionProps
) => {
  return (
    <TDProvider>
      <StyleProvider theme={props.theme} direction="ltr" language="en">
        <ThemeMaker>
          {props.withTable ? <PanelMap {...props} /> : <CommonMap {...props} />}
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

const PanelMap: FC<HesabaTimeDimensionProps> = ({
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
  const hesabaTable = useRef<HTMLDivElement | null>();
  const hesabaMap = useRef<HTMLDivElement | null>();
  const [map, setMap] = useState<Map>();

  function setElementSizes(sizes: Array<number>) {
    if (!hesabaTable.current) {
      hesabaTable.current = document.querySelector(
        "#hesaba-table"
      ) as HTMLDivElement;
      hesabaMap.current = document.querySelector(
        "#hesaba-map"
      ) as HTMLDivElement;
    } else if (hesabaTable.current && hesabaMap.current) {
      hesabaTable.current.style.width = `${sizes[1]}px`;
      hesabaMap.current.style.width = `${sizes[0]}px`;
    }
  }
  return (
    <div className={classes.tdRoot}>
      <SplitPane
        split={"vertical"}
        collapseOptions={{
          beforeToggleButton: <IconButton>{"<"}</IconButton>,
          afterToggleButton: <IconButton>{">"}</IconButton>,
          overlayCss: { width: 0 },
          collapsedSize: 100,
          collapseDirection: "up",
        }}
        minSizes={[100, 100]}
        hooks={{
          onChange: (sizes) => {
            setElementSizes(sizes);
          },
          onCollapse: (sizes) => {
            setElementSizes(sizes as any);
          },
          onSaveSizes: () => {
            map?.invalidateSize();
          },
        }}

        // collapsedSizes={[toolbar.maxHeight, null]}
        // minSizes={[100, 500]}
      >
        <MapContainer
          whenCreated={setMap}
          id="hesaba-map"
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

        <TableStoreProvider>
          <TDTable
            className={classes.tableRoot}
            theme={theme}
            {...tableProps}
          />
        </TableStoreProvider>
      </SplitPane>
    </div>
  );
};

export default HesabaTimeDimension;
