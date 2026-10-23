import { en } from "./en";
import { es } from "./es";
import type { Locale, PeriodDate, SiteContent } from "./types";

export type { Locale, SiteContent, PeriodDate } from "./types";

const contentByLocale: Record<Locale, SiteContent> = {
  en,
  es,
};

export function getContent(locale: Locale = "en"): SiteContent {
  return contentByLocale[locale] ?? contentByLocale.en;
}

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "es";
}

/** Map a path segment (e.g. /projects ↔ /es/projects) to the other locale. */
export function getAlternatePath(pathname: string, target: Locale): string {
  const clean = pathname.replace(/\/$/, "") || "/";
  if (target === "es") {
    if (clean === "/" || clean === "") return "/es/";
    if (clean.startsWith("/es")) return clean.endsWith("/") ? clean : `${clean}/`;
    return `/es${clean}`;
  }
  // target en
  if (clean === "/es" || clean === "/es/") return "/";
  if (clean.startsWith("/es/")) {
    const rest = clean.slice(3);
    return rest || "/";
  }
  return clean === "" ? "/" : clean;
}

export function formatPeriod(
  start: PeriodDate,
  end: PeriodDate | "present",
  locale: Locale,
  presentLabel: string,
): string {
  const tag = locale === "es" ? "es-AR" : "en-US";

  const formatPart = (value: PeriodDate): string => {
    if (/^\d{4}$/.test(value)) return value;
    const [y, m] = value.split("-").map(Number);
    const date = new Date(Date.UTC(y, (m ?? 1) - 1, 1));
    return new Intl.DateTimeFormat(tag, {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(date);
  };

  const endLabel = end === "present" ? presentLabel : formatPart(end);
  return `${formatPart(start)} – ${endLabel}`;
}
