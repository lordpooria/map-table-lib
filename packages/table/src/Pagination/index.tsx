import React from "react";
import {
  createStyles,
  InputBase,
  makeStyles,
  MenuItem,
  Select,
  TablePaginationProps,
  Toolbar,
} from "@material-ui/core";

import clsx from "clsx";
import {
  WithFontTypography,
  useTranslation,
  ButtonTooltip,
  useLanguageState,
} from "@hesaba/theme-language";
// import { TablePaginationActionsProps } from "@material-ui/core/TablePagination/TablePaginationActions";

import ArrowRightIcon from "../assets/icons/common/ArrowRightIcon";
import ArrowLeftIcon from "../assets/icons/common/ArrowLeftIcon";
import { useTStoreState } from "../store/reducerHooks";
import { DEFAULT_PAGINATION_HEIGHT } from "../utils/themeConstants";

const useStyles = makeStyles((theme) =>
  createStyles({
    paginationRoot: {
      display: "flex",
      width: "100%",
      border: 0,
      flexWrap: "wrap",
      borderTop: `solid 1px ${theme.palette.grey[300]}`,
      alignItems: "center",
      justifyContent: "space-between",
    },
    actions: {
      flexShrink: 0,
      marginLeft: 20,
    },
    toolbar: {
      minHeight: 52,
      paddingRight: 2,
    },
    spacer: {
      flex: "1 1 100%",
    },
    /* Styles applied to the caption Typography components if `variant="caption"`. */
    caption: {
      flexShrink: 0,
    },
    selectRoot: {
      fontFamily: "inherit",
    },
    selectRootLTR: {
      marginRight: 32,
      marginLeft: 8,
    },
    selectRootRTL: {
      marginRight: 8,
      marginLeft: 32,
    },
    /* Styles applied to the Select component `select` class. */
    select: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right", // Align <select> on Chrome.
    },
    // TODO v5: remove
    /* Styles applied to the Select component `icon` class. */
    selectIcon: {},
    input: {
      color: "inherit",
      fontSize: "inherit",
      flexShrink: 0,
    },
    menuItem: {},
    selectContainer: { display: "flex" },
  })
);

function ActionsComponent({ page, onPageChange, count, rowsPerPage }: any) {
  const { t } = useTranslation();
  // const handleFirstPageButtonClick = (event: any) => {
  //   onPageChange(event, 0);
  // };

  const handleBackButtonClick = (event: any) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: any) => {
    onPageChange(event, page + 1);
  };

  // const handleLastPageButtonClick = (event: any) => {
  //   onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  // };
  return (
    <div style={{ display: "flex", direction: "ltr" }}>
      <ButtonTooltip
        title={t?.prev}
        onClick={handleBackButtonClick}
        disabled={page === 0}
        color="inherit"
      >
        <ArrowLeftIcon />
      </ButtonTooltip>
      <ButtonTooltip
        title={t?.next}
        onClick={handleNextButtonClick}
        disabled={
          count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false
        }
        color="inherit"
      >
        <ArrowRightIcon />
      </ButtonTooltip>
    </div>
  );
}

function defaultLabelDisplayedRows({
  from,
  to,
  count,
}: {
  from: number;
  to: number;
  count: number;
}) {
  const { t } = useTranslation();
  return `${from}-${to} ${t?.of} ${
    count !== -1 ? count : `${t?.moreThan}${to}`
  }`;
}

export type CommonTablePagination = TablePaginationProps & {
  width: number | string;
  classes?: { root?: string };
};

export function TablePagination({
  classes,
  width,
  rowsPerPageOptions = [10, 25, 50, 100],
  page,
  count,
  rowsPerPage,
  onChangeRowsPerPage,
  height,
  ...rest
}: CommonTablePagination) {
  const paginationClasses = useStyles();
  const { t } = useTranslation();
  const { direction } = useLanguageState();
  const numRowsSelected = useTStoreState((state) => state.numRowsSelected);

  const getLabelDisplayedRowsTo = () => {
    if (count === -1) return (page + 1) * rowsPerPage;
    return rowsPerPage === -1
      ? count
      : Math.min(count, (page + 1) * rowsPerPage);
  };

  return (
    <div
      className={clsx(paginationClasses.paginationRoot, classes?.root)}
      style={{ width, direction, height: height || DEFAULT_PAGINATION_HEIGHT }}
    >
      <Toolbar className={paginationClasses.toolbar}>
        <div className={paginationClasses.spacer} />
        <WithFontTypography
          color="inherit"
          variant="body2"
          className={paginationClasses.caption}
        >
          {t?.rowPerPage}
        </WithFontTypography>

        <Select
          classes={{
            select: paginationClasses.select,

            icon: paginationClasses.selectIcon,
          }}
          input={
            <InputBase
              className={clsx(
                clsx(
                  paginationClasses.input,
                  paginationClasses.selectRoot,
                  { [paginationClasses.selectRootLTR]: direction === "ltr" },
                  { [paginationClasses.selectRootRTL]: direction !== "ltr" }
                )
              )}
            />
          }
          value={rowsPerPage}
          onChange={onChangeRowsPerPage as any}
        >
          {rowsPerPageOptions.map((rowsPerPageOption: any) => (
            <MenuItem
              className={paginationClasses.menuItem}
              key={rowsPerPageOption}
              value={rowsPerPageOption}
            >
              {rowsPerPageOption}
            </MenuItem>
          ))}
        </Select>

        <WithFontTypography
          color="inherit"
          variant="body2"
          className={paginationClasses.caption}
        >
          {defaultLabelDisplayedRows({
            from: count === 0 ? 0 : page * rowsPerPage + 1,
            to: getLabelDisplayedRowsTo(),
            count: count === -1 ? -1 : count,
          })}
        </WithFontTypography>
        <ActionsComponent {...(rest as any)} />
      </Toolbar>

      {numRowsSelected > 0 && (
        <WithFontTypography>
          {numRowsSelected} {t.rowSelected}
        </WithFontTypography>
      )}
    </div>
  );
}
