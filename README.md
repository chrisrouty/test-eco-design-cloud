# Eco Design Cloud

Le projet est organisé autour d’une séparation entre les composants UI réutilisables et les composants métier pour éviter la duplication.

Dans _src/components/ui_, on retrouve les composants génériques comme Button, Modal, Card, Label, Title, etc. L’idée est que ces composants ne connaissent pas le domaine produit, ils servent uniquement à construire l’interface.

La partie métier est dans _src/features/products_. Elle contient la liste des produits, les cards, les filtres, le tri, la pagination et la modal de détail produit.

### Temps de réalisation : 8h+
### Difficultés rencontrées : 
J’ai volontairement passé du temps sur les fondations, architecture des dossiers, configuration, couleur en OKLCH, typage strict des composants de base, pour m'assurer que le code soit de qualité production et scalable. 
La difficulté était de ne pas utiliser de ```any``` et de typer correctement les événements natifs comme le ```KeyboardEvent``` ou les ```HTMLButtonElement / ButtonHTMLAttributes``` pour le bouton. J'ai étendu les types HTML natifs pour préserver l'autocomplétion de React.
Mais aussi l'utilisation ``` SelectOption<Value extends string = string> ``` pour les options de select qui permet de sécuriser au maximum le type de la valeur par rapport à ce qui est attendu. Pour les filtres et les tris de produits, j'aurais pu utiliser un ```dropdown``` pour plus de flexibilité afin d'intégrer les icones plus efficacement.
### Conclusion :
Ce test technique a été un excellent exercice pour pousser l'utilisation de TypeScript avec React. Au-delà du simple respect des fonctionnalités demandées, ce projet démontre ma volonté de livrer un code propre et réutilisable.

---

## Prérequis

- Node.js 20 ou plus
- Yarn 4

## Installation

```bash
yarn install
```

## Lancement

```bash
yarn dev
```

```txt
http://localhost:5173/
```

## Scripts

```bash
yarn dev
yarn build
```