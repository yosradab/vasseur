import Link from "next/link";
import QuoteBlock from "@/components/QuoteBlock";
import Faq from "@/components/Faq";

export const metadata = {
  title: "Réfection toiture ardoise Angers 49",
  description:
    "Pose et réfection de toiture en ardoise naturelle à Angers. Diagnostic, reprise ciblée ou réfection totale, démarches ABF. Devis gratuit sous 48 h.",
  alternates: { canonical: "/couverture-ardoise-angers" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Couverture Vasseur",
    title: "Réfection de toiture en ardoise à Angers",
    description: "La spécialité de Couverture Vasseur : l'ardoise naturelle, posée dans les règles de l'Anjou.",
    url: "/couverture-ardoise-angers",
    images: ["/logo-couverture-vasseur.png"],
  },
};

const signes = [
  "Une ardoise glissée ou manquante, visible depuis la rue ou au sol après un coup de vent.",
  "Une auréole sous les combles, souvent au niveau d'un solin ou d'une souche de cheminée.",
  "Un faîtage descellé, qui bouge légèrement quand on pousse dessus.",
  "Des solins fissurés autour des points singuliers — cheminées, fenêtres de toit, noues.",
  "De la mousse épaisse en versant nord, qui retient l'humidité contre l'ardoise.",
  "Un liteaunage qui pourrit, visible en sous-face une fois les combles isolés.",
];

const etapes = [
  { title: "Visite de relevé", text: "Julien monte en toiture, mesure les pans, contrôle la charpente et le liteaunage." },
  { title: "Devis détaillé", text: "Poste par poste : dépose, matériau, pose, zinguerie, évacuation des gravats." },
  { title: "Protection du chantier", text: "Bâchage, échafaudage sécurisé, accès balisé pour la durée des travaux." },
  { title: "Dépose et reprise", text: "Ardoises et liteaunage déposés, charpente contrôlée avant la pose neuve." },
  { title: "Pose et zinguerie", text: "Ardoise posée au clou ou au crochet selon l'exposition, points singuliers en zinc." },
  { title: "Réception", text: "Tour du chantier, photos, attestation décennale et facture détaillée remises." },
];

const faqItems = [
  {
    q: "Combien coûte une réfection de toiture en ardoise ?",
    a: "Le plus souvent entre 150 et 250 € du m², matériau et pose compris. L'accès au toit et l'état de la charpente font varier ce chiffre — le devis après visite reste le seul montant fiable.",
  },
  {
    q: "Faut-il refaire toute la toiture ou une reprise suffit-elle ?",
    a: "Si les dégâts restent localisés et la charpente saine, une reprise ciblée suffit souvent et coûte nettement moins cher. Julien vous le dit franchement en visite, sans pousser vers le plus gros chantier.",
  },
  {
    q: "Quelle est la durée de vie d'une toiture en ardoise ?",
    a: "80 à 100 ans pour une ardoise naturelle bien posée, contre 30 à 50 ans pour la plupart des tuiles. C'est un investissement qui se rentabilise sur plusieurs générations.",
  },
  {
    q: "Une déclaration préalable est-elle nécessaire ?",
    a: "Oui dans la plupart des cas à Angers, et une autorisation des Bâtiments de France si le logement est en secteur sauvegardé. Julien monte le dossier avec vous.",
  },
  {
    q: "Combien de temps dure le chantier ?",
    a: "Pour une maison individuelle, comptez une à trois semaines selon la surface et la météo. La visite de relevé permet de vous donner un délai précis.",
  },
  {
    q: "Que faire si je découvre une charpente abîmée en cours de chantier ?",
    a: "Julien vous montre ce qu'il a trouvé, chiffre la reprise séparément et attend votre accord avant de continuer — aucune mauvaise surprise sur la facture finale.",
  },
];

