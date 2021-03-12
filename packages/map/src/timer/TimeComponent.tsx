import React, { useCallback, useEffect } from "react";
import { getDisplayNoTimeError } from "../utils/utils";
import { useLocalStore } from "easy-peasy";
import moment from "moment-jalaali";
import { timerStoreModel } from "./timeReducer";
import {
  formatPersianDateComplete,
  usePerisan,
  findIsAM,
} from "./dateFormatter";
import Clock from "react-clock";

import { Typography } from "@material-ui/core";
import { useTDStoreState } from "../store/reducerHooks";
import useStyles from "./TimeComponent.styles";
import { TimeProps } from "./TimeComponent.types";
import clsx from "clsx";
// import { TimeZone } from "../types";

const TimerComponent = ({
  am = "AM",
  pm = "PM",
  clockProps,
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
        const date = moment(currentTime);

        actions.setDisplayDate({
          displayDate: formatPersianDateComplete(date),
          displayTime: new Date(currentTime),
          isAM: findIsAM(date),
        });
      } catch (e) {}
    } else {
      actions.setDisplayDate({
        displayDate: getDisplayNoTimeError(),
        displayTime: "",
        isAM: true,
      });
    }
  }, []);

  return (
    <div className={timeClasses.root}>
      <div className={timeClasses.clockWrapper}>
        <Clock value={state.displayTime} size={80} {...clockProps} />
        <Typography className={clsx(timeClasses.amPm, amPmClasses)}>
          {state.isAM ? am : pm}
        </Typography>
      </div>
      <div className={clsx(timeClasses.dateWrapper, dateClasses)}>
        {state.displayDate}
      </div>
    </div>
  );
};

export default TimerComponent;
