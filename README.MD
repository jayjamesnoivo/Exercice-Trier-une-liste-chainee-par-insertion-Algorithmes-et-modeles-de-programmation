# ÉNONCÉ — Trier une liste chaînée par insertion

Vous devez programmer un tri croissant d’une liste simplement chaînée de nombres. L’algorithme construit une nouvelle liste triée en y insérant, un à un, les éléments lus dans la liste de départ. Lorsque le traitement est terminé, la liste reçue adopte la tête de la nouvelle chaîne.

## 1. Objectifs du travail

- Parcourir une liste chaînée à partir de sa tête.
- Repérer une position d’insertion dans une chaîne déjà triée.
- Créer et raccorder des nœuds en préservant la suite de la chaîne.
- Maintenir une taille cohérente et expliquer le coût du tri.

## 2. Fonction à écrire et contrat

Écrivez la fonction JavaScript `sortLinkedList(ll)`. Le paramètre `ll` est une instance de `LinkedList` dont les nœuds contiennent des nombres finis. La chaîne est finie, sans cycle, et sa propriété `size` correspond à son nombre de nœuds.

| Élément à respecter | Résultat attendu |
| --- | --- |
| Ordre des valeurs | Croissant au sens large. |
| Occurrences | Toutes les valeurs, y compris les doublons, sont conservées. |
| Construction du résultat | Les valeurs lues sont insérées dans de nouveaux nœuds d’une liste temporaire triée. |
| Liste vide ou à un seul nœud | Retourner directement la liste reçue. |
| Liste d’au moins deux nœuds | Après le tri, `ll.head` désigne la nouvelle chaîne et `ll.size` correspond au nombre de nœuds qu’elle contient. |
| Valeur retournée | L’instance reçue dans `ll`. |

Les comparaisons et les insertions doivent être écrites dans votre fonction en suivant la méthode décrite ci-dessous. Les tableaux utilisés pour les jeux de données et `toArray()` servent à l’observation des résultats. Le classement lui-même se réalise par le parcours des nœuds et la modification de leurs liens.

## 3. Algorithme à mettre en œuvre

1. Si la liste contient moins de deux nœuds, retournez-la immédiatement.
2. Créez une liste temporaire appelée `sortedList`. Insérez-y une copie de la première valeur avec `addFirst`.
3. Placez une référence de parcours sur le deuxième nœud de la liste de départ.
4. Pour chaque nœud courant, partez de la tête de `sortedList` et cherchez où insérer sa valeur. Avancez dans la liste triée tant qu’un nœud suivant existe et que sa valeur est **strictement inférieure** à la valeur courante.
5. Si la valeur du nœud sur lequel le parcours s’est arrêté est supérieure à la valeur courante, insérez la nouvelle valeur en tête de `sortedList`. Sinon, créez un nœud après le nœud repéré, en le raccordant à son ancien suivant.
6. Mettez à jour la taille de la liste temporaire après chaque insertion. Avancez ensuite vers le nœud suivant de la liste de départ.
7. Quand toutes les valeurs ont été traitées, faites adopter par `ll` la tête et la taille de `sortedList`, puis retournez `ll`.

`addFirst` augmente déjà la taille de la liste sur laquelle elle est appelée. Une insertion faite directement avec `new Node(...)` et un changement de lien doit aussi être comptabilisée dans `sortedList.size`.

## 4. Code de départ

Placez le code suivant dans `tri-liste.js`, puis complétez la fonction. Les classes fournies reprennent la représentation des cours. `toArray` permet d’afficher les valeurs dans l’ordre de la chaîne.

```javascript
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(value) {
    this.head = new Node(value, this.head);
    this.size += 1;
  }

  addLast(value) {
    const nouveau = new Node(value);

    if (this.head === null) {
      this.head = nouveau;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = nouveau;
    }

    this.size += 1;
  }

  toArray() {
    const valeurs = [];
    let current = this.head;

    while (current !== null) {
      valeurs.push(current.value);
      current = current.next;
    }

    return valeurs;
  }
}

function sortLinkedList(ll) {
  // Écrivez ici l’implémentation de l’algorithme décrit.
}
```

Pour exécuter votre fichier dans le terminal, utilisez la commande suivante.

```bash
node tri-liste.js
```

## 5. Vérifications à présenter

Ajoutez à votre programme des appels qui construisent chaque liste, affichent ses valeurs avant le tri, appellent votre fonction, puis affichent les valeurs après le tri et la taille finale. Vérifiez aussi que le résultat retourné désigne l’instance donnée à la fonction.

| Cas | Valeurs au départ | Valeurs après le tri | Taille finale |
| --- | --- | --- | ---: |
| Liste vide | `[]` | `[]` | 0 |
| Un seul nœud | `[7]` | `[7]` | 1 |
| Déjà croissante | `[1, 2, 3, 4]` | `[1, 2, 3, 4]` | 4 |
| Décroissante | `[4, 3, 2, 1]` | `[1, 2, 3, 4]` | 4 |
| Doublons et désordre | `[4, 2, 4, 1, 3]` | `[1, 2, 3, 4, 4]` | 5 |
| Nombres négatifs et zéro | `[0, -3, 2, -1]` | `[-3, -1, 0, 2]` | 4 |

## 6. Explications à remettre

Dans `explications.md`, présentez les éléments suivants.

1. Une courte explication du rôle de `ll`, de la liste temporaire et de la référence qui repère le point d’insertion.
2. Une trace de `[4, 2, 4, 1, 3]`. Après la première copie et chaque insertion, indiquez la valeur traitée, la séquence des valeurs triées et la taille de la liste temporaire.
3. Une explication du raccordement lors d’une insertion au milieu. Précisez comment vous conservez l’accès au nœud qui doit suivre le nouveau nœud.
4. Le coût temporel de cette fonction sur une liste déjà croissante et sur une liste strictement décroissante, ainsi que sa mémoire supplémentaire. Analysez l’appel de tri, en distinguant la construction des données de test et leur affichage.

## 7. Remise sur Teams

Déposez les deux fichiers `tri-liste.js` et `explications.md` dans le devoir correspondant sur Teams, avant la date limite affichée dans le devoir. Le programme doit pouvoir être exécuté avec la commande donnée et présenter les six cas du tableau.

La vérification du travail porte sur le respect de l’algorithme, l’ordre final, la conservation des occurrences, la cohérence de `head` et de `