import React from "react";
import { createStyles, makeStyles, IconButton } from "@material-ui/core";
import {} from "./utilsFilter";
import { FilterColumn, FilterOperations, FilterValues } from "./FilterFields";

import { TableFilterType } from "../../types/VirtualTableFilter";
import { TableColumns } from "../../types/main";
import { useTStoreActions } from "../../store/reducerHooks";
import TrashIcon from "../../assets/icons/common/TrashIcon";


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
  columns: TableColumns;
}

const FilterItem = ({ filter, columns, index }: Props) => {
  //   const [notExpanded, setExpanded] = useState<any>({});
  const t = (v: any) => v;
  const classes = useStyles();
  const deleteFilter = useTStoreActions((actions) => actions.filterDelete);
  //   const dispatch = useDispatch();

  if (!filter?.column?.length) return null;
  //   const { typedSchema, remainingSchema } = filteredSchema(filter, schema);
  //   const deleteWarning = `${t("deleteConfirmMsg")} filter ${filter.name}`;
  return (
    <>
      <IconButton
        size="small"
        className={classes.deleteButton}
        onClick={() => deleteFilter({ index })}
      >
        <TrashIcon />
      </IconButton>
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
          label={t("value")}
          classes={{ root: classes.autoComplete, input: classes.inputs }}
        />
      ))}
    </>
  );
};

export default FilterItem;
