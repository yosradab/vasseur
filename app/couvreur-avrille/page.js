import Link from "next/link";
import QuoteBlock from "@/components/QuoteBlock";
import Faq from "@/components/Faq";
import { COMMUNES } from "@/lib/site";

export const metadata = {
  title: "Couvreur à Avrillé (49) — Ardoise et pavillons des années 70",
  description:
    "Couvreur à Avrillé : toitures de pavillons et de longères, spécialiste ardoise. Devis gratuit sous 48 h, intervention rapide sur toute la commune.",
  alternates: { canonical: "/couvreur-avrille" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Couverture Vasseur",
    title: "Couvreur à Avrillé",
    description: "Toitures de pavillons et de longères, entretien et réfection à Avrillé.",
    url: "/couvreur-avrille",
    images: ["/logo-couverture-vasseur.png"],
  },
};

const pathologies = [
  "Mousse épaisse sur les pans nord, fréquente sur les pavillons construits sans grand débord de toit.",
  "Ardoises fibrociment des années 70-80 qui se fendent avec le gel, à distinguer de l'ardoise naturelle.",
  "Gouttières PVC déformées par les épisodes de gel, mal dimensionnées pour les toitures pentues du secteur.",
  "Infiltrations autour des souches de cheminée sur les longères anciennes du bourg.",
];

const controles = [
  "L'état du solin autour de chaque souche de cheminée ou de ventilation.",
  "La tenue du faîtage, souvent le premier point qui bouge sur les pavillons des années 70.",
  "L'épaisseur de mousse en versant nord et son impact sur l'ardoise en dessous.",
  "L'état des gouttières et leur capacité à absorber les orages d'été.",
  "La ventilation de la sous-toiture, source fréquente de condensation dans les combles isolés.",
];

const faqItems = [
  {
    q: "Intervenez-vous rapidement à Avrillé ?",
    a: "Avrillé est à 5 km d'Angers : Julien s'y déplace le jour même pour une urgence, et sous 48 h pour un devis.",
  },
  {
    q: "Les pavillons des années 70 sont-ils souvent en ardoise fibrociment ?",
    a: "Beaucoup, oui — un matériau différent de l'ardoise naturelle, plus sensible au gel. Julien peut la remplacer par de l'ardoise naturelle ou reprendre à l'identique selon votre budget.",
  },
  {
    q: "Faut-il une autorisation pour changer sa toiture à Avrillé ?",
    a: "Une déclaration préalable est nécessaire dès que l'aspect extérieur change. Hors secteur protégé, les délais restent plus courts qu'en centre-ville d'Angers.",
  },
  {
    q: "Travaillez-vous aussi sur les longères du bourg ?",
    a: "Oui, avec une attention particulière à la charpente ancienne, souvent en bon état mais rarement isolée selon les standards actuels.",
  },
  {
    q: "Le stationnement est-il un problème pour l'échafaudage ?",
    a: "Rarement dans les lotissements pavillonnaires, où l'accès est plus simple qu'en centre-ville. Le bourg ancien demande parfois une autorisation de voirie, que Julien prépare avec vous.",
  },
];

