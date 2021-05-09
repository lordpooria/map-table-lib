import React from "react";

import FilterItem from "./components/FilterItem";
import { CloseIcon } from "@hesaba/assets";
import { IconButton, makeStyles, createStyles } from "@material-ui/core";
import {
  useTableToolbarAction,
  useTableToolbarState,
} from "../TableToolbarProvider";

const useStyles = makeStyles((theme) =>
  createStyles({
    rootFilter: {
      position: "absolute",
      
      backgroundColor: "#FFF",
      padding: theme.spacing(1),
      top: 20,
      left: 20,
      boxShadow: theme.shadows[2],
    },
    filterWrapper: {
      display: "flex",
      alignItems: "center",
    },
  })
);

interface Props {}

const TableFilter = ({}: Props) => {
  const classes = useStyles();
  const { showFilter, filters } = useTableToolbarState();
  const { toggleShowFilter } = useTableToolbarAction();
  const handleClose = () => {
    toggleShowFilter(false);
  };
  // const filterAdd = useStoreActions((actions) => actions.filterAdd);

  if (!showFilter) return null;
  return (
    <div className={classes.rootFilter}>
      <IconButton size="small" onClick={handleClose} style={{ float: "right" }}>
        <CloseIcon />
      </IconButton>
      {filters.map((filter, index) => (
        <div key={filter.id} className={classes.filterWrapper}>
          <FilterItem filter={filter} index={index} columns={[]} />
        </div>
      ))}
      <div style={{ width: "100%" }}>
        {/* <span onClick={() => filterAdd()}>ADD</span> */}
      </div>
    </div>
  );
};

export default TableFilter;
