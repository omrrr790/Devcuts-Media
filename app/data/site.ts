import { siteConfig } from "./siteConfig";

export const site = siteConfig.site;

export const sameAs = Object.values(site.social).filter(Boolean);

export { siteConfig };
