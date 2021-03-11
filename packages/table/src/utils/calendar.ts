import JalaliUtils from "@date-io/jalaali";
import { Moment } from "moment";

class EditedJalaliUtils extends JalaliUtils {
  getDatePickerHeaderText(date: Moment) {
    return date.format("dddd, jD jMMMM");
  }
}

export default EditedJalaliUtils;
