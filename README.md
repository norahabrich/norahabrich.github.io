# Portfolio — Nora Habrich

**Site en ligne : https://norahabrich.github.io**

Portfolio personnel d'une ingénieure finance & data basée à Paris : parcours, expériences, projets, compétences, certifications et un mini-jeu 2048 jouable.
Site statique, sans framework ni dépendance, hébergé gratuitement sur GitHub Pages.

---

## Stack technique

| Catégorie | Outil / technologie | Utilisation dans le projet |
|---|---|---|
| Structure | **HTML5** | Balises sémantiques (`header`, `nav`, `main`, `section`, `footer`), attributs d'accessibilité ARIA |
| Style | **CSS3** | Design complet, thème clair/sombre, responsive, animations |
| Interactivité | **JavaScript (ES6+)** | Onglets, filtres, cartes dépliables, thème, compteur de scroll, jeu 2048 |
| Typographie | **Google Fonts** | *Martian Mono* (titres) et *IBM Plex Mono* (texte) |
| Versionnage | **Git & GitHub** | Historique des modifications du code |
| Hébergement | **GitHub Pages** | Mise en ligne gratuite avec HTTPS |
| Éditeur | **Visual Studio Code** | Écriture et modification du code |

---

## HTML5 en détail

- Structure sémantique : `header`, `nav`, `main`, `section`, `footer`
- Navigation par ancres (`#apropos`, `#experience`, `#projets`…) avec défilement fluide
- Métadonnées : `charset`, `viewport` (mobile), `description` (référencement)
- Accessibilité : rôles ARIA (`tablist`, `tab`, `tabpanel`), états `aria-selected`, `aria-pressed`, `aria-expanded`, libellés `aria-label`

## CSS3 en détail

- **Variables CSS** (`:root { --accent: …; }`) : toute la palette et les polices sont centralisées
- **Thème clair / sombre** : `prefers-color-scheme` + attribut `data-theme` piloté en JavaScript
- **Mise en page** : CSS Grid (`grid-template-columns`, `auto-fill`, `minmax`) et Flexbox
- **Responsive design** : media queries (`max-width: 720px`…), `clamp()` pour une typographie fluide
- **Fonctions modernes** : `color-mix()` (couleurs des tuiles 2048 et des états actifs), `aspect-ratio`, `backdrop-filter` (menu flouté)
- **Fond en grille** : double `linear-gradient` répété
- **Animation** : `@keyframes` (curseur clignotant), `transition`
- **Accessibilité** : `:focus-visible`, respect de `prefers-reduced-motion`
- **Typographie** : `text-wrap: balance`, `font-variant-numeric: tabular-nums`

## JavaScript en détail

Aucune bibliothèque : JavaScript natif (« vanilla JS »).

- **Données séparées du rendu** : les expériences (`XP`) et les projets (`PROJ`) sont stockés dans des tableaux d'objets, puis affichés automatiquement
- **Manipulation du DOM** : `createElement`, `innerHTML`, `querySelectorAll`, `template literals`
- **Événements** : `click`, `scroll`, `keydown` (flèches du clavier), `pointerdown` / `pointerup` (glisser au doigt sur mobile)
- **Filtres de projets** : catégories générées dynamiquement avec `new Set()`
- **Thème** : `matchMedia('(prefers-color-scheme: light)')` + `dataset`
- **Stockage local** : `localStorage` mémorise le thème choisi et le meilleur score du 2048
- **Presse-papiers** : `navigator.clipboard.writeText()` pour copier l'email et le téléphone
- **Compteur `scroll://`** : pourcentage calculé avec `scrollY` et `scrollHeight`
- **Organisation** : chaque fonctionnalité est isolée dans une fonction auto-exécutée (IIFE)

### Le jeu 2048

- Plateau 4×4 stocké dans un tableau de 16 cases
- Algorithme de déplacement : pour chaque ligne/colonne, on retire les zéros, on fusionne les paires identiques, puis on complète avec des zéros
- Apparition aléatoire d'un 2 (90 %) ou d'un 4 (10 %)
- Détection de victoire (2048) et de fin de partie (aucun mouvement possible)
- Contrôles : clavier, boutons à l'écran et glissement tactile

---

## Fonctionnalités

- Menu fixe style terminal (`./a-propos`, `./projets`…)
- Mode clair / sombre mémorisé
- Expériences en onglets cliquables
- Projets filtrables par catégorie, cartes dépliables
- Parcours Agadir → Casablanca → Paris avec coordonnées GPS
- Bouton « copier » pour les coordonnées
- Jeu 2048 jouable
- 100 % responsive (ordinateur, tablette, mobile)

---

## Structure du projet

```
norahabrich.github.io/
├── index.html   ← structure et contenu (HTML)
├── style.css    ← design, thème clair/sombre, responsive (CSS)
├── script.js    ← interactivité et jeu 2048 (JavaScript)
└── README.md    ← ce fichier
```

## Lancer le projet en local

1. Cloner le dépôt : `git clone https://github.com/norahabrich/norahabrich.github.io.git`
2. Ouvrir `index.html` dans un navigateur (ou utiliser l'extension *Live Server* de VS Code)

## Déploiement

Le site est publié automatiquement par **GitHub Pages** depuis la branche `main` : chaque modification enregistrée (commit) met le site à jour en 1 à 2 minutes.

---

## Contact

- Email : norahabrich2@gmail.com
- Portfolio : https://norahabrich.github.io
- GitHub : https://github.com/norahabrich

© 2026 Nora Habrich
