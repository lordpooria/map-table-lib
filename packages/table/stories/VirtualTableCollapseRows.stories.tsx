import { RawTableColumns, RawTableRows } from "../src/types";

import HesabaVirtualTable from "../src/HesabaVirtualTable";
import AutoResizer from "../src/virtualize-table/container-virtual/AutoResizer";
import { storiesOf } from "@storybook/react";
import { CommonVirtualTableContainer } from "./table-test/container";

const rows: RawTableRows = [...Array.from({ length: 40 }, (_, i) => i)].map(
  (item) => {
    const random = Math.random();
    return {
      name: { value: `name${item}` },
      type: { value: `type${item}` },
      percent: { value: Math.random() * 100 },
      vaildated: {
        value:
          random < 0.25
            ? "Poor"
            : random < 0.5
            ? "Bad"
            : random < 0.75
            ? "Medium"
            : "Good",
      },
    };
  }
);

type keys = typeof rows[number];

export const schemaColumns: RawTableColumns<keys> = [
  {
    label: "name",
    key: "name",
  },
  {
    label: "type",
    key: "type",
    type: "string",
  },
];

storiesOf("Virtual Table", module).add("Table with Custom Data Parser", () => {
  return (
    <CommonVirtualTableContainer>
      <AutoResizer>
        {({ width, height }) => (
          <HesabaVirtualTable
            height={height}
            width={width}
            columns={schemaColumns}
            rows={rows}
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
});
