import { DEFAULT_PAGINATION_HEIGHT, DEFAULT_TOOLBAR_HEIGHT, } from "./themeConstants";
export default {
    typography: {
        useNextVariants: true,
        fontFamily: ["Roboto", "IRANSans", "Arial"].join(","),
        fontSize: 14,
    },
};
export function calcTableHeght(hasToolbar, toolbarHeight, pagination, height) {
    if (!hasToolbar && !pagination)
        return height;
    var tableH = height;
    if (pagination) {
        if (pagination === null || pagination === void 0 ? void 0 : pagination.height)
            tableH -= pagination === null || pagination === void 0 ? void 0 : pagination.height;
        else
            tableH -= DEFAULT_PAGINATION_HEIGHT;
    }
    if (hasToolbar) {
        if (toolbarHeight)
            tableH -= toolbarHeight;
        else
            tableH -= DEFAULT_TOOLBAR_HEIGHT;
    }
    return tableH;
}
