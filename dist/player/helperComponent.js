import React from "react";
export var RenderComponent = function (_a) {
    var children = _a.children, Component = _a.Component;
    if (typeof Component === "boolean") {
        if (Component)
            return children;
        else
            return null;
    }
    return React.createElement(Component, null);
};
