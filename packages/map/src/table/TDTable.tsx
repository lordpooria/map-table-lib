import React, { memo, useCallback, useEffect } from "react";
import {
  AutoResizer,
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
import { useAutoScroll } from "./useAutoScroll";

const useStyles = makeStyles({
  root: { width: "100%", backgroundColor: "#FFF", display: "flex" },
  header: {
    backgroundColor: "#f1ece7",
    borderBottom: "none",
  },
  scrollButton: { color: "#000" },
  tableContainer: { borderWidth: 0 },
  row: {
    backgroundColor: "#FFF",
    border: "#999",
    borderBottom: "solid 1px",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
      border: "none",
    },
  },
});

type TDTableCompleteProps = TdTableProps & { className: string; theme?: any };

const TDTableContainer = memo((props: TDTableCompleteProps) => {
  const onRowClick = useAutoScroll();
  return <TDTable {...props} onRowClick={onRowClick} />;
});

const TDTable = memo(
  ({
    className,
    classes,
    tableProps,
    operationOnRows,
    onRowClick,
    schemaColumns: customSchemaColumns,
    theme,
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
      <div className={clsx(className, classes?.root)}>
        <div style={{}} className={clsx(tabClasses.root, classes?.tabbar)}>
          <MoreVert />
          <Tabs
            value={state.tabIndex}
            scrollButtons="on"
            variant="scrollable"
            classes={{ scrollButtons: tabClasses.scrollButton }}
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

        <AutoResizer>
          {({ width, height }) => (
            <HesabaVirtualTable
              width={width as number}
              height={height as number}
              columns={customSchemaColumns || commonSchemaColumns}
              rows={formattedData as any}
              selectable
              resizable
              sortable
              VTRowProps={{
                onRowClick,
                extraStyles: {
                  backgroundColor: `${state.indicatorColor}33`,
                  border: `solid ${state.indicatorColor}`,
                  borderLeftWidth: 1,
                },
              }}
              hasToolbar={false}
              tableDataParser={dataParser}
              theme={theme}
              classes={{
                table: { root: tabClasses.tableContainer },
                header: { root: tabClasses.header },
                row: { root: tabClasses.row },
              }}
              VTCommonTableElProps={{
                CheckboxProps: { style: { color: state.indicatorColor } },
              }}
              VTHeaderProps={{
                DividerProps: { style: { fill: state.indicatorColor } },
              }}
              {...tableProps}
            />
          )}
        </AutoResizer>
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
