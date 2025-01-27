import {
  createEnhancedColumns,
  RawTableColumns,
  RawTableRows,
} from "@hesaba/table";
import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);
(dayjs as any)().locale("fa").calendar("jalali");

const nopeData = {
  username: "",
  id: "",
  color: "",
  lat: "",
  long: "",
};
export const commonSchemaColumns = [
  {
    label: "index",
    key: "index",
  },
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
];
export function tableDataParser(
  columns: RawTableColumns,
  rows: RawTableRows,
  username: string
) {
  const visibleRows: any = [];
  rows.forEach((row,idx) => {
    const userIndex = (row?.features as any).findIndex(
      (ff: any) => ff.properties.username == username
    );
    const time = dayjs(row.time as number)
      .locale("fa")
      .calendar("jalali")
      .format("YYYY D MMMM hh:mm A");
    if (userIndex === -1) {
      visibleRows.push({
        time,
        ...nopeData,
      });
    }
    if (row?.features && (row?.features as any)[userIndex]) {
      const f = (row?.features as any)[userIndex];

      visibleRows.push({
        index: idx,
        time,
        username: f.properties.username,
        id: f.properties.id,
        color: f.properties.color,
        lat: f?.geometry?.geometries[0]?.coordinates[0]?.toFixed(2) || "",
        long: f?.geometry?.geometries[0]?.coordinates[1]?.toFixed(2) || "",
      });
    }
  });
  const enhancedColumns = createEnhancedColumns(columns);

  return { visibleRows, enhancedColumns };
}
