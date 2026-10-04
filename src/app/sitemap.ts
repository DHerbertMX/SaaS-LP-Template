import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
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
