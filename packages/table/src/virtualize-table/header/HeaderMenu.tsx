import React, { useState } from "react";
import {
  createStyles,
  makeStyles,
  Menu,
  MenuItem,
  withStyles,
} from "@material-ui/core";
import { useTStoreActions } from "../../store/reducerHooks";
import { ArrowDownIcon, ArrowUpIcon } from "@hesaba/assets";

import { ButtonTooltip, useTranslation } from "@hesaba/theme-language";
import { SortType } from "../../types/main";
import { VTMainListProps } from "../../types";
import { useAddSticky } from "../../container/TableStickyProvider";

const HeaderIconButton = withStyles(() => ({
  root: { margin: 4 },
}))(ButtonTooltip);

const useStyles = makeStyles(() =>
  createStyles({
    icons: { width: 14, height: 14 },
    menu: { display: "flex", flexDirection: "column", padding: 16 },
    headerButton: { cursor: "pointer" },
  })
);

interface Props {
  index: number;
  sortable?: VTMainListProps["sortable"];
  columnKey: string;
  dataField: string;
  sorted: SortType;
  sticked?: boolean;
  children: React.ReactNode;
}

const OPTIONS = {
  sortAsc: "Sort ASC",
  sortDesc: "Sort DESC",
  hideColumn: "Hide Column",
  filter: "Filter",
  stick: "Stick",
};

const HeaderMenu = ({
  index,
  sortable,
  columnKey,
  sorted,
  sticked,
  dataField,
  children,
}: Props) => {
  const menuClasses = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { t } = useTranslation();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const sortTable = useTStoreActions((actions) => actions.sortTable);
  // const filterAdd = useTStoreActions((actions) => actions.filterAdd);
  const onAddSticky  = useAddSticky();

  const toggleVisibleColumns = useTStoreActions(
    (actions) => actions.toggleVisibleColumns
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortDesc = () =>
    sortTable({ index, sortType: "DESC", columnKey: columnKey });

  const sortAsc = () =>
    sortTable({ index, sortType: "ASC", columnKey: columnKey });

  // const stickColumn = () => setStickyColumn({ index });

  return (
    <>
      {sortable && sorted === "DESC" && (
        <HeaderIconButton title={t("sortDsc")} onClick={sortDesc}>
          <ArrowUpIcon className={menuClasses.icons} />
        </HeaderIconButton>
      )}
      {sortable && sorted === "ASC" && (
        <HeaderIconButton title={t("sortAsc")} onClick={sortAsc}>
          <ArrowDownIcon className={menuClasses.icons} />
        </HeaderIconButton>
      )}

      <div onClick={handleClick} className={menuClasses.headerButton}>
        {children}
      </div>

      {/* <HeaderIconButton title={t("menu")} onClick={handleClick}>
      
        <MoreVertIcon className={menuClasses.icons} />
      </HeaderIconButton> */}
      <Menu
        disableScrollLock={true}
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        classes={{ list: menuClasses.menu }}
        PaperProps={{
          style: {
            //   maxHeight: ITEM_HEIGHT * 4.5,
            // width: "20ch",
          },
        }}
      >
        <MenuItem onClick={() => onAddSticky(index, dataField, sticked)}>
          {sticked ? "UnStick" : "Stick"}
        </MenuItem>
        {sortable && <MenuItem onClick={sortAsc}>{OPTIONS.sortAsc}</MenuItem>}
        {sortable && <MenuItem onClick={sortDesc}>{OPTIONS.sortDesc}</MenuItem>}
        <MenuItem onClick={() => toggleVisibleColumns({ index })}>
          {OPTIONS.hideColumn}
        </MenuItem>
        {/* <MenuItem
          onClick={() => {
            filterAdd({ columnKey });
          }}
        >
          {OPTIONS.filter}
        </MenuItem> */}
        {/* <MenuItem onClick={stickColumn}>{OPTIONS.stick}</MenuItem> */}
      </Menu>
    </>
  );
};

export default HeaderMenu;
