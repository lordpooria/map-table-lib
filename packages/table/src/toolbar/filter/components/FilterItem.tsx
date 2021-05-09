import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import { FilterColumn, FilterOperations, FilterValues } from "./FilterFields";

import { TableFilterType } from "../../../types/VirtualTableFilter";

import { TrashIcon } from "@hesaba/assets";
import { useTableToolbarAction } from "../../TableToolbarProvider";
import { useTStoreState } from "../../../store/reducerHooks";
import { ButtonTooltip, useTranslation } from "@hesaba/theme-language";

// import CollapseVertical from "/assets/icons/CollapseVertical";
// import DeleteConfirm from "/components/actions/DeleteConfirm";

// import { UISchema } from "/models/graph";
// import { useDispatch } from "react-redux";
// import { filterDelete, filterSetName } from "../services/filterActions";
// import { useTranslation } from "/app/i18n";
// import SimpleWarning from "/components/info/SimpleWarning";

const useStyles = makeStyles((theme) =>
  createStyles({
    deleteButton: {
      // display: "flex",
      // justifyContent: "flex-end",
    },

    inputs: { width: 150 },
    autoComplete: { margin: theme.spacing(1) },
  })
);

interface Props {
  filter: TableFilterType;
  index: number;
}

const FilterItem = ({ filter, index }: Props) => {
  //   const [notExpanded, setExpanded] = useState<any>({});
 
  const classes = useStyles();
  const { t } = useTranslation();
  const { filterDelete: deleteFilter } = useTableToolbarAction();
  //   const dispatch = useDispatch();
  const columns = useTStoreState((state) => state.visibleColumns);
 

  //   const { typedSchema, remainingSchema } = filteredSchema(filter, schema);
  //   const deleteWarning = `${t("deleteConfirmMsg")} filter ${filter.name}`;
  return (
    <>
      <ButtonTooltip
        title={t("delete")}
        size="small"
        status="error"
        className={classes.deleteButton}
        onClick={() => deleteFilter({ index })}
      >
        <TrashIcon />
      </ButtonTooltip>
      {filter?.column.map((column, columnIndex) => (
        <FilterColumn
          key={`${filter?.column[0]?.type}-${columnIndex}`}
          filterIndex={index}
          value={column}
          columnIndex={columnIndex}
          columns={columns}
          classes={{ root: classes.autoComplete, input: classes.inputs }}
        />
      ))}

      <FilterOperations
        columnType={filter?.column[0]?.type}
        filterIndex={index}
        operation={filter.operation}
        classes={{ root: classes.autoComplete, input: classes.inputs }}
      />

      {filter.value.map((val: any, valIndex: any) => (
        <FilterValues
          key={`${filter?.column[0]?.type}-${valIndex}`}
          filterIndex={index}
          valIndex={valIndex}
          val={val}
          columnType={filter?.column[0]?.type}
          label={t("filter.value")}
          classes={{ root: classes.autoComplete, input: classes.inputs }}
        />
      ))}
    </>
  );
};

export default FilterItem;
