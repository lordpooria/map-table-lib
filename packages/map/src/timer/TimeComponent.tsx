import React, { useCallback, useEffect } from "react";
import { useLocalStore } from "easy-peasy";
import day from "dayjs";
import { timerStoreModel } from "./timeReducer";
import {
  formatPersianDateComplete,
  usePerisan,
  findIsAM,
  getAMText,
  getDisplayNoTimeError,
  getPMText,
} from "./dateFormatter";

import { Typography } from "@material-ui/core";
import { useTDStoreState } from "../store/reducerHooks";
import useStyles from "./TimeComponent.styles";
import { TimeProps } from "./TimeComponent.types";
import clsx from "clsx";
import ClockComponent from "./ClockComponent";
// import { TimeZone } from "../types";

const TimerComponent = ({
  am = getAMText,
  pm = getPMText,
  noTimeError = getDisplayNoTimeError,
  clockProps,
  dateWrapperClasses,
  dateClasses,
  amPmClasses,
}: /*timeZone*/ TimeProps) => {
  const [state, actions] = useLocalStore(() => timerStoreModel);
  usePerisan();
  const currentTime = useTDStoreState((state) => state.currentTime);
  const timeClasses = useStyles();

  useEffect(() => {
    update(currentTime);
  }, [currentTime]);

  const update = useCallback((currentTime) => {
    if (currentTime >= 0) {
      try {
        const date = day(currentTime);

        actions.setDisplayDate({
          displayDate: formatPersianDateComplete(date),
          displayTime: new Date(currentTime),
          isAM: findIsAM(date),
        });
      } catch (e) {}
    } else {
      actions.setDisplayDate({
        displayDate: noTimeError,
        displayTime: "",
        isAM: true,
      });
    }
  }, []);

  return (
    <div className={timeClasses.root}>
      <div className={timeClasses.clockWrapper}>
        <ClockComponent
          displayTime={state.displayTime}
          clockProps={clockProps}
        />
        <Typography className={clsx(timeClasses.amPm, amPmClasses)}>
          {state.isAM ? am : pm}
        </Typography>
      </div>
      <div className={clsx(timeClasses.dateWrapper, dateWrapperClasses)}>
        <p className={clsx(timeClasses.date, dateClasses)}>
          {state.displayDate}
        </p>
      </div>
    </div>
  );
};

export default TimerComponent;
