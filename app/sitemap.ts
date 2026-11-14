import type { MetadataRoute } from "next"
import { siteConfig } from "@/site.config"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/who-we-help", "/jurisdictions", "/about", "/insights", "/contact", "/privacy", "/terms"]
  return routes.map((route) => ({ url: `${siteConfig.url}${route || "/"}`, changeFrequency: route === "" ? "monthly" : "yearly", priority: route === "" ? 1 : 0.7 }))
}
