import React, { FC, useState } from "react";

import { HesabaStyleProvider } from "@hesaba/theme-language";
import { AutoSizer, TableStoreProvider } from "@hesaba/table";

import TDProvider from "../provider/Provider";
import useStyles from "./HesabaTimeDimension.styles";
import HesabaTimeDimensionView from "../container/HesabaTimeDimensionView";
import "leaflet/dist/leaflet.css";

import { HesabaTimeDimensionProps } from "../types/HesabaTimeDimension";
import { useParseData } from "../hooks/useParseData";
import { MapContainer, TileLayer } from "react-leaflet";

import TDTable from "../table/TDTable";
import ThemeMaker from "../provider/ThemeProvider";
import { SplitPane } from "react-collapse-pane";
import { Map } from "leaflet";

const HesabaTimeDimension: FC<HesabaTimeDimensionProps> = (
  props: HesabaTimeDimensionProps
) => {
  return (
    <TDProvider>
      <HesabaStyleProvider theme={props.theme} direction="ltr" language="en">
        <ThemeMaker>
          {props.withTable ? <PanelMap {...props} /> : <CommonMap {...props} />}
        </ThemeMaker>
      </HesabaStyleProvider>
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
  mapProps,
  LegendComponent,
  classes,
}: HesabaTimeDimensionProps) => {
  useParseData(data);
  const tdClasses = useStyles();
  const rootClass = classes?.tdRoot || tdClasses.tdRoot;
  const mapClass = classes?.map || tdClasses.mapRoot;

  return (
    <div className={rootClass}>
      <MapContainer className={mapClass} {...mapProps}>
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
  mapProps,
  LegendComponent,
  tableProps,
  theme,
  classes,
}: HesabaTimeDimensionProps) => {
  useParseData(data);
  const tdClasses = useStyles();
  const [tableWidth, setTableWidth] = useState(0);
  const [map, setMap] = useState<Map>();

  const rootClass = classes?.tdRoot || tdClasses.tdRootWithTable;
  const mapClass = classes?.map || tdClasses.mapRootWithTable;
  return (
    <AutoSizer>
      {({ width, height }) => (
        <div style={{ width, height }} className={rootClass}>
          <SplitPane
            initialSizes={[(width || 600) / 2, (width || 600) / 2]}
            split="vertical"
            collapseOptions={{
              beforeToggleButton: null as any,
              afterToggleButton: null as any,
              overlayCss: { width: 0 },
              collapsedSize: 100,
              collapseDirection: "up",
            }}
            minSizes={[100, 100]}
            hooks={{
              onSaveSizes: (sizes) => {
                map?.invalidateSize();
                setTableWidth(sizes[1]);
              },
            }}
          >
            <MapContainer
              whenCreated={setMap}
              id="hesaba-map"
              className={mapClass}
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
                className={tdClasses.tableRoot}
                theme={theme}
                height={height}
                width={tableWidth}
                initialWidth={(width || 800) / 2}
                {...tableProps}
              />
            </TableStoreProvider>
          </SplitPane>
        </div>
      )}
    </AutoSizer>
  );
};

export default HesabaTimeDimension;
