# Travail Jeremy — Trier une liste chaînée par insertion

## 1. Rôle des variables

- `ll` : représente la liste chaînée originale reçue en paramètre.
- `sortedList` : représente la liste temporaire dans laquelle
  les valeurs sont insérées en ordre croissant.
- `current` : représente le nœud actuellement parcouru
  dans la liste originale.
- `position` : permet de repérer la position d'insertion
  dans la liste temporaire.
- `nouveau` : représente le nouveau nœud créé lors
  d'une insertion.

Lorsque le tri est terminé, la liste originale adopte
la tête et la taille de la liste temporaire.
La fonction retourne ensuite la même instance `ll`.

## 2. Trace de l'algorithme

Liste de départ : [4, 2, 4, 1, 3]

| Étape | Valeur traitée | Liste temporaire | Taille |
|-------|----------------|------------------|--------|
| 1 | 4 | [4] | 1 |
| 2 | 2 | [2, 4] | 2 |
| 3 | 4 | [2, 4, 4] | 3 |
| 4 | 1 | [1, 2, 4, 4] | 4 |
| 5 | 3 | [1, 2, 3, 4, 4] | 5 |

Résultat final : [1, 2, 3, 4, 4]

La liste finale contient toutes les valeurs de départ,
y compris les doublons, dans l'ordre croissant.

## 3. Raccordement des noeuds

Lors d'une insertion au milieu de la liste, il faut
conserver le lien vers le nœud suivant afin de ne pas
perdre la suite de la chaîne.

Par exemple, pour insérer la valeur 3 entre 2 et 4 :

Avant :
1 -> 2 -> 4 -> 4 -> null

Le code utilisé est :

    const nouveau = new Node(current.value, position.next);
    position.next = nouveau;

La première instruction crée un nouveau nœud et le
raccorde à l'ancien nœud suivant.

La deuxième instruction raccorde le nœud précédent
au nouveau nœud.

Après :
1 -> 2 -> 3 -> 4 -> 4 -> null

La taille de la liste temporaire est ensuite augmentée
de 1. Lors d'une insertion en tête, la méthode
addFirst() effectue déjà cette mise à jour.

## 4. Analyse de la complexité

### Liste déja croissante

Complexité temporelle : O(n²)

Chaque nouvelle valeur doit être insérée à la fin
de la liste temporaire. Il faut donc parcourir
les nœuds déjà insérés pour trouver cette position.

### Liste strictement décroissante

Complexité temporelle : O(n)

Chaque nouvelle valeur est plus petite que la tête
de la liste temporaire. L'insertion se fait donc
directement au début, en temps constant O(1).

### Complexité spatiale

Complexité spatiale : O(n)

L'algorithme construit une nouvelle liste temporaire
contenant n nouveaux nœuds lorsque la liste originale
contient au moins deux nœuds.

### Construction des tests et affichage

La construction des listes de test avec addLast()
possède une complexité temporelle de O(n²), car
chaque ajout nécessite un parcours de la liste.

La méthode toArray() possède une complexité
temporelle de O(n) et utilise une mémoire
supplémentaire de O(n).

Ces opérations sont distinctes de l'appel à la
fonction sortLinkedList().

## Conclusion

Cet algorithme permet de trier une liste simplement
chaînée par insertion sans utiliser la méthode sort()
de JavaScript.

Il conserve les doublons, respecte la taille de la
liste et retourne l'instance originale.