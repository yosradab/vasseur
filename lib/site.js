export const SITE_URL = "https://vasseur-yosradabs-projects.vercel.app";

export const SITE = {
  name: "Couverture Vasseur",
  artisan: "Julien Vasseur",
  tagline: "Couvreur ardoise à Angers",
  phone: "02 41 87 34 12",
  phoneHref: "tel:+33241873412",
  email: "contact@couverture-vasseur.fr",
  city: "Angers",
  region: "Maine-et-Loire",
  department: "49",
  years: 12,
  team: "Julien et trois compagnons",
  certifications: ["RGE Qualibat", "Garantie décennale AXA"],
  rating: 4.9,
  reviewCount: 47,
  address: {
    streetAddress: "14 rue des Ardoisiers",
    postalCode: "49000",
    addressLocality: "Angers",
    addressRegion: "Pays de la Loire",
    addressCountry: "FR",
  },
  geo: { latitude: 47.4784, longitude: -0.5632 },
};

export const COMMUNES = [
  { name: "Avrillé", slug: "couvreur-avrille", distance: "5 km" },
  { name: "Beaucouzé", slug: "couvreur-beaucouze", distance: "6 km" },
  { name: "Les Ponts-de-Cé", slug: "couvreur-les-ponts-de-ce", distance: "7 km" },
  { name: "Trélazé", slug: "couvreur-trelaze", distance: "6 km" },
  { name: "Saint-Barthélemy-d'Anjou", slug: "couvreur-saint-barthelemy-danjou", distance: "4 km" },
  { name: "Écouflant", slug: "couvreur-ecouflant", distance: "8 km" },
];

export const PRESTATIONS = [
  {
    title: "Réfection complète de toiture",
    slug: "refection-toiture",
    short: "Reprise totale de la couverture, de la charpente vue à la dernière ardoise posée.",
  },
  {
    title: "Couverture ardoise",
    slug: "couverture-ardoise-angers",
    short: "La spécialité de la maison : pose et entretien d'ardoise naturelle, dans les règles de l'Anjou.",
    featured: true,
    hasPage: true,
  },
  {
    title: "Réparation et recherche de fuite",
    slug: "recherche-de-fuite",
    short: "Une auréole au plafond, une tuile qui a glissé : intervention sous 48 h, souvent le jour même.",
  },
  {
    title: "Zinguerie",
    slug: "zinguerie",
    short: "Gouttières, chéneaux, descentes : l'évacuation d'eau qui protège les murs et les fondations.",
  },
  {
    title: "Démoussage et traitement hydrofuge",
    slug: "demoussage-hydrofuge",
    short: "La mousse retient l'humidité contre l'ardoise. On la retire et on protège pour cinq ans.",
  },
  {
    title: "Pose de fenêtres de toit",
    slug: "fenetre-de-toit",
    short: "Velux et fenêtres de toit posées avec l'étanchéité qui va avec, pas seulement le vitrage.",
  },
  {
    title: "Isolation de combles",
    slug: "isolation-combles",
    short: "La chaleur s'échappe par le toit avant de s'échapper par les murs. On isole en même temps qu'on couvre.",
  },
];
