import React, { useCallback, useEffect } from "react";
import { getDisplayNoTimeError } from "../utils/utils";
import { useLocalStore } from "easy-peasy";
import moment from "moment-jalaali";
import { timerStoreModel } from "./timerReducer";
import {
  formatPersianDateComplete,
  usePerisan,
  findIsAM,
} from "./dateFormatter";
import Clock from "react-clock";
// import "react-clock/dist/Clock.css"
import { Typography } from "@material-ui/core";
import { useTDStoreState } from "../store/reducerHooks";
// import { TimeZone } from "../types";

interface Props {
  // timeZone: TimeZone;
}

const TimerComponent = ({}: /*timeZone*/ Props) => {
  const [state, actions] = useLocalStore(() => timerStoreModel);
  usePerisan();
  const currentTime = useTDStoreState((state) => state.currentTime);

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        zIndex: 1000,
        top: 20,
        right: 20,
      }}
    >
      <div style={{ position: "relative" }}>
        <Clock value={state.displayTime} size={80}  />
        <Typography
          style={{
            fontSize: 12,
            fontWeight: 800,
            padding: 4,
            // backgroundColor: "#555",
            color: "#555",
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translate(-50%)",

            // boxShadow: state.isAM ? "#888 0 2px 3px 1px" : "",
          }}
        >
          {state.isAM ? "AM" : "PM"}
        </Typography>
      </div>
      <div style={{ backgroundColor: "rgba(68,68,68,0.3)" }}>
        {state.displayDate}
      </div>
    </div>
  );
};

export default TimerComponent;
