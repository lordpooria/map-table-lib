import { HesabaVirtualTable, VirtualTableContainerProps } from "../src";
import { AutoSizer } from "../src";
import React from "react";
import { simpleSchemaColumns, simpleRows } from "./helper/fakeData";

export const BaseTable = () => {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ width: "90vw", height: "70vh" }}>
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
              withSticky
              // onSearchTextChange={(text)=>{console.log(text)}}
              onFilterChange={(text) => {
                console.log(text);
              }}
              direction="rtl"
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default {
  title: "table",
};
