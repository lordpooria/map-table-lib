"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _themeLanguage = require("@hesaba/theme-language");

var _table = require("@hesaba/table");

var _Provider = _interopRequireDefault(require("../provider/Provider"));

var _HesabaTimeDimension = _interopRequireDefault(require("./HesabaTimeDimension.styles"));

var _HesabaTimeDimensionView = _interopRequireDefault(require("../container/HesabaTimeDimensionView"));

require("leaflet/dist/leaflet.css");

var _useParseData = require("../hooks/useParseData");

var _reactLeaflet = require("react-leaflet");

var _TDTable = _interopRequireDefault(require("../table/TDTable"));

var _ThemeProvider = _interopRequireDefault(require("../provider/ThemeProvider"));

var _reactCollapsePane = require("react-collapse-pane");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const HesabaTimeDimension = props => {
  return _react.default.createElement(_Provider.default, null, _react.default.createElement(_themeLanguage.StyleProvider, {
    theme: props.theme,
    direction: "ltr",
    language: "en"
  }, _react.default.createElement(_ThemeProvider.default, null, props.withTable ? _react.default.createElement(PanelMap, props) : _react.default.createElement(CommonMap, props))));
};

const CommonMap = ({
  data,
  children,
  playerProps = {},
  timeProps = {},
  geojsonProps = {},
  layerProps = {},
  extralLayerProps,
  mapProps,
  LegendComponent,
  classes
}) => {
  (0, _useParseData.useParseData)(data);
  const tdClasses = (0, _HesabaTimeDimension.default)();
  const rootClass = (classes === null || classes === void 0 ? void 0 : classes.tdRoot) || tdClasses.tdRoot;
  const mapClass = (classes === null || classes === void 0 ? void 0 : classes.map) || tdClasses.mapRoot;
  return _react.default.createElement("div", {
    className: rootClass
  }, _react.default.createElement(_reactLeaflet.MapContainer, _extends({
    className: mapClass
  }, mapProps), children ? children : _react.default.createElement(_reactLeaflet.TileLayer, {
    attribution: "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }), _react.default.createElement(_HesabaTimeDimensionView.default, {
    data: data,
    playerProps: playerProps,
    timeProps: timeProps,
    geojsonProps: geojsonProps,
    layerProps: layerProps,
    extralLayerProps: extralLayerProps,
    LegendComponent: LegendComponent
  })));
};

const PanelMap = ({
  data,
  children,
  playerProps = {},
  timeProps = {},
  geojsonProps = {},
  layerProps = {},
  extralLayerProps,
  mapProps,
  LegendComponent,
  tableProps,
  theme,
  classes
}) => {
  (0, _useParseData.useParseData)(data);
  const tdClasses = (0, _HesabaTimeDimension.default)();
  const [tableWidth, setTableWidth] = (0, _react.useState)(0);
  const [map, setMap] = (0, _react.useState)();
  const rootClass = (classes === null || classes === void 0 ? void 0 : classes.tdRoot) || tdClasses.tdRootWithTable;
  const mapClass = (classes === null || classes === void 0 ? void 0 : classes.map) || tdClasses.mapRootWithTable;
  return _react.default.createElement(_table.AutoSizer, null, ({
    width,
    height
  }) => _react.default.createElement("div", {
    style: {
      width,
      height
    },
    className: rootClass
  }, _react.default.createElement(_reactCollapsePane.SplitPane, {
    initialSizes: [(width || 600) / 2, (width || 600) / 2],
    split: "vertical",
    collapseOptions: {
      beforeToggleButton: null,
      afterToggleButton: null,
      overlayCss: {
        width: 0
      },
      collapsedSize: 100,
      collapseDirection: "up"
    },
    minSizes: [100, 100],
    hooks: {
      onSaveSizes: sizes => {
        map === null || map === void 0 ? void 0 : map.invalidateSize();
        setTableWidth(sizes[1]);
      }
    }
  }, _react.default.createElement(_reactLeaflet.MapContainer, _extends({
    whenCreated: setMap,
    id: "hesaba-map",
    className: mapClass
  }, mapProps), children ? children : _react.default.createElement(_reactLeaflet.TileLayer, {
    attribution: "&copy <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }), _react.default.createElement(_HesabaTimeDimensionView.default, {
    data: data,
    playerProps: playerProps,
    timeProps: timeProps,
    geojsonProps: geojsonProps,
    layerProps: layerProps,
    extralLayerProps: extralLayerProps,
    LegendComponent: LegendComponent
  })), _react.default.createElement(_table.TableStoreProvider, null, _react.default.createElement(_TDTable.default, _extends({
    className: tdClasses.tableRoot,
    theme: theme,
    height: height,
    width: tableWidth,
    initialWidth: (width || 800) / 2
  }, tableProps))))));
};

var _default = HesabaTimeDimension;
exports.default = _default;
//# sourceMappingURL=HesabaTimeDimension.js.map