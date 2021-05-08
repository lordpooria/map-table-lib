import { HesabaVirtualTable, VirtualTableProps } from "@hesaba/packages/table";
import React from "react";
import { simpleSchemaColumns, simpleRows } from "../helper/fakeData";

const BaseTable = (props: VirtualTableProps) => {
  return (
    <div style={{ marginBottom: 200 }}>
      <HesabaVirtualTable
        height={800}
        width={500}
        columns={simpleSchemaColumns}
        rows={simpleRows}
        resizable
        selectable
        sortable
        {...props}
      />
      <div>Here</div>
    </div>
  );
};

export default BaseTable;
