import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const routes = ["", "/couverture-ardoise-angers", "/couvreur-avrille"];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
