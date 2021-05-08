export interface Clock {
  className?: string;
  hourHandLength?: number;
  hourHandOppositeLength?: any;
  hourHandWidth?: number;
  hourMarksLength?: number;
  hourMarksWidth?: number;
  minuteHandLength?: number;
  minuteHandOppositeLength?: any;
  minuteHandWidth?: number;
  minuteMarksLength?: number;
  minuteMarksWidth?: number;
  renderHourMarks?: boolean;
  renderMinuteHand?: boolean;
  renderMinuteMarks?: boolean;
  renderNumbers?: any;
  renderSecondHand?: boolean;
  secondHandLength?: number;
  secondHandOppositeLength?: any;
  secondHandWidth?: number;
  size?: number;
  value: any;
}
