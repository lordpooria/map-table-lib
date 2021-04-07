import { ControlOptions } from "leaflet";
import React from "react";
import { Users } from "./common";
import { GeoJsonProperties } from "geojson";
interface LegendsOwnProps {
    users: Users | null;
}
export declare type LegendsProps = ControlOptions & LegendsOwnProps;
export declare type ExternalLegendsComponent = {
    properties: Array<GeoJsonProperties> | undefined;
};
export declare type LegendsContainerProps = {
    LegendComponent?: React.FC<ExternalLegendsComponent>;
};
export {};
