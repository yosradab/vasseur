import Link from "next/link";
import { SITE, COMMUNES, PRESTATIONS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-display text-lg text-white mb-3">Couverture Vasseur</p>
          <p className="text-sm leading-relaxed">
            Couvreur ardoise à {SITE.city}, {SITE.years} ans de métier.
            {" "}{SITE.certifications.join(" · ")}.
          </p>
          <p className="mt-4 text-sm">
            <a href={SITE.phoneHref} className="text-white hover:text-blue-bright">{SITE.phone}</a>
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-white mb-3">Prestations</p>
          <ul className="space-y-2 text-sm">
            {PRESTATIONS.map((p) =>
              p.hasPage ? (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className="hover:text-white transition-colors">
                    {p.title}
                  </Link>
                </li>
              ) : (
                <li key={p.slug}>
                  <Link href="/#prestations" className="hover:text-white transition-colors">
                    {p.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white mb-3">Zone d'intervention</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Angers</Link></li>
            {COMMUNES.map((c) => (
              <li key={c.slug}>
                <Link
                  href={c.slug === "couvreur-avrille" ? `/${c.slug}` : "/#zone"}
                  className="hover:text-white transition-colors"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white mb-3">Couverture Vasseur</p>
          <ul className="space-y-2 text-sm">
            <li>{SITE.address.streetAddress}</li>
            <li>{SITE.address.postalCode} {SITE.address.addressLocality}</li>
            <li>{SITE.rating} / 5 — {SITE.reviewCount} avis Google</li>
            <li>Devis gratuit sous 48 h</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Couverture Vasseur — Client fictif, projet réalisé à titre d'exercice.
      </div>
    </footer>
  );
}
