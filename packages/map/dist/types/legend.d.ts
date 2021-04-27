import React from "react";
import { Users } from "./common";
import { GeoJsonProperties } from "geojson";
import { LegendClasses } from "./styles";
interface LegendsOwnProps {
    users: Users | null;
}
export declare type LegendsProps = LegendsOwnProps & Omit<PublicLegendProps, "LegendComponent">;
export declare type ExternalLegendsComponent = {
    properties: Array<GeoJsonProperties> | undefined;
};
export declare type PublicLegendProps = {
    LegendComponent?: React.FC<ExternalLegendsComponent>;
    classes?: LegendClasses;
};
export declare type CompleteLegendProps = PublicLegendProps;
export {};
