import theme from "../styles/theme";
import { GeoJSON } from "leaflet";

declare global {
  type AppTheme = typeof theme;

  type AppGeoJSONLayer = GeoJSON<any>;
}
