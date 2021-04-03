import { ControlOptions } from "leaflet";
import { Users } from "./common";

interface LegendsOwnProps {
  users: Users | null;
}

export type LegendsProps = ControlOptions & LegendsOwnProps;
