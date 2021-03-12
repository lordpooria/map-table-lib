import React from "react";
import Provider from "./container/Wrapper";
import DataGrid from "./data-grid/DataGrid/DataGrid";
import { GridTableProps } from "./types/tableTypes";

const HesabaDataGrid = ({ direction = "ltr", ...props }: GridTableProps) => {
  return (
    <Provider direction={direction}>
      <DataGrid {...props} direction={direction} />
    </Provider>
  );
};

export default HesabaDataGrid;
