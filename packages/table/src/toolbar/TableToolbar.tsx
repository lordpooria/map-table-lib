import React, { useState } from "react";
import {
  createStyles,
  FormControlLabel,
  makeStyles,
  Menu,
  MenuItem,
  Switch,
  Typography,
} from "@material-ui/core";
import MoreVert from "../assets/icons/common/MoreVertIcon";

import { useTStoreActions, useTStoreState } from "../store/reducerHooks";

import { TableToolbarCompleteProps } from "../types/TableToolbar";
import clsx from "clsx";
import { SmallIconButton } from "@hesaba/theme-language";

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbarContainer: {
      borderBottom: `solid ${theme.palette.grey[300]} 1px`,
      padding: theme.spacing(1),
    },
    tools: {
      display: "flex",
      alignItems: "center",
    },
    icon: {
      fill: theme.palette.secondary.main,
    },
  })
);

export const TableToolbar = ({
  title,

  classes,
  ...rest
}: TableToolbarCompleteProps) => {
  const toolbarClasses = useStyles();

  return (
    <div className={clsx(toolbarClasses.toolbarContainer, classes?.root)}>
      <Typography align="center">{title ?? ""}</Typography>

      <div className={clsx(toolbarClasses.tools)}>
        <ToolbarMoreVert classes={classes} />

        {rest.operationOnRows && <ToolbarOperation {...rest} />}
      </div>
    </div>
  );
};

export function ToolbarMoreVert({
  classes,
}: {
  classes: TableToolbarCompleteProps["classes"];
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
  const toggleShowFilter = useTStoreActions(
    (actions) => actions.toggleShowFilter
  );

  return (
    <>
      <SmallIconButton onClick={handleClick} className={classes?.iconButton}>
        <MoreVert
          className={clsx(
            { [toolbarClasses.icon]: !classes?.icon },
            classes?.icon
          )}
        />
      </SmallIconButton>

      <Menu
        disableScrollLock={true}
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        className={classes?.menu}
      >
        <MenuItem
          className={classes?.menuItem}
          onClick={() => {
            toggleShowFilter(true);
            handleClose();
          }}
        >
          filter
        </MenuItem>
        {enhancedColumns?.map((c: any, index: any) => (
          <MenuItem key={c.key} className={classes?.menuItem}>
            <FormControlLabel
              control={
                <Switch
                  checked={c.visible}
                  onChange={() => toggleVisibleColumns({ index })}
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
