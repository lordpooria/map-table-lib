import { __extends } from "tslib";
import JalaliUtils from "@date-io/jalaali";
var EditedJalaliUtils = /** @class */ (function (_super) {
    __extends(EditedJalaliUtils, _super);
    function EditedJalaliUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditedJalaliUtils.prototype.getDatePickerHeaderText = function (date) {
        return date.format("dddd, jD jMMMM");
    };
    return EditedJalaliUtils;
}(JalaliUtils));
export default EditedJalaliUtils;
