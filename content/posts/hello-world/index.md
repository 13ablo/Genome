---
title: "Hello, World — et bienvenue sur Genome"
date: 2026-05-06
draft: false
cover: "cover.png"
tags: ["DevOps", "Premier article"]
description: "Pourquoi appeler un blog DevOps 'Genome' ? Parce que chaque ligne de code, chaque pipeline, chaque config a quelque chose d'un brin d'ADN."
showTableOfContents: true

glossary:
  - term: "Pipeline"
    def: "Séquence automatisée de build, test et déploiement déclenchée à chaque changement de code."
  - term: "IaC"
    def: "Infrastructure as Code — gérer l'infra via des fichiers versionnés plutôt qu'à la main."
  - term: "Idempotent"
    def: "Une opération qui produit le même résultat peu importe le nombre d'exécutions."
  - term: "Manifest"
    def: "Fichier déclaratif décrivant l'état désiré d'une ressource Kubernetes."
  - term: "Observabilité"
    def: "Capacité à comprendre l'état interne d'un système depuis ses sorties externes."
  - term: "Phénotype"
    def: "Ici : ce qui tourne réellement en production, par opposition à ce qui est écrit dans le code."

links:
  - label: "Genome repository"
    url: "https://github.com/13ablo/Genome"

---

{{< lead >}}
Il y a quelques semaines, je cherchais un nom pour ce blog. Pas un acronyme DevOps de plus, pas un nom en *-ops* ou *-flow*. Quelque chose qui veuille dire quelque chose.
{{< /lead >}}

J'étais en train de déboguer un pipeline cassé — un de ces moments où l'on remonte la chaîne des dépendances, un fichier de config après l'autre, un layer Docker après l'autre — quand l'image s'est imposée d'elle-même.

{{< callout type="tip" >}}
**PS :** Ne vous inquiétez pas si vous ne comprenez pas la phrase ci-dessus ⬆️
C'est un projet ouvert à toutes et à tous, et je ferai le maximum pour vulgariser mes propos afin que chaque profil puisse trouver un intérêt à la lecture de mes articles.
{{< /callout >}}

Bref, où en étais-je ? Ah oui...

{{< divider label="l'idée" >}}

## Une infrastructure, c'est un organisme vivant

{{< callout type="story" >}}
Pas une métaphore de façade. Une vraie réalité opérationnelle : chaque service est une cellule, chaque réseau un système nerveux, chaque pipeline un mécanisme d'expression. Et au cœur de tout ça, il y a un **génome** — l'ensemble du code, des manifests, des variables d'environnement, des scripts qui définissent *ce que l'infrastructure est censée être*.
{{< /callout >}}

Quand quelque chose casse, on ne cherche pas juste un log. On cherche une mutation. Une dérive. Un endroit où ce qui a été déployé ne correspond plus à ce qui était écrit.

> « Le génome, c'est l'intention. Le phénotype, c'est sa réalisation. »

Le DevOps, c'est l'art de maintenir ces deux choses alignées.

**Genome**, c'est donc ça : un espace pour documenter le code génétique d'une infrastructure — ses patterns, ses mutations, ses évolutions. Chaque article sera une séquence de plus dans cette cartographie.

{{< divider label="au programme" >}}

## Ce que vous trouverez ici

{{< topicgrid >}}
  {{< topiccard icon="gitlab" label="CI/CD" >}}
  Pipelines, déploiements, intégration continue
  {{< /topiccard >}}

  {{< topiccard icon="terraform" label="Infrastructure as Code" >}}
  Terraform, Ansible, configs reproductibles et idempotentes
  {{< /topiccard >}}

  {{< topiccard icon="kubernetes" label="Containers" >}}
  Docker, Kubernetes, orchestration
  {{< /topiccard >}}

  {{< topiccard icon="prometheus" label="Observabilité" >}}
  Monitoring, alerting, logs, traces
  {{< /topiccard >}}

  {{< topiccard icon="springsecurity" label="DevSecOps" >}}
  Sécurité intégrée au cycle de dev
  {{< /topiccard >}}

  {{< topiccard icon="unacademy" label="Retours d'expérience" >}}
  Post-mortems, leçons apprises
  {{< /topiccard >}}
{{< /topicgrid >}}

Mais au delà de ces sujets nous retraçerons ensemble l'histoire de ce mouvement qu'est le devops. Le pourquoi du comment, La raison pour laquelle nous en sommes arrivés là, les figures représentatives du métier, les contributeurs fantômes qui ont changé nos vies et dont on ne parle pas assez, Les fondateurs des outils que nous utilisons au quotidien sans même connaître leurs noms. Vous l'aurez compris, il y'en aura pour tous les goûts et pour tout le monde !


{{< divider label="mon environnement" >}}

## Mes outils de prédilection

{{< callout type="info" >}}
Pour vous donner une idée de l'écosystème dans lequel j'ai eu à ebvolué jusque là :

- **Cloud** → AWS
  - **Cloud Ressources** → ECS, Cloudwatch, Lambda, S3, IAM, Cloudfront, WAF, EKS, Systems manager,...
- **IaC** → Terraform 
- **Deployment Automation** → Ansible, Argo CD, Helm
- **CI/CD** → GitHub Actions / GitLab CI-CD
- **Conteneurs** → Docker 
- **Orchestrateur** → Kubernetes, Rancher
- **Observabilité** → Splunk, Prometheus + Grafana, ELK, Uptime-robot, Selfmade observability tooling
- **Systèmes** → Linux : Ubuntu, Debian, Redhat, Macos
- **
{{< /callout >}}

{{< divider >}}

{{< lead >}}
Ce blog ne sera pas un cours magistral. Ce sera un **carnet de bord** — avec ses doutes, ses erreurs, ses eurêka. Mon objectif est simple : montrer que le DevOps est un métier **humain, accessible et passionnant**, le génome évolue. Rendez-vous au prochain commit.

{{< /lead >}}

*DevOps Engineer — en apprentissage permanent*