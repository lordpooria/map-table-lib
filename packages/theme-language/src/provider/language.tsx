import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AppLanguage, Dir, LangString } from "../types";
import { languageDirections } from "../utils";

export type LangContextType = {
  langSetting: AppLanguage;
  changeLanguage: (_: LangString) => void;
};

const LangContext = createContext({} as LangContextType);

export function LanguageProvider({
  children,
  language = "fa",
  direction = "rtl",
}: {
  children: any;
  language?: LangString;
  direction?: Dir;
}) {
  const [langSetting, setAppLanguage] = useState<AppLanguage>({
    lang: language,
    direction,
  });
  const langSettingRef = useRef({ language, direction });

  const changeLanguage = useCallback((lang: LangString) => {
    setAppLanguage({ lang, direction: languageDirections[lang] });
  }, []);

  useEffect(() => {
    if (
      langSettingRef.current.direction !== direction &&
      langSettingRef.current.language !== language
    ) {
      setAppLanguage({ lang: language, direction });
    } else {
      if (langSettingRef.current.direction !== direction) {
        setAppLanguage((prevState) => ({ ...prevState, direction }));
      }
      if (langSettingRef.current.language !== language) {
        setAppLanguage((prevState) => ({ ...prevState, language }));
      }
    }
  }, [direction, language]);
  return (
    <LangContext.Provider value={{ langSetting, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguageState() {
  const { langSetting } = useContext(LangContext);
  if (!langSetting) {
    throw new Error("Language Setting should use inside language provider");
  }
  return langSetting;
}

export function useLanguageAction() {
  const { changeLanguage } = useContext(LangContext);
  if (!changeLanguage) {
    throw new Error("Change Language should use inside language provider");
  }

  return changeLanguage;
}
export function useIsStyleProvided() {
  const { langSetting } = useContext(LangContext);
  if (!langSetting) {
    return false;
  }
  return true;
}
