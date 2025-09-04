# Gestionnaire de Tâches — React + TypeScript + Vite + Tailwind

Application web moderne de gestion de tâches, responsive, avec mode sombre, animations, et persistance locale. Conçue pour être agréable, rapide et utilisable sur mobile, tablette et desktop.

## Fonctionnalités clés

- Gestion des tâches
  - Ajouter une tâche (textarea multi‑lignes)
  - Terminer / Annuler une tâche
  - Supprimer une tâche
  - Persistance automatique dans localStorage
- Saisie multi‑lignes ergonomique
  - Entrée = nouvelle ligne
  - Ctrl+Entrée (ou Cmd+Entrée sur Mac) = ajouter la tâche immédiatement
- Affichage des tâches
  - Texte sur plusieurs lignes
  - Pas de débordement: retour à la ligne et coupe des mots très longs
  - Boutons toujours visibles, même avec des textes longs
- Interface et navigation
  - Navbar sticky avec onglet actif mis en évidence en bleu
  - Bouton “Retour en haut” qui apparaît lors du scroll
  - Footer collé en bas de l’écran même sur page courte
- Page d’accueil soignée
  - Hero avec texte en dégradé et CTA
  - Slogans qui défilent (carousel automatique)
  - Deux bandes d’images de tâches animées (marquee) en sens opposés
  - Section Features et contact WhatsApp
- Dark mode
  - Bascule clair/sombre, persistante (localStorage)
  - Application très tôt pour éviter le flash (préférence système respectée)
- Responsive
  - Conçue pour téléphones, tablettes, ordinateurs

## Démarrage rapide

Prérequis: Node.js 18+ (recommandé) et npm.

1. Installer les dépendances
   npm install

2. Lancer en développement
   npm run dev
   Ouvrir l’URL indiquée par Vite (par défaut http://localhost:5173).

3. Build de production
   npm run build

4. Prévisualiser le build
   npm run preview

## Structure du projet

- index.html — Document HTML racine, inclut:
  - Script d’application du thème (évite le flash à l’ouverture)
  - Liens d’icône (favicon / Apple touch icon)
- public/
  - icône-taches1.png — Icône du site (favicon)
- src/
  - main.tsx — Point d’entrée React, Router
  - App.tsx — Shell de l’application (Navbar, routes, footer, back-to-top, dark mode toggle)
  - App.css, index.css — Styles globaux (Tailwind)
  - pages/
    - Home.tsx — Page d’accueil (hero, slogans, marquises d’images, contact WhatsApp)
    - Taches.tsx — Page de gestion (formulaire, liste, stats)
    - About.tsx — Page À propos (présentation stylisée)
  - components/
    - FormTaches.tsx — Formulaire d’ajout de tâche (textarea, Ctrl+Entrée)
    - ListTaches.tsx — Liste des tâches
    - ItemTaches.tsx — Élément de tâche (multi‑lignes, actions)
  - types/Tache.ts — Type Task (id, text, done)
- tailwind.config.js — Config Tailwind (darkMode: "class" + animations)
- vite.config.ts — Config Vite

## Scripts npm

- npm run dev — Lancer le serveur de dev Vite
- npm run build — Compiler TypeScript et construire le bundle
- npm run preview — Servir le build localement
- npm run lint — Lint du code

## Détails d’implémentation

- Dark mode
  - Basculé via un bouton dans la navbar
  - Persisté (localStorage) et appliqué dès le chargement (index.html)
  - Basé sur darkMode: "class" (Tailwind)
- Animations (Tailwind)
  - keyframes ajoutées pour:
    - marquee (défilement horizontal continu)
    - float (petit flottement pour le CTA)
  - Classes utilitaires: animate-marquee, animate-marqueeSlow, animate-float
- Page d’accueil
  - SloganCarousel: change automatiquement de phrase toutes les 3s (ARIA live)
  - Marquee d’images: deux bandes opposées, images lazy‑loaded
  - Section contact WhatsApp: bouton ouvrant wa.me avec message prérempli
- Page Tâches
  - Formulaire: textarea multi‑lignes
    - Entrée: nouvelle ligne
    - Ctrl/Cmd+Entrée: soumission rapide
  - Affichage: multi‑lignes (whitespace-pre-wrap, break-words), pas de chevauchement des boutons

## Personnalisation

- Icône du site (favicon)
  - Remplacer public/icône-taches1.png par votre image (de préférence carrée et haute résolution)
  - Note: les navigateurs mettent l’icône en cache; si besoin, renommez le fichier et ajustez index.html
- Numéro WhatsApp
  - Dans src/pages/Home.tsx (section “Contact WhatsApp”), modifier le href wa.me/621393819
  - Pour une fiabilité maximale, utilisez le format international sans « + » ni espaces (ex: 224621393819)
- Images de la page d’accueil
  - Dans Home.tsx, constante IMAGES: remplacer par vos images (sources locales ou URLs)
  - Possible d’utiliser /public et des chemins absolus (ex: /mes-images/1.jpg)
- Vitesse des marquises
  - Adapter les durées dans tailwind.config.js (animation marquee/marqueeSlow)
- Couleurs, typos, etc.
  - Ajuster les classes Tailwind directement dans les composants

## Accessibilité et UX

- Focus visible sur les éléments interactifs
- aria-live pour les slogans afin d’annoncer les changements
- Défilement fluide au clic sur “Retour en haut”
- Possibilité d’ajouter un mode réduit d’animations (prefers-reduced-motion)

## Dépannage

- Le favicon ne change pas
  - Vider le cache, recharger fort (Ctrl+F5), ou renommer le fichier
- Changements Tailwind ignorés
  - Redémarrer le serveur de dev après modification de tailwind.config.js
- Erreurs de build
  - Vérifier la version de Node (>= 18)
  - Supprimer node_modules et package-lock.json puis npm install
- État des tâches incohérent
  - Vider le localStorage du site (clé: "taches")

## Technologies

- React 19 + React Router 7
- TypeScript 5
- Vite 7
- Tailwind CSS 3

---

Ce projet illustre une application de gestion de tâches moderne, élégante et performante. N’hésitez pas à adapter les visuels, couleurs, animations et fonctionnalités pour l’ajuster à vos besoins. Bon développement !
