# Portfolio professionnel — Noga Germainio

Refonte du portfolio en vue des candidatures développeur backend / full-stack (Madagascar et télétravail).

**Site :** https://myportfolio-noga.vercel.app/  
**GitHub :** https://github.com/Noga-ng

## Stack

React 19, TypeScript, Vite 8, Tailwind CSS 4 et React Icons. La refonte conserve la configuration et les dépendances du dépôt existant.

## Principales améliorations

- Positionnement clair : développeur backend & full-stack (PHP, React, TypeScript, Go et SQL).
- Études de cas concrètes : MSBC, NCache, Noga_SE, Noga_HTTP et Noga_CH.
- Présentation précise du rôle et des contributions, sans métriques marketing inventées.
- Compétences regroupées par domaine, sans évaluation subjective en étoiles.
- Navigation mobile avec bouton accessible, ancrages fonctionnels et états de focus.
- Suppression de l'ancien formulaire de contact sans backend : `mailto:` et coordonnées cliquables.
- Liens vers les dépôts GitHub vérifiés, et suppression des liens vides.
- CV et portrait récents (`public/CV-Noga-Germainio.pdf`, `public/portrait-professionnel.jpg`).
- Métadonnées HTML françaises, OpenGraph, Twitter Cards et données structurées Person.
- Image OpenGraph allégée et portrait compressé.
- Respect de `prefers-reduced-motion` et lien d'évitement vers le contenu.

## Développement local

```bash
npm ci
npm run dev
npm run lint
npm run build
```

Build prévu sur Node.js 22+ selon les dépendances actuelles du dépôt. Vérifier les contraintes exactes de Vite et des plugins lors de l'installation.

## Intégration du ZIP

Le ZIP contient **uniquement les fichiers ajoutés ou remplacés**. À partir d'un clone du dépôt initial :

1. Créer une branche de travail : `git checkout -b improve/recruiter-portfolio-2026`.
2. Copier le contenu de ce ZIP à la racine du dépôt en remplaçant les fichiers homonymes.
3. Ne pas supprimer `src/assets/`, `package.json`, `package-lock.json`, `vite.config.ts`, `src/App.tsx` et `src/main.tsx`.
4. Lancer `npm ci`, `npm run lint`, puis `npm run build`.
5. Vérifier en navigateur les liens, le menu mobile, le chargement du CV et les cartes projets.
6. Créer une pull request vers `main` après validation des tests.

Les anciens composants du dossier `src/web/components/portfolio/` sont conservés, mais les anciennes sections (Hero, About, Skills, Contact, etc.) ne sont plus utilisées par la page remplacée. Ils pourront être supprimés dans un commit de nettoyage une fois la refonte validée.

## Maintenance du contenu

Modifier les textes de projets et de compétences dans `src/web/data/portfolio.ts`.

Modifier la page, la navigation et les informations de contact dans `src/web/pages/portfolio.tsx`.

Personnaliser les styles et les contrastes dans `src/index.css`.

Pour mettre à jour le CV, remplacer `public/CV-Noga-Germainio.pdf` en conservant le nom du fichier.

## Limites / vérifications restantes

- Le dépôt original n'a pas pu être compilé dans cet environnement. Exécuter le build et le lint localement ou sur la CI.
- Le site MSBC renvoie vers la vitrine publique ; son back-office est privé et ne doit pas être exposé.
- L'affirmation concernant les 253 tests / 849 assertions de NCache provient d'une campagne de tests datée d'août 2026 : actualiser si nécessaire.
- Vérifier sur mobile, clavier, Lighthouse et navigateurs courants avant mise en production.
