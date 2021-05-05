var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useEffect } from "react";
import { useTDStoreActions } from "../store";
export function useParseData(data) {
    var setFormattedData = useTDStoreActions(function (actions) { return actions.setData; });
    useEffect(function () {
        var featuresIdx = data.findIndex(function (d) { return d === null || d === void 0 ? void 0 : d.features; });
        var usersIdx = data.findIndex(function (d, idx) {
            if (idx === featuresIdx) {
                return null;
            }
            if (!Array.isArray(d))
                return d;
            return null;
        });
        var mergedData = data[featuresIdx].features.reduce(function (acc, cur) {
            var _a;
            var _b;
            if ((_b = cur === null || cur === void 0 ? void 0 : cur.properties) === null || _b === void 0 ? void 0 : _b.time) {
                if (cur.properties.time in acc) {
                    acc[cur.properties.time].features.push(cur);
                    return acc;
                }
                return __assign(__assign({}, acc), (_a = {}, _a[cur.properties.time] = {
                    time: cur.properties.time,
                    features: [cur],
                }, _a));
            }
            return acc;
        }, {});
        var formattedData = Object.values(mergedData).sort(function (a, b) {
            return a.time > b.time ? 1 : -1;
        });
        var users = data[usersIdx];
        setFormattedData({ formattedData: formattedData, users: users });
    }, []);
}
