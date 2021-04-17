import React, { memo, useEffect } from "react";
import {
  AutoResizer,
  HesabaVirtualTable,
  ToolbarMoreVert,
  useTStoreState,
} from "@hesaba/table";
import { useMapData } from "./useMapData";
import { TdTableProps } from "../types/TableType";
import clsx from "clsx";
import { AppBar, Tabs, Tab, makeStyles } from "@material-ui/core";
import { useTDStoreState } from "../store";
import tdStoreTableModel from "./tableReducer";
import { useLocalStore } from "easy-peasy";

const useStyles = makeStyles({
  root: { width: "100%", backgroundColor: "#FFF" },
});

const TDTable = memo(
  ({
    className,
    classes,
    tableProps,
    operationOnRows,
  }: TdTableProps & { className: string }) => {
    const { rows, schemaColumns } = useMapData();
    const tabClasses = useStyles();
    const [state, actions] = useLocalStore(() => tdStoreTableModel);

    const users = useTDStoreState((state) => state.users);
    const formattedData = useTDStoreState((state) => state.formattedData);

    // const enhancedColumns = useTStoreState((state) => state.enhancedColumns);

    useEffect(() => {
      if (users && formattedData) {
        actions.setTabs(
          Object.keys(users).map((k, index) => ({
            id: `${index}`,
            username: k,
            color: users[k],
          }))
        );
      }
    }, [users, formattedData]);

    return (
      <div className={clsx(className, classes?.root)}>
        <AppBar
          position="static"
          className={clsx(tabClasses.root, classes?.tabbar)}
        >
          <div style={{ display: "flex" }}>
            <MoreVert />
            <Tabs
              value={state.tabIndex}
              onChange={(_: any, newValue: string) =>
                actions.setTabIndex(newValue)
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
        </AppBar>
        <AutoResizer>
          {({ width, height }) => (
            <HesabaVirtualTable
              width={width as number}
              height={height as number}
              columns={schemaColumns}
              rows={rows}
              selectable
              resizable
              sortable
              hasToolbar={false}
              VTCommonTableElProps={{
                CheckboxProps: { style: { color: state.indicatorColor } },
              }}
              VTHeaderProps={{
                DividerProps: { style: { fill: state.indicatorColor } },
              }}
              direction="ltr"
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

export default TDTable;
