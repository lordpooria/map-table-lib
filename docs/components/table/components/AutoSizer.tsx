import { AutoSizer, HesabaVirtualTable } from "hesaba/packages/table";
import React from "react";
import { simpleSchemaColumns, simpleRows } from "../helper/fakeData";

const BaseTable = () => {
  return (
    <div style={{ width: "70vw", height: "70vh" }}>
      <AutoSizer>
        {({ width, height }) => (
          <HesabaVirtualTable
            height={height}
            width={width}
            columns={simpleSchemaColumns}
            rows={simpleRows}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default BaseTable;
