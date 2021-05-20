import React, { FC } from "react";
import { TableStoreProvider } from "./container/Wrapper";
import { VirtualTableProps } from "./types/tableTypes";
import VirtualizaTable from "./virtualize-table/VirtualizaTable";

/**
 * Decorator component that automatically adjusts the width and height of a single child
 */
export const HesabaVirtualTable: FC<VirtualTableProps> = ({
  direction,
  language,
  theme,
  ...props
}: VirtualTableProps) => {
  return (
    <TableStoreProvider direction={direction} language={language} theme={theme}>
      <VirtualizaTable {...props} />
    </TableStoreProvider>
  );
};

export default HesabaVirtualTable;
