import { useEffect, useRef } from "react";
import { useLanguageState } from "../provider/language";
import { en } from "../locale/en/common";
import { fa } from "../locale/fa/common";
export function useTranslation() {
    var lang = useLanguageState().lang;
    var translateFile = useRef(fa);
    useEffect(function () {
        switch (lang) {
            case "en":
                translateFile.current = en;
                break;
            case "fa":
                translateFile.current = fa;
                break;
            default:
                translateFile.current = fa;
        }
    }, []);
    return { t: translateFile.current };
}
