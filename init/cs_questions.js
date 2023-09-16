module.exports = [
  {
      question: "Quel est le mot-clé utilisé pour déclarer une variable constante en C# ?",
      answers: ["const", "final", "static", "readonly"],
      correct_answer: "const",
      explanation: "En C#, vous utilisez le mot-clé 'const' pour déclarer des variables constantes dont la valeur ne peut pas être modifiée après leur initialisation.",
  },
  {
      question: "Dans C#, comment déclarez-vous une variable locale ?",
      answers: ["var", "local", "int", "let"],
      correct_answer: "var",
      explanation: "En C#, vous pouvez déclarer une variable locale en utilisant le mot-clé 'var' suivi du nom de la variable.",
  },
  {
      question: "Quelle est la différence entre une classe abstraite et une interface en C# ?",
      answers: [
          "Une interface peut contenir des méthodes implémentées, tandis qu'une classe abstraite ne le peut pas.",
          "Une classe abstraite peut être instanciée, tandis qu'une interface ne le peut pas.",
          "Une interface peut avoir des membres statiques, tandis qu'une classe abstraite ne le peut pas.",
          "Une classe abstraite ne peut pas avoir de membres, tandis qu'une interface le peut."
      ],
      correct_answer: "Une classe abstraite peut être instanciée, tandis qu'une interface ne le peut pas.",
      explanation: "Une classe abstraite peut avoir des membres et des méthodes abstraites, et elle peut être utilisée comme base pour d'autres classes. En revanche, une interface ne peut pas être instanciée et ne contient que des signatures de méthodes.",
  },
  {
      question: "Quel est le principal avantage de l'héritage dans C# ?",
      answers: ["Réutilisation de code", "Encapsulation de données", "Polymorphisme", "Traitement parallèle"],
      correct_answer: "Réutilisation de code",
      explanation: "L'un des principaux avantages de l'héritage en C# est la réutilisation de code, où vous pouvez créer de nouvelles classes basées sur des classes existantes pour hériter de leurs fonctionnalités.",
  },
  {
      question: "Comment déclarez-vous une méthode statique en C# ?",
      answers: ["static void MyMethod()", "void static MyMethod()", "static MyMethod() void", "void MyMethod() static"],
      correct_answer: "static void MyMethod()",
      explanation: "Une méthode statique en C# est déclarée en utilisant le mot-clé '''static' avant la déclaration de la méthode.",
  },
  {
      question: 'Dans C#, quelle est la différence entre "==" et ".Equals()" lors de la comparaison d`objets ?',
      answers: [
          ""==" compare les références d'objets, tandis que '.Equals()' compare le contenu des objets.",
          ""==" compare le contenu des objets, tandis que '.Equals()' compare les références d'objets.",
          ""==" ne peut pas être utilisé pour comparer des objets en C#.",
          "'.Equals()' ne peut pas être utilisé pour comparer des objets en C#"
      ],
      correct_answer: ""==" compare les références d'objets, tandis que '.Equals()' compare le contenu des objets.",
      explanation: "En C#, "==" compare les références d'objets, tandis que '.Equals()' compare le contenu des objets si cette méthode est correctement implémentée dans la classe de l'objet.",
  },
  {
      question: "Quel est le rôle du mot-clé 'using' dans C# ?",
      answers: ["Importer des bibliothèques externes", "Déclarer une variable locale", "Créer une boucle", "Définir une constante"],
      correct_answer: "Importer des bibliothèques externes",
      explanation: "Le mot-clé 'using' est utilisé pour importer des bibliothèques externes (espaces de noms) dans votre programme C#.",
  },
  {
      question: "Quel est le résultat de l'expression 5 / 2 en C# ?",
      answers: ["2.5", "2", "3", "Une erreur de compilation"],
      correct_answer: "2",
      explanation: "Lorsque vous divisez deux entiers en C#, le résultat sera un entier, et toute partie décimale sera tronquée.",
  },
  {
      question: "Comment définissez-vous une propriété en lecture seule (read-only property) en C# ?",
      answers: ["get;set;", "set;", "get;", "eadonly;"],
      correct_answer: "get;",
      explanation: "Une propriété en lecture seule en C# est définie en ayant uniquement un getter, sans setter.",
  },
  {
      question: "Quelle interface doit être implémentée pour prendre en charge la sérialisation XML en C# ?",
      answers: ["ISerializable", "IXmlSerializable", "ISerializeXml", "IXmlSerialize"],
      correct_answer: "IXmlSerializable",
      explanation: "Pour prendre en charge la sérialisation XML en C#, vous devez implémenter l'interface 'IXmlSerializable'.",
  },
  {
      question: "Quel est le rôle du mot-clé 'virtual' dans la définition d'une méthode dans une classe de base en C# ?",
      answers: [
          "Indique que la méthode ne peut pas être substituée",
          "Indique que la méthode doit être marquée comme 'sealed'",
          "Indique que la méthode peut être substituée dans les classes dérivées",
          "Indique que la méthode est statique"
      ],
      correct_answer: "Indique que la méthode peut être substituée dans les classes dérivées",
      explanation: "Le mot-clé 'virtual' permet à une méthode d'être substituée (redéfinie) dans les classes dérivées.",
  },
  {
      question: "Quelle collection en C# stocke des éléments sous forme de paires clé-valeur ?",
      answers: ["List", "Array", "Dictionary", "Queue"],
      correct_answer: "Dictionary",
      explanation: 'Un "Dictionary" en C# est une collection qui stocke des éléments sous forme de paires clé-valeur.',
  },
  {
      question: "Comment définissez-vous une classe comme scellée (sealed) en C# ?",
      answers: [
          'En utilisant le mot-clé "lock"',
          'En utilisant le mot-clé "sealed"',
          'En utilisant le mot-clé "static"',
          'En utilisant le mot-clé "sealed" devant la déclaration de la classe'
      ],
      correct_answer: 'En utilisant le mot-clé "sealed" devant la déclaration de la classe',
      explanation: 'Vous pouvez définir une classe comme scellée (sealed) en utilisant le mot-clé "sealed" devant la déclaration de la classe.',
  },
  {
      question: "Quel est le but du garbage collector (collecteur de déchets) en C# ?",
      answers: [
          "Gérer la mémoire en libérant automatiquement les objets inutilisés",
          "Compiler le code source en code machine",
          "Gérer les exceptions dans le code",
          "Générer des rapports de performance"
      ],
      correct_answer: "Gérer la mémoire en libérant automatiquement les objets inutilisés",
      explanation: "Le garbage collector en C# gère la mémoire en libérant automatiquement les objets qui ne sont plus utilisés, ce qui évite les fuites de mémoire.",
  },
  {
      question: "Quel est le rôle du mot-clé 'async' dans la déclaration d'une méthode en C# ?",
      answers: [
          "Indique que la méthode est asynchrone et peut être appelée de manière asynchrone",
          "Indique que la méthode est statique",
          "Indique que la méthode est une méthode d'extension",
          "Indique que la méthode est une méthode d'interface"
      ],
      correct_answer: "Indique que la méthode est asynchrone et peut être appelée de manière asynchrone",
      explanation: "Le mot-clé 'async' est utilisé pour déclarer une méthode comme asynchrone, ce qui permet son exécution asynchrone.",
  },
  {
      question: "Quel est le rôle de l'instruction 'throw' en C# ?",
      answers: [
          "Déclarer une variable",
          "Lancer une exception",
          "Définir une condition",
          "Effectuer une opération mathématique"
      ],
      correct_answer: "Lancer une exception",
      explanation: "L'instruction 'throw' est utilisée pour lancer explicitement une exception en C#.",
  },
  {
      question: "Comment définissez-vous une valeur par défaut pour un paramètre de méthode en C# ?",
      answers: [
          "En utilisant le mot-clé 'default'",
          'En utilisant le mot-clé "null"',
          'En utilisant une valeur par défaut dans la signature de la méthode',
          'En utilisant le mot-clé "optional"'
      ],
      correct_answer: "En utilisant une valeur par défaut dans la signature de la méthode",
      explanation: "Vous pouvez définir une valeur par défaut pour un paramètre de méthode en spécifiant une valeur dans la signature de la méthode.",
  },
  {
      question: 'Quel est le rôle du mot-clé "using" dans le contexte des instructions "using" en C# ?',
      answers: [
          "Importer des bibliothèques externes",
          "Définir des alias pour des types de données",
          "Créer un espace de noms personnalisé",
          "Libérer des ressources non managées"
      ],
      correct_answer: "Libérer des ressources non managées",
      explanation: "Lorsqu'il est utilisé avec les instructions 'using', le mot-clé 'using' permet de libérer automatiquement des ressources non managées lorsque l'objet qui implémente IDisposable sort de la portée.",
  },
  {
      question: "Quelle est la différence entre une classe abstraite et une interface en C# ?",
      answers: [
          "Une interface peut contenir des membres statiques, tandis qu'une classe abstraite ne le peut pas.",
          "Une classe abstraite peut être instanciée, tandis qu'une interface ne le peut pas.",
          "Une interface peut contenir des méthodes implémentées, tandis qu'une classe abstraite ne le peut pas.",
          "Une classe abstraite ne peut pas avoir de membres, tandis qu'une interface le peut."
      ],
      correct_answer: "Une interface peut contenir des méthodes implémentées, tandis qu'une classe abstraite ne le peut pas.",
      explanation: "Les interfaces peuvent contenir des signatures de méthodes, y compris des méthodes par défaut implémentées, tandis que les classes abstraites peuvent contenir des membres abstraits (non implémentés).",
  },
  {
      question: "Comment peut-on définir une énumération (enum) en C# ?",
      answers: [
          'En utilisant le mot-clé "enum" suivi de la liste des valeurs',
          'En utilisant le mot-clé "class" suivi de la liste des valeurs',
          'En utilisant le mot-clé "enum" suivi d`un nombre entier',
          'En utilisant le mot-clé "struct" suivi de la liste des valeurs'
      ],
      correct_answer: 'En utilisant le mot-clé "enum" suivi de la liste des valeurs',
      explanation: 'En C#, une énumération est définie en utilisant le mot-clé "enum" suivi de la liste des valeurs possibles pour cette énumération.',
  },
  {
      question: "Quelle est la différence entre une classe et une structure en C# ?",
      answers: [
          "Une structure est une classe abstraite.",
          "Une structure ne peut pas contenir de méthodes.",
          "Une structure est un type de valeur, tandis qu'une classe est un type de référence.",
          "Une classe ne peut pas avoir de constructeurs."
      ],
      correct_answer: "Une structure est un type de valeur, tandis qu'une classe est un type de référence.",
      explanation: "En C#, les structures sont des types de valeur, tandis que les classes sont des types de référence.",
  },
  {
      question: "Comment définissez-vous une variable nullable en C# ?",
      answers: ["int nullableVar = null;", "int? nullableVar = null;", "int nullableVar = default(int);", "int nullableVar = 0;"],
      correct_answer: "int? nullableVar = null;",
      explanation: "Pour déclarer une variable nullable, vous utilisez le type suivi du symbole '?', comme 'int?'.",
  },
  {
      question: "Quel est le rôle du mot-clé 'params' dans une méthode C# ?",
      answers: [
          "Il indique que la méthode est statique.",
          "Il permet de déclarer des paramètres optionnels.",
          "Il permet de passer un nombre variable d'arguments à une méthode.",
          "Il indique que la méthode est virtuelle."
      ],
      correct_answer: "Il permet de passer un nombre variable d'arguments à une méthode.",
      explanation: "Le mot-clé 'params' permet de passer un nombre variable d'arguments du même type à une méthode.",
  },
  {
      question: "Comment définissez-vous une propriété en lecture-écriture (read-write property) en C# ?",
      answers: [" get;set;", "set;", "get;", "readonly;"],
      correct_answer: " get;set;",
      explanation: "Une propriété en lecture-écriture en C# est définie avec à la fois un getter et un setter.",
  },
  {
      question: "Quel est le but du mot-clé 'base' en C# ?",
      answers: [
          "Il permet d'accéder aux membres de la classe actuelle.",
          "Il permet d'appeler un constructeur de la classe de base.",
          "Il permet de créer une instance de la classe de base.",
          "Il permet de définir une classe abstraite."
      ],
      correct_answer: "Il permet d'appeler un constructeur de la classe de base.",
      explanation: "Le mot-clé 'base' est utilisé pour appeler un constructeur de la classe de base à partir d'un constructeur de la classe dérivée.",
  },
  {
      question: "Quelle méthode est appelée automatiquement lorsque vous créez une nouvelle instance d'une classe en C# ?",
      answers: ["Finalize", "Dispose", "Constructor", "Destructor"],
      correct_answer: "Constructor",
      explanation: "Le constructeur est appelé automatiquement lors de la création d'une nouvelle instance d'une classe.",
  },
  {
      question: "Comment obtenez-vous la longueur d'une chaîne (string) en C# ?",
      answers: ["string.Length()", "string.Size", "string.Length", "string.Count"],
      correct_answer: "string.Length",
      explanation: "Pour obtenir la longueur d'une chaîne en C#, vous utilisez la propriété 'Length'.",
  },
  {
      question: "Quel est le rôle de l'instruction 'break' dans une boucle en C# ?",
      answers: [
          "Mettre fin à la méthode courante.",
          "Passer à l'itération suivante de la boucle.",
          "Mettre fin à la boucle et passer à l'instruction suivante après la boucle.",
          "Mettre fin au programme."
      ],
      correct_answer: "Mettre fin à la boucle et passer à l'instruction suivante après la boucle.",
      explanation: "L'instruction 'break' est utilisée pour mettre fin à une boucle et passer à l'instruction suivante après la boucle.",
  },
  {
      question: "Quelle exception est levée lorsque vous essayez d'accéder à un élément d'un tableau en utilisant un index en dehors des limites du tableau en C# ?",
      answers: [
          "ArgumentNullException",
          "IndexOutOfRangeException",
          "InvalidOperationException",
          "ArgumentOutOfRangeException"
      ],
      correct_answer: "IndexOutOfRangeException",
      explanation: "En C#, lorsque vous essayez d'accéder à un élément d'un tableau en utilisant un index en dehors des limites du tableau, une exception de type 'IndexOutOfRangeException' est levée.",
  },
  {
      question: "Quelle est la différence entre les mots-clés 'override' et 'new' lors de la redéfinition de méthodes en C# ?",
      answers: [
          '"override" est utilisé pour redéfinir une méthode virtuelle, tandis que "new" est utilisé pour masquer une méthode de la classe de base.',
          '"override" est utilisé pour redéfinir une méthode statique, tandis que "new" est utilisé pour redéfinir une méthode d`instance.',
          '"override" est utilisé pour redéfinir une méthode de la classe de base, tandis que "new" est utilisé pour créer une nouvelle méthode.',
          '"override" et "new" sont interchangeables et peuvent être utilisés de manière interchangeable.'
      ],
      correct_answer: '"override" est utilisé pour redéfinir une méthode virtuelle, tandis que "new" est utilisé pour masquer une méthode de la classe de base.',
      explanation: 'En C#, "override" est utilisé pour redéfinir une méthode virtuelle de la classe de base, tandis que "new" est utilisé pour masquer une méthode de la classe de base sans redéfinition.',
  },
  {
      question: "Comment déclarez-vous une variable locale immuable (read-only) en C# ?",
      answers: ["var x = 10;", "readonly int x = 10;", "const int x = 10;", " readonly var x = 10;"],
      correct_answer: "readonly int x = 10;",
      explanation: "Pour déclarer une variable locale immuable (read-only) en C#, utilisez le mot-clé 'readonly' avec un type de données approprié.",
  },
  {
      question: "Quel est le rôle de l'instruction 'using' dans le contexte des exceptions en C# ?",
      answers: ["Capturer une exception", "Lancer une exception", "Gérer une exception", "Libérer automatiquement les ressources en cas d'exception"],
      correct_answer: "Libérer automatiquement les ressources en cas d'exception",
      explanation: "L'instruction 'using' est souvent utilisée pour garantir que les ressources sont libérées automatiquement, même en cas d'exception.",
  },
  {
      question: "Comment définissez-vous une méthode en C# qui peut être utilisée à l'extérieur de la classe sans avoir besoin de créer une instance de cette classe ?",
      answers: ["En utilisant le mot-clé 'static'", 'En utilisant le mot-clé "public"', 'En utilisant le mot-clé "private"', 'En utilisant le mot-clé "extern"'],
      correct_answer: "En utilisant le mot-clé 'static'",
      explanation: "Les méthodes statiques peuvent être appelées sans avoir besoin de créer une instance de la classe.",
  },
  {
      question: "Quelle interface est utilisée pour implémenter la sérialisation binaire en C# ?",
      answers: ["ISerializable", "IFormatter", "IBinarySerializable", "IBinaryFormatter"],
      correct_answer: "IFormatter",
      explanation: "En C#, l'interface 'IFormatter' est utilisée pour implémenter la sérialisation binaire.",
  },
  {
      question: "Quelle est la valeur par défaut d'un paramètre optionnel de type entier (int) en C# ?",
      answers: ["0", "1", "null", "-1"],
      correct_answer: "0",
      explanation: "Les paramètres optionnels de type entier (int) ont une valeur par défaut de 0 si aucune autre valeur n'est spécifiée.",
  },
  {
      question: "Quel est le rôle du mot-clé 'base' dans le contexte de l'héritage en C# ?",
      answers: [
          "Il permet d'accéder aux membres de la classe actuelle.",
          "Il permet d'appeler un constructeur de la classe dérivée.",
          "Il permet de déclarer une variable de base.",
          "Il permet d'empêcher l'héritage d'une classe."
      ],
      correct_answer: "Il permet d'appeler un constructeur de la classe dérivée.",
      explanation: "Le mot-clé 'base' est utilisé pour appeler un constructeur de la classe de base à partir d'un constructeur de la classe dérivée.",
  },
  {
      question: "Quelle est la principale différence entre une méthode abstraite et une méthode virtuelle en C# ?",
      answers: [
          "Une méthode abstraite a une implémentation dans la classe de base, tandis qu'une méthode virtuelle n'a pas d'implémentation.",
          "Une méthode abstraite doit être marquée avec le mot-clé 'abstract', tandis qu'une méthode virtuelle doit être marquée avec le mot-clé 'virtual'.",
          "Une méthode abstraite ne peut pas être redéfinie dans les classes dérivées, tandis qu'une méthode virtuelle peut être redéfinie.",
          "Une méthode abstraite ne peut pas être appelée directement, tandis qu'une méthode virtuelle peut l'être."
      ],
      correct_answer: "Une méthode abstraite ne peut pas être redéfinie dans les classes dérivées, tandis qu'une méthode virtuelle peut être redéfinie.",
      explanation: "Les méthodes abstraites sont conçues pour être redéfinies dans les classes dérivées, tandis que les méthodes virtuelles ont une implémentation par défaut mais peuvent être redéfinies si nécessaire.",
  },
  {
      question: 'Quelle est la différence entre "StringBuilder" et "String" en C# ?',
      answers: [
          '"StringBuilder" est immuable, tandis que "String" est mutable.',
          '"StringBuilder" est un type de valeur, tandis que "String" est un type de référence.',
          '"StringBuilder" est plus lent pour la concaténation de chaînes que "String".',
          '"StringBuilder" est plus rapide pour la concaténation de chaînes que "String".',           
      ],
      correct_answer: '"StringBuilder" est plus rapide pour la concaténation de chaînes que "String".',
      explanation: '"StringBuilder" est plus efficace pour les opérations de modification de chaînes répétées, car il modifie la chaîne existante au lieu de créer une nouvelle chaîne à chaque modification.',
  },
  {
      question: "Comment définissez-vous une propriété calculée (computed property) en C# ?",
      answers: [
          'En utilisant le mot-clé "calculated" avant la déclaration de la propriété.',
          'En utilisant le mot-clé "get" suivi d`une expression de calcul.',
          "En utilisant le mot-clé 'property' suivi d'une expression de calcul.",
          'En utilisant le mot-clé "computed" avant le nom de la propriété.',
      ],
      correct_answer: 'En utilisant le mot-clé "get" suivi d`une expression de calcul.',
      explanation: "Une propriété calculée en C# est définie en utilisant le mot-clé 'get' suivi d'une expression de calcul qui renvoie la valeur de la propriété.",
  },
  {
      question: "Quel mot-clé est utilisé pour déclarer une classe de base à partir de laquelle une autre classe est dérivée en C# ?",
      answers: ["extends", "inherit", "base", "class"],
      correct_answer: "class",
      explanation: "En C#, le mot-clé 'class' est utilisé pour déclarer une classe.",
  },
  {
      question: "Comment définissez-vous une méthode qui accepte un nombre variable d'arguments en C# ?",
      answers: [
          'En utilisant le mot-clé "params" dans la signature de la méthode.',
          'En utilisant le mot-clé "varargs" dans la signature de la méthode.',
          'En utilisant le mot-clé "dynamic" dans la signature de la méthode.',
          'En utilisant le mot-clé "params" dans la définition de la classe.',
      ],
      correct_answer: 'En utilisant le mot-clé "params" dans la signature de la méthode.',
      explanation: "Le mot-clé 'params' permet à une méthode de prendre un nombre variable d'arguments du même type.",
  },
  {
      question: "Quel opérateur logique est utilisé pour vérifier si deux conditions sont toutes les deux vraies en C# ?",
      answers: ["||", "&&", "!", "&"],
      correct_answer: "&&",
      explanation: "L'opérateur "&&" est utilisé pour vérifier si deux conditions sont toutes les deux vraies.",
  },
  {
      question: "Quelle est la syntaxe correcte pour une boucle 'do-while' en C# ?",
      answers: ["while (condition) { /* instructions / }", "do while (condition) { / instructions / }", "for (condition) { / instructions / }", "repeat until (condition) { / instructions */ }"],
      correct_answer: "do while (condition) { / instructions / }",
      explanation: "La boucle 'do-while' en C# commence par 'do' suivi des instructions à exécuter, puis 'while' suivi de la condition.",
  },
  {
      question: "Quelle est la différence entre une méthode 'out' et une méthode 'ref' en C# ?",
      answers: [
          "Une méthode 'out' peut retourner plusieurs valeurs, tandis qu'une méthode 'ref' ne peut retourner qu'une seule valeur.",
          "Une méthode 'ref' est utilisée pour retourner une valeur, tandis qu'une méthode 'out' est utilisée pour modifier une valeur.",
          "Une méthode 'out' ne nécessite pas d'initialisation de la variable, tandis qu'une méthode 'ref' nécessite une initialisation.",
          "Une méthode 'ref' peut être utilisée avec des types de valeur, tandis qu'une méthode 'out' ne peut être utilisée qu'avec des types de référence."
      ],
      correct_answer: "Une méthode 'out' ne nécessite pas d'initialisation de la variable, tandis qu'une méthode 'ref' nécessite une initialisation.",
      explanation: "Lorsque vous utilisez une méthode 'out', vous n'avez pas besoin d'initialiser la variable avant de l'utiliser, tandis qu'une méthode 'ref' nécessite que la variable soit initialisée avant d'être passée à la méthode.",
  },
  {
      question: "Quelle est la méthode recommandée pour libérer les ressources non managées en C# ?",
      answers: [
          "Utiliser le constructeur de finalisation (~MyClass).",
          "Utiliser la méthode Dispose().",
          "Attendre la fin de l'exécution du programme pour libérer automatiquement les ressources.",
          "Ne pas s'en préoccuper, le garbage collector le fera automatiquement."
      ],
      correct_answer: "Utiliser la méthode Dispose().",
      explanation: "La méthode Dispose() est utilisée pour libérer explicitement les ressources non managées et est généralement utilisée avec des objets qui implémentent IDisposable.",
  },
  {
      question: "Quel est l'avantage principal de l'utilisation de l'opérateur "??", également appelé opérateur de coalescence nulle, en C# ?",
      answers: [
          "Il effectue une comparaison stricte entre deux valeurs.",
          "Il permet de combiner deux valeurs en une seule.",
          "Il gère les exceptions lors de la conversion de types.",
          "Il permet de fournir une valeur de secours si une valeur est null."
      ],
      correct_answer: "Il permet de fournir une valeur de secours si une valeur est null.",
      explanation: "L'opérateur de coalescence nulle ("??") est utilisé pour fournir une valeur de secours si une valeur est null.",
  },
  {
      question: "Quel mot-clé est utilisé pour définir une classe de base à partir de laquelle aucune autre classe ne peut être dérivée en C# ?",
      answers: ["final", "sealed", "abstract", "base"],
      correct_answer: "sealed",
      explanation: "Le mot-clé 'sealed' est utilisé pour déclarer une classe de base à partir de laquelle aucune autre classe ne peut être dérivée.",
  },
  {
      question: "Quelle est la syntaxe correcte pour déclarer un tableau de chaînes (strings) en C# ?",
      answers: [
          "string[] myArray = new string[5];",
          "string myArray[5];",
          "string myArray = new string[5];",
          "myArray[] string = new string[5];"
      ],
      correct_answer: "string[] myArray = new string[5];",
      explanation: "La syntaxe correcte pour déclarer un tableau de chaînes est 'string[] myArray = new string[5];'.",
  },
  {
      question: "Comment accédez-vous au premier élément d'un tableau en C# ?",
      answers: ["myArray[0]", "myArray.First()", "myArray.Get(0)", "myArray.ElementAt(0)"],
      correct_answer: "myArray[0]",
      explanation: "Pour accéder au premier élément d'un tableau en C#, vous utilisez l'indice 0, comme dans 'myArray[0]'.",
  },
  {
      question: "Quelle est la principale différence entre une liste (List) et un tableau (array) en C# ?",
      answers: [
          "Les tableaux ont une taille fixe, tandis que les listes peuvent changer de taille dynamiquement.",
          "Les tableaux peuvent contenir des éléments de types différents, tandis que les listes ne peuvent contenir que des éléments du même type.",
          "Les tableaux sont plus performants que les listes pour la recherche d'éléments, tandis que les listes sont plus performantes pour l'insertion et la suppression.",
          "Les tableaux sont des types de valeur, tandis que les listes sont des types de référence."
      ],
      correct_answer: "Les tableaux ont une taille fixe, tandis que les listes peuvent changer de taille dynamiquement.",
      explanation: "Les tableaux ont une taille fixe lors de leur création, tandis que les listes peuvent être redimensionnées dynamiquement pour ajouter ou supprimer des éléments.",
  },
]