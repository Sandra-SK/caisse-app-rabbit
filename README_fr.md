# Caisse Event RS

Ce projet est un système de caisse simple pour un événement. Il permet aux utilisateurs d'ajouter des produits à un ticket et de calculer le prix total. Il y a également un bouton de réinitialisation pour effacer le total.

## Fonctionnalités

- **Boutons Produits** : Boutons pour chaque produit afin d'ajouter leur prix au total.
- **Affichage du Total** : Affiche le prix total du ticket.
- **Bouton de Réinitialisation** : Efface le montant total sur le ticket.

## Installation

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/yourusername/caisse-event-rs.git
    ```

2. Accédez au répertoire du projet :
    ```bash
    cd caisse-event-rs
    ```

3. Ouvrez le fichier `index.html` dans votre navigateur pour voir l'application en action.

## Structure des Fichiers

- **index.html** : Le fichier HTML principal de l'application.
- **src/js/caisse.js** : Le fichier JavaScript contenant la logique de la caisse.
- **src/css/reset.css** : Fichier CSS de réinitialisation pour assurer une cohérence des styles entre les navigateurs.
- **src/css/styles.css** : Styles CSS personnalisés pour l'application.

## Utilisation

1. Ouvrez le fichier `index.html` dans un navigateur web.
2. Cliquez sur les boutons produits pour ajouter leurs prix au total.
3. Le montant total sera affiché dans la section "total".
4. Cliquez sur le bouton "reset ticket" pour effacer le montant total.

## Implémentations Futures

À l'avenir, nous prévoyons d'étendre les fonctionnalités du système de caisse avec plusieurs nouvelles fonctionnalités :

1. **Visualisation des Articles Saisis** : Les utilisateurs pourront voir une liste des articles ajoutés au ticket, offrant une meilleure transparence et la possibilité de vérifier le ticket avant de le finaliser.

2. **Suppression des Lignes Individuelles** : Les utilisateurs auront la capacité de supprimer des articles individuels du ticket, offrant plus de flexibilité et de contrôle sur leurs achats.

3. **Intégration de Base de Données** : Nous mettrons en place une fonctionnalité pour enregistrer les tickets dans une base de données, y compris les détails tels que le contenu, le montant total, le mode de paiement, la date et l'heure. Cela permettra une meilleure tenue des registres et une analyse des données.

4. **Interface Admin** : Une interface admin sera créée, accessible via une protection par mot de passe. Cette interface fournira des fonctionnalités supplémentaires pour gérer le système.

5. **Gestion des Produits via l'Interface Admin** : Les utilisateurs admin pourront créer de nouveaux produits directement via l'interface admin, simplifiant ainsi le processus de mise à jour de la liste des produits.

6. **Gestion des Statistiques de Ventes** : L'interface admin inclura également des outils pour gérer les statistiques de ventes, permettant aux utilisateurs de visualiser les données de ventes par plage horaire ou par jour. Cette fonctionnalité fournira des informations précieuses sur les tendances et les performances des ventes.

Ces améliorations futures visent à rendre le système de caisse plus robuste, convivial et capable de répondre aux besoins des clients et des administrateurs.


