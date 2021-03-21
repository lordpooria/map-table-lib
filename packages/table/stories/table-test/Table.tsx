import { AutoResizer } from "../../src/virtualize-table/container";
import HesabaVirtualTable from "../../src/HesabaVirtualTable";
import { PercentCell, QualityCell } from "../table-test/CellComponent";
import Operations from "../table-test/Operations";
import { RawTableColumns } from "../../src/types";

const rows = [...Array.from({ length: 4000 }, (_, i) => i)].map((item) => {
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

export const schemaColumns: RawTableColumns<any> = [
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

interface Props {}

const Table = ({}: Props) => {
  return (
    <div style={{ width: " calc(50vw + 220px)", height: "70vh" }}>
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
            // classes={{
            //   table: { container: classes.root },
            //   row: { root: classes.row, cell: { root: classes.cell } },
            //   footer: { root: classes.footer },
            //   toolbar: { root: classes.toolbar },
            //   header: { root: classes.header, cell: { root: classes.cell } },
            // }}
            // title="Simple Table"
            operationOnRows={[Operations]}
            direction="ltr"
          />
        )}
      </AutoResizer>
    </div>
  );
};

export default Table;
