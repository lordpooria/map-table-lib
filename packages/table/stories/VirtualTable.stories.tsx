import { createStyles, makeStyles } from "@material-ui/styles";
import VirtualizaTable from "../src/virtualize-table/VirtualizaTable";

import { RawTableColumns } from "../src/types";
import Operations from "./Operations";
import { PercentCell, QualityCell } from "./table-test/CellComponent";
import HesabaVirtualTable from "../src/HesabaVirtualTable";
import AutoResizer from "../src/virtualize-table/container-virtual/AutoResizer";
import { storiesOf } from "@storybook/react";
import { useCallback, useEffect, useState } from "react";
import { AppBar, IconButton } from "@material-ui/core";
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
  // {
  //   label: "percent",
  //   key: "percent",
  //   type: "date",
  //   CellComponent: PercentCell,
  // },

  // {
  //   label: "vaildated",
  //   key: "vaildated",
  //   type: "number",
  //   CellComponent: QualityCell,
  // },
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

export const useTableData = () => {
  const [table, setTable] = useState({ schemaColumns: [], rows: [] });

  const getData = useCallback(async () => {
    const res: any = await fetch(`http://0.0.0.0:5000/api/get-schema/employees`);
    const jsonRes = await res.json();

    const schemaColumns = jsonRes?.schema.map((s) => ({
      label: s.name,
      key: s.name,
      type: s.type,
    }));
    setTable((prevState) => ({
      ...prevState,
      rows: jsonRes?.tableData,
      schemaColumns,
    }));
  }, []);
  useEffect(() => {
    getData();
    //   if (!error && data?.data?.schema) {
    //     const formattedSchema = setTableSchema(data?.data?.schema);
    //     const schemaColumns = formattedSchema.map((s) => ({
    //       label: s.name,
    //       key: s.name,
    //       type: s.type,
    //     }));
    //     setTable((prevState) => ({
    //       ...prevState,
    //       rows: data?.data?.tableData,
    //       schemaColumns,
    //     }));
    //   }
  }, [getData]);

  return table;
};

storiesOf("Virtual Table", module)
  .add("Simple", () => {
    const classes = useStyles();
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
  })
  .add("Get data from server Simple", () => {
    const table = useTableData();
    console.log(table)
    const classes = useStyles();
    return (
      <div style={{ width: " calc(50vw + 220px)", height: "70vh" }}>
        <AppBar style={{width:'100%',padding:16,height:20}}>
          <IconButton style={{width:48,height:48}}>click</IconButton>
        </AppBar>
        <AutoResizer>
          {({ width, height }) => (
            <HesabaVirtualTable
              height={height}
              width={width}
              columns={table.schemaColumns as any}
              rows={table.rows}
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
  });
