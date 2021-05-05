"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useParseData = useParseData;

var _react = require("react");

var _store = require("../store");

function useParseData(data) {
  const setFormattedData = (0, _store.useTDStoreActions)(actions => actions.setData);
  (0, _react.useEffect)(() => {
    const featuresIdx = data.findIndex(d => d === null || d === void 0 ? void 0 : d.features);
    const usersIdx = data.findIndex((d, idx) => {
      if (idx === featuresIdx) {
        return null;
      }

      if (!Array.isArray(d)) return d;
      return null;
    });
    const mergedData = data[featuresIdx].features.reduce((acc, cur) => {
      var _cur$properties;

      if (cur !== null && cur !== void 0 && (_cur$properties = cur.properties) !== null && _cur$properties !== void 0 && _cur$properties.time) {
        if (cur.properties.time in acc) {
          acc[cur.properties.time].features.push(cur);
          return acc;
        }

        return { ...acc,
          [cur.properties.time]: {
            time: cur.properties.time,
            features: [cur]
          }
        };
      }

      return acc;
    }, {});
    const formattedData = Object.values(mergedData).sort((a, b) => a.time > b.time ? 1 : -1);
    const users = data[usersIdx];
    setFormattedData({
      formattedData,
      users
    });
  }, []);
}
//# sourceMappingURL=useParseData.js.map