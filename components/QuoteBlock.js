import { SITE } from "@/lib/site";

export default function QuoteBlock({ id = "devis", compact = false }) {
  return (
    <section id={id} className="bg-navy">
      <div className={`mx-auto max-w-6xl px-5 ${compact ? "py-14" : "py-16 md:py-24"} grid gap-10 md:grid-cols-2 md:items-center`}>
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Devis gratuit sous 48 h
          </h2>
          <p className="text-white/70 leading-relaxed max-w-md">
            Julien se déplace, regarde le toit, et vous donne un chiffrage clair — pas une
            estimation au téléphone. Le déplacement ne coûte rien, même si vous ne donnez pas suite.
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-6 inline-flex items-center gap-2 text-white font-medium"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-blue-bright shrink-0">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" fill="currentColor"/>
            </svg>
            {SITE.phone} — urgence fuite 7 j/7
          </a>
        </div>

        <form
          className="rounded-sm bg-paper p-6 md:p-8 space-y-4"
          action={`mailto:${SITE.email}`}
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-ink">
              Nom
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full rounded-sm border border-slate/30 bg-white px-3 py-2 text-ink"
              />
            </label>
            <label className="text-sm text-ink">
              Téléphone
              <input
                type="tel"
                name="phone"
                required
                className="mt-1 w-full rounded-sm border border-slate/30 bg-white px-3 py-2 text-ink"
              />
            </label>
          </div>
          <label className="block text-sm text-ink">
            Commune
            <input
              type="text"
              name="commune"
              placeholder="Angers, Avrillé…"
              className="mt-1 w-full rounded-sm border border-slate/30 bg-white px-3 py-2 text-ink"
            />
          </label>
          <label className="block text-sm text-ink">
            Votre besoin
            <textarea
              name="message"
              rows={3}
              placeholder="Fuite, rénovation complète, entretien…"
              className="mt-1 w-full rounded-sm border border-slate/30 bg-white px-3 py-2 text-ink"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-sm bg-blue px-4 py-3 text-sm font-medium text-white hover:bg-blue-bright transition-colors"
          >
            Demander mon devis gratuit
          </button>
        </form>
      </div>
    </section>
  );
}
