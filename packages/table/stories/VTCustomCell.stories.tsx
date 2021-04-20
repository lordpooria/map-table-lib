import Operations from "./Operations";
import { PercentCell, QualityCell } from "./table-test/CellComponent";
import HesabaVirtualTable from "../src/HesabaVirtualTable";
import AutoResizer from "../src/virtualize-table/container-virtual/AutoResizer";
import { storiesOf } from "@storybook/react";
import { RawTableColumns, RawTableRows } from "../src/types";
import { CommonVirtualTableContainer } from "./table-test/container";

const rows: RawTableRows = [...Array.from({ length: 40 }, (_, i) => i)].map(
  (item) => {
    const random = Math.random();
    return {
      name: `name${item}`,
      type: `type${item}`,
      percent: Math.random() * 100,
      vaildated:
        random < 0.25
          ? "Poor"
          : random < 0.5
          ? "Bad"
          : random < 0.75
          ? "Medium"
          : "Good",
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
  {
    label: "percent",
    key: "percent",
    type: "date",
    CellComponent: PercentCell,
  },

  {
    label: "vaildated",
    key: "vaildated",
    type: "number",
    CellComponent: QualityCell,
  },
];

storiesOf("VT Custom Cell", module).add(
  "Custom Cell and Custom toolbar actions",
  () => {
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
              operationOnRows={[Operations]}
              direction="ltr"
            />
          )}
        </AutoResizer>
      </CommonVirtualTableContainer>
    );
  }
);
