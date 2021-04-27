import JalaliUtils from "@date-io/jalaali";
import { Dayjs } from "dayjs";

class EditedJalaliUtils extends JalaliUtils {
  getDatePickerHeaderText(date: Dayjs) {
    return date.format("dddd, jD jMMMM");
  }
}

export default EditedJalaliUtils;
