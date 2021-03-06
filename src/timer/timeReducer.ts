import { action, Action } from "easy-peasy";

export interface TimerStoreModel {
  displayDate: string;
  displayTime: Date | string;
  isAM: boolean;

  setDisplayDate: Action<
    TimerStoreModel,
    { displayDate: string; displayTime: Date | string; isAM: boolean }
  >;
}

export const timerStoreModel: TimerStoreModel = {
  displayDate: "",
  displayTime: "",
  isAM: true,

  setDisplayDate: action((state, { displayDate, displayTime, isAM }) => {
    state.displayDate = displayDate;
    state.displayTime = displayTime;
    state.isAM = isAM;
  }),
};
