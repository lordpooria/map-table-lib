import { useCallback, useEffect, useRef } from "react";

import { useLanguageState } from "../provider/language";

import { en } from "../locale/en/common";
import { fa } from "../locale/fa/common";

export function useTranslation() {
  const { lang } = useLanguageState();
  const translateFile = useRef<any>(fa);

  const t = useCallback((key: string) => {
    try {
      const trans = key.split(".").reduce((acc, k) => {
        if (k in acc) {
          return acc[k];
        }
        return acc;
      }, translateFile.current);
      console.log("here",trans)
      if (typeof trans === "string") return trans;
      return key;
    } catch (err) {
      return key;
    } finally {
    }
  }, []);

  useEffect(() => {
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

  return { t, translations: translateFile.current as typeof en };
}
