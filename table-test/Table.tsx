import AutoResizer  from "../packages/table/src/virtualize-table/container-virtual/AutoResizer";
import HesabaVirtualTable from "../packages/table/src/HesabaVirtualTable";

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

export const schemaColumns = [
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

const Table = () => {
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
            direction="ltr"
          />
        )}
      </AutoResizer>
    </div>
  );
};

export default Table;
