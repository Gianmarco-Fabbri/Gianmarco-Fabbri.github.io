import { translations, defaultLang } from "./translations";
import type { Lang } from "./translations";

/** Extract language from URL pathname */
export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split("/").filter(Boolean);
  // Pathname looks like /it/about/ → segments = ["it", "about"]
  const langSegment = segments[0];
  if (langSegment === "it" || langSegment === "en") return langSegment;
  return defaultLang;
}

/** Get a translated string by key */
export function t(lang: Lang, key: string): string {
  return translations[lang][key] ?? translations[defaultLang][key] ?? key;
}

/** Build a localized path: getLocalizedPath("en", "/about/") → "/en/about/" */
export function getLocalizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${clean}`;
}

/** Get the alternate language */
export function getAlternateLang(lang: Lang): Lang {
  return lang === "it" ? "en" : "it";
}

/** Get the current page path without lang prefix: "/it/about/" → "/about/" */
export function getPagePath(url: URL): string {
  const segments = url.pathname.split("/").filter(Boolean);
  // ["it", "about"] → "/about/"
  const rest = segments.slice(1); // skip lang
  return rest.length > 0 ? `/${rest.join("/")}/` : "/";
}

export { defaultLang };
export type { Lang };
