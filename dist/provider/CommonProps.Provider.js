import React, { createContext, useContext, useEffect, useState } from "react";
var CommonPropsContext = createContext({});
export default function CommonPropsProvider(_a) {
    var children = _a.children, state = _a.state;
    var _b = useState({
        withTable: false,
    }), commonProps = _b[0], setCommonProps = _b[1];
    useEffect(function () {
        setCommonProps(state);
    }, [state]);
    return (React.createElement(CommonPropsContext.Provider, { value: { state: commonProps, action: setCommonProps } }, children));
}
export function useCommonProps() {
    var state = useContext(CommonPropsContext).state;
    if (!state) {
        throw new Error("use common props state inside privider");
    }
    return state;
}
export function useCommonPropsAction() {
    var action = useContext(CommonPropsContext).action;
    if (!action) {
        throw new Error("use common props action inside privider");
    }
    return action;
}
