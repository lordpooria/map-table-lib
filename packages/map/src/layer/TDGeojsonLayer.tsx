import React from "react";

import { _getFeatureBetweenDates, _getFeatureTimes } from "../utils/layer.util";
import { useTDStoreState } from "../store/reducerHooks";
import { TDCircleMarker, TDPolyline } from "./LayerComponents";
import { TDLayerOptions } from "../types/layer";

export default function TDGeojsonLayer({ pathOptions }: TDLayerOptions) {
  const currentData = useTDStoreState((state) => state.currentData);

  return (
    <>
      {currentData?.features.map((f) =>
        (f.geometry as any).geometries.map((g: any) =>
          g.type === "Point" ? (
            <TDCircleMarker
              coordinates={g.coordinates}
              pathOptions={{ color: f?.properties?.color, ...pathOptions }}
            />
          ) : (
            <TDPolyline
              coordinates={g.coordinates}
              pathOptions={{ color: f?.properties?.color, ...pathOptions }}
            />
          )
        )
      )}
    </>
  );
}
