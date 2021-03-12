import JalaliUtils from "@date-io/jalaali";
import { Moment } from "moment";
declare class EditedJalaliUtils extends JalaliUtils {
    getDatePickerHeaderText(date: Moment): string;
}
export default EditedJalaliUtils;
