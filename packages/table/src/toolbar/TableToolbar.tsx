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
import MoreVert from "@/assets/icons/common/MoreVertIcon";

import { useTStoreActions } from "@/store/reducerHooks";

import { TableToolbarCompleteProps } from "../types/TableToolbar";
import clsx from "clsx";
import { SmallIconButton } from "@/styled-component/StyledButton";

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
  })
);

const VirtualToolbar = ({
  title,
  numRowsSelected,
  operationOnRows,
  columns,
  classes,
}: TableToolbarCompleteProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const toggleVisibleColumns = useTStoreActions(
    (actions) => actions.toggleVisibleColumns
  );
  const toggleShowFilter = useTStoreActions(
    (actions) => actions.toggleShowFilter
  );
  const toolbarClasses = useStyles();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={clsx(toolbarClasses.toolbarContainer, classes?.root)}>
      <Typography align="center">{title ?? ""}</Typography>

      <div className={clsx(toolbarClasses.tools)}>
        <SmallIconButton onClick={handleClick}>
          <MoreVert />
        </SmallIconButton>

        {/* {numRowsSelected > 0 && (
          <Typography >
            {numRowsSelected} rows selected
          </Typography>
        )} */}
        {operationOnRows &&
          numRowsSelected > 0 &&
          operationOnRows.map((Component: any, index: number) => (
            <Component key={index} />
          ))}
        <Menu
          disableScrollLock={true}
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              //   maxHeight: ITEM_HEIGHT * 4.5,
              // width: "20ch",
            },
          }}
        >
          <MenuItem
            onClick={() => {
              toggleShowFilter(true);
              handleClose();
            }}
          >
            filter
          </MenuItem>
          {columns.map((c: any, index: any) => (
            <MenuItem key={c.key}>
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
      </div>
    </div>
  );
};

export default VirtualToolbar;
