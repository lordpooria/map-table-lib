import { ControlOptions } from "leaflet";
import React from "react";
import { Users } from "./common";
import {  GeoJsonProperties } from "geojson";

interface LegendsOwnProps {
  users: Users | null;
}

export type LegendsProps = ControlOptions & LegendsOwnProps;

export type ExternalLegendsComponent = {
  properties: Array<GeoJsonProperties> | undefined;
};

export type LegendsContainerProps = {
  LegendComponent?: React.FC<ExternalLegendsComponent>;
};
