import { createEnhancedColumns } from "@hesaba/map/node_modules/@hesaba/table";
import React from "react";
import BaseTable from "./BaseTable";
import map_data from "../../assets/map_data.json";

const schemaColumns = [
  {
    label: "time",
    key: "time",
  },
  {
    label: "username",
    key: "username",
  },
  {
    label: "lat",
    key: "lat",
  },
  {
    label: "long",
    key: "long",
  },
  {
    label: "color",
    key: "color",
  },
];

function tableDataParser(columns, rows) {
  let visibleRows = [];
  rows.forEach((row) =>
    row.features.forEach((f) => {
      visibleRows.push({
        time: row.time,
        username: f.properties.username,
        id: f.properties.id,
        color: f.properties.color,
        lat: f.geometry.geometries[0].coordinates[0],
        long: f.geometry.geometries[0].coordinates[1],
      });
    })
  );
  const enhancedColumns = createEnhancedColumns(columns);

  return { visibleRows, enhancedColumns };
}

export function CustomDataType() {
  return (
    <BaseTable
      columns={schemaColumns}
      rows={map_data}
      tableDataParser={tableDataParser}
    />
  );
}
