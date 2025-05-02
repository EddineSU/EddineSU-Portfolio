---
layout: ../../layouts/post.astro
title: Comment installer Docker sur Nixos 
description: Beautify your RSS feeds with RSS.Beauty, featuring elegant interfaces, responsive design, and self-hosting support. Try it now!
dateFormatted: Dec 31, 2024
---
![RSS.Beauty](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fo515l2fd4mo41.png%3Fwidth%3D3200%26format%3Dpng%26auto%3Dwebp%26s%3D9ad83e60f703570e6f9e0c667b4c34b4526287c2&f=1&nofb=1&ipt=965869531fbd7994f76c1f6f9dd676bf481fabb4eaafc9af711b01c5f5220f32&ipo=images)

>[NixOS](https://nixos.org/) est un système d’exploitation Linux unique qui repose sur un gestionnaire de paquets, Nix, permettant de gérer l’ensemble de la configuration du système de manière déclarative et reproductible. Grâce à cette approche, NixOS assure une grande stabilité, une gestion simplifiée des mises à jour, et la possibilité de revenir facilement à des versions antérieures du système, garantissant ainsi une administration fluide et sans accroc.

![DockerIMG](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2982327.jpg&f=1&nofb=1&ipt=ebe0760f35fc3a663c20e0feb9e3fe114af414878423c7bd666f40cf9d9f612e&ipo=images)

>[Docker](https://docker.com/), quant à lui, est une plateforme de virtualisation légère qui permet de créer, déployer et exécuter des applications dans des conteneurs. Ces derniers sont isolés du système d’exploitation sous-jacent, offrant ainsi une gestion simplifiée des dépendances et une portabilité accrue des applications. Docker est une solution idéale pour déployer des applications de manière cohérente sur divers environnements et machines, tout en garantissant une exécution rapide et stable.

## Key Features

- 🔄 Support for RSS 2.0 and Atom 1.0
- 🔌 One-click subscription to major RSS readers
- 🖥 Self-hosting support

---

### Étape 1 : Modifier le fichier `configuration.nix`
Le fichier `configuration.nix` se trouve généralement dans le répertoire `/etc/nixos/`. Ouvrez ce fichier pour le modifier.

### Étape 2 : Ajouter Docker dans les paquets à installer
Dans le fichier `configuration.nix`, ajoutez `docker` à la liste des paquets à installer en modifiant la ligne `environment.systemPackages` comme suit :

```nix
environment.systemPackages = with pkgs; [
  docker
];
```

### Étape 3 : Activer le service Docker
Pour activer Docker sur NixOS, ajoutez la ligne suivante dans le fichier `configuration.nix` :

```nix
virtualisation.docker.enable = true;
```

### Étape 4 : Rebuild du système
Une fois les modifications effectuées, appliquez les changements en exécutant la commande suivante dans le terminal :

```bash
sudo nixos-rebuild switch
```

Cela installera Docker et activera son service sur votre système NixOS.

### Étape 5 : Vérification
Vérifiez que Docker fonctionne correctement en exécutant la commande suivante :

```bash
docker --version
```

Vous devriez voir la version de Docker installée. Pour tester Docker, vous pouvez aussi essayer de lancer un conteneur :

```bash
docker run hello-world
```

Si tout fonctionne correctement, Docker est maintenant installé et prêt à l'emploi.
