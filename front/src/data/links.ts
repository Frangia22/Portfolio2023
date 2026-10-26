/** @deprecated Prefer getContent(locale).nav / .social — kept for gradual migration. */
import { getContent } from "./site";

export const navLinks = getContent("en").nav.map((l) => ({
  name: l.name,
  href: l.href.replace(/^\/es/, "") || "/",
}));

export const socialLinks = getContent("en").social;
