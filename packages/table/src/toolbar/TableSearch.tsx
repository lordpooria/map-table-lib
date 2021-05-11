import React from "react";
import Grow from "@material-ui/core/Grow";
import TextField from "@material-ui/core/TextField";
import { CloseIcon } from "@hesaba/assets";

import { makeStyles } from "@material-ui/core/styles";

import { TableSearchProps } from "../types/TableSearch";

import {
  useTableToolbarAction,
  useTableToolbarState,
} from "./TableToolbarProvider";
import { ButtonTooltip, useTranslation } from "@hesaba/theme-language";

const useStyles = makeStyles(
  (theme) => ({
    main: {
      position: "absolute",

      backgroundColor: "#FFF",
      padding: theme.spacing(2),
      top: 20,
      left: 20,
      boxShadow: theme.shadows[2],
      zIndex: 1,
      display: "flex",
    },
    searchText: {
      minWidth: 300,
    },
    clearIcon: {
      "&:hover": {
        color: theme.palette.error.main,
      },
    },
  }),
  { name: "MUIDataTableSearch" }
);

const TableSearch = ({}: TableSearchProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { onSearchTextChange, toggleShowSearch } = useTableToolbarAction();
  const { searchText } = useTableToolbarState();
  const handleTextChange = (event: any) => {
    onSearchTextChange(event.target.value);
  };

  const onHide = () => {
    toggleShowSearch(false);
  };
  const onKeyDown = (event: any) => {
    if (event.key === "Escape") {
      onHide();
    }
  };

  return (
    <Grow appear in={true} timeout={300}>
      <div className={classes.main}>
        <ButtonTooltip
          title={t("close")}
          status="error"
          className={classes.clearIcon}
          onClick={onHide}
        >
          <CloseIcon />
        </ButtonTooltip>

        <TextField
          className={classes.searchText}
          autoFocus={true}
          label={t("search")}
          placeholder={t("type")}
          // InputProps={{
          //   "data-test-id": options.textLabels.toolbar.search,
          // }}
          // inputProps={{
          //   "aria-label": options.textLabels.toolbar.search,
          // }}
          value={searchText || ""}
          onKeyDown={onKeyDown}
          onChange={handleTextChange}
          fullWidth={true}
          // placeholder={options.searchPlaceholder}
          // {...(options.searchProps ? options.searchProps : {})}
        />
      </div>
    </Grow>
  );
};

export default TableSearch;
