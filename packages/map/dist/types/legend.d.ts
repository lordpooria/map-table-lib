import { ControlOptions } from "leaflet";
import { Users } from "./common";
interface LegendsOwnProps {
    users: Users | null;
}
export declare type LegendsProps = ControlOptions & LegendsOwnProps;
export {};
