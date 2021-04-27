import { PlayerCompleteProps } from "../../types/PlayerControl";
interface Props {
    timeSteps: PlayerCompleteProps["timeSteps"];
    classes: PlayerCompleteProps["classes"];
    playerSliderClasses?: string;
}
declare const TimeSlider: (props: Props) => JSX.Element;
export default TimeSlider;
