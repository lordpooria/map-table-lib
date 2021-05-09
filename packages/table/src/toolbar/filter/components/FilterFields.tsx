import React, { memo, useEffect, useRef, useState } from "react";
import { createStyles, makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import { operations } from "./utilsFilter";
import { SimpleNumericInput, SimpleStringInput } from "./FilterValues";
import DateInput from "./FilterValueDate";
// import { FilterMaps } from "./FilterValueMap";
import { ColumnType, TableColumnData, TableColumns } from "../../../types/main";
import clsx from "clsx";
import {
  FilterOperationsType,
  FilterValueType,
} from "../../../types/VirtualTableFilter";
import { useTableToolbarAction } from "../../TableToolbarProvider";

const useStyles = makeStyles(() =>
  createStyles({ input: { borderColor: "transparent" } })
);

interface ColumnProps {
  filterIndex: number;
  columnIndex: number;
  value: TableColumnData | null;
  columns: TableColumns | undefined;
  classes?: { root?: string; input?: string };
}

export const FilterColumn = memo(
  ({ value, filterIndex, columns, columnIndex, classes }: ColumnProps) => {
    const t = (v: any) => v;
    const inClasses = useStyles();
    const [inputValue, setInputValue] = useState("");

    const { filterSetColumn } = useTableToolbarAction();
    // const allOptions = value && columns ? [value, ...columns] : columns;
    // if (!columns) return null;
    return (
      <Autocomplete
        value={value}
        onChange={(_: any, column) => {
          if (!column || typeof column === "string") return;
          filterSetColumn({
            column,
            columnIndex,
            filterIndex,
          });
        }}
        freeSolo
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={columns as any}
        className={clsx(inClasses.input, classes?.root)}
        getOptionLabel={(option) => (option ? option.label : "")}
        getOptionSelected={(option, value) =>
          option?.label ? option.label === value.label : true
        }
        renderInput={(params) => (
          <TextField
            {...params}
            classes={{ root: classes?.input }}
            label={t("column")}
            // InputProps={{ ...params.InputProps }}

            variant="standard"
            // label={t("preperation.filter.selectColumn")}
            // variant="outlined"
          />
        )}
      />
    );
  }
);

interface OperationProps {
  filterIndex: number;
  operation: FilterOperationsType | undefined;
  columnType: ColumnType | undefined;
  classes?: { root?: string; input?: string };
}

export const FilterOperations = memo(
  ({ operation, filterIndex, columnType, classes }: OperationProps) => {
    const t = (v: any) => v;
    const inClasses = useStyles();

    const { filterSetOperation } = useTableToolbarAction();
    const [options, setOptions] = useState(operations(t).commonOperations);
    const [inputValue, setInputValue] = useState("");
    const lastType = useRef("");

    useEffect(() => {
      if (!columnType) return;
      if (lastType.current !== columnType && columnType) {
        lastType.current = columnType;
        switch (columnType) {
          case "geographic":
            setOptions([...operations(t).mapOptions]);
            break;
          case "number":
            setOptions([
              ...operations(t).commonOperations,
              ...operations(t).numericOptions,
            ]);
            break;
          case "string":
            setOptions([
              ...operations(t).commonOperations,
              ...operations(t).stringOptions,
            ]);
            break;
          case "date":
            setOptions([
              ...operations(t).commonOperations,
              ...operations(t).dateOptions,
            ]);
            break;
          default:
            setOptions(operations(t).commonOperations);
        }
      }
    }, [columnType, t]);

    return (
      <Autocomplete
        autoComplete
        value={operation}
        onChange={(_: any, operation) => {
          if (!operation || typeof operation === "string") return;
          filterSetOperation({ operation, filterIndex });
        }}
        freeSolo
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        className={clsx(inClasses.input, classes?.root)}
        getOptionLabel={(option) => option?.name ?? ""}
        getOptionSelected={(option, value) =>
          !option?.name ? option.name === value.name : true
        }
        renderInput={(params) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* <Tooltip title={t('preperation.filter.selectOpTip') as string}>
                        <div>
                            <Calculator />
                        </div>
                    </Tooltip> */}
            <TextField
              {...params}
              classes={{ root: classes?.input }}
              label={t("op")}
              InputProps={{ ...params.InputProps }}
              variant="standard"
              //  label={t("preperation.filter.operation")}
            />
          </div>
        )}
      />
    );
  }
);
interface ValueProps {
  filterIndex: number;
  val: FilterValueType;
  valIndex: number;
  columnType: ColumnType | undefined;
  label: string;
  classes?: { root?: string; input?: string };
}
export const FilterValues = memo(
  ({ filterIndex, val, valIndex, columnType, label, classes }: ValueProps) => {
    const { filterSetValue } = useTableToolbarAction();


    const onSetFilter = (
      filterIndex: number,
      valueIndex: number,
      value: any
    ) => {
      filterSetValue({ filterIndex, valueIndex, value });
    };

    let FilterValue = undefined;
    // if (columnType === "geographic") {
    //   FilterValue = FilterMaps;
    // } else
    if (columnType === "date") {
      FilterValue = DateInput;
    } else if (columnType === "number") {
      FilterValue = SimpleNumericInput;
    } else {
      FilterValue = SimpleStringInput;
    }

    return (
      <FilterValue
        filterIndex={filterIndex}
        valIndex={valIndex}
        onSetFilter={onSetFilter}
        value={val}
        label={label}
        classes={classes}
      />
    );
  }
);
