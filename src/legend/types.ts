import { ControlOptions } from "leaflet";

interface LegendsOwnProps {
  legends: Array<any>;
}

export type LegendsProps = ControlOptions & LegendsOwnProps;
