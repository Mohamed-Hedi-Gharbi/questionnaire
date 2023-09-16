module.exports = [
  {
      question: "Les fichiers PHP ont l’extension …. ?",
      answers: [".html", ".xml", ".php", ".ph"],
      correct_answer: ".php",
      explanation: ""
  },
  {
      question: "Un script PHP devrait commencer par _ ?",
      answers: ["<php", "<?php", "<?", "<?php"],
      correct_answer: "<?php",
      explanation: ""
  },
  {
      question: "Quelle version de PHP a introduit Try/catch Exception?",
      answers: ["PHP 4", "PHP 5", "PHP 5.3", "PHP 7.2"],
      correct_answer: "PHP 5",
      explanation: ""
  },
  {
      question: "Nous pouvons utiliser _ pour commenter une seule ligne?",
      answers: ["/?", "//", "#", "/**/"],
      correct_answer: "//",
      explanation: ""
  },
  {
      question: "Laquelle parmi les instructions php suivantes va stocker 55 dans la variable nbr?",
      answers: ["int $nbr= 55;", "int nbr = 55;", "$nbr= 55;", "55= $nbr;"],
      correct_answer: "$nbr= 55;",
      explanation: ""
  },
  {
      question: "Question : Qu'est-ce que PHP signifie ?",
      answers: ["Personal Home Page", "PHP Hypertext Preprocessor", "Pretty Hyperlink Processing", "Personal Hypertext Processor"],
      correct_answer: "PHP Hypertext Preprocessor",
      explanation: "PHP signifie 'PHP Hypertext Preprocessor'. C'est un acronyme récursif, ce qui signifie que la première lettre de l'acronyme est contenue dans l'acronyme lui-même."
  },
  {
      question: "Question : Quel opérateur est utilisé pour concaténer deux chaînes de caractères en PHP ?",
      answers: ["+", ".", "&", ","],
      correct_answer: ".",
      explanation: "En PHP, l'opérateur de concaténation de chaînes est le point (.) qui permet de joindre deux chaînes de caractères."
  },
  {
      question: "Question : Quelle fonction est utilisée pour afficher du texte dans PHP ?",
      answers: ["echo", "print", "display", "output"],
      correct_answer: "echo",
      explanation: "La fonction 'echo' est couramment utilisée pour afficher du texte dans PHP. Elle peut également afficher des variables et d'autres données."
  },
  {
      question: "Question : Comment déclarez-vous une variable en PHP ?",
      answers: [" var $nom_variable;", "variable $nom_variable;", "$nom_variable;", "variable nom_variable;"],
      correct_answer: "$nom_variable;",
      explanation: "En PHP, une variable est déclarée en utilisant le signe dollar ($) suivi du nom de la variable."
  },
  {
      question: "Question : Quelle fonction est utilisée pour inclure le contenu d'un fichier dans un script PHP ?",
      answers: ["include()", "require()", "import()", " load()"],
      correct_answer: "include()",
      explanation: "La fonction 'include()' est utilisée pour inclure le contenu d'un fichier dans un script PHP. Elle est généralement utilisée pour incorporer des bibliothèques ou d'autres fichiers de code."
  },
  {
      question: "Quelle est la fonction PHP utilisée pour obtenir la longueur (nombre de caractères) d'une chaîne de caractères ?",
      answers: ["strcount()", "strlen()", "strlength()", "charcount()"],
      correct_answer: "strlen()",
      explanation: "La fonction 'strlen()' en PHP renvoie la longueur d'une chaîne de caractères en termes du nombre de caractères qu'elle contient."
  },
  {
      question: "Quel opérateur est utilisé pour vérifier si deux valeurs sont égales en termes de valeur et de type en PHP ?",
      answers: ["==", "===", "=", "!="],
      correct_answer: "===",
      explanation: "L'opérateur " === " en PHP vérifie l'égalité des valeurs ainsi que le type de données. Cela signifie que les deux opérandes doivent avoir la même valeur et le même type pour que l'expression soit vraie."
  },
  {
      question: "Quelle fonction est utilisée pour diviser une chaîne de caractères en un tableau en utilisant un délimiteur spécifié ?",
      answers: ["split()", "explode()", "separate()", "slice()"],
      correct_answer: "explode()",
      explanation: "La fonction 'explode()' en PHP permet de diviser une chaîne de caractères en un tableau en utilisant un délimiteur spécifié, par exemple, une virgule ou un espace."
  },
  {
      question: "Question : Quelle est la méthode pour déclarer une constante en PHP ?",
      answers: ["define($constante, valeur);", "const $constante = valeur;", "constant($constante, valeur);", "var constante = valeur;"],
      correct_answer: "define($constante, valeur);",
      explanation: "Les constantes en PHP sont déclarées à l'aide de la fonction 'define()' suivie du nom de la constante et de sa valeur."
  },
  {
      question: "Comment pouvez-vous rediriger un utilisateur vers une autre page en PHP ?",
      answers: ["Utiliser la fonction 'goto()'", "Utiliser la fonction 'redirect()'", "Utiliser la fonction 'header()'", "Utiliser la fonction 'forward()'"],
      correct_answer: "Utiliser la fonction 'header()'",
      explanation: "En PHP, vous pouvez rediriger un utilisateur vers une autre page en utilisant la fonction 'header()' avec l'en-tête 'Location'."
  },
  {
      question: "Quelle balise HTML est utilisée pour incorporer du code PHP directement dans une page web ?",
      answers: ["<php>", "<script>", "<?php ?>", "<code>"],
      correct_answer: "<?php ?>",
      explanation: "Pour incorporer du code PHP directement dans une page web, vous utilisez la balise '<?php ?>'."
  },
  {
      question: "Quelle fonction est utilisée pour vérifier si un fichier existe en PHP ?",
      answers: ["file_exists()", "is_file()", "check_file()", " file_check()"],
      correct_answer: "file_exists()",
      explanation: "La fonction 'file_exists()' en PHP permet de vérifier si un fichier spécifié existe dans le système de fichiers."
  },
  {
      question: "Quelle directive de configuration PHP permet de limiter le temps d'exécution d'un script ?",
      answers: ["max_execution_time", "timeout_limit", "script_time_limit", "execution_limit"],
      correct_answer: "max_execution_time",
      explanation: "La directive 'max_execution_time' dans la configuration PHP permet de définir la durée maximale d'exécution d'un script."
  },
  {
      question: "Quelle superglobale en PHP est utilisée pour récupérer les données envoyées depuis un formulaire HTML ?",
      answers: ["$_POST", "$_GET", "$_REQUEST", "$_INPUT"],
      correct_answer: "$_POST",
      explanation: "La superglobale $_POST est utilisée pour récupérer les données envoyées depuis un formulaire HTML en utilisant la méthode POST."
  },
  {
      question: "Quelle fonction est utilisée pour échapper les caractères spéciaux dans une chaîne de caractères en PHP pour des fins de sécurité ?",
      answers: ["escape()", " secure_string()", "htmlspecialchars()", "clean_string()"],
      correct_answer: "htmlspecialchars()",
      explanation: "La fonction 'htmlspecialchars()' en PHP est utilisée pour échapper les caractères spéciaux dans une chaîne de caractères, ce qui évite les attaques de script intersite (XSS)."
  },
  {
      question: "Quelle boucle est utilisée pour parcourir les éléments d'un tableau associatif en PHP ?",
      answers: ["for", "while", "do...while", "foreach"],
      correct_answer: "foreach",
      explanation: "La boucle 'foreach' en PHP est utilisée pour parcourir les éléments d'un tableau associatif sans avoir besoin de connaître les clés à l'avance."
  },
  {
      question: "Quelle fonction PHP est utilisée pour trier un tableau en ordre croissant ?",
      answers: ["sort()", "rsort()", "asort()", "ksort()"],
      correct_answer: "sort()",
      explanation: "La fonction 'sort()' en PHP est utilisée pour trier un tableau en ordre croissant en fonction des valeurs."
  },
  {
      question: "Quelle est la variable superglobale qui contient des informations sur les fichiers téléchargés via un formulaire HTML ?",
      answers: ["$_FILES", "$_UPLOAD", "$_FORMFILES", "$_ATTACHMENTS"],
      correct_answer: "$_FILES",
      explanation: "La variable superglobale $_FILES en PHP contient des informations sur les fichiers téléchargés via un formulaire HTML."
  },
  {
      question: "Quelle fonction en PHP est utilisée pour ouvrir un fichier en mode lecture (lecture seule) ?",
      answers: ["open_file()", "fopen()", "read_file()", "file_open()"],
      correct_answer: "fopen()",
      explanation: "La fonction 'fopen()'' en PHP est utilisée pour ouvrir un fichier en mode lecture, ce qui permet de lire le contenu du fichier."
  },
  {
      question: "Quelle est la valeur par défaut du paramètre 'session.use_cookies' dans PHP pour la gestion des sessions ?",
      answers: ["On", "Off", "0", "1"],
      correct_answer: "On",
      explanation: "Par défaut, le paramètre 'session.use_cookies' est activé (On) pour permettre l'utilisation des cookies dans la gestion des sessions PHP."
  },
  {
      question: "Quelle fonction en PHP est utilisée pour définir un cookie sur le navigateur de l'utilisateur ?",
      answers: ["setcookie()", "createcookie()", "cookie_set()", "set_cookie()"],
      correct_answer: "setcookie()",
      explanation: "La fonction 'setcookie()'' en PHP est utilisée pour définir un cookie sur le navigateur de l'utilisateur."
  },
  {
      question: "Comment obtenez-vous le nombre d'éléments (clés) dans un tableau associatif en PHP ?",
      answers: ["count($tableau)", "length($tableau)", "size($tableau)", "elements($tableau)"],
      correct_answer: "count($tableau)",
      explanation: " La fonction 'count()' en PHP est utilisée pour obtenir le nombre d'éléments (clés) dans un tableau."
  },
  {
      question: "Quel opérateur est utilisé pour effectuer une opération d'incrémentation dans PHP ?",
      answers: ["++", "--", "+=", "*="],
      correct_answer: "++",
      explanation: "L'opérateur '++' est utilisé pour effectuer une opération d'incrémentation, ce qui ajoute 1 à la valeur d'une variable."
  },
  {
      question: "Quelle est la fonction PHP utilisée pour supprimer un fichier du système de fichiers ?",
      answers: ["delete_file()", "remove_file()", "unlink()", "erase_file()"],
      correct_answer: "unlink()",
      explanation: "La fonction 'unlink()'' en PHP est utilisée pour supprimer un fichier du système de fichiers."
  },
  {
      question: "Quelle superglobale en PHP est utilisée pour accéder aux informations sur le serveur et l'environnement d'exécution ?",
      answers: ["$_SYSTEM", "$_ENV", "$_SERVER", "$_GLOBALS"],
      correct_answer: "$_SERVER",
      explanation: "La superglobale $_SERVER en PHP contient des informations sur le serveur et l'environnement d'exécution."
  },
  {
      question: "Quelle fonction est utilisée pour vider complètement le contenu d'un tableau en PHP ?",
      answers: ["empty()", " clear()", "unset()", "reset()"],
      correct_answer: "unset()",
      explanation: " La fonction 'unset()' en PHP est utilisée pour vider complètement le contenu d'un tableau en supprimant toutes ses clés et valeurs."
  },
  {
      question: "Question : Quel opérateur est utilisé pour effectuer une opération de décrémentation dans PHP ?",
      answers: ["++", "--", "+=", "*="],
      correct_answer: "--",
      explanation: " L'opérateur '--' est utilisé pour effectuer une opération de décrémentation, ce qui soustrait 1 à la valeur d'une variable."
  },
  {
      question: "Quelle est la fonction PHP utilisée pour obtenir le nom du fichier en cours d'exécution ?",
      answers: ["current_file()", "script_name()", "ile_name()", "FILE"],
      correct_answer: "FILE",
      explanation: " La constante magique 'FILE' en PHP contient le nom du fichier en cours d'exécution."
  },
  {
      question: "Quelle fonction est utilisée pour inverser l'ordre des éléments d'un tableau en PHP ?",
      answers: ["reverse()", "array_reverse()", "flip()", " invert()"],
      correct_answer: "array_reverse()",
      explanation: "La fonction 'array_reverse()' en PHP est utilisée pour inverser l'ordre des éléments d'un tableau."
  },
  {
      question: "Quelle directive de configuration PHP permet de spécifier le chemin du répertoire de téléchargement des fichiers téléchargés via un formulaire HTML ?",
      answers: ["upload_dir", "upload_path", "upload_directory", "upload_tmp_dir"],
      correct_answer: "upload_tmp_dir",
      explanation: "La directive 'upload_tmp_dir' dans la configuration PHP permet de spécifier le chemin du répertoire de téléchargement temporaire pour les fichiers téléchargés via un formulaire HTML."
  },
  {
      question: "Quelle fonction en PHP est utilisée pour générer un nombre aléatoire ?",
      answers: ["random()", "rand()", "random_number()", "generate_random()"],
      correct_answer: "rand()",
      explanation: " La fonction 'rand()' en PHP est utilisée pour générer un nombre aléatoire."
  },
  {
      question: "Quelle superglobale en PHP est utilisée pour accéder aux données de session ?",
      answers: ["$_SESSION", "$_COOKIE", "$_REQUEST", "$_GLOBALS"],
      correct_answer: "$_SESSION",
      explanation: "La superglobale $_SESSION en PHP est utilisée pour accéder aux données de session stockées sur le serveur."
  },
  {
      question: "Quelle fonction PHP est utilisée pour arrêter l'exécution d'un script immédiatement ?",
      answers: ["stop()", "exit()", "break()", " terminate()"],
      correct_answer: "exit()",
      explanation: "La fonction'exit()' en PHP est utilisée pour arrêter l'exécution d'un script immédiatement."
  },
  {
      question: "Quelle directive de configuration PHP est utilisée pour définir la limite de mémoire maximale allouée à un script ?",
      answers: ["memory_limit", "max_memory", "script_memory", "allocate_memory"],
      correct_answer: "memory_limit",
      explanation: "La directive 'memory_limit' dans la configuration PHP permet de définir la limite de mémoire maximale allouée à un script PHP."
  },
  {
      question: "Question : Quelle est la méthode HTTP généralement utilisée pour soumettre des données de formulaire en PHP ?",
      answers: ["GET", "POST", "PUT", "REQUEST"],
      correct_answer: "POST",
      explanation: "En PHP, la méthode HTTP 'POST' est généralement utilisée pour soumettre des données de formulaire au serveur."
  },
  {
      question: "Quelle fonction PHP est utilisée pour vérifier si une variable est définie et non vide ?",
      answers: ["is_null()", "empty()", " isset()", "not_empty()"],
      correct_answer: "isset()",
      explanation: "La fonction 'isset()' en PHP est utilisée pour vérifier si une variable est définie et non vide."
  },
  {
      question: "Question : Quelle est la valeur par défaut du paramètre 'register_globals' dans PHP ?",
      answers: ["On", "Off", "0", "1"],
      correct_answer: "Off",
      explanation: "Par défaut, le paramètre 'register_globals' est désactivé (Off) dans les versions récentes de PHP pour des raisons de sécurité."
  },
  {
      question: "Quelle fonction PHP est utilisée pour générer une valeur de hachage (hash) sécurisée d'une chaîne de caractères ?",
      answers: ["hash()", "encrypt()", "md5()", "random_hash()"],
      correct_answer: "hash()",
      explanation: "La fonction 'hash()' en PHP est utilisée pour générer une valeur de hachage sécurisée à partir d'une chaîne de caractères en utilisant divers algorithmes."
  },
  {
      question: "Quelle superglobale en PHP est utilisée pour accéder aux informations sur les cookies ?",
      answers: ["$_COOKIE", "$_SESSION", "$_REQUEST", "$_COOKIES"],
      correct_answer: "$_COOKIES",
      explanation: "La superglobale $_COOKIE en PHP est utilisée pour accéder aux informations sur les cookies envoyés par le navigateur."
  },
  {
      question: "Quelle fonction est utilisée pour arrondir un nombre décimal à la valeur entière la plus proche en PHP ?",
      answers: ["round()", "floor()", "ceil()", "int()"],
      correct_answer: "round()",
      explanation: "La fonction 'round()' en PHP est utilisée pour arrondir un nombre décimal à la valeur entière la plus proche."
  },
  {
      question: "Quelle directive de configuration PHP permet de spécifier le chemin du répertoire de sessions ?",
      answers: ["session_directory", "session_save_path", "session_path", "session_dir"],
      correct_answer: "session_save_path",
      explanation: "La directive 'session_save_path' dans la configuration PHP permet de spécifier le chemin du répertoire de stockage des sessions."
  },
  {
      question: "Quelle fonction PHP est utilisée pour créer un nouvel objet d'une classe ?",
      answers: ["new_object()", "create_object()", "object_new()", "new"],
      correct_answer: "new",
      explanation: "En PHP, vous créez un nouvel objet d'une classe en utilisant le mot-clé 'new' suivi du nom de la classe."
  },
  {
      question: "Quelle fonction PHP est utilisée pour supprimer un élément spécifique d'un tableau ?",
      answers: ["delete()", "unset()", "remove()", "array_remove()"],
      correct_answer: "unset()",
      explanation: "La fonction 'unset()' en PHP est utilisée pour supprimer un élément spécifique d'un tableau en utilisant sa clé."
  },

]