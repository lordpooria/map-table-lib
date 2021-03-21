import { createStyles, makeStyles } from "@material-ui/styles";
import VirtualizaTable from "../src/virtualize-table/VirtualizaTable";

import { RawTableColumns } from "../src/types";
import Operations from "./Operations";
import { PercentCell, QualityCell } from "./table-test/CellComponent";
import HesabaVirtualTable from "../src/HesabaVirtualTable";
import AutoResizer from "../src/virtualize-table/container/AutoResizer";
import { storiesOf } from "@storybook/react";
import DataGrid from "../src/data-grid/DataGrid/DataGrid";

const rows = [...Array.from({ length: 20 }, (_, i) => i)].map((item) => {
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
});

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

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      backgroundColor: "#D0c",
    },

    footer: {
      backgroundColor: "8D0",
    },
    cell: {
      backgroundColor: "88c",
      color: "#F0F",
    },
    row: {
      backgroundColor: "888",
      color: "#F0F",
    },

    header: {
      backgroundColor: "666",
      color: "#F8F",
    },
    root: {
      backgroundColor: "ff0",
      color: "#444",
    },
  })
);

storiesOf("Data Grid Table", module).add("Simple", () => {
  const classes = useStyles();
  return (
    <div style={{ width: " calc(50vw + 220px)", height: "100vh" }}>
      <AutoResizer>
        {({ width, height }) => (
          <DataGrid
            columns={schemaColumns}
            rows={rows}
            operationOnRows={[Operations]}
            // selectable
            // resizable
            // sortable
            // // title="Simple Table"
            // operationOnRows={[Operations]}
          />
        )}
      </AutoResizer>
    </div>
  );
});
