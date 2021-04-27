import React from "react";
import { Users } from "./common";
import { GeoJsonProperties } from "geojson";
import { LegendClasses } from "./styles";

interface LegendsOwnProps {
  users: Users | null;
}

export type LegendsProps = LegendsOwnProps &
  Omit<PublicLegendProps, "LegendComponent">;

export type ExternalLegendsComponent = {
  properties: Array<GeoJsonProperties> | undefined;
};

export type PublicLegendProps = {
  LegendComponent?: React.FC<ExternalLegendsComponent>;
  classes?: LegendClasses;
};

export type CompleteLegendProps = PublicLegendProps;
