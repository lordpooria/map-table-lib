import {
  AutoSizer,
  HesabaVirtualTable,
  VirtualTableProps,
} from "@hesaba/table";
import React from "react";
import { simpleSchemaColumns, simpleRows } from "../helper/fakeData";

const BaseTable = (props: Partial<VirtualTableProps>) => {
  return (
    <div style={{ width: "70vw", height: "70vh" }}>
      <AutoSizer>
        {({ width, height }) => (
          <HesabaVirtualTable
            height={height}
            width={width}
            columns={simpleSchemaColumns}
            rows={simpleRows}
            selectable
            resizable
            sortable
            {...props}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default BaseTable;
