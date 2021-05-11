import React from "react";

import FilterItem from "./components/FilterItem";
import { CloseIcon } from "@hesaba/assets";
import { makeStyles, createStyles } from "@material-ui/core";
import {
  useTableToolbarAction,
  useTableToolbarState,
} from "../TableToolbarProvider";
import { Add } from "@material-ui/icons";
import { ButtonTooltip, useTranslation } from "@hesaba/theme-language";

const useStyles = makeStyles((theme) =>
  createStyles({
    rootFilter: {
      position: "absolute",
      minWidth: 300,
      backgroundColor: "#FFF",
      padding: theme.spacing(1),
      top: 20,
      left: 20,
      boxShadow: theme.shadows[2],
      zIndex: 4,
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
  console.log(filters);
  const { filterAdd } = useTableToolbarAction();
  const { t } = useTranslation();
  if (!showFilter) return null;
  return (
    <div className={classes.rootFilter}>
      <ButtonTooltip
        status="error"
        title={t("close")}
        size="small"
        onClick={handleClose}
       
      >
        <CloseIcon />
      </ButtonTooltip>
      {filters.map((filter, index) => (
        <div key={filter.id} className={classes.filterWrapper}>
          <FilterItem filter={filter} index={index} />
        </div>
      ))}
      <div style={{ width: "100%" }}>
        <ButtonTooltip title={t("filter.add")} onClick={() => filterAdd()}>
          <Add />
        </ButtonTooltip>
      </div>
    </div>
  );
};

export default TableFilter;
