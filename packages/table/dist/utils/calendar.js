"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jalaali = _interopRequireDefault(require("@date-io/jalaali"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EditedJalaliUtils extends _jalaali.default {
  getDatePickerHeaderText(date) {
    return date.format("dddd, jD jMMMM");
  }

}

var _default = EditedJalaliUtils;
exports.default = _default;
//# sourceMappingURL=calendar.js.map