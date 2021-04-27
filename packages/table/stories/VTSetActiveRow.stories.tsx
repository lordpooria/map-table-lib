import { createStyles, makeStyles } from "@material-ui/styles";
import Operations from "./Operations";
import HesabaVirtualTable from "../src/HesabaVirtualTable";
import AutoResizer from "../src/virtualize-table/container-virtual/AutoResizer";
import { storiesOf } from "@storybook/react";

import theme from "./table-test/theme";
import { simpleRows, simpleSchemaColumns } from "./table-test/fakeData";
import { CommonVirtualTableContainer } from "./table-test/container";
import { TableStoreProvider } from "../src/container/Wrapper";
import { useTableRowAction } from "../src/container/TableRowProvider";
import { useEffect } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      backgroundColor: "#D0C",
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

const onRowClick = (index)=>{
console.log(index)
}

const TableWithActiveRow = () => {
  const setActive = useTableRowAction();
  useEffect(() => {
    setActive(1);
  }, []);
  return (
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
          VTRowProps={{onRowClick}}
          theme={theme as any}
          title="Simple Table"
          operationOnRows={[Operations]}
          direction="ltr"
        />
      )}
    </AutoResizer>
  );
};

storiesOf("VT With Acitivated Rows", module).add(
  "Customizable Theme Styles",
  () => {
    return (
      <CommonVirtualTableContainer>
        <TableStoreProvider>
          <TableWithActiveRow />
        </TableStoreProvider>
      </CommonVirtualTableContainer>
    );
  }
);
