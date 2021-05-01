import HesabaVirtualTable from "../src/HesabaVirtualTable";
import AutoSizer from "../src/virtualize-table/container-virtual/AutoSizer";
import { simpleSchemaColumns, simpleRows } from "./table-test/fakeData";
import { CommonVirtualTableContainer } from "./table-test/container";
import { makeStyles } from "@material-ui/core";
import Operations from "./Operations";


const useStyles = makeStyles({
  container: { fontFamily: "Arial, Helvetica, sans-serif !important" },
});

export const SimpleVirtualTableRTL = () => {
  return (
    <CommonVirtualTableContainer>
      <AutoSizer>
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
            title="Table Title"
            operationOnRows={[Operations]}
          />
        )}
      </AutoSizer>
    </CommonVirtualTableContainer>
  );
};


export const SimpleVirtualTableLTR = () => {
  return (
    <CommonVirtualTableContainer>
      <AutoSizer>
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
            direction="ltr"
            language="en"
          />
        )}
      </AutoSizer>
    </CommonVirtualTableContainer>
  );
};

export const SimpleVirtualTableWithSmallWithHeight = () => {
  return (
    <HesabaVirtualTable
      height={200}
      width={200}
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
      direction="ltr"
    />
  );
};




export default {
  title: "Base VT",
};
