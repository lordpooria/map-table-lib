import React, { memo, useState } from "react";
import {
  Checkbox,
  createStyles,
  FormControlLabel,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { MoreVertIcon } from "@hesaba/assets";

import { useTStoreActions, useTStoreState } from "../store/reducerHooks";

import { TableToolbarCompleteProps } from "../types/TableToolbar";
import clsx from "clsx";
import { DEFAULT_TOOLBAR_HEIGHT } from "../utils/themeConstants";
import TableFilter from "./filter/VirtualTableFilter";
import TableSearch from "./TableSearch";

import { FilterIcon, SearchTableIcon } from "@hesaba/assets";
import {
  useTableToolbarAction,
  useTableToolbarState,
} from "./TableToolbarProvider";
import { ButtonTooltip, useTranslation } from "@hesaba/theme-language";

const useStyles = makeStyles((theme) =>
  createStyles({
    menuList: { display: "flex", flexDirection: "column", padding: 16 },
    formControl: { justifyContent: "flex-start",width:'100%' },
    toolbarContainer: {
      borderBottom: `solid ${theme.palette.grey[300]} 1px`,
      display: "flex",
      alignItems: "center",
    },
    tools: {
      display: "flex",
      alignItems: "center",
      flex: 1,
    },
    title: { padding: `0 ${theme.spacing(1)}` },
    icon: {
      fill: theme.palette.secondary.main,
    },
  })
);

export const TableToolbar = ({
  title,
  height,
  classes,
  hasFilter,
  searchable,
  onSearchTextChange,
  onFilterChange,
  ...rest
}: TableToolbarCompleteProps) => {
  const toolbarClasses = useStyles();
  return (
    <div
      style={{ height: height || DEFAULT_TOOLBAR_HEIGHT }}
      className={clsx(toolbarClasses.toolbarContainer, classes?.root)}
    >
      <div className={clsx(toolbarClasses.tools)}>
        <ToolbarMoreVert
          classes={classes}
          hasFilter={hasFilter}
          searchable={searchable}
        />

        <ToolbarFilter hasFilter={hasFilter} onFilterChange={onFilterChange} />
        <ToolbarSearch
          searchable={searchable}
          onSearchTextChange={onSearchTextChange}
        />

        {rest.operationOnRows && <ToolbarOperation {...rest} />}
      </div>
      <Typography align="center" className={toolbarClasses.title}>
        {title ?? ""}
      </Typography>
    </div>
  );
};

interface FilterProps {
  hasFilter: TableToolbarCompleteProps["hasFilter"];
  onFilterChange: TableToolbarCompleteProps["onFilterChange"];
}

const ToolbarFilter = memo(({ hasFilter, onFilterChange }: FilterProps) => {
  const { filters, showFilter } = useTableToolbarState();
  if (!hasFilter || !showFilter) return null;
  return (
    <TableFilter
      onFilterChange={onFilterChange}
      filters={filters}
      showFilter={showFilter}
    />
  );
});

interface SearchProps {
  searchable: TableToolbarCompleteProps["searchable"];
  onSearchTextChange: TableToolbarCompleteProps["onSearchTextChange"];
}

const ToolbarSearch = memo(
  ({ searchable, onSearchTextChange }: SearchProps) => {
    const { showSearch, searchText } = useTableToolbarState();

    if (!searchable || !showSearch) return null;
    return (
      <TableSearch
        onSearchTextChange={onSearchTextChange}
        searchText={searchText}
      />
    );
  }
);

export function ToolbarMoreVert({
  classes,
  hasFilter,
  searchable,
}: {
  classes: TableToolbarCompleteProps["classes"];
  hasFilter: TableToolbarCompleteProps["hasFilter"];
  searchable: TableToolbarCompleteProps["searchable"];
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const enhancedColumns = useTStoreState((state) => state.enhancedColumns);
  const toolbarClasses = useStyles();
  const { t } = useTranslation();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleVisibleColumns = useTStoreActions(
    (actions) => actions.toggleVisibleColumns
  );
  const { toggleShowSearch, toggleShowFilter } = useTableToolbarAction();

  // const toggleShowFilter = useTStoreActions(
  //   (actions) => actions.toggleShowFilter
  // );

  return (
    <>
      <ButtonTooltip
        title={t("")}
        onClick={handleClick}
        className={classes?.iconButton}
      >
        <MoreVertIcon
          className={clsx(
            { [toolbarClasses.icon]: !classes?.icon },
            classes?.icon
          )}
        />
      </ButtonTooltip>

      {hasFilter && (
        <ButtonTooltip
          title={t("filter.filter")}
          onClick={() => {
            toggleShowFilter(true);
            handleClose();
          }}
          className={classes?.iconButton}
        >
          <FilterIcon />
        </ButtonTooltip>
      )}
      {searchable && (
        <ButtonTooltip
          title={t("search")}
          onClick={() => {
            toggleShowSearch(true);
            handleClose();
          }}
          className={classes?.iconButton}
        >
          <SearchTableIcon />
        </ButtonTooltip>
      )}

      <Menu
        disableScrollLock={true}
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        classes={{ list: toolbarClasses.menuList }}
        className={classes?.menu}
      >
        {enhancedColumns?.map((c: any, index: any) => (
          <MenuItem
            key={c.key}
         
            className={clsx(classes?.menuItem)}
          >
            <FormControlLabel
            className={toolbarClasses.formControl}
              control={
                <Checkbox
                  checked={c.visible}
                  onChange={() => {
                    toggleVisibleColumns({ index });
                  }}
                  color="primary"
                  name={c.label}
                />
              }
              label={c.label}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export function ToolbarOperation({
  operationOnRows,
}: {
  operationOnRows?: TableToolbarCompleteProps["operationOnRows"];
}) {
  const numRowsSelected = useTStoreState((state) => state.numRowsSelected);

  return (
    <>
      {operationOnRows &&
        numRowsSelected > 0 &&
        operationOnRows.map((Component: any, index: number) => (
          <Component key={index} />
        ))}
    </>
  );
}
