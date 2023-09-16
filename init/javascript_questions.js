module.exports = [
  {
      question: 'Quelle est la sortie de console.log(2 + "2"); ?',
      answers: ["22", "4", '"4"', '"22"'],
      correct_answer: '"22"',
      explanation: " En JavaScript, lorsque vous ajoutez un nombre à une chaîne de caractères, le nombre est converti en chaîne et concaténé à la chaîne."
  },
  {
      question: "Comment déclarer une variable en JavaScript ?",
      answers: ["variable x;", "var x;", "lett x;", "conste x;"],
      correct_answer: "var x;",
      explanation: "La déclaration de variable en JavaScript se fait avec var, let ou const."
  },
  {
      question: "Quelle méthode permet de convertir une chaîne de caractères en nombre entier en JavaScript ?",
      answers: ["parseInt()", "parseFloat()", "toInt()", "toInteger()"],
      correct_answer: "parseInt()",
      explanation: " 'parseInt()' est utilisé pour convertir une chaîne de caractères en un nombre entier en JavaScript."
  },
  {
      question: "Comment ajouter un élément à la fin d'un tableau en JavaScript ?",
      answers: ["array.add()", "array.push()", "array.append()", "array.addToEnd()"],
      correct_answer: "array.push()",
      explanation: "La méthode 'push()' est utilisée pour ajouter un élément à la fin d'un tableau en JavaScript."
  },
  {
      question: "Quelle fonction est utilisée pour faire une pause dans l'exécution d'un script JavaScript ?",
      answers: ["sleep()", "pause()", "setTimeout()", "break()"],
      correct_answer: "setTimeout()",
      explanation: "'setTimeout()' est utilisé pour faire une pause dans l'exécution d'un script JavaScript en spécifiant une fonction à exécuter après un certain délai."
  },
  {
      question: "Quelle est la différence entre 'null' et 'undefined' en JavaScript ?",
      answers: [
          "Aucune différence, ils sont interchangeables.",
          "'null' est une valeur assignée, tandis que undefined signifie qu'aucune valeur n'a été assignée.",
          "'undefined' est une valeur assignée, tandis que null signifie qu'aucune valeur n'a été assignée.",
          "'null' est une valeur par défaut, tandis que undefined doit être explicitement défini."
      ],
      correct_answer: "'null' est une valeur assignée, tandis que undefined signifie qu'aucune valeur n'a été assignée.",
      explanation: "'null' est une valeur spéciale qui représente l'absence de valeur intentionnelle, tandis qu''undefined' signifie qu'une variable n'a pas encore été assignée."
  },
  {
      question: "Quelle méthode est utilisée pour supprimer le dernier élément d'un tableau en JavaScript ?",
      answers: ["array.delete()", "array.pop()", "array.remove()", "array.splice()"],
      correct_answer: "array.pop()",
      explanation: "La méthode pop() est utilisée pour supprimer le dernier élément d'un tableau en JavaScript et renvoie cet élément."
  },
  {
      question: "Quelle boucle est utilisée pour parcourir les propriétés d'un objet en JavaScript ?",
      answers: ["for", "while", "for...in", "forEach"],
      correct_answer: "for...in",
      explanation: "La boucle 'for...in' est utilisée pour parcourir les propriétés d'un objet en JavaScript."
  },
  {
      question: "Quelle méthode est utilisée pour fusionner deux tableaux en un seul en JavaScript ?",
      answers: ["array.join()", "array.concat()", "array.merge()", "array.combine()"],
      correct_answer: "array.concat()",
      explanation: "La méthode 'concat()' est utilisée pour fusionner deux tableaux en un seul en JavaScript."
  },
  {
      question: "Quelle fonction JavaScript est utilisée pour arrêter l'exécution d'une boucle ?",
      answers: ["stop()", "exit()", "break()", "halt()"],
      correct_answer: "break()",
      explanation: "La commande break est utilisée pour arrêter l'exécution d'une boucle en cours dans JavaScript."
  },
  {
      question: "Quelle méthode est utilisée pour extraire une sous-chaîne d'une chaîne en JavaScript ?",
      answers: ["extract()", "slice()", "substring()", "sub()"],
      correct_answer: "slice()",
      explanation: "La méthode slice() est utilisée pour extraire une sous-chaîne d'une chaîne en JavaScript en spécifiant les indices de début et de fin."
  },
  {
      question: "Quelle est la différence entre '==' et '===' en JavaScript ?",
      answers: [
          "Aucune différence, elles sont interchangeables.",
          "'==' compare la valeur, tandis que '===' compare la valeur et le type.",
          "'=='compare le type, tandis que '===' compare la valeur.",
          "'==' est utilisé pour les chaînes de caractères, tandis que '===' est utilisé pour les nombres."
      ],
      correct_answer: "'==' compare la valeur, tandis que '===' compare la valeur et le type.",
      explanation: "'==' effectue une comparaison en ne tenant compte que de la valeur, tandis que === effectue une comparaison en tenant compte de la valeur et du type."
  },
  {
      question: "Comment inclure un commentaire multiligne en JavaScript ?",
      answers: ["/* Ceci est un commentaire */", "// Ceci est un commentaire //", "'Ceci est un commentaire'", "<!-- Ceci est un commentaire -->"],
      correct_answer: "/* Ceci est un commentaire */",
      explanation: "Pour inclure un commentaire multiligne en JavaScript, vous utilisez '/*' pour ouvrir le commentaire et '*/' pour le fermer."
  },
  {
      question: "Quelle méthode est utilisée pour trier les éléments d'un tableau en place en JavaScript ?",
      answers: ["sort()", "order()", "arrange()", "organize()"],
      correct_answer: "sort()",
      explanation: "La méthode 'sort()' est utilisée pour trier les éléments d'un tableau en place en JavaScript."
  },
  {
      question: "Quelle méthode est utilisée pour obtenir la longueur d'une chaîne de caractères en JavaScript ?",
      answers: ["length()", "getSize()", "count()", "length"],
      correct_answer: "length",
      explanation: "Pour obtenir la longueur d'une chaîne de caractères en JavaScript, vous utilisez la propriété 'length'."
  },
  {
      question: "Quelle boucle est utilisée pour exécuter un bloc de code tant qu'une condition est vraie en JavaScript ?",
      answers: ["for", "while", "do...while", "loop"],
      correct_answer: "while",
      explanation: "La boucle 'while' est utilisée pour exécuter un bloc de code tant qu'une condition est vraie."
  },
  {
      question: "Quelle méthode est utilisée pour ajouter un élément au début d'un tableau en JavaScript ?",
      answers: ["array.addFirst()", "array.prepend()", "array.unshift()", "array.addAtBeginning()"],
      correct_answer: "array.unshift()",
      explanation: "La méthode 'unshift()' est utilisée pour ajouter un élément au début d'un tableau en JavaScript."
  },
  {
      question: "Quelle est la fonction principale de l'objet JSON en JavaScript ?",
      answers: [
          "Valider les numéros de téléphone",
          "Convertir des objets JavaScript en chaînes JSON et vice versa",
          "Générer des nombres aléatoires",
          "Manipuler des images"
      ],
      correct_answer: "Convertir des objets JavaScript en chaînes JSON et vice versa",
      explanation: "L'objet JSON est principalement utilisé pour convertir des objets JavaScript en chaînes JSON et vice versa pour faciliter le stockage et la transmission des données."
  },
  {
      question: "Quelle est la méthode utilisée pour supprimer un élément spécifique d'un tableau en JavaScript ?",
      answers: ["array.remove()", "array.delete()", "array.splice()", "array.extract()"],
      correct_answer: "array.remove()",
      explanation: "Il n'existe pas de méthode 'remove()' intégrée pour supprimer un élément spécifique d'un tableau en JavaScript. Vous pouvez utiliser la méthode splice() pour cela."
  },
  {
      question: "Quelle fonction JavaScript est utilisée pour afficher une boîte de dialogue d'alerte avec un message personnalisé ?",
      answers: ["popup()", "showMessage()", "alert()", ""],
      correct_answer: "alert()",
      explanation: "La fonction 'alert()' est utilisée pour afficher une boîte de dialogue d'alerte avec un message personnalisé en JavaScript."
  },
  {
      question: "Quelle méthode est utilisée pour supprimer le premier élément d'un tableau en JavaScript ?",
      answers: ["array.deleteFirst()", "array.shift()", "array.removeFirst()", "array.splice(0, 1)"],
      correct_answer: "array.shift()",
      explanation: "La méthode shift() est utilisée pour supprimer le premier élément d'un tableau en JavaScript."
  },
  {
      question: "Comment déclarer une constante en JavaScript ?",
      answers: ["constant x = 10;", "let x = 10;", "const x = 10;", "var x = 10;"],
      correct_answer: " const x = 10;",
      explanation: "Pour déclarer une constante en JavaScript, vous utilisez le mot-clé 'const'"
  },
  {
      question: "Quelle méthode est utilisée pour trouver l'indice d'un élément dans un tableau en JavaScript ?",
      answers: ["findIndex()", "indexOf()", "search()", "locate()"],
      correct_answer: "indexOf()",
      explanation: "La méthode 'indexOf()' est utilisée pour trouver l'indice d'un élément dans un tableau en JavaScript."
  },
  {
      question: " Quelle méthode est utilisée pour diviser une chaîne de caractères en un tableau en JavaScript ?",
      answers: ["split()", "divide()", "slice()", "separate()"],
      correct_answer: "split()",
      explanation: "La méthode 'split()' est utilisée pour diviser une chaîne de caractères en un tableau en JavaScript en utilisant un délimiteur spécifié."
  },
  {
      question: "Quelle opération permet de concaténer deux chaînes de caractères en JavaScript ?",
      answers: ["merge()", "combine()", "join()", "+"],
      correct_answer: "+",
      explanation: "L'opérateur '+' est utilisé pour concaténer (joindre) deux chaînes de caractères en JavaScript."
  },
  {
      question: "Quelle méthode est utilisée pour arrondir un nombre décimal à l'entier le plus proche en JavaScript ?",
      answers: ["floor()", "round()", "ceil()", "trunc()"],
      correct_answer: "round()",
      explanation: "La méthode 'round()' est utilisée pour arrondir un nombre décimal à l'entier le plus proche en JavaScript."
  },
  {
      question: "Quelle boucle est utilisée pour parcourir les éléments d'un tableau en JavaScript en spécifiant une condition d'arrêt ?",
      answers: ["for", "while", "for...in", "forEach()"],
      correct_answer: "for",
      explanation: "La boucle for est utilisée pour parcourir les éléments d'un tableau en JavaScript en spécifiant une condition d'arrêt."
  },
  {
      question: "Quelle méthode est utilisée pour supprimer un élément spécifique d'un tableau sans laisser un trou vide en JavaScript ?",
      answers: ["array.deleteElement()", "array.removeElement()", "array.splice()", "array.filter()"],
      correct_answer: "array.filter()",
      explanation: "La méthode 'filter()' est couramment utilisée pour supprimer un élément spécifique d'un tableau sans laisser un trou vide."
  },
  {
      question: "Quelle méthode est utilisée pour convertir une chaîne de caractères en majuscules en JavaScript ?",
      answers: ["toUpperCase()", "upperCase()", "makeUpperCase()", "uppercase()"],
      correct_answer: "toUpperCase()",
      explanation: "La méthode 'toUpperCase()' est utilisée pour convertir une chaîne de caractères en majuscules en JavaScript."
  },
  {
      question: "Quelle est la fonction JavaScript utilisée pour analyser une chaîne JSON en un objet JavaScript ?",
      answers: ["parseJSON()", "JSON.parse()", "eval()", "stringify()"],
      correct_answer: "JSON.parse()",
      explanation: "La fonction 'JSON.parse() 'est utilisée pour analyser une chaîne JSON en un objet JavaScript en JavaScript."
  },
  {
      question: "Quelle méthode est utilisée pour ajouter un élément à un tableau en JavaScript en spécifiant l'indice où l'ajouter ?",
      answers: ["array.add()", "array.insert()", "array.splice()", "array.push()"],
      correct_answer: "array.splice()",
      explanation: "La méthode splice() est utilisée pour ajouter un élément à un tableau en spécifiant l'indice où l'ajouter."
  },
  {
      question: "Quelle méthode est utilisée pour convertir un nombre en une chaîne de caractères en JavaScript ?",
      answers: ["str()", "convertToString()", "String()", "toString()"],
      correct_answer: "toString()",
      explanation: "La méthode 'toString()' est utilisée pour convertir un nombre en une chaîne de caractères en JavaScript."
  },
  {
      question: "Comment déclarer une fonction anonyme en JavaScript ?",
      answers: ["function myFunction() {}", "anonymous function() {}", "function() {}", "const myFunction = function() {}"],
      correct_answer: "function() {}",
      explanation: "Vous pouvez déclarer une fonction anonyme en JavaScript en utilisant 'function() {}'."
  },
  {
      question: "Quelle méthode est utilisée pour générer un nombre aléatoire entre 0 et 1 en JavaScript ?",
      answers: [" random()", "Math.random()", "generateRandomNumber()", "randomNumber()"],
      correct_answer: "Math.random()",
      explanation: "La méthode 'Math.random()' est utilisée pour générer un nombre aléatoire entre 0 (inclus) et 1 (exclus) en JavaScript."
  },
  {
      question: "Quelle méthode est utilisée pour afficher un message d'erreur dans la console en JavaScript ?",
      answers: ["console.error()", "console.logError()", "console.messageError()", "console.showMessage()"],
      correct_answer: "console.error()",
      explanation: "La méthode console.error() est utilisée pour afficher un message d'erreur dans la console en JavaScript."
  },
  {
      question: "Quelle opération permet de vérifier si une variable est indéfinie en JavaScript ?",
      answers: ["isUndefined()", "typeof()", "undefined()", 'typeof variable === "undefined"'],
      correct_answer: 'typeof variable === "undefined"',
      explanation: 'Vous pouvez vérifier si une variable est indéfinie en utilisant typeof pour comparer avec la chaîne de caractères "undefined".'
  },
  {
      question: "Quelle est la méthode utilisée pour inverser l'ordre des éléments d'un tableau en JavaScript ?",
      answers: ["array.reverse()", "array.sort()", "array.flip()", "array.invert()"],
      correct_answer: "array.reverse()",
      explanation: "La méthode reverse() est utilisée pour inverser l'ordre des éléments d'un tableau en JavaScript."
  },
  {
      question: "Quelle est la fonction JavaScript utilisée pour rediriger l'utilisateur vers une nouvelle page web ?",
      answers: ["goTo()", "navigateTo()", "redirect()", "window.location()"],
      correct_answer: "window.location()",
      explanation: "Vous pouvez utiliser 'window.location' pour rediriger l'utilisateur vers une nouvelle page web en JavaScript."
  },
  {
      question: "Quelle est la méthode utilisée pour vérifier si un élément existe dans un tableau en JavaScript ?",
      answers: ["contains()", "includes()", "exists()", "has()"],
      correct_answer: "includes()",
      explanation: "La méthode 'includes()' est utilisée pour vérifier si un élément existe dans un tableau en JavaScript."
  },
  {
      question: "Quelle boucle est utilisée pour parcourir tous les éléments d'un objet en JavaScript ?",
      answers: ["for", "while", "for...in", "forEach"],
      correct_answer: "for...in",
      explanation: "La boucle 'for...in' est utilisée pour parcourir tous les éléments d'un objet en JavaScript."
  },
  {
      question: "Quelle méthode est utilisée pour supprimer le dernier élément d'un tableau en JavaScript tout en renvoyant cet élément ?",
      answers: ["array.remove()", "array.pop()", "array.pop()", "array.splice(-1, 1)"],
      correct_answer: "array.pop()",
      explanation: "La méthode 'pop()' est utilisée pour supprimer le dernier élément d'un tableau en JavaScript et renvoyer cet élément."
  },
  {
      question: "Quelle méthode est utilisée pour ajouter plusieurs éléments à la fin d'un tableau en JavaScript ?",
      answers: ["array.append()", "array.push()", "array.add()", "array.extend()"],
      correct_answer: "array.push()",
      explanation: "La méthode 'push()' est utilisée pour ajouter plusieurs éléments à la fin d'un tableau en JavaScript."
  },
  {
      question: "Quelle est la différence entre let et const pour la déclaration de variables en JavaScript ?",
      answers: [
          "Aucune différence, elles sont interchangeables.",
          "'let' permet de déclarer des variables immuables, tandis que const permet de déclarer des variables mutables.",
          "'let' permet de redéclarer des variables, tandis que const ne le permet pas.",
          "'const' permet de redéclarer des variables, tandis que let ne le permet pas."
      ],
      correct_answer: "'let' permet de redéclarer des variables, tandis que const ne le permet pas.",
      explanation: "Avec 'let', vous pouvez redéclarer des variables, tandis qu'avec const, vous ne pouvez pas redéclarer une variable après l'avoir définie."
  },
  {
      question: "Quelle méthode est utilisée pour convertir une chaîne de caractères en minuscules en JavaScript ?",
      answers: ["toLowerCase()", "lowerCase()", "makeLowerCase()", "lowercase()"],
      correct_answer: "toLowerCase()",
      explanation: "La méthode toLowerCase() est utilisée pour convertir une chaîne de caractères en minuscules en JavaScript."
  },
  {
      question: "Comment déclarer une variable globale en JavaScript ?",
      answers: ["var x;", "let x;", "const x;", "global x;"],
      correct_answer: "var x;",
      explanation: "Pour déclarer une variable globale en JavaScript, vous pouvez utiliser le mot-clé 'var' en dehors de toute fonction."
  },
  {
      question: "Quelle est la méthode utilisée pour générer une date actuelle en JavaScript ?",
      answers: ["getDate()", "new Date()", "current.date()", "getCurrentDate()"],
      correct_answer: "new Date()",
      explanation: "Vous pouvez utiliser 'new Date()' pour générer la date actuelle en JavaScript."
  },
  {
      question: "Quelle méthode est utilisée pour vérifier si un objet possède une propriété spécifique en JavaScript ?",
      answers: ["object.checkProperty()", "object.hasProperty()", "object.verifyProperty()", "object.hasOwnProperty()"],
      correct_answer: "object.hasOwnProperty()",
      explanation: "La méthode 'hasOwnProperty()' est utilisée pour vérifier si un objet possède une propriété spécifique en JavaScript."
  },
  {
      question: "Quelle est la fonction JavaScript utilisée pour parcourir tous les éléments d'un tableau et appliquer une fonction à chacun d'eux ?",
      answers: ["loop()", "map()", "forEach()", "apply()"],
      correct_answer: "forEach()",
      explanation: "La méthode 'forEach()' est utilisée pour parcourir tous les éléments d'un tableau et appliquer une fonction à chacun d'eux en JavaScript."
  },
  {
      question: "Quelle est la méthode utilisée pour obtenir la partie décimale d'un nombre en JavaScript ?",
      answers: ["Math.decimal()", "Math.fraction()", "Math.floor()", "Math.abs()"],
      correct_answer: "Math.floor()",
      explanation: "La méthode 'Math.floor()' est utilisée pour obtenir la partie décimale d'un nombre en JavaScript en arrondissant vers le bas."
  },
  {
      question: "Quelle méthode est utilisée pour ajouter des éléments au début et à la fin d'un tableau en JavaScript ?",
      answers: [
          "array.unshift() et array.push()",
          "array.addStart() et array.addEnd()",
          "array.appendStart() et array.appendEnd()",
          "array.addFirst() et array.addLast()"
      ],
      correct_answer: "array.unshift() et array.push()",
      explanation: "Pour ajouter des éléments au début et à la fin d'un tableau en JavaScript, vous utilisez 'unshift()' pour le début et push() pour la fin."
  },
]