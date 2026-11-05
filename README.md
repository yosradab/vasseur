# Couverture Vasseur — Site vitrine SEO (Next.js)

Site vitrine de 3 pages, optimisé pour le référencement local, réalisé pour un **test technique d'agence web**. Le client est fictif : *Couverture Vasseur*, artisan couvreur à **Angers**.

## Pages

| Route | Contenu |
|---|---|
| `/` | Accueil : couvreur à Angers, prestations, devis, FAQ |
| `/couverture-ardoise-angers` | Page prestation : réfection de toiture en ardoise |
| `/couvreur-avrille` | Page ville : intervention à Avrillé |

## Points forts

- **SEO local** : balises `metadata` par page, URL canonique, Open Graph, `sitemap.xml` et `robots.txt` générés par Next.js
- **Données structurées schema.org** en JSON-LD : `RoofingContractor` (adresse, coordonnées GPS, horaires, catalogue de prestations) et `FAQPage`
- **Rendu statique (SSG)** : pages pré-générées, rapides à charger
- **Direction artistique sur mesure** : palette et typographie en tokens CSS (`app/globals.css`), entre le bleu nuit du logo et le gris ardoise typique de l'Anjou
- **Illustrations SVG originales** (`components/RoofArt.js`) : le brief ne fournissait que le logo, aucune photo de chantier
- Composants réutilisables : `Header`, `Footer`, `QuoteBlock` (demande de devis), `Faq`, `SlateDivider`
- Contenu centralisé dans `lib/site.js` (coordonnées, prestations, `SITE_URL`)

## Stack technique

| Élément | Technologie |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Style | Tailwind CSS v4 |
| Qualité | ESLint (`eslint-config-next`) |
| Dépendances | Aucune dépendance externe payante |

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:3000
```

Build de production :

```bash
npm run build
npm run start
```

## Déploiement

1. Vérifier `SITE_URL` dans `lib/site.js` : il sert pour les URL canoniques, l'Open Graph, le sitemap et le schema.org.
2. Déployer sur **Vercel** (zéro configuration, Next.js détecté automatiquement) ou sur **Netlify** (commande de build `npm run build`).
3. Une fois l'URL de production connue, mettre à jour `SITE_URL` et redéployer.

## Auteur

**Yosra Dab** — Ingénieure logiciel Full Stack · [Portfolio](https://yosradab.vercel.app) · [GitHub](https://github.com/yosradab) · [LinkedIn](https://linkedin.com/in/yosradab)
