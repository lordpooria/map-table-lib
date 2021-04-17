import { createEnhancedColumns, RawTableColumns } from "@hesaba/table";
import { GeoJsonObject } from "geojson";

export function tableDataParser(columns: RawTableColumns, rows:) {
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
