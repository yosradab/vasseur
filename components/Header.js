import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo-couverture-vasseur.png"
            alt="Couverture Vasseur, couvreur à Angers"
            width={44}
            height={44}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="font-display text-lg leading-none text-white">
            Couverture<br className="hidden" /> Vasseur
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <Link href="/#prestations" className="hover:text-white transition-colors">Prestations</Link>
          <Link href="/#realisations" className="hover:text-white transition-colors">Réalisations</Link>
          <Link href="/#zone" className="hover:text-white transition-colors">Zone d'intervention</Link>
          <Link href="/#faq" className="hover:text-white transition-colors">Questions</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-blue-bright shrink-0">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" fill="currentColor"/>
            </svg>
            {SITE.phone}
          </a>
          <Link
            href="/#devis"
            className="rounded-sm bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-bright transition-colors"
          >
            Devis gratuit
          </Link>
        </div>
      </div>
    </header>
  );
}
