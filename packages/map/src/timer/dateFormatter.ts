import dayjs, { Dayjs } from "dayjs";
import jalaliday from "jalaliday";

export function usePerisan() {
  dayjs.extend(jalaliday);
  (dayjs as any)().locale('fa').calendar("jalali");
  return null;
}

export function formatPersianDateComplete(m: Dayjs) {
  return `${m.locale('fa').calendar("jalali").format("YYYY dddd D MMMM")}`;
}
export function formatPersianTimeComplete(m: Dayjs) {
  return `${m.locale('fa').calendar("jalali").format("hh:mm:ss A")}`;
}
export function findIsAM(m: Dayjs) {
  return +m.hour() < 12;
}

export const getDisplayNoTimeError = "داده زمانی وجود ندارد";

export const getAMText = "ق.ظ";
export const getPMText = "ب.ظ";
