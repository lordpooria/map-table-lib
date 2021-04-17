import React from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/dayjs';
// import EditedJalaliUtils from "../../utils/calendar";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { FilterBaseProps } from "./FilterValues";

dayjs.extend(jalaliday);

export type Calndar = "gregory" | "jalali";

interface Props {
  children: React.ReactNode;
}

export const FilterValueDateWrapper = ({ children }: Props) => {
  const calendar: Calndar = "jalali";
  return (
    <MuiPickersUtilsProvider
      utils={calendar === "jalali" ? DateFnsUtils : DateFnsUtils}
      locale={calendar === "jalali" ? "fa" : "en"}
      // libInstance={(dayjs as any).calendar(calendar)}
    >
      {children}
    </MuiPickersUtilsProvider>
  );
};

const FilterValueDate = ({
  filterIndex,
  valIndex,
  onSetFilter,
  value,
  classes,
  label,
}: FilterBaseProps) => {
  const handleChange = (_: number) => (date: MaterialUiPickersDate) => {
    if (!date) return;
    onSetFilter(filterIndex, valIndex, date.toISOString());
  };
  return (
    <FilterValueDateWrapper>
      <DatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        value={value}
        className={classes?.root}
        key={`date-${valIndex}`}
        onChange={handleChange(valIndex)}
        //   minDate={calMinDate}
        //   maxDate={calMaxDate}
        // showTodayButton={true}
        // okLabel={t("ok")}
        // cancelLabel={t("cancel")}
        // clearLabel={t("clear")}
        // todayLabel={t("today")}
        label={label}
        // autoOk
        inputVariant="standard"
        InputProps={{ classes: { root: classes?.input } }}
        //   format={calendar === "jalali" ? "jYYYY/jMM/jDD" : "DD MMM YYYY"}
        //   openTo={openTo ? openTo : "date"}
        animateYearScrolling
      />
    </FilterValueDateWrapper>
  );
};

export default FilterValueDate;
