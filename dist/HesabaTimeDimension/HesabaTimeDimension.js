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
import React, { useState } from "react";
import { StyleProvider } from "@hesaba/theme-language";
import { AutoSizer, TableStoreProvider } from "@hesaba/table";
import TDProvider from "../provider/Provider";
import useStyles from "./HesabaTimeDimension.styles";
import HesabaTimeDimensionView from "../container/HesabaTimeDimensionView";
import "leaflet/dist/leaflet.css";
import { useParseData } from "../hooks/useParseData";
import { MapContainer, TileLayer } from "react-leaflet";
import TDTable from "../table/TDTable";
import ThemeMaker from "../provider/ThemeProvider";
import { SplitPane } from "react-collapse-pane";
var HesabaTimeDimension = function (props) {
    return (React.createElement(TDProvider, null,
        React.createElement(StyleProvider, { theme: props.theme, direction: "ltr", language: "en" },
            React.createElement(ThemeMaker, null, props.withTable ? React.createElement(PanelMap, __assign({}, props)) : React.createElement(CommonMap, __assign({}, props))))));
};
var CommonMap = function (_a) {
    var data = _a.data, children = _a.children, _b = _a.playerProps, playerProps = _b === void 0 ? {} : _b, _c = _a.timeProps, timeProps = _c === void 0 ? {} : _c, _d = _a.geojsonProps, geojsonProps = _d === void 0 ? {} : _d, _e = _a.layerProps, layerProps = _e === void 0 ? {} : _e, extralLayerProps = _a.extralLayerProps, mapProps = _a.mapProps, LegendComponent = _a.LegendComponent, classes = _a.classes;
    useParseData(data);
    var tdClasses = useStyles();
    var rootClass = (classes === null || classes === void 0 ? void 0 : classes.tdRoot) || tdClasses.tdRoot;
    var mapClass = (classes === null || classes === void 0 ? void 0 : classes.map) || tdClasses.mapRoot;
    return (React.createElement("div", { className: rootClass },
        React.createElement(MapContainer, __assign({ className: mapClass }, mapProps),
            children ? (children) : (React.createElement(TileLayer, { attribution: '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" })),
            React.createElement(HesabaTimeDimensionView, { data: data, playerProps: playerProps, timeProps: timeProps, geojsonProps: geojsonProps, layerProps: layerProps, extralLayerProps: extralLayerProps, LegendComponent: LegendComponent }))));
};
var PanelMap = function (_a) {
    var data = _a.data, children = _a.children, _b = _a.playerProps, playerProps = _b === void 0 ? {} : _b, _c = _a.timeProps, timeProps = _c === void 0 ? {} : _c, _d = _a.geojsonProps, geojsonProps = _d === void 0 ? {} : _d, _e = _a.layerProps, layerProps = _e === void 0 ? {} : _e, extralLayerProps = _a.extralLayerProps, mapProps = _a.mapProps, LegendComponent = _a.LegendComponent, tableProps = _a.tableProps, theme = _a.theme, classes = _a.classes;
    useParseData(data);
    var tdClasses = useStyles();
    var _f = useState(0), tableWidth = _f[0], setTableWidth = _f[1];
    var _g = useState(), map = _g[0], setMap = _g[1];
    // function setElementSizes(sizes: Array<number>) {
    //   if (!hesabaTable.current) {
    //     hesabaTable.current = document.querySelector(
    //       "#hesaba-table"
    //     ) as HTMLDivElement;
    //     hesabaMap.current = document.querySelector(
    //       "#hesaba-map"
    //     ) as HTMLDivElement;
    //   } else if (hesabaTable.current && hesabaMap.current) {
    //     hesabaTable.current.style.width = `${sizes[1]}px`;
    //     hesabaMap.current.style.width = `${sizes[0]}px`;
    //   }
    // }
    var rootClass = (classes === null || classes === void 0 ? void 0 : classes.tdRoot) || tdClasses.tdRootWithTable;
    var mapClass = (classes === null || classes === void 0 ? void 0 : classes.map) || tdClasses.mapRootWithTable;
    return (React.createElement(AutoSizer, null, function (_a) {
        var width = _a.width, height = _a.height;
        return (React.createElement("div", { style: { width: width, height: height }, className: rootClass },
            React.createElement(SplitPane, { initialSizes: [(width || 600) / 2, (width || 600) / 2], split: "vertical", collapseOptions: {
                    beforeToggleButton: null,
                    afterToggleButton: null,
                    overlayCss: { width: 0 },
                    collapsedSize: 100,
                    collapseDirection: "up",
                }, minSizes: [100, 100], hooks: {
                    // onChange: (sizes) => {
                    //   // setElementSizes(sizes);
                    // },
                    // onCollapse: (sizes) => {
                    //   // setElementSizes(sizes as any);
                    // },
                    onSaveSizes: function (sizes) {
                        map === null || map === void 0 ? void 0 : map.invalidateSize();
                        setTableWidth(sizes[1]);
                    },
                } },
                React.createElement(MapContainer, __assign({ whenCreated: setMap, id: "hesaba-map", className: mapClass }, mapProps),
                    children ? (children) : (React.createElement(TileLayer, { attribution: '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" })),
                    React.createElement(HesabaTimeDimensionView, { data: data, playerProps: playerProps, timeProps: timeProps, geojsonProps: geojsonProps, layerProps: layerProps, extralLayerProps: extralLayerProps, LegendComponent: LegendComponent })),
                React.createElement(TableStoreProvider, null,
                    React.createElement(TDTable, __assign({ className: tdClasses.tableRoot, theme: theme, height: height, width: tableWidth, initialWidth: (width || 800) / 2 }, tableProps))))));
    }));
};
export default HesabaTimeDimension;
