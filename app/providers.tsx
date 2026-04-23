"use client";

import { createContext, useContext, useState } from "react";

type Lang = "nl" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({ lang: "nl", toggle: () => {} });

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("nl");
  const toggle = () => setLang((l) => (l === "nl" ? "en" : "nl"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
