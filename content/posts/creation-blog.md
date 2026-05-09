---
title: "Comment j'ai créé ce blog avec Hugo, Congo et github actions"
date: 2026-05-08
draft: false
tags: ["hugo", "congo", "github-pages", "blog"]
---

## Bienvenue sur Genome !

Cet article raconte comment j'ai créé ce blog en utilisant Hugo et le thème Congo.

## Le commencement

J'ai décidé de créer un blog pour partager mes réflexions sur DevOps, jour après jour. Pour cela, j'ai choisi **Hugo**, un générateur de sites statiques écrit en Go, et le thème **Congo**, un thème moderne et minimaliste.

## Installation du thème Congo

J'ai installé Congo en tant que module Hugo. Cela signifie que le thème est automatiquement téléchargé lors de la construction du site, sans avoir besoin de le conserver dans le dépôt Git.

Configuration dans `config/_default/module.toml` :
```toml
[[imports]]
path = "github.com/jpanther/congo/v2"
```

## Configuration GitHub Actions

Pour déployer automatiquement le site sur GitHub Pages, j'ai créé un workflow GitHub Actions qui :

1. Télécharge Hugo
2. Construit le site avec `hugo --minify`
3. Déploie les fichiers sur GitHub Pages

Cette automatisation signifie que chaque fois que j'effectue un `git push`, le site est automatiquement construit et mis en ligne.

## Défis rencontrés

Le thème Congo avait quelques incompatibilités avec les versions récentes de Hugo. J'ai dû créer une surcharge locale pour corriger certains problèmes de rendu.

## Résultat

Maintenant, je peux simplement créer des fichiers Markdown dans le dossier `content/posts/`, les ajouter à Git, et le site est automatiquement mis à jour. C'est exactement ce que je voulais !

Le blog est maintenant en ligne sur GitHub Pages et prêt pour mes pensées sur DevOps.

---

*Publié le 8 mai 2026*
