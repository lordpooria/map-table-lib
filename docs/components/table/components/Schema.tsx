import { RawTableColumns, VirtualTableProps } from "@hesaba/table";
import React from "react";
import { PercentCell, QualityCell } from "../helper/CellComponent";
import BaseTable from "./BaseTable";

const rows = [...Array.from({ length: 40 }, (_, i) => i)].map((item) => {
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

const schemaColumns: RawTableColumns<keys> = [
  {
    label: "name",
    key: "name",
    type: "string",
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

export const CustomCell = (props: Partial<VirtualTableProps>) => {
  return <BaseTable columns={schemaColumns} rows={rows} />;
};
