# Langage chosi:

- JS(Jest)

# Comment exécuter les tests

- npm install
- npx jest

# Approche

- J'ai commencé par les cas simples (1→I, 2→II, 3→III) avec une boucle simple, puis les tests pour les règles soustractives (4→IV, 9→IX) ont cassé cette implémentation.
- Cela m’a conduit à refactorer vers une table de correspondance triée en ordre décroissant, parcourue par un algorithme simple.
- J’ai ensuite complété cette table avec tous les symboles romains (M à I) pour gérer jusqu’à 3999. Les cas du sujet (58, 1994, 3999) ont validé la solution.
