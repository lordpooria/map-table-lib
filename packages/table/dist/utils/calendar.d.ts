import JalaliUtils from "@date-io/jalaali";
import { Dayjs } from "dayjs";
declare class EditedJalaliUtils extends JalaliUtils {
    getDatePickerHeaderText(date: Dayjs): string;
}
export default EditedJalaliUtils;
