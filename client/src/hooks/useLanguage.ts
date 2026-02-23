import languageStore from "@/src/store/languageStore";
import { useMemo } from "react";

export default function useLanguage(en: any, es: any) {
  const lang = languageStore((s) => s.lang);

  const i18n = useMemo(() => {
    return lang === "en" ? en : es;
  }, [lang, en, es]);

  return i18n;
}
