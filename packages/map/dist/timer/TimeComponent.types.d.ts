import { ClockProps } from "react-clock";
export interface TimeProps {
    am?: string;
    pm?: string;
    dateClasses?: string;
    amPmClasses?: string;
    clockProps?: Partial<ClockProps>;
}
declare type TimeCompleteProps = TimeProps;
export default TimeCompleteProps;
