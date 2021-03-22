import React, { useState } from "react";
import {
  createStyles,
  makeStyles,
  Menu,
  MenuItem,
  withStyles,
} from "@material-ui/core";
import { useTStoreActions } from "../../store/reducerHooks";
import MoreVert from "../../assets/icons/common/MoreVertIcon";
import ArrowDown from "../../assets/icons/common/ArrowDownIcon";
import ArrowUp from "../../assets/icons/common/ArrowUpIcon";
import { SmallIconButton } from "../../styled-component/StyledButton";
import { SortType } from "../../types/main";
// import PinIcon from "@/assets/icons/common/PinIcon";

const HeaderIconButton = withStyles(() => ({
  root: { margin: 4 },
}))(SmallIconButton);

const useStyles = makeStyles(() =>
  createStyles({
    icons: { width: 14, height: 14 },
  })
);

interface Props {
  index: number;
  sortable?: boolean;
  columnKey: string;
  sorted: SortType;
}

const OPTIONS = {
  sortAsc: "Sort ASC",
  sortDesc: "Sort DESC",
  hideColumn: "Hide Column",
  filter: "Filter",
  stick: "Stick",
};

const HeaderMenu = ({ index, sortable, columnKey, sorted }: Props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const sortTable = useTStoreActions((actions) => actions.sortTable);
  const filterAdd = useTStoreActions((actions) => actions.filterAdd);
  // const setStickyColumn = useTStoreActions(
  //   (actions) => actions.setStickyColumn
  // );

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
        <HeaderIconButton onClick={sortAsc}>
          <ArrowUp className={classes.icons} />
        </HeaderIconButton>
      )}
      {sortable && sorted === "ASC" && (
        <HeaderIconButton onClick={sortDesc}>
          <ArrowDown className={classes.icons} />
        </HeaderIconButton>
      )}
      {/* {sortable && sorted === "ASC" && (
        <HeaderIconButton onClick={stickColumn}>
          <PinIcon className={classes.icons} />
        </HeaderIconButton>
      )} */}
      <HeaderIconButton onClick={handleClick}>
        <MoreVert className={classes.icons} />
      </HeaderIconButton>
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
        {sortable && <MenuItem onClick={sortAsc}>{OPTIONS.sortAsc}</MenuItem>}
        {sortable && <MenuItem onClick={sortDesc}>{OPTIONS.sortDesc}</MenuItem>}
        <MenuItem onClick={() => toggleVisibleColumns({ index })}>
          {OPTIONS.hideColumn}
        </MenuItem>
        <MenuItem
          onClick={() => {
            filterAdd({ columnKey });
          }}
        >
          {OPTIONS.filter}
        </MenuItem>
        {/* <MenuItem onClick={stickColumn}>{OPTIONS.stick}</MenuItem> */}
      </Menu>
    </>
  );
};

export default HeaderMenu;
