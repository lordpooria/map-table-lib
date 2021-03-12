import React from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import EditedJalaliUtils from "../../utils/calendar";
import moment from "moment";
import jMoment from "moment-jalaali";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { FilterBaseProps } from "./FilterValues";

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

interface Props {
  children: React.ReactNode;
}

export const FilterValueDateWrapper = ({ children }: Props) => {
  const calendar: any = "";
  return (
    <MuiPickersUtilsProvider
      utils={calendar === "jalali" ? EditedJalaliUtils : MomentUtils}
      locale={calendar === "jalali" ? "fa" : "en"}
      libInstance={calendar === "jalali" ? jMoment : moment}
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
  

  const handleChange = (_: number) => (
    date: MaterialUiPickersDate
  ) => {
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
