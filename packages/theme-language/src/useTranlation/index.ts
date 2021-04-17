import { useEffect, useRef } from "react";

import { useLanguageState } from "../provider/language";

import { en } from "../locale/en/common";
import { fa } from "../locale/fa/common";

export function useTranslation() {
  const { lang } = useLanguageState();
  const translateFile = useRef<any>(fa);

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

  return { t: translateFile.current as typeof en };
}
