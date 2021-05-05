"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_TOOLBAR_HEIGHT = exports.DEFAULT_PAGINATION_HEIGHT = exports.CHECKBOX_SIZE = exports.ROW_MIN_WIDTH = exports.RESIZE_HANDLE_WIDTH = exports.MIN_TABLE_WIDTH = exports.DIALOG_CONTENT_HEIGHT = exports.commonSidebar = exports.maxPanelSize = exports.PanelIconSize = exports.sidebar = exports.toolbar = void 0;
const toolbar = {
  xs: 30,
  minHeight: 44,
  maxHeight: 88
};
exports.toolbar = toolbar;
const sidebar = {
  maxWidth: 300,
  minWidth: 30
};
exports.sidebar = sidebar;
const PanelIconSize = 18;
exports.PanelIconSize = PanelIconSize;
const maxPanelSize = 250;
exports.maxPanelSize = maxPanelSize;
const commonSidebar = {
  panelHeight: 200,
  itemHeight: 50
};
exports.commonSidebar = commonSidebar;
const DIALOG_CONTENT_HEIGHT = typeof window !== "undefined" ? window.innerHeight * 0.8 : 800;
exports.DIALOG_CONTENT_HEIGHT = DIALOG_CONTENT_HEIGHT;
const MIN_TABLE_WIDTH = 24;
exports.MIN_TABLE_WIDTH = MIN_TABLE_WIDTH;
const RESIZE_HANDLE_WIDTH = 24;
exports.RESIZE_HANDLE_WIDTH = RESIZE_HANDLE_WIDTH;
const ROW_MIN_WIDTH = 100;
exports.ROW_MIN_WIDTH = ROW_MIN_WIDTH;
const CHECKBOX_SIZE = 48;
exports.CHECKBOX_SIZE = CHECKBOX_SIZE;
const DEFAULT_PAGINATION_HEIGHT = 70;
exports.DEFAULT_PAGINATION_HEIGHT = DEFAULT_PAGINATION_HEIGHT;
const DEFAULT_TOOLBAR_HEIGHT = 70;
exports.DEFAULT_TOOLBAR_HEIGHT = DEFAULT_TOOLBAR_HEIGHT;
//# sourceMappingURL=themeConstants.js.map