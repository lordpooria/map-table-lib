import { ClockProps } from "react-clock";

export interface TimeProps {
  // timeZone: TimeZone;
  am?: string;
  pm?: string;
  dateClasses?: string;
  amPmClasses?: string;
  clockProps?: Partial<ClockProps>;
}

type TimeCompleteProps = TimeProps;
export default TimeCompleteProps;
