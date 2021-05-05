"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePerisan = usePerisan;
exports.formatPersianDateComplete = formatPersianDateComplete;
exports.formatPersianTimeComplete = formatPersianTimeComplete;
exports.findIsAM = findIsAM;
exports.getPMText = exports.getAMText = exports.getDisplayNoTimeError = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _jalaliday = _interopRequireDefault(require("jalaliday"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function usePerisan() {
  _dayjs.default.extend(_jalaliday.default);

  (0, _dayjs.default)().locale('fa').calendar("jalali");
  return null;
}

function formatPersianDateComplete(m) {
  return `${m.locale('fa').calendar("jalali").format("YYYY dddd D MMMM")}`;
}

function formatPersianTimeComplete(m) {
  return `${m.locale('fa').calendar("jalali").format("hh:mm:ss A")}`;
}

function findIsAM(m) {
  return +m.hour() < 12;
}

const getDisplayNoTimeError = "داده زمانی وجود ندارد";
exports.getDisplayNoTimeError = getDisplayNoTimeError;
const getAMText = "ق.ظ";
exports.getAMText = getAMText;
const getPMText = "ب.ظ";
exports.getPMText = getPMText;
//# sourceMappingURL=dateFormatter.js.map