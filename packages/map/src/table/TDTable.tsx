import React from "react";
import { AutoResizer, HesabaVirtualTable } from "@hesaba/table";
import  { GeoJsonObject } from "geojson";
import { useMapData } from "./useMapData";

interface Props {
  data: GeoJsonObject
}

const TDTable = ({data}: Props) => {
  
  const { rows, schemaColumns } = useMapData(data);
  return (
    <div style={{ width: " calc(50vw + 220px)", height: "95vh" }}>
      <AutoResizer>
        {({ width, height }) => (
          <HesabaVirtualTable
            width={width}
            columns={schemaColumns}
            rows={rows}
            selectable
            resizable
            sortable
            height={height as number}
            // classes={{
            //   table: { container: classes.root },
            //   row: { root: classes.row, cell: { root: classes.cell } },
            //   footer: { root: classes.footer },
            //   toolbar: { root: classes.toolbar },
            //   header: { root: classes.header, cell: { root: classes.cell } },
            // }}
            // title="Simple Table"
            direction="ltr"
          />
        )}
      </AutoResizer>
    </div>
  );
};

export default TDTable;
