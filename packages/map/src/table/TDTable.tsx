import React, { memo, useCallback, useEffect } from "react";
import {
  HesabaVirtualTable,
  ToolbarMoreVert,
  useTStoreState,
} from "@hesaba/table";
import { TdTableProps } from "../types/TableType";
import clsx from "clsx";
import { Tabs, Tab, makeStyles } from "@material-ui/core";
import { useTDStoreState } from "../store";
import tdStoreTableModel from "./tableReducer";
import { useLocalStore } from "easy-peasy";
import { tableDataParser, commonSchemaColumns } from "./table.utils";
import { colourNameToHex } from "../utils/colorConverter";
import { useAutoScroll } from "./useAutoScroll";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%", backgroundColor: "#FFF", display: "flex" },
  header: {
    backgroundColor: "#f1ece7",
    borderBottom: "none",
  },
  tabRoot: { borderTopRightRadius: theme.shape.borderRadius * 2 },
  scrollButton: {
    color: "#000",
    borderTopRightRadius: theme.shape.borderRadius * 2,
  },
  tableContainer: { borderWidth: 0 },
  row: {
    // backgroundColor: "#FFF",
    border: "#999",
    borderBottom: "solid 1px",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
      border: "none",
    },
  },
}));

type TDTableCompleteProps = TdTableProps & {
  height: number | undefined;
  width: number;
  initialWidth: number;
  className: string;
  theme?: any;
};

function calcTableHeight(height: any, theme?: any) {
  if (theme?.mixins?.toolbar?.minHeight) {
    return height - theme?.mixins?.toolbar?.minHeight;
  }
  return height - 60;
}

const TDTableContainer = memo((props: TDTableCompleteProps) => {
  const onRowClick = useAutoScroll();
  return <TDTable {...props} onRowClick={onRowClick} />;
});

const TDTable = memo(
  ({
    className,
    tableClasses,
    tableProps,
    operationOnRows,
    onRowClick,
    schemaColumns: customSchemaColumns,
    theme,
    height,
    width,
    initialWidth,
  }: TDTableCompleteProps & { onRowClick: (_: number) => void }) => {
    const tabClasses = useStyles();
    const [state, actions] = useLocalStore(() => tdStoreTableModel);

    const users = useTDStoreState((state) => state.users);
    const formattedData = useTDStoreState((state) => state.formattedData);

    const dataParser = useCallback(
      (col, row) => {
        return tableDataParser(col, row, state.tabIndex);
      },
      [state.tabIndex]
    );
    useEffect(() => {
      if (users && formattedData) {
        actions.setTabs(
          Object.keys(users).map((k) => ({
            id: `${k}`,
            username: k,
            color: users[k],
          }))
        );
      }
    }, [users, formattedData]);

    return (
      <div className={clsx(className, tableClasses?.root)} id="hesaba-table">
        <div style={{}} className={clsx(tabClasses.root, tableClasses?.tabbar)}>
          <MoreVert />
          <Tabs
            value={state.tabIndex}
            scrollButtons="on"
            variant="scrollable"
            classes={{
              root: tabClasses.tabRoot,
              scrollButtons: tabClasses.scrollButton,
            }}
            onChange={(_: any, tabIndex: string) =>
              actions.setTabIndex({
                tabIndex,
                color: (users && users[tabIndex]) || "",
              })
            }
            TabIndicatorProps={{
              style: { backgroundColor: state.indicatorColor },
            }}
          >
            {/* <ToolbarMoreVert columns={enhancedColumns} /> */}
            {state.tabs.map(({ username, color, id }) => (
              <Tab
                key={username}
                value={id}
                label={username}
                wrapped
                style={{ color }}
              />
            ))}
          </Tabs>
        </div>
        {operationOnRows && <Operations operationOnRows={operationOnRows} />}

        <HesabaVirtualTable
          width={width || initialWidth}
          height={calcTableHeight(height, theme)}
          columns={customSchemaColumns || commonSchemaColumns}
          rows={formattedData as any}
          selectable
          resizable
          sortable
          VTRowProps={{
            onRowClick,
            selectedRowStyle: {
              borderRight: `solid 2px  ${state.indicatorColor}`,
              backgroundColor: `${colourNameToHex(state.indicatorColor)}22`,
            },
          }}
          hasToolbar={false}
          tableDataParser={dataParser}
          theme={theme}
          classes={
            {
              table: { root: tabClasses.tableContainer },
              header: { root: tabClasses.header },
              row: { root: tabClasses.row },
            } as any
          }
          VTCommonTableElProps={{
            CheckboxProps: { style: { color: state.indicatorColor } },
          }}
          VTHeaderProps={{
            DividerProps: { style: { fill: state.indicatorColor } },
          }}
          {...tableProps}
        />
      </div>
    );
  }
);

const useMenuStyles = makeStyles({
  icon: {},
  iconButton: { color: "#444" },
  menu: { display: "flex" },
  menuItem: {},
});

const MoreVert = memo(() => {
  const classes = useMenuStyles();
  return <ToolbarMoreVert classes={{ iconButton: classes.iconButton }} />;
});

const Operations = memo(
  ({
    operationOnRows,
  }: {
    operationOnRows: TdTableProps["operationOnRows"];
  }) => {
    const numRowsSelected = useTStoreState((state) => state.numRowsSelected);
    return (
      <>
        {numRowsSelected && operationOnRows && (
          <div>
            {operationOnRows.map((Component, index) => (
              <Component index={index} />
            ))}
          </div>
        )}
      </>
    );
  }
);

export default TDTableContainer;
