import React, { Fragment } from "react";

import { _getFeatureBetweenDates, _getFeatureTimes } from "../utils/layer.util";
import { useTDStoreState } from "../store/reducerHooks";
import { TDCircleMarker, TDPolyline } from "./LayerComponents";
import { TDLayerOptions } from "../types/layer";

export default function TDGeojsonLayer({
  pathOptions,
  circleProps,
  polylineProps,
  ToolTipComponent,
}: TDLayerOptions) {
  const currentData = useTDStoreState((state) => state.currentData);
  return (
    <>
      {currentData?.features.map((f, index) => (
        <Fragment
          key={`${f?.properties?.id || f?.properties?.username}-${index}`}
        >
          {(f.geometry as any).geometries.map((g: any) =>
            g.type === "Point" ? (
              <TDCircleMarker
                coordinates={g.coordinates}
                pathOptions={{ color: f?.properties?.color, ...pathOptions }}
                circleProps={circleProps}
                ToolTipComponent={ToolTipComponent}
                properties={f.properties}
              />
            ) : (
              <TDPolyline
                coordinates={g.coordinates}
                pathOptions={{ color: f?.properties?.color, ...pathOptions }}
                polylineProps={polylineProps}
              />
            )
          )}
        </Fragment>
      ))}
    </>
  );
}
