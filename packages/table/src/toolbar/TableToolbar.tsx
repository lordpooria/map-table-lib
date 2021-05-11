import React, { memo, useState } from "react";
import {
  Checkbox,
  createStyles,
  FormControlLabel,
  IconButton,
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
import {
  useTableToolbarAction,
  useTableToolbarState,
} from "./TableToolbarProvider";
import { FilterIcon, SearchTableIcon } from "@hesaba/assets";

const useStyles = makeStyles((theme) =>
  createStyles({
    menuList: { display: "flex", flexDirection: "column", padding: 16 },
    menuItem: { justifyContent: "space-around" },
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

        <ToolbarFilter hasFilter={hasFilter} />
        <ToolbarSearch searchable={searchable} />

        {rest.operationOnRows && <ToolbarOperation {...rest} />}
      </div>
      <Typography align="center" className={toolbarClasses.title}>
        {title ?? ""}
      </Typography>
    </div>
  );
};

const ToolbarFilter = memo(({ hasFilter }: any) => {
  const { showFilter } = useTableToolbarState();

  if (!hasFilter || !showFilter) return null;
  return <TableFilter />;
});

const ToolbarSearch = memo(({ searchable }: any) => {
  const { showSearch } = useTableToolbarState();

  if (!searchable || !showSearch) return null;
  return <TableSearch />;
});

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
      <IconButton onClick={handleClick} className={classes?.iconButton}>
        <MoreVertIcon
          className={clsx(
            { [toolbarClasses.icon]: !classes?.icon },
            classes?.icon
          )}
        />
      </IconButton>

      {hasFilter && (
        <IconButton
          onClick={() => {
            toggleShowFilter(true);
            handleClose();
          }}
          className={classes?.iconButton}
        >
          <MenuItem
            className={clsx(
              { [toolbarClasses.icon]: !classes?.icon },
              classes?.icon
            )}
          >
            <FilterIcon />
          </MenuItem>
        </IconButton>
      )}
      {searchable && (
        <IconButton
          onClick={() => {
            toggleShowSearch(true);
            handleClose();
          }}
          className={classes?.iconButton}
        >
          <MenuItem
            className={clsx(
              { [toolbarClasses.icon]: !classes?.icon },
              classes?.icon
            )}
          >
            <SearchTableIcon />
          </MenuItem>
        </IconButton>
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
            className={clsx(toolbarClasses.menuItem, classes?.menuItem)}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={c.visible}
                  onChange={() => {
                    toggleVisibleColumns({ index });
                  }}
                  color="primary"
                  name={c.label}

                  // classes={{ root: commonClasses.checkbox }}
                  // {...CheckboxProps}
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
