import { RawTableColumns } from "../src/types";

import HesabaVirtualTable from "../src/HesabaVirtualTable";
import AutoResizer from "../src/virtualize-table/container-virtual/AutoResizer";
import { storiesOf } from "@storybook/react";
import { simpleSchemaColumns, simpleRows } from "./table-test/fakeData";
import { CommonVirtualTableContainer } from "./table-test/container";

storiesOf("Virtual Table", module)
  .add("Simple Virtual Table left to right", () => {
    return (
      <CommonVirtualTableContainer>
        <AutoResizer>
          {({ width, height }) => (
            <HesabaVirtualTable
              height={height}
              width={width}
              columns={simpleSchemaColumns}
              rows={simpleRows}
              selectable
              resizable
              sortable
              pagination={{
                rowsPerPage: 10,
                count: 20,
                page: 1,
                onPageChange: () => {},
              }}
            />
          )}
        </AutoResizer>
      </CommonVirtualTableContainer>
    );
  })
  .add("Simple Virtual Table right to left", () => {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <AutoResizer>
          {({ width, height }) => (
            <HesabaVirtualTable
              height={height}
              width={width}
              columns={simpleSchemaColumns}
              rows={simpleRows}
              selectable
              resizable
              sortable
              pagination={{
                rowsPerPage: 10,
                count: 20,
                page: 1,
                onPageChange: () => {},
              }}
              direction="ltr"
            />
          )}
        </AutoResizer>
      </div>
    );
  });
