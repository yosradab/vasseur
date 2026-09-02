import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Couvreur à ${SITE.city} — Couverture Vasseur`,
    template: `%s | Couverture Vasseur`,
  },
  description:
    "Couvreur ardoise à Angers depuis 12 ans. Réfection de toiture, zinguerie, recherche de fuite. RGE Qualibat, garantie décennale. Devis gratuit sous 48 h.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Couverture Vasseur",
    images: ["/logo-couverture-vasseur.png"],
  },
};

export default function RootLayout({ children }) {
  const roofingSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: SITE.name,
    image: `${SITE_URL}/logo-couverture-vasseur.png`,
    telephone: SITE.phoneHref.replace("tel:", ""),
    email: SITE.email,
    url: SITE_URL,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      addressCountry: SITE.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "12:30",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
    },
    areaServed: [
      SITE.city,
      "Avrillé",
      "Beaucouzé",
      "Les Ponts-de-Cé",
      "Trélazé",
      "Saint-Barthélemy-d'Anjou",
      "Écouflant",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations de couverture",
      itemListElement: [
        "Réfection complète de toiture",
        "Couverture ardoise",
        "Réparation et recherche de fuite",
        "Zinguerie",
        "Démoussage et traitement hydrofuge",
        "Pose de fenêtres de toit",
        "Isolation de combles",
      ].map((serviceName) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: serviceName },
      })),
    },
  };

  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;0,900;1,500;1,600&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(roofingSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
