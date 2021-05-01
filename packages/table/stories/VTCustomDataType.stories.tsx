import HesabaVirtualTable from "../src/HesabaVirtualTable";
import AutoSizer from "../src/virtualize-table/container-virtual/AutoSizer";
import { storiesOf } from "@storybook/react";
import { CommonVirtualTableContainer } from "./table-test/container";
import { createEnhancedColumns } from "../src";
import map_data from "./table-test/map_data.json";

export const schemaColumns = [
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

storiesOf("Custom Data Type", module).add("Table with Collapsable Rows", () => {
  return (
    <CommonVirtualTableContainer>
      <AutoSizer>
        {({ width, height }) => (
          <HesabaVirtualTable
            height={height}
            width={width}
            columns={schemaColumns}
            rows={map_data as any}
            tableDataParser={tableDataParser}
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
      </AutoSizer>
    </CommonVirtualTableContainer>
  );
});
