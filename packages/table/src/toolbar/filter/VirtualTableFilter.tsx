import React, { memo, useEffect } from "react";

import FilterItem from "./components/FilterItem";
import { CloseIcon } from "@hesaba/assets";
import { makeStyles, createStyles, Grow } from "@material-ui/core";

import { Add } from "@material-ui/icons";
import { ButtonTooltip, useTranslation } from "@hesaba/theme-language";
import { TableToolbarCompleteProps } from "../../types/TableToolbar";
import { TableFilterType } from "../../types/VirtualTableFilter";
import { useTableToolbarAction } from "../TableToolbarProvider";

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

interface Props {
  onFilterChange: TableToolbarCompleteProps["onFilterChange"];
  filters: Array<TableFilterType>;
  showFilter: boolean;
}

const TableFilter = memo(({ onFilterChange, filters, showFilter }: Props) => {
  const classes = useStyles();

  const { toggleShowFilter, filterAdd } = useTableToolbarAction();

  const handleClose = () => {
    toggleShowFilter(false);
  };

  useEffect(() => {
    onFilterChange && onFilterChange(filters);
  }, [filters]);

  const { t } = useTranslation();
  if (!showFilter) return null;
  return (
    <Grow appear in={true} timeout={300}>
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
    </Grow>
  );
});

export default TableFilter;
