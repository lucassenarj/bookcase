import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const languages = ["en", "pt"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    whitelist: languages,
    defaultNS: "translations",
    ns: ["translations"],
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
    },
    load: "languageOnly",
    react: {
      useSuspense: true,
    },    
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
