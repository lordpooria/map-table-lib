import { Moment } from "moment";
import moment from "moment-jalaali";

export function usePerisan() {
  require("moment/locale/fa");
  moment.loadPersian({ dialect: "persian-modern" });
  return null;
}

export function formatPersianDateComplete(m: Moment) {
  return `${m.format("jYYYY dddd jD jMMMM")}`;
}
export function formatPersianTimeComplete(m: Moment) {
  return `${m.format("hh:mm:ss A")}`;
}
export function findIsAM(m: Moment) {
  return +m.hour() < 12;
}

export const getDisplayNoTimeError = "داده زمانی وجود ندارد";

export const getAMText = "ق.ظ"
export const getPMText = "ب.ظ"