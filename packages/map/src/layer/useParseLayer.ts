import { useCallback, useEffect, useRef } from "react";
import { GeoJSON } from "geojson";
export function useParseLayer(data: GeoJSON) {
  const layers = useRef<Array<any>>();

  const parseLayer = useCallback((data) => {

  }, []);

  useEffect(() => {}, [parseLayer, data]);

  return layers;
}
