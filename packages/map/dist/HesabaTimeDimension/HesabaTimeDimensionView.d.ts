import { GeoJsonObject } from "geojson";
import { GeoJSONOptions } from "leaflet";
import { PlayerProps } from "../player/PlayerControl.types";
import { TimeProps } from "../timer/TimeComponent.types";
import { TDLayerOptions } from "../layer/layer.type";
interface Props {
    data: GeoJsonObject;
    playerProps: PlayerProps;
    timeProps: TimeProps;
    geojsonProps: GeoJSONOptions;
    layerProps: TDLayerOptions;
    extralLayerProps: any;
}
declare const HesabaTimeDimensionView: ({ data, playerProps, timeProps, layerProps, geojsonProps, extralLayerProps, }: Props) => JSX.Element;
export default HesabaTimeDimensionView;
