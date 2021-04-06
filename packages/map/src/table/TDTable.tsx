import React from "react";
import { AutoResizer, HesabaVirtualTable } from "@hesaba/table";
import { useMapData } from "./useMapData";
// import { GeoJSONData } from "../types";

// interface Props {
//   data: GeoJSONData
// }

const TDTable = () => {
  
  const { rows, schemaColumns } = useMapData();
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
