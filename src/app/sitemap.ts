import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.lastUpdated);

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["/reloj-checador", "/reloj-checador/registro-electronico-jornada-laboral"].map(
      (path) => ({
        url: `${siteConfig.url}${path}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.9,
      })
    ),
    ...["/timbrex", "/timbrex/precios", "/timbrex/que-es-cfdi-4-0"].map(
      (path) => ({
        url: `${siteConfig.url}${path}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })
    ),
    {
      url: `${siteConfig.url}/aviso-de-privacidad`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/terminos-y-condiciones`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
