import { createStyles, makeStyles } from "@material-ui/styles";
import Operations from "./Operations";
import HesabaVirtualTable from "../src/HesabaVirtualTable";
import AutoResizer from "../src/virtualize-table/container-virtual/AutoResizer";
import { storiesOf } from "@storybook/react";

import theme from "./table-test/theme";
import { simpleRows, simpleSchemaColumns } from "./table-test/fakeData";
import { CommonVirtualTableContainer } from "./table-test/container";

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

storiesOf("Virtual Table Styles", module)
  .add("Customizable Theme Styles", () => {
    return (
      <CommonVirtualTableContainer>
        <AutoResizer>
          {({ width, height }) => (
            <HesabaVirtualTable
              height={height}
              width={width}
              columns={simpleSchemaColumns}
              rows={simpleRows}
              selectable
              resizable
              sortable
              pagination={{
                rowsPerPage: 10,
                count: 20,
                page: 1,
                onPageChange: () => {},
              }}
              theme={theme as any}
              title="Simple Table"
              operationOnRows={[Operations]}
              direction="ltr"
            />
          )}
        </AutoResizer>
      </CommonVirtualTableContainer>
    );
  })
  .add("Customizable Custom Component Styles With css styles", () => {
    const classes = useStyles();
    return (
      <CommonVirtualTableContainer>
        <AutoResizer>
          {({ width, height }) => (
            <HesabaVirtualTable
              height={height}
              width={width}
              columns={simpleSchemaColumns}
              rows={simpleRows}
              selectable
              resizable
              sortable
              pagination={{
                rowsPerPage: 10,
                count: 20,
                page: 1,
                onPageChange: () => {},
              }}
              classes={{
                table: { container: classes.root },
                row: { root: classes.row, cell: { root: classes.cell } },
                footer: { root: classes.footer },
                toolbar: { root: classes.toolbar },
                header: { root: classes.header, cell: { root: classes.cell } },
              }}
              title="Simple Table"
              operationOnRows={[Operations]}
              direction="ltr"
            />
          )}
        </AutoResizer>
      </CommonVirtualTableContainer>
    );
  });