export default function PrestationArdoise() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-4xl px-5 pt-16 pb-14 md:pt-24">
          <p className="text-blue-bright text-sm font-medium mb-4">Prestation — Angers et Maine-et-Loire</p>
          <h1 className="font-display text-4xl sm:text-5xl text-white leading-[1.05] mb-6">
            Réfection de toiture en ardoise à Angers
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-xl">
            La spécialité de la maison. Pose, reprise et entretien de l'ardoise naturelle,
            dans le respect des toitures anciennes du centre d'Angers.
          </p>
        </div>
      </section>

      <QuoteBlock id="devis" compact />

      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl text-ink mb-6">Les signes qui doivent alerter</h2>
        <p className="text-slate leading-relaxed mb-6">
          Une toiture en ardoise vieillit lentement, mais certains signes annoncent qu'il est
          temps d'appeler avant que le dégât ne touche la charpente.
        </p>
        <ul className="space-y-3">
          {signes.map((s) => (
            <li key={s} className="flex gap-3 text-ink/80 leading-relaxed">
              <span className="text-blue shrink-0">—</span>{s}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <h2 className="font-display text-3xl text-ink mb-6">Le détail de l'intervention</h2>
          <p className="text-ink/80 leading-relaxed mb-4">
            Une réfection en ardoise commence toujours par le liteaunage : les lattes de bois
            sur lesquelles chaque ardoise vient s'accrocher. Si le bois est sain, il peut être
            conservé ; sinon, il est remplacé avant la pose.
          </p>
          <p className="text-ink/80 leading-relaxed mb-4">
            Vient ensuite l'écran de sous-toiture, une membrane qui protège la charpente en cas
            d'infiltration ou de neige poudreuse — absente sur la plupart des toitures d'avant
            1980, elle est systématiquement ajoutée lors d'une réfection.
          </p>
          <p className="text-ink/80 leading-relaxed">
            Les ardoises sont ensuite posées au clou ou au crochet inox selon l'exposition au
            vent, avec un recouvrement calculé sur la pente exacte du toit. Les points
            singuliers — faîtage, noues, solins autour des souches de cheminée — sont traités en
            zinc, car c'est là que 90 % des fuites démarrent sur une toiture par ailleurs saine.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl text-ink mb-6">Reprise ciblée ou réfection totale ?</h2>
        <p className="text-ink/80 leading-relaxed mb-4">
          C'est la première question que se pose la plupart des propriétaires, et la réponse
          honnête dépend de trois choses : l'étendue des ardoises abîmées, l'état du
          liteaunage en dessous, et l'âge global de la toiture.
        </p>
        <p className="text-ink/80 leading-relaxed">
          Si moins d'un quart de la toiture est touché et que le bois est sain, une reprise
          ciblée règle le problème pour une fraction du coût d'une réfection complète. Au-delà,
          ou si la toiture approche les 80 ans, refaire l'ensemble évite de payer deux fois : une
          reprise partielle, puis la réfection totale trois ans plus tard.
        </p>
      </section>

      <section className="bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <h2 className="font-display text-3xl text-ink mb-10">Le déroulé, étape par étape</h2>
          <div className="space-y-8">
            {etapes.map((e, i) => (
              <div key={e.title} className="flex gap-5">
                <p className="font-display text-2xl text-blue shrink-0 w-8">{i + 1}</p>
                <div>
                  <h3 className="font-medium text-ink mb-1">{e.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl text-ink mb-6">Ce qui fait varier le coût</h2>
        <p className="text-ink/80 leading-relaxed mb-4">
          Une réfection complète se chiffre le plus souvent entre 150 et 250 € du m², une
          reprise ciblée entre 800 et 2 500 € selon la surface touchée. Trois facteurs pèsent
          le plus sur ce montant :
        </p>
        <ul className="space-y-2 text-ink/80">
          <li>— L'accès : échafaudage nécessaire, rue étroite, stationnement d'engin difficile en centre-ville.</li>
          <li>— L'état du liteaunage, découvert seulement une fois l'ardoise déposée.</li>
          <li>— La complexité du toit : nombre de pans, lucarnes, noues.</li>
        </ul>
      </section>

      <section className="bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <h2 className="font-display text-3xl text-ink mb-6">Les démarches à régler avant</h2>
          <p className="text-ink/80 leading-relaxed mb-4">
            À Angers, une part importante du centre ancien se trouve en secteur sauvegardé :
            toute modification de toiture visible depuis la rue passe alors par une déclaration
            préalable et l'avis des Bâtiments de France, qui peuvent imposer le maintien de
            l'ardoise et un format précis.
          </p>
          <p className="text-ink/80 leading-relaxed">
            En copropriété, un chantier de toiture nécessite un vote en assemblée générale et,
            souvent, l'installation d'un échafaudage sur le domaine public — ce qui demande une
            autorisation de voirie. Julien connaît ces démarches et peut préparer les pièces
            techniques nécessaires au dossier.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl text-ink mb-6">Quelle ardoise pour une maison à Angers ?</h2>
        <p className="text-ink/80 leading-relaxed mb-4">
          Le choix ne se résume pas à une couleur. Le format de l'ardoise dépend de la pente,
          de la longueur du rampant et de l'exposition au vent. Dans le centre ancien d'Angers,
          l'ardoise naturelle reste souvent la solution attendue pour préserver l'aspect de la
          rue. Sur une extension ou un pavillon, Julien compare le format, le crochet et le
          recouvrement pour obtenir une couverture durable et cohérente avec le bâti.
        </p>
        <p className="text-ink/80 leading-relaxed">
          Une ardoise naturelle bien calibrée vieillit différemment d'une ardoise fibrociment.
          Lors de la visite, l'équipe distingue les deux matériaux et vérifie l'état des
          fixations avant de proposer une solution. Le devis précise la provenance, le format,
          le mode de fixation et les travaux de zinguerie associés, afin que la comparaison soit
          possible entre plusieurs offres.
        </p>
      </section>

      <section className="bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <h2 className="font-display text-3xl text-ink mb-6">Une réfection pensée pour durer</h2>
          <p className="text-ink/80 leading-relaxed mb-4">
            Une toiture neuve ne se limite pas aux ardoises visibles depuis la rue. La ventilation
            des combles, la qualité du support, le traitement des rives et l'évacuation de l'eau
            déterminent la durée de vie de l'ensemble. L'équipe contrôle ces éléments pendant la
            dépose et signale séparément toute reprise nécessaire de la charpente.
          </p>
          <p className="text-ink/80 leading-relaxed">
            Le chantier est organisé pour limiter le temps d'ouverture : les protections sont
            posées avant la dépose, les matériaux sont livrés au bon moment et les gravats sont
            évacués régulièrement. Cette méthode compte particulièrement dans les rues étroites
            et les copropriétés du centre d'Angers, où l'échafaudage et le stationnement doivent
            être anticipés.
          </p>
        </div>
      </section>

      <Faq id="faq" title="Questions sur la réfection en ardoise" items={faqItems} />

      <section className="mx-auto max-w-3xl px-5 pb-16">
        <h2 className="font-display text-2xl text-ink mb-4">À lire ensuite</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/#prestations"
            className="rounded-sm border border-slate/25 px-4 py-2 text-sm text-ink hover:border-blue hover:text-blue transition-colors"
          >
            Toutes les prestations
          </Link>
          <Link
            href="/couvreur-avrille"
            className="rounded-sm border border-slate/25 px-4 py-2 text-sm text-ink hover:border-blue hover:text-blue transition-colors"
          >
            Couvreur à Avrillé
          </Link>
        </div>
      </section>

      <QuoteBlock id="devis-final" compact />
    </>
  );
}