export default function VilleAvrille() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-4xl px-5 pt-16 pb-14 md:pt-24">
          <p className="text-blue-bright text-sm font-medium mb-4">Zone d'intervention</p>
          <h1 className="font-display text-4xl sm:text-5xl text-white leading-[1.05] mb-6">
            Couvreur à Avrillé : pavillons et longères
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-xl">
            À 5 km d'Angers, Avrillé mélange lotissements des années 70 et longères de bourg —
            deux types de toiture que l'équipe connaît bien pour y intervenir régulièrement.
          </p>
        </div>
      </section>

      <QuoteBlock id="devis" compact />

      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl text-ink mb-6">Ce qu'on trouve sur les toits d'Avrillé</h2>
        <p className="text-ink/80 leading-relaxed mb-4">
          Avrillé s'est beaucoup construite entre 1965 et 1985, avec des pavillons aux toits en
          pente moyenne, souvent couverts en ardoise fibrociment ou en tuile mécanique. Le bourg
          ancien, autour de l'église Saint-Pierre, garde lui quelques longères en pierre avec
          des charpentes plus anciennes, couvertes en ardoise naturelle.
        </p>
        <p className="text-ink/80 leading-relaxed">
          Cette diversité change l'approche : un pavillon des années 70 se traite souvent en
          reprise complète du matériau, quand une longère demande d'abord de vérifier l'état de
          la charpente avant de toucher à la couverture.
        </p>
        <p className="text-ink/80 leading-relaxed mt-4">
          Les quartiers du Grand Bellevue et du Pré Pigé concentrent la majorité des
          interventions de l'équipe sur la commune, aux côtés d'appels plus ponctuels venant du
          bourg et de la Fontaine Saint-Martin.
        </p>
      </section>

      <section className="bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <h2 className="font-display text-3xl text-ink mb-6">Les pathologies les plus fréquentes</h2>
          <ul className="space-y-3">
            {pathologies.map((p) => (
              <li key={p} className="flex gap-3 text-ink/80 leading-relaxed">
                <span className="text-blue shrink-0">—</span>{p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl text-ink mb-6">L'accès, un détail qui change tout</h2>
        <p className="text-ink/80 leading-relaxed mb-4">
          Dans les lotissements pavillonnaires du Grand Bellevue ou du Pré Pigé, l'accès est
          simple : allées assez larges pour un échafaudage, stationnement possible devant la
          maison. C'est plus rapide et moins coûteux à chiffrer qu'un chantier en centre-ville
          d'Angers.
        </p>
        <p className="text-ink/80 leading-relaxed">
          Dans le bourg ancien, les rues sont plus étroites et le stationnement plus contraint :
          une autorisation de voirie temporaire est parfois nécessaire pour poser un
          échafaudage sur le trottoir. Julien s'en occupe en amont du chantier.
        </p>
      </section>

      <section className="bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <h2 className="font-display text-3xl text-ink mb-6">Pourquoi ça se chiffre autrement ici</h2>
          <p className="text-ink/80 leading-relaxed">
            L'accès facile des lotissements fait souvent baisser le poste échafaudage par
            rapport à un chantier en centre-ville. À l'inverse, une longère ancienne peut
            réserver une charpente à reprendre, invisible avant la dépose de la couverture — un
            poste que le devis initial chiffre en fourchette, précisé une fois le toit ouvert.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl text-ink mb-6">Les points vérifiés en premier</h2>
        <p className="text-ink/80 leading-relaxed mb-8">
          Avant de parler travaux, Julien passe cinq points en revue lors de la visite. C'est
          souvent là que se joue la différence entre une réparation ponctuelle et un chantier
          plus lourd.
        </p>
        <div className="space-y-6">
          {controles.map((c, i) => (
            <div key={c} className="flex gap-4">
              <p className="font-display text-xl text-blue shrink-0 w-6">{i + 1}</p>
              <h3 className="text-ink/80 leading-relaxed">{c}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <h2 className="font-display text-3xl text-ink mb-6">Urbanisme et copropriété</h2>
          <p className="text-ink/80 leading-relaxed mb-4">
            Une déclaration préalable en mairie est nécessaire dès que la couverture change
            d'aspect — matériau ou couleur. Avrillé n'étant pas en secteur sauvegardé, les
            délais d'instruction restent plus courts qu'en centre-ville d'Angers, généralement
            un mois.
          </p>
          <p className="text-ink/80 leading-relaxed">
            Pour les quelques copropriétés de la commune, un vote en assemblée générale reste
            nécessaire avant travaux sur les parties communes. Julien fournit les devis
            détaillés attendus pour ce type de dossier.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl text-ink mb-6">Des solutions adaptées aux lotissements</h2>
        <p className="text-ink/80 leading-relaxed mb-4">
          Les pavillons d'Avrillé ont souvent été construits par tranches, avec des couvertures
          qui semblent identiques mais n'ont pas le même support. Une ardoise naturelle, une
          ardoise fibrociment et une tuile mécanique ne se nettoient ni ne se réparent de la même
          façon. L'équipe commence par identifier le matériau et l'année approximative de pose
          avant de recommander un traitement.
        </p>
        <p className="text-ink/80 leading-relaxed">
          Une rénovation peut aussi être l'occasion d'améliorer la ventilation des combles ou de
          remplacer une isolation tassée. Le chantier est alors coordonné pour éviter de déposer
          deux fois la couverture. Le devis distingue la couverture, la zinguerie et l'isolation,
          afin que les propriétaires puissent prioriser les travaux selon leur budget.
        </p>
      </section>

      <section className="bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <h2 className="font-display text-3xl text-ink mb-6">Intervenir sans perturber le quartier</h2>
          <p className="text-ink/80 leading-relaxed mb-4">
            Un chantier de toiture à Avrillé demande moins de contraintes qu'en hypercentre, mais
            il doit tout de même respecter les voisins, les accès de garage et les horaires du
            lotissement. Avant la pose de l'échafaudage, Julien repère le passage des véhicules,
            la position de la benne et les éventuels câbles ou arbres proches de la façade.
          </p>
          <p className="text-ink/80 leading-relaxed">
            Dans le bourg, la préparation est plus précise : une autorisation peut être nécessaire
            pour occuper le trottoir et les livraisons doivent parfois être regroupées. Cette
            anticipation réduit la durée d'installation et évite de reporter le démarrage du
            chantier. Les protections restent en place jusqu'au nettoyage final des abords.
          </p>
        </div>
      </section>

      <Faq id="faq" title="Questions sur les toitures à Avrillé" items={faqItems} />

      <section className="mx-auto max-w-3xl px-5 pb-16">
        <h2 className="font-display text-2xl text-ink mb-4">Communes voisines</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-sm border border-slate/25 px-4 py-2 text-sm text-ink hover:border-blue hover:text-blue transition-colors"
          >
            Angers
          </Link>
          {COMMUNES.filter((c) => c.slug !== "couvreur-avrille").map((c) => (
            <Link
              key={c.slug}
              href="/#zone"
              className="rounded-sm border border-slate/25 px-4 py-2 text-sm text-ink hover:border-blue hover:text-blue transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <QuoteBlock id="devis-final" compact />
    </>
  );
}
