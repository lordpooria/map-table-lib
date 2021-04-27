import { useEffect } from "react";
import { useTDStoreActions } from "../store";
import { GeoJSONData, Users } from "../types";
import { FeatureCollection } from "geojson";

export function useParseData(data: GeoJSONData) {
  const setFormattedData = useTDStoreActions((actions) => actions.setData);

  useEffect(() => {
    const featuresIdx = data.findIndex((d: any) => d?.features);

    const usersIdx = data.findIndex((d: any, idx) => {
      if (idx === featuresIdx) {
        return null;
      }
      if (!Array.isArray(d)) return d;
      return null;
    });

    const mergedData = (data[featuresIdx] as FeatureCollection).features.reduce(
      (acc, cur) => {
        if (cur?.properties?.time) {
          if (cur.properties.time in acc) {
            acc[cur.properties.time].features.push(cur);
            return acc;
          }

          return {
            ...acc,
            [cur.properties.time]: {
              time: cur.properties.time,
              features: [cur],
            },
          };
        }
        return acc;
      },
      {} as Record<string, any>
    );

    const formattedData = Object.values(mergedData).sort((a, b) =>
      a.time > b.time ? 1 : -1
    );
    const users = data[usersIdx] as Users;
    setFormattedData({ formattedData, users });
  }, []);
}
