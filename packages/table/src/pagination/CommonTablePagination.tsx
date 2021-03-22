import React from "react";
import {
  createStyles,
  makeStyles,
  TablePagination,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { CommonTablePagination } from "@/types/tableElements";

const useStyles = makeStyles((theme) =>
  createStyles({
    paginationRoot: {
      width: "100%",
      border: 0,
      borderTop: `solid 1px ${theme.palette.grey[300]}`,
    },
  })
);

const Pagination = ({
  classes,

  numRowsSelected,
  width,
  ...rest
}: CommonTablePagination) => {
  const paginationClasses = useStyles();
  return (
    <>
      <TablePagination
      
        {...rest}
        component="div"
        style={{ width }}
        className={clsx(paginationClasses.paginationRoot, classes?.root)}
      />
      {numRowsSelected > 0 && (
        <Typography>{numRowsSelected} rows selected</Typography>
      )}
    </>
  );
};

export default Pagination;
