import { __assign } from "tslib";
import React, { createContext, useCallback, useContext, useEffect, useRef, useState, } from "react";
import { languageDirections } from "../utils";
var LangContext = createContext({});
export function LanguageProvider(_a) {
    var children = _a.children, _b = _a.language, language = _b === void 0 ? "fa" : _b, _c = _a.direction, direction = _c === void 0 ? "rtl" : _c;
    var _d = useState({
        lang: language,
        direction: direction,
    }), langSetting = _d[0], setAppLanguage = _d[1];
    var langSettingRef = useRef({ language: language, direction: direction });
    var changeLanguage = useCallback(function (lang) {
        setAppLanguage({ lang: lang, direction: languageDirections[lang] });
    }, []);
    useEffect(function () {
        if (langSettingRef.current.direction !== direction &&
            langSettingRef.current.language !== language) {
            setAppLanguage({ lang: language, direction: direction });
        }
        else {
            if (langSettingRef.current.direction !== direction) {
                setAppLanguage(function (prevState) { return (__assign(__assign({}, prevState), { direction: direction })); });
            }
            if (langSettingRef.current.language !== language) {
                setAppLanguage(function (prevState) { return (__assign(__assign({}, prevState), { language: language })); });
            }
        }
    }, [direction, language]);
    return (React.createElement(LangContext.Provider, { value: { langSetting: langSetting, changeLanguage: changeLanguage } }, children));
}
export function useLanguageState() {
    var langSetting = useContext(LangContext).langSetting;
    if (!langSetting) {
        throw new Error("Language Setting should use inside language provider");
    }
    return langSetting;
}
export function useLanguageAction() {
    var changeLanguage = useContext(LangContext).changeLanguage;
    if (!changeLanguage) {
        throw new Error("Change Language should use inside language provider");
    }
    return changeLanguage;
}
