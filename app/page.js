import Link from "next/link";
import Image from "next/image";
import SlateDivider from "@/components/SlateDivider";
import { RoofIllustration, ArtisanIllustration } from "@/components/RoofArt";
import QuoteBlock from "@/components/QuoteBlock";
import Faq from "@/components/Faq";
import { SITE, COMMUNES, PRESTATIONS } from "@/lib/site";

export const metadata = {
  title: "Couvreur Angers 49 — Ardoise, zinguerie, fuite | Couverture Vasseur",
  description:
    "Couvreur à Angers depuis 12 ans, spécialiste de l'ardoise naturelle. RGE Qualibat, décennale AXA, 4,9/5 sur 47 avis. Devis gratuit sous 48 h, urgence fuite 7 j/7.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Couverture Vasseur",
    title: "Couvreur Angers — Couverture Vasseur",
    description:
      "Ardoise naturelle, zinguerie, recherche de fuite. 12 ans de métier à Angers et dans le Maine-et-Loire.",
    url: "/",
    images: ["/logo-couverture-vasseur.png"],
  },
};

const badges = [
  { label: "RGE Qualibat", detail: "certification qualité" },
  { label: "Décennale AXA", detail: "garantie 10 ans" },
  { label: `${SITE.years} ans`, detail: "de métier à Angers" },
  { label: `${SITE.rating} / 5`, detail: `${SITE.reviewCount} avis Google` },
];

const chantiers = [
  {
    title: "Toiture ardoise, maison de ville — Doutre",
    text: "Réfection complète sur charpente d'origine, 1900. Ardoise naturelle 22×32, faîtage en zinc conservé.",
  },
  {
    title: "Fuite en toiture — quartier Saint-Serge",
    text: "Solin fissuré autour d'une souche de cheminée. Repérage, reprise et test d'étanchéité le jour même.",
  },
  {
    title: "Zinguerie complète — Avrillé",
    text: "Gouttières et descentes en zinc posées à neuf après un hiver qui avait eu raison de l'ancien PVC.",
  },
  {
    title: "Rénovation combles — Les Ponts-de-Cé",
    text: "Isolation par l'extérieur couplée à une reprise de toiture, pour ne monter en échafaudage qu'une fois.",
  },
];

const steps = [
  { title: "Vous appelez", text: "Décrivez le souci ou le projet. Julien vous rappelle sous la journée, souvent dans l'heure." },
  { title: "On monte voir", text: "Visite sur place, montée en toiture si nécessaire, photos à l'appui pour vous montrer ce qu'on a vu." },
  { title: "Vous recevez le devis", text: "Chiffrage détaillé sous 48 h, poste par poste, sans ligne mystère." },
  { title: "On réalise", text: "Intervention planifiée avec vous, chantier protégé, gravats évacués chaque soir." },
  { title: "On réceptionne", text: "Tour du chantier ensemble, photos de fin de travaux, facture et attestation décennale remises." },
];

