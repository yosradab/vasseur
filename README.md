# Couverture Vasseur — site vitrine (exercice)

Site Next.js (App Router) réalisé pour le test technique — client fictif "Couverture Vasseur", couvreur à Angers.

## Stack
- Next.js 16 (App Router), rendu statique (SSG)
- Tailwind CSS v4
- Aucune dépendance externe payante

## Lancer en local
```bash
npm install
npm run dev
```
Site sur http://localhost:3000

## Build de production
```bash
npm run build
npm run start
```

## Avant déploiement
1. Ouvrir `lib/site.js` et vérifier/adapter `SITE_URL` (utilisé pour canonical, OG, sitemap, schema.org).
2. Déployer sur Vercel (recommandé, zéro config) ou Netlify :
   - **Vercel** : `vercel` (CLI) ou importer le repo Git sur vercel.com — Framework Next.js détecté automatiquement.
   - **Netlify** : importer le repo, build command `npm run build`, publish directory laissé par défaut (le plugin Next.js de Netlify gère le SSR/SSG).
3. Une fois l'URL de prod connue, mettre à jour `SITE_URL` dans `lib/site.js` et redéployer pour des canonical/OG/sitemap corrects.

## Pages
- `/` — Accueil (couvreur à Angers)
- `/couverture-ardoise-angers` — Prestation : réfection toiture ardoise
- `/couvreur-avrille` — Page ville : Avrillé

## Notes
- Les visuels de chantiers et le portrait de l'artisan sont des illustrations SVG originales (`components/RoofArt.js`), aucune photo réelle n'ayant été fournie dans le brief — seul le logo l'a été.
- Palette et typographie définies dans `app/globals.css` (tokens CSS) — voir le rendu dans `app/globals.css` pour la logique de la direction artistique (résoudre l'écart entre le bleu-nuit du logo et le gris ardoise de la région).
# vasseur
