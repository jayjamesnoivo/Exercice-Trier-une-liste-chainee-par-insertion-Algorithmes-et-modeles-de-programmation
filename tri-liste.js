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

    // Retourner directement une liste vide ou à un seul noeud
    if (ll.size < 2) {
        return ll;
    }

    // Créer une liste temporaire triée
    const sortedList = new LinkedList();

    // Copier la première valeur
    sortedList.addFirst(ll.head.value);

    // Commencer au deuxième noeud
    let current = ll.head.next;

    while (current !== null) {

        // Rechercher la position d'insertion
        let position = sortedList.head;

        while (position.next !== null &&
               position.next.value < current.value) {
            position = position.next;
        }

        // Insérer au début de la liste
        if (position.value > current.value) {
            sortedList.addFirst(current.value);
        } else {

            // Insérer après le noeud repéré
            const nouveau = new Node(current.value, position.next);
            position.next = nouveau;

            sortedList.size += 1;
        }

        // Passer au prochain noeud
        current = current.next;
    }

    // Remplacer la tête et la taille de la liste originale
    ll.head = sortedList.head;
    ll.size = sortedList.size;

    return ll;
}
// Fonction permettant de tester le tri
function testerTri(nom, valeurs, attendu) {
    const liste = new LinkedList();

    // Construire la liste chaînée
    for (const valeur of valeurs) {
        liste.addLast(valeur);
    }

    console.log("\n--- " + nom + " ---");
    console.log("Avant le tri :", liste.toArray());

    // Trier la liste
    const resultat = sortLinkedList(liste);

    // Afficher les résultats
    console.log("Après le tri :", liste.toArray());
    console.log("Taille finale :", liste.size);
    console.log("Même instance :", resultat === liste);

    // Vérifier les résultats
    const testReussi =
        JSON.stringify(liste.toArray()) === JSON.stringify(attendu) &&
        liste.size === attendu.length &&
        resultat === liste;

    console.log("Test réussi :", testReussi);
}

// Les six tests obligatoires

testerTri("Liste vide", [], []);

testerTri("Un seul noeud", [7], [7]);

testerTri("Déjà croissante", [1, 2, 3, 4], [1, 2, 3, 4]);

testerTri("Décroissante", [4, 3, 2, 1], [1, 2, 3, 4]);

testerTri("Doublons et désordre", [4, 2, 4, 1, 3], [1, 2, 3, 4, 4]);

testerTri("Nombres négatifs et zéro", [0, -3, 2, -1], [-3, -1, 0, 2]);