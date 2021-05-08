import React from "react";

import BaseTable from "./BaseTable";

export function Pagination() {
  return (
    <BaseTable
      pagination={
        {
          rowsPerPage: 10,
          count: 20,
          page: 1,
          onPageChange: () => {},
        } as any
      }
    />
  );
}
