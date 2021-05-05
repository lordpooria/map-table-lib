/// <reference types="react" />
import { AppLanguage, Dir, LangString } from "../types";
export declare type LangContextType = {
    langSetting: AppLanguage;
    changeLanguage: (_: LangString) => void;
};
export declare function LanguageProvider({ children, language, direction, }: {
    children: any;
    language?: LangString;
    direction?: Dir;
}): JSX.Element;
export declare function useLanguageState(): AppLanguage;
export declare function useLanguageAction(): (_: LangString) => void;
