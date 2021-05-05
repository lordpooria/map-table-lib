import dayjs from "dayjs";
import jalaliday from "jalaliday";
export function usePerisan() {
    dayjs.extend(jalaliday);
    dayjs().locale('fa').calendar("jalali");
    return null;
}
export function formatPersianDateComplete(m) {
    return "" + m.locale('fa').calendar("jalali").format("YYYY dddd D MMMM");
}
export function formatPersianTimeComplete(m) {
    return "" + m.locale('fa').calendar("jalali").format("hh:mm:ss A");
}
export function findIsAM(m) {
    return +m.hour() < 12;
}
export var getDisplayNoTimeError = "داده زمانی وجود ندارد";
export var getAMText = "ق.ظ";
export var getPMText = "ب.ظ";
