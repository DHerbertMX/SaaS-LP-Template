import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#EAEEFE",
    theme_color: "#EAEEFE",
    lang: "es-MX",
    icons: [{ src: "/icon.png", sizes: "256x256", type: "image/png" }],
  };
}
