export const mapRoutes = [
  { title: "installation", href: "/map/installation" },
  { title: "Simple Map", href: "/map/simple-map" },
  {
    title: "Custom Styles",
    href: "/map/custom-styles",
    children: [
      {
        title: "Root Component styles",
        href: "/map/custom-styles/map-styles",
      },
      {
        title: "Material Theme Object",
        href: "/map/custom-styles/material-theme-object",
      },
      {
        title: "With Transparent Back",
        href: "/map/custom-styles/transparent-background",
      },
      {
        title: "With Custom Thumb",
        href: "/map/custom-styles/custom-player-thumb",
      },
    ],
  },
  {
    title: "Player props",
    href: "/map/player-props",
    children: [
      {
        title: "Auto Play And Reload",
        href: "/map/player-props/auto-play-and-reload",
      },
      {
        title: "Slider And Speeds Props",
        href: "/map/player-props/slider-and-speed-props",
      },
      {
        title: "Custom Button Components",
        href: "/map/player-props/custom-button-components",
      },
      {
        title: "Add Remove Components",
        href: "/map/player-props/add-remove-components",
      },
    ],
  },
  { title: "Custom Tooltip component", href: "/map/custom-tooltip" },
  { title: "Custom Font Family", href: "/map/custom-font-family" },
  { title: "Custom Legend Component", href: "/map/custom-legend" },
  { title: "Custom Geo json props", href: "/map/geojson-props" },
  { title: "Custom Date & Clock props", href: "/map/time-props" },
  { title: "Map With table", href: "/map/map-with-table" },
];

export const tableRoutes = [
  { title: "installation", href: "/table/installation" },
  { title: "Simple Table", href: "/table/simple-table" },
  { title: "Auto Sizer", href: "/table/auto-sizer" },
  { title: "Simple Props", href: "/table/simple-props" },
  {
    title: "Custom Styles",
    href: "/table/custom-styles",
    children: [
      { title: "LTR Table", href: "/table/custom-styles/ltr-table" },
      { title: "Custom material theme", href: "/table/custom-styles/custom-mat-theme" },
      { title: "Customize Class Component", href: "/table/custom-styles/custom-class-component" },
    ],
  },
  {
    title: "Toolbar",
    href: "/table/toolbar",
    children: [
      { title: "Toolbar Props", href: "/table/toolbar/toolbar-props" },
      { title: "Operation On Rows", href: "/table/toolbar/operation-on-rows" },
      
    ],
  },
  {
    title: "Schema",
    href: "/table/schema",
    children: [
      { title: "Custom Cell", href: "/table/schema/custom-cell" },
            
    ],
  },
  {
    title: "Tooltip",
    href: "/table/tooltip",
    children: [
      { title: "Simple Tooltip Column", href: "/table/tooltip/simple-tooltip" },
            
    ],
  },
  { title: "Custom Data Type", href: "/table/custom-data-type" },
  { title: "Sticky Column", href: "/table/sticky-column" },
  { title: "Pagination", href: "/table/pagination" },
];
