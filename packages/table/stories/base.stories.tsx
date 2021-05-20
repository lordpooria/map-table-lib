import {
  HesabaVirtualTable,
  TableStoreProvider,
  ToolbarMoreVert,
} from "../src";
import { AutoSizer } from "../src";
import React from "react";
import { simpleSchemaColumns, simpleRows } from "./helper/fakeData";
import { HesabaStyleProvider } from "@hesaba/theme-language";

export const BaseTable = () => {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ width: "90vw", height: "70vh" }}>
        <HesabaStyleProvider language="en">
          <AutoSizer>
            {({ width, height }) => (
              <TableStoreProvider>
                <MoreVert />
                <HesabaVirtualTable
                  height={height}
                  width={width}
                  columns={simpleSchemaColumns}
                  rows={simpleRows}
                  selectable
                  hasToolbar
                  resizable
                  sortable
                  // withSticky
                  // onSearchTextChange={(text)=>{console.log(text)}}
                  onFilterChange={(text) => {
                    console.log(text);
                  }}
                  direction="rtl"
                />
              </TableStoreProvider>
            )}
          </AutoSizer>
        </HesabaStyleProvider>
      </div>
    </div>
  );
};

const MoreVert = () => {
  return <ToolbarMoreVert hasFilter searchable />;
};

export default {
  title: "table",
};