const faqItems = [
  {
    q: "Quel est le délai pour une intervention en urgence ?",
    a: "Pour une fuite active, Julien intervient sous 24 à 48 h, 7 jours sur 7. Le premier réflexe au téléphone est de vous dire comment limiter les dégâts en attendant.",
  },
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui, y compris le déplacement. Vous ne payez que si vous donnez suite aux travaux.",
  },
  {
    q: "Travaillez-vous uniquement l'ardoise ?",
    a: "C'est la spécialité de la maison, mais l'équipe pose aussi la tuile et le zinc selon le bâti — beaucoup de toitures anciennes du centre d'Angers imposent d'ailleurs le maintien de l'ardoise.",
  },
  {
    q: "Faut-il une autorisation pour refaire sa toiture à Angers ?",
    a: "Souvent oui, en particulier en secteur sauvegardé où les Bâtiments de France ont leur mot à dire sur les matériaux. Julien connaît les dossiers ABF et peut vous orienter dans la démarche.",
  },
  {
    q: "Combien coûte une réfection de toiture ?",
    a: "Cela dépend de la surface, de l'état de la charpente et de l'accès. À titre indicatif, une réfection en ardoise se chiffre le plus souvent entre 150 et 250 € du m², chiffrage précis donné après visite.",
  },
  {
    q: "Intervenez-vous en copropriété ?",
    a: "Oui, avec l'habitude des devis détaillés nécessaires au vote en assemblée générale et des délais qui vont avec.",
  },
  {
    q: "Quelles aides existent pour une rénovation de toiture ?",
    a: "MaPrimeRénov' et l'éco-PTZ peuvent couvrir une partie de l'isolation associée à la toiture. Julien vous dit en visite ce qui est mobilisable pour votre dossier.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative bg-navy overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-24 md:pb-28 grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-blue-bright text-sm font-medium tracking-wide mb-4">
              Angers et Maine-et-Loire (49)
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] mb-6">
              Couvreur ardoise à Angers, depuis {SITE.years} ans
            </h1>
            <p className="text-white/75 text-lg leading-relaxed max-w-lg mb-8">
              Julien Vasseur et son équipe réparent, rénovent et couvrent en ardoise naturelle —
              le matériau des toits d'Anjou — avec la garantie décennale et le sérieux d'une
              entreprise RGE Qualibat.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#devis"
                className="rounded-sm bg-blue px-6 py-3.5 text-white font-medium hover:bg-blue-bright transition-colors"
              >
                Demander un devis gratuit
              </a>
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 text-white font-medium"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-bright shrink-0">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" fill="currentColor"/>
                </svg>
                {SITE.phone}
              </a>
            </div>
          </div>
          <div className="relative rounded-sm overflow-hidden bg-stone aspect-[4/3] flex items-center justify-center border border-white/10">
            <Image
              src="/logo-couverture-vasseur.png"
              alt="Logo Couverture Vasseur"
              width={280}
              height={180}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <QuoteBlock id="devis" />

      <SlateDivider tone="paper" />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((b) => (
            <li key={b.label} className="border-l-2 border-blue pl-4">
              <p className="font-display text-2xl text-ink">{b.label}</p>
              <p className="text-sm text-slate">{b.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="prestations" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">Les prestations</h2>
        <p className="text-slate max-w-xl mb-10">
          De la petite réparation à la toiture entièrement refaite, la même équipe suit le
          chantier du premier appel à la dernière ardoise.
        </p>
        <div className="grid sm:grid-cols-2 gap-px bg-slate/15">
          {PRESTATIONS.map((p) =>
            p.hasPage ? (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="bg-paper p-6 hover:bg-stone transition-colors"
              >
                <h3 className="font-display text-xl text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{p.short}</p>
              </Link>
            ) : (
              <div key={p.slug} className="bg-paper p-6">
                <h3 className="font-display text-xl text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{p.short}</p>
              </div>
            )
          )}
        </div>
      </section>

      <section className="bg-stone">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">
              Pourquoi l'ardoise, en Anjou
            </h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              L'Anjou est une terre d'ardoise : les carrières de Trélazé ont couvert la région
              pendant des générations, et une bonne partie du bâti ancien d'Angers reste
              soumise à cette tradition — y compris par obligation, en secteur protégé.
            </p>
            <p className="text-ink/80 leading-relaxed">
              Julien travaille l'ardoise naturelle depuis ses débuts. Ce n'est pas seulement un
              choix esthétique : bien posée, une toiture en ardoise tient 80 à 100 ans, quand
              une toiture en tuile demande une reprise partielle bien plus tôt. C'est ce qui
              distingue l'équipe des couvreurs qui posent surtout de la tuile dans la région.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-paper p-5 border-l-2 border-blue">
              <p className="font-medium text-ink">Ardoise naturelle 22×32 ou 24×40</p>
              <p className="text-sm text-slate mt-1">Format et pose adaptés à la pente et à l'exposition du toit.</p>
            </div>
            <div className="bg-paper p-5 border-l-2 border-blue">
              <p className="font-medium text-ink">Zinc pour les points singuliers</p>
              <p className="text-sm text-slate mt-1">Faîtages, noues et solins en zinc, là où l'ardoise seule ne suffit pas.</p>
            </div>
            <div className="bg-paper p-5 border-l-2 border-blue">
              <p className="font-medium text-ink">Tuile, quand le bâti l'impose</p>
              <p className="text-sm text-slate mt-1">Certaines communes de la zone restent en tuile — l'équipe la pose aussi bien.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="realisations" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-10">Chantiers récents</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {chantiers.map((c, i) => (
            <div key={c.title}>
              <div className="aspect-[16/10] mb-4 overflow-hidden">
                <RoofIllustration variant={i} className="w-full h-full" />
              </div>
              <h3 className="font-medium text-ink mb-1">{c.title}</h3>
              <p className="text-sm text-slate leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <SlateDivider tone="navy" />

      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24 grid md:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div className="aspect-square overflow-hidden">
            <ArtisanIllustration className="w-full h-full" />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Julien Vasseur, sur le toit
            </h2>
            <p className="text-white/75 leading-relaxed mb-4">
              Pas de commercial, pas d'intermédiaire : la personne qui vient chiffrer le
              chantier est celle qui monte dessus. Julien a appris le métier sur les toits
              d'Angers et forme lui-même les trois compagnons qui l'accompagnent aujourd'hui.
            </p>
            <p className="text-white/75 leading-relaxed">
              C'est ce qui change concrètement pour vous : un diagnostic qui vient de
              l'expérience du geste, pas d'une grille tarifaire, et un seul interlocuteur du
              devis à la réception du chantier.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-10">Le déroulé d'un chantier</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((s, i) => (
            <div key={s.title}>
              <p className="text-blue font-display text-3xl mb-2">{i + 1}</p>
              <h3 className="font-medium text-ink mb-1">{s.title}</h3>
              <p className="text-sm text-slate leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">Ce qui fait varier le prix</h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              Une réfection en ardoise se chiffre le plus souvent entre 150 et 250 € du m²,
              matériau et pose compris. Une recherche de fuite ponctuelle démarre autour de
              120 €. Ces fourchettes bougent selon quatre facteurs :
            </p>
            <ul className="space-y-2 text-ink/80">
              <li>— L'accès au toit : échafaudage, rue étroite, stationnement en centre-ville.</li>
              <li>— L'état de la charpente, visible seulement une fois la couverture déposée.</li>
              <li>— La complexité du toit : pans multiples, noues, lucarnes.</li>
              <li>— Le matériau imposé par la copropriété ou les Bâtiments de France.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">Garanties et engagements</h2>
            <ul className="space-y-3 text-ink/80">
              <li className="flex gap-3"><span className="text-blue">—</span> Garantie décennale AXA sur l'ensemble des travaux de couverture.</li>
              <li className="flex gap-3"><span className="text-blue">—</span> Certification RGE Qualibat, mobilisable pour les aides à la rénovation.</li>
              <li className="flex gap-3"><span className="text-blue">—</span> Déplacement et devis gratuits, sans engagement.</li>
              <li className="flex gap-3"><span className="text-blue">—</span> Intervention d'urgence fuite, 7 jours sur 7.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">Entretenir une toiture angevine</h2>
          <p className="text-ink/80 leading-relaxed mb-4">
            Une visite d'entretien permet de repérer une ardoise poreuse, un crochet rouillé ou
            une gouttière qui déborde avant que l'eau ne pénètre dans les combles. À Angers, les
            alternances de pluie, de gel et de périodes douces favorisent la mousse sur les
            versants peu exposés au soleil. Un contrôle régulier évite de confondre une petite
            réparation avec une réfection complète.
          </p>
          <p className="text-ink/80 leading-relaxed">
            Le démoussage se fait sans agresser l'ardoise : Julien choisit la méthode selon le
            matériau, la pente et l'état des crochets. Les produits hydrofuges ne remplacent
            jamais une couverture saine ; ils viennent après le nettoyage et la vérification des
            points d'infiltration. Le compte rendu de visite vous indique les travaux urgents et
            ceux qui peuvent attendre.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">Réparer avant les dégâts intérieurs</h2>
          <p className="text-ink/80 leading-relaxed mb-4">
            Une fuite n'apparaît pas toujours sous la forme d'une goutte. Une odeur de bois
            humide, une peinture qui cloque ou une auréole près d'une cheminée peuvent signaler
            une infiltration éloignée de son point d'entrée. L'eau circule sous les ardoises
            avant d'atteindre le plafond ; chercher uniquement au-dessus de la tache conduit
            souvent à une mauvaise réparation.
          </p>
          <p className="text-ink/80 leading-relaxed">
            En urgence, l'équipe sécurise d'abord la zone et met la toiture hors d'eau. Elle
            identifie ensuite la cause : ardoise déplacée, solin, noue, faîtage ou gouttière. Un
            devis distinct vous permet de choisir entre la remise en état immédiate et les
            travaux de fond, avec les mêmes explications dans les deux cas.
          </p>
        </div>
      </section>

      <section id="zone" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">Zone d'intervention</h2>
        <p className="text-slate max-w-xl mb-8">
          Basé à Angers, l'équipe intervient dans un rayon de 30 km, commune par commune.
        </p>
        <div className="flex flex-wrap gap-3">
          {COMMUNES.map((c) => (
            <Link
              key={c.slug}
              href={c.slug === "couvreur-avrille" ? `/${c.slug}` : "/#zone"}
              className="rounded-sm border border-slate/25 px-4 py-2 text-sm text-ink hover:border-blue hover:text-blue transition-colors"
            >
              {c.name} <span className="text-slate">· {c.distance}</span>
            </Link>
          ))}
        </div>
      </section>

      <Faq id="faq" title="Questions fréquentes" items={faqItems} />

      <QuoteBlock id="devis-final" compact />
    </>
  );
}
