"use strict";(self.webpackChunkmyjscourse=self.webpackChunkmyjscourse||[]).push([[9776],{470:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var l=t(3905),r=t(7294);function a(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",h2:"h2",a:"a",ul:"ul",li:"li",pre:"pre",h3:"h3",em:"em",h4:"h4"},(0,l.ah)(),e.components),{InternalPageMenu:t,PathViewer:a,PathViewerItem:o,InternalPageMenuItem:c,InternalPageTitle:u,ScrollableImage:i}=n;return t||s("InternalPageMenu",!0),c||s("InternalPageMenuItem",!0),u||s("InternalPageTitle",!0),a||s("PathViewer",!0),o||s("PathViewerItem",!0),i||s("ScrollableImage",!0),r.createElement(r.Fragment,null,r.createElement(n.h1,null,"a) JS dans un browser"),"\n",r.createElement(t,null,r.createElement(a,null,r.createElement(o,{to:"/"}," web2course "),r.createElement(o,{to:"/part2"}," Partie 2 "),r.createElement(o,{selected:!0}," a) JS & Browser ")),r.createElement(c,null," Où mettre du code JS ? "),r.createElement(c,null," Comment fonctionne un browser pour afficher une page ? "),r.createElement(c,null," Comment interagir avec son browser ? "),r.createElement(c,null," JS & la norme ECMAScript "),r.createElement(c,null," Exercice 2.1 : 1er script externe ")),"\n",r.createElement(n.p,null,'Pour démarrer avec les UI (User Interfaces), nous allons développer des applications web classiques, façon "old school".'),"\n",r.createElement(n.p,null,"Nous n'allons pas utiliser d'outils pour gérer les dépendances de nos applications, nous allons intégrer ces dépendances directement à l'aide de balises ",r.createElement(n.strong,null,r.createElement(n.code,null,"<script>")),"."),"\n",r.createElement(n.h1,null,r.createElement(u,null," Où mettre du code JS ? ")),"\n",r.createElement(n.h2,null,"Introduction"),"\n",r.createElement(n.p,null,"Le JavaScript a été créé en 1995 par Brendan Eich pour rendre les pages web interactives et ainsi améliorer l'expérience utilisateur."),"\n",r.createElement(n.p,null,"Le JS permet de créer des interactions avec l'HTML et le CSS d'un browser."),"\n",r.createElement(n.p,null,"Il s'exécute après la génération d'une page web comprenant du HTML et potentiellement du CSS."),"\n",r.createElement(n.p,null,"Les bases du langage JS sont reprises dans l'introduction de ce cours, au points ",r.createElement(n.a,{href:"../../part0/js-language"},"c) Introduction au langage JS"),"."),"\n",r.createElement(n.p,null,"Si vous ne connaissez pas encore bien la syntaxe du langage JS, il est important de (re)lire cette introduction avant d'aller plus loin."),"\n",r.createElement(n.p,null,"Il existe plusieurs façon de mettre du code JS pour interagir avec une page web."),"\n",r.createElement(n.h2,null,"Directement dans le browser"),"\n",r.createElement(n.p,null,"👍 Pour ce cours, nous vous recommandons d'installer et d'utiliser ",r.createElement(n.strong,null,"Chrome")," comme browser."),"\n",r.createElement(n.p,null,"Ce browser moderne facilite grandement le développement d'applications web. Toutes les indications données dans ce cours concernant les fonctionnalités de développement offertes par un browser seront illustrée par ",r.createElement(n.strong,null,"Chrome")," uniquement."),"\n",r.createElement(n.p,null,"Si vous choisissez un autre browser, il vous faudra donc trouver l'équivalent par vous-même."),"\n",r.createElement(n.p,null,"Pour accéder à un environnement vous permettant d'introduire du JS directement dans votre browser, vous allez accéder à la ",r.createElement(n.strong,null,"console")," de votre browser. Pour ce faire, lorsque votre browser est ouvert, tapez :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"soit ",r.createElement(n.strong,null,r.createElement(n.code,null,"F12"))," ;"),"\n",r.createElement(n.li,null,"soit ",r.createElement(n.strong,null,r.createElement(n.code,null,"CTRL + SHIFT + i"))," ;"),"\n",r.createElement(n.li,null,"soit clic droit sur la fenêtre de votre browser, puis ",r.createElement(n.strong,null,r.createElement(n.code,null,"Inspecter")),"."),"\n"),"\n",r.createElement(n.p,null,"Il faut ensuite sélectionner l'onglet ",r.createElement(n.strong,null,r.createElement(n.code,null,"Console"))," du browser."),"\n",r.createElement(i,{name:"console.PNG",minWidth:"400px",maxWidth:"600px"}),"\n",r.createElement("figcaption",null,"Utilisation de la console pour faire un calcul"),"\n",r.createElement(n.p,null,"Veuillez copier/coller ce code dans la console de votre browser et observer le résultat."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},'let message = "Hello world!";\r\nconsole.log(message);\n')),"\n",r.createElement(n.h2,null,"Dans une page HTML"),"\n",r.createElement(n.h3,null,"Introduction"),"\n",r.createElement(n.p,null,"Il existe plusieurs façons d'associer du JS à une page HTML."),"\n",r.createElement(n.p,null,"Pour écrire du code JS, de l'HTML ou du CSS, vous aurez besoin d'un éditeur de code. Il existe beaucoup d'éditeurs."),"\n",r.createElement(n.p,null,"👍 Pour écrire du code, dans ce cours, nous vous recommandons d'installer, dès maintenant si ce n'est pas déjà fait, ",r.createElement(n.strong,null,"Visual Studio Code")," : ",r.createElement(n.a,{href:"https://code.visualstudio.com/download"},"https://code.visualstudio.com/download")," ",r.createElement(n.a,{href:"/js2/references/#r18"},"[R.18]"),"."),"\n",r.createElement(n.p,null,"Lors de l'installation, nous vous recommandons de sélectionner l'option ",r.createElement(n.strong,null,r.createElement(n.code,null,"Open with code")),". Cela vous permettra d'ouvrir un projet directement en faisant un clic droit sur un dossier."),"\n",r.createElement(n.p,null,"Toutes les indications données dans ce cours concernant les fonctionnalités de développement offertes par un éditeur de code seront illustrée par ",r.createElement(n.strong,null,"VS Code")," uniquement. Notons que cet outil est Open Source et est supporté par une large communauté de développeurs."),"\n",r.createElement(n.p,null,"Il est possible que vous préfériez utiliser un autre éditeur de code ou IDE, comme un des outils de la suite JetBrains (IntelliJ ou WebStorm)."),"\n",r.createElement(n.p,null,"Si vous choisissez un de ces éditeurs, il vous faudra donc trouver l'équivalent des outils de développement présentés dans ce cours par vous-même."),"\n",r.createElement(n.h3,null,"Dans un fichier externe"),"\n",r.createElement(n.p,null,"👍 La façon recommandée pour associer du JS à une page HTML, c'est de mettre le code JS dans un script externe, un fichier ",r.createElement(n.strong,null,r.createElement(n.code,null,".js")),", et de faire appel à ce code au sein de la page HTML, à l'aide de ",r.createElement(n.strong,null,r.createElement(n.code,null,'<script src="file_name.js">'))," juste avant la balise de fermeture ",r.createElement(n.strong,null,r.createElement(n.code,null,"</body>")),"."),"\n",r.createElement(n.p,null,"Nous verrons plus tard comment l'HTML est rendu au sein du browser. Néanmoins, la raison pour laquelle il est recommandé d'inclure le script JS à la fin de la balise ",r.createElement(n.strong,null,r.createElement(n.code,null,"</body>")),", c'est pour nous assurer que si le JS doit interagir avec des éléments HTML, ceux-ci aient déjà été rendu par le browser."),"\n",r.createElement(n.p,null,"Afin d'avoir une visibilité de tout le code associé à votre cours de JS, veuillez ouvrir votre répertoire ",r.createElement(n.strong,null,r.createElement(n.code,null,"web2"))," (créé dans le cadre de l'",r.createElement(n.a,{href:"../part0/git/#exercice_0_1_creer_un_repository_local_et_distant_pour_gerer_vos_exercices_tutoriels"},"Exercice 0.1"),") à l'aide de votre éditeur de code."),"\n",r.createElement(n.p,null,"Dans VS Code, pour ce tutoriel, veuillez créer le répertoire ",r.createElement(n.strong,null,r.createElement(n.code,null,"/web2/tutorials/external-script")),"."),"\n",r.createElement(n.p,null,"NB : Pour ce faire, vous pouvez cliquer sur le répertoire ",r.createElement(n.strong,null,r.createElement(n.code,null,"tutorials"))," dans VS Code et ensuite sur l'icône ",r.createElement(n.strong,null,r.createElement(n.code,null,"New Folder")),", et donner le nom voulu à ce répertoire (",r.createElement(n.strong,null,r.createElement(n.code,null,"external-script")),")."),"\n",r.createElement(n.p,null,"Dans ce répertoire, veuillez créer un fichier HTML ",r.createElement(n.strong,null,r.createElement(n.code,null,"index.html")),"."),"\n",r.createElement(n.p,null,"NB : Si vous l'ignorez, vous pouvez cliquer sur ",r.createElement(n.strong,null,r.createElement(n.code,null,"external-script"))," et ensuite sur l'icône ",r.createElement(n.strong,null,r.createElement(n.code,null,"New File")),", et donnez le nom voulu à ce fichier (",r.createElement(n.strong,null,r.createElement(n.code,null,"index.html")),")."),"\n",r.createElement(n.p,null,"A ce stade-ci, votre répertoire ",r.createElement(n.strong,null,r.createElement(n.code,null,"web2"))," & VS Code devrait ressembler à cela :"),"\n",r.createElement(i,{name:"start.PNG",minWidth:"400px",maxWidth:"600px"}),"\n",r.createElement(n.p,null,"Veuillez ajouter ce contenu à ",r.createElement(n.strong,null,r.createElement(n.code,null,"index.html"))," :"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-html"},'<html>\r\n  <head>\r\n    <title>Demo : external JS script</title>\r\n  </head>\r\n  <body>\r\n    <script src="external-script.js"><\/script>\r\n    Hello everybody !\r\n  </body>\r\n</html>\n')),"\n",r.createElement(n.p,null,"On voit que ce fichier HTML est prêt à accueillir un script externe."),"\n",r.createElement(n.p,null,"Veuillez créer le fichier ",r.createElement(n.strong,null,r.createElement(n.code,null,"external-script.js"))," au sein du répertoire ",r.createElement(n.strong,null,r.createElement(n.code,null,"external-script"))," et y ajouter ce code ci :"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},'alert("Pop-up thanks to an external JS file.");\n')),"\n",r.createElement(n.p,null,"Il nous reste maintenant à exécuter cette application."),"\n",r.createElement(n.p,null,"Comme c'est une application web, nous avons besoin d'un serveur web pour afficher cette page web dans les règles de l'art."),"\n",r.createElement(n.p,null,"Il existe une multitude de serveurs web : Apache, IIS (Microsoft Web Server)..."),"\n",r.createElement(n.p,null,'Lorsque nous développons des applications web "old school", sans outil moderne pour gérer les\r\ndépendances de notre application, nous allons utiliser un serveur web intégré à VS Code.'),"\n",r.createElement(n.p,null,"Pour ce faire, veuillez installer l'extension ",r.createElement(n.strong,null,"Live Server")," de VS Code :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Dans le menu de gauche de VS Code, cliquez sur l'icône ",r.createElement(n.strong,null,r.createElement(n.code,null,"Extensions"))," (4 petits carrés)."),"\n",r.createElement(n.li,null,"Ecrivez ",r.createElement(n.strong,null,r.createElement(n.code,null,"Live Server")),"."),"\n",r.createElement(n.li,null,"Cliquez sur ",r.createElement(n.strong,null,r.createElement(n.code,null,"Install")),"."),"\n"),"\n",r.createElement(n.p,null,"Une fois installé, vous pouvez lancer votre page web en faisant :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Clic droit sur ",r.createElement(n.strong,null,r.createElement(n.code,null,"index.html")),","),"\n",r.createElement(n.li,null,r.createElement(n.strong,null,r.createElement(n.code,null,"Open with Live Server"))),"\n"),"\n",r.createElement(n.p,null,"🎉 Votre browser par défaut s'ouvrira, affichant votre toute première page web contenant du JS côté client !"),"\n",r.createElement(n.p,null,"Si  n'est pas Chrome qui s'ouvre, nous vous recommandons de changer les préférences de votre OS. Sous Windows, dans la barre de recherche, vous trouverez facilement l'utilitaire pour le faire. Par exemple, pour un OS Windows en anglais : ",r.createElement(n.strong,null,r.createElement(n.code,null,"Default apps")),", ",r.createElement(n.strong,null,r.createElement(n.code,null,"Web browser")),"."),"\n",r.createElement(n.p,null,"Si tout fonctionne bien, faites un ",r.createElement(n.strong,null,r.createElement(n.code,null,"commit"))," de votre repo (",r.createElement(n.strong,null,r.createElement(n.code,null,"web2")),") avec comme message : ",r.createElement(n.strong,null,r.createElement(n.code,null,"hmi first external script tutorial")),"."),"\n",r.createElement(n.p,null,"En cas de souci, vous pouvez accéder au code de cette démo ici :\r\n",r.createElement(n.a,{href:"https://github.com/e-vinci/js-demos/tree/main/frontend/js-location/external-script"},"hmi-external-script"),"."),"\n",r.createElement(n.p,null,"👍 Il est recommandé de créer des fichiers séparés pour chaque catégorie de code : ",r.createElement(n.strong,null,r.createElement(n.code,null,".html")),", ",r.createElement(n.strong,null,r.createElement(n.code,null,".js")),", ",r.createElement(n.strong,null,r.createElement(n.code,null,".css")),". Cela permet d'augmenter la lisibilité et la maintenabilité de votre code."),"\n",r.createElement(n.p,null,"Nous allons voir qu'il existe néanmoins d'autres façon d'intégrer du JS, notamment en intégrer celui directement aux fichiers HTML."),"\n",r.createElement(n.h3,null,"Dans une fonction au sein d'une page HTML"),"\n",r.createElement(n.p,null,"👎 Il est possible d'ajouter du JS dans une fonction ou événement associé à un élément HTML, néanmoins cela n'est pas recommandé lorsqu'on écrit du Vanilla JS. On appelle cette façon de faire du \"Inline JavaScript\"."),"\n",r.createElement(n.p,null,"L'application développée au point précédent fournirait le même genre de résultat, avec un seul fichier HTML (",r.createElement(n.strong,null,r.createElement(n.code,null,"index.html")),") :"),"\n",r.createElement(n.pre,{numbered:!0,highlighting:"6-7"},r.createElement(n.code,{className:"language-html"},"<html>\r\n  <head>\r\n    <title>Demo : internal JS in a function</title>\r\n  </head>\r\n  <body\r\n    onload=\"alert('Pop-up thanks to an HTML attribute & a function.' \r\n    +'\\nIt\\'s not advised to add your scripts directly within the HTML.')\"\r\n  >\r\n    <h1>Hello everyone ; )</h1>\r\n  </body>\r\n</html>\n")),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,r.createElement(n.code,null,"onload"))," est un événement qui se produira une fois que l'élément ",r.createElement(n.strong,null,r.createElement(n.code,null,"body"))," aura chargé tout son contenu ; une fois chargé, le code JS s'exécutera et affichera donc un pop-up."),"\n",r.createElement(n.p,null,"N'hésitez pas à visualiser cette page à l'aide de Live Server au sein de VS Code."),"\n",r.createElement(n.p,null,"En Vanilla JS, ce genre de code est déconseillé. Vous trouverez néanmoins beaucoup de code écrit de cette façon sur le web."),"\n",r.createElement(n.p,null,"Si plus tard, suite à ce cours, vous veniez à utiliser des frameworks comme React, vous découvrirez que parfois on préfère encapsuler l'HTML et le JS au sein de mêmes fichiers."),"\n",r.createElement(n.h3,null,"Dans une balise script au sein d'une page HTML"),"\n",r.createElement(n.p,null,"👎 Il est possible d'ajouter du JS dans une balise ",r.createElement(n.strong,null,"script")," au sein d'un page HTML, néanmoins cela n'est pas recommandé lorsqu'on écrit du Vanilla JS."),"\n",r.createElement(n.p,null,"Avec un seul fichier HTML (",r.createElement(n.strong,null,r.createElement(n.code,null,"index.html")),"), voici comment il est possible d'afficher un pop-up :"),"\n",r.createElement(n.pre,{numbered:!0,highlighting:"6-11"},r.createElement(n.code,{className:"language-html"},'<html>\r\n  <head>\r\n    <title>Demo : internal script tag</title>\r\n  </head>\r\n  <body>\r\n    <script>\r\n      alert(\r\n        "Pop-up thanks to a script tag." +\r\n          "\\nIt\'s not advised to add your scripts directly within the HTML."\r\n      );\r\n    <\/script>\r\n    Hello world ; )\r\n  </body>\r\n</html>\n')),"\n",r.createElement(n.h1,null,r.createElement(u,null," Comment fonctionne un browser pour afficher une page ? ")),"\n",r.createElement(n.h2,null,"Réception des données"),"\n",r.createElement(n.p,null,"Dans une première étape, lorsque vous accéder à l'URL d'un site web à l'aide de votre browser, celui-ci va principalement recevoir des fichiers HTML, CSS & JS en retour, sous forme d'octets."),"\n",r.createElement(i,{name:"bytes.png",minWidth:"600px",maxWidth:"730px"}),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"/js2/references/#r19"},"Réception des données par le browser [R.19]")),"\n",r.createElement(n.h2,null,"Création des structures de données utiles"),"\n",r.createElement(n.p,null,'Une fois les données reçue, le browser doit pouvoir interpréter les octets reçus. Grâce au "character encoding", à notre époque nous devrions tous utiliser ',r.createElement(n.strong,null,"utf-8"),", le browser peut faire la transformation de ces octets vers des caractères."),"\n",r.createElement(n.p,null,"A partir des caractères, le browser peut commencer le parsing de chaque fichier, en identifiant les tokens, des structures de données identifiant les différents tags HTML & leurs attributs."),"\n",r.createElement(n.p,null,"A partir de ces tokens, le browser va créer des nodes et les lier entre eux sous forme d'un arbre. C'est cette structure de données que nous appelons le Document Object Model (DOM)."),"\n",r.createElement(i,{name:"dom.png",minWidth:"600px",maxWidth:"730px"}),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"/js2/references/#r19"},"Construction du DOM par le browser [R.19]")),"\n",r.createElement(n.p,null,"Au fur et à mesure que le browser reçoit des données et construit le DOM, il peut tomber sur une balise incluant du CSS, comme par exemple :"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-html"},'<head>\r\n  <link rel="stylesheet" type="text/css" href="main.css" />\r\n</head>\n')),"\n",r.createElement(n.p,null,"Dans ce cas, le browser va initialiser un process équivalent au DOM, mais pour créer une structure de données traitant des éléments de style, le CSS Object Model (CSSOM) :"),"\n",r.createElement(i,{name:"cssom.png",minWidth:"600px",maxWidth:"730px"}),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"/js2/references/#r19"},"Construction du CSSOM par le browser [R.19]")),"\n",r.createElement(n.h2,null,"Création du render tree"),"\n",r.createElement(n.p,null,"Les structures du DOM & du CSSOM sont indépendantes."),"\n",r.createElement(n.p,null,'Le browser va combiner ces deux structures en un "render tree".'),"\n",r.createElement(i,{name:"render.png",minWidth:"600px",maxWidth:"730px"}),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"/js2/references/#r19"},"Construction du render tree par le browser [R.19]")),"\n",r.createElement("br"),"\n",r.createElement(n.p,null,"S'il y a des éléments cachés par le biais du CSS, ceux-ci seront présents dans le DOM, mais pas dans le render tree."),"\n",r.createElement(n.h2,null,"Création du layout"),"\n",r.createElement(n.p,null,'L\'étape qui suit est de créer le layout, étape parfois nommée "reflow". Le browser va calculer la taille et la position exacte de chaque élément à rendre (de l\'anglais "render"), c\'est-à-dire à afficher sur la page.'),"\n",r.createElement(n.h2,null,"Affichage des éléments"),"\n",r.createElement(n.p,null,'Sur base du render tree & du layout, le browser peut finalement "peindre" les différents nodes à l\'écran et donc rendre la page !'),"\n",r.createElement(n.h2,null,"Et le JS ?"),"\n",r.createElement(n.p,null,"Lors de la création du DOM, s'il y a une balise script, et bien le script JS sera téléchargé. La construction du DOM sera \"bloquée\" jusqu'à la fin de l'exécution du script."),"\n",r.createElement(n.p,null,"De la même façon, l'exécution du CSSOM sera stoppée si le JS accèdent au style d'un élément HTML."),"\n",r.createElement(n.p,null,"Il est donc important de faire attention où l'on met ses scripts JS. C'est pourquoi, lorsqu'on souhaite interagir avec des éléments présents dans l'HTML, il faut mettre la balise script incluant le JS à la fin de la balise ",r.createElement(n.strong,null,"body"),"."),"\n",r.createElement(n.p,null,'Le JS va donc pouvoir être utilisé tant pour créer des éléments du DOM & du CSSOM que pour interagir avec ceux-ci et rendre nos pages web intéressantes et "user friendly".'),"\n",r.createElement(n.h1,null,r.createElement(u,null," Comment interagir avec son browser ? ")),"\n",r.createElement(n.p,null,"Les browser mettent à disposition des API (Application Programming Interface), des librairies permettant d'interagir avec les pages web."),"\n",r.createElement(i,{name:"browser.png",minWidth:"600px",maxWidth:"730px"}),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"/js2/references/#r20"},"Relation entre API & le browser [R.20]")),"\n",r.createElement(n.p,null,'Les "Third party APIs" sont localisées sur des serveurs externes : lien vers une libraire JS, appel vers des web services comme Twitter, Google Maps…'),"\n",r.createElement(n.p,null,'Les "Browser APIs" sont intégrées au browser et permettent d\'interagir avec celui-ci.'),"\n",r.createElement(n.p,null,"Voici quelques exemples d'API du browser pour :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Manipuler des pages web : ",r.createElement(n.strong,null,"DOM API")," ; c'est l'API la plus importante quand on fait du développement d'IHM."),"\n",r.createElement(n.li,null,"Dessiner / animer : ",r.createElement(n.strong,null,"Canvas")," & ",r.createElement(n.strong,null,"WebGL")," ;"),"\n",r.createElement(n.li,null,"Communiquer des données avec un serveur : ",r.createElement(n.strong,null,"Fetch API"),", et anciennement ",r.createElement(n.strong,null,"XMLHttpRequest")," ;"),"\n",r.createElement(n.li,null,"Gérer des flux audio & vidéo : ",r.createElement(n.strong,null,"Audio & Video APIs")),"\n",r.createElement(n.li,null,"Gérer la persistance de données : ",r.createElement(n.strong,null,"Web Storage APIs")," (",r.createElement(n.strong,null,"cookies"),", ",r.createElement(n.strong,null,"localStorage"),", ",r.createElement(n.strong,null,"sessionStorage"),"…)"),"\n"),"\n",r.createElement(n.p,null,"Via des objets JS, ce sont ces API que nous allons utiliser dans nos scripts JS, afin de créer des pages web interactives."),"\n",r.createElement(n.p,null,"Il n'existe pas de standard pour le Browser Object Model."),"\n",r.createElement(n.p,null,"Voici une vue des différents objets JS qui permettent d'acccéder au Browser Object Model :"),"\n",r.createElement(i,{name:"bom.png",minWidth:"360px",maxWidth:"360px"}),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"/js2/references/#r21"},"Les objets JS offerts par le browser [R.21]")),"\n",r.createElement(n.p,null,"Voici quelques explications concernant le rôle de certains de ces objets :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.strong,null,r.createElement(n.code,null,"window"))," : objet manipulant la fenêtre du browser même, il offre des fonctions comme : ",r.createElement(n.strong,null,r.createElement(n.code,null,"alert()")),", ",r.createElement(n.strong,null,r.createElement(n.code,null,"prompt()")),"…"),"\n",r.createElement(n.li,null,r.createElement(n.strong,null,r.createElement(n.code,null,"navigator"))," (",r.createElement(n.strong,null,r.createElement(n.code,null,"===window.navigator")),") : objet contenant de l'information sur le browser, comme par exemple :\r\n",r.createElement(n.strong,null,r.createElement(n.code,null,"navigator.appName")),", ",r.createElement(n.strong,null,r.createElement(n.code,null,"navigator.appVersion")),"."),"\n",r.createElement(n.li,null,r.createElement(n.strong,null,r.createElement(n.code,null,"location"))," : (",r.createElement(n.strong,null,r.createElement(n.code,null,"===window.location")),") objet représentant l'URL de la page ; il offre des propriétés & méthodes comme :","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.strong,null,r.createElement(n.code,null,"location.href"))," :l'URL de la page affichée."),"\n",r.createElement(n.li,null,r.createElement(n.strong,null,r.createElement(n.code,null,"location.reload()"))," : recharge la page."),"\n",r.createElement(n.li,null,r.createElement(n.strong,null,r.createElement(n.code,null,"location.replace('https://URL_INDIQUEE')"))," : navigue vers l'URL indiquée."),"\n"),"\n"),"\n",r.createElement(n.li,null,r.createElement(n.strong,null,r.createElement(n.code,null,"document"))," : (",r.createElement(n.strong,null,r.createElement(n.code,null,"===window.document")),") objet manipulant le corps de l'HTML & du CSS de la page. Nous allons tout prochainement approfondir les propriétés & méthodes mises à disposition par cet objet JS."),"\n"),"\n",r.createElement(n.h1,null,r.createElement(u,null," JS & la norme ECMAScript ")),"\n",r.createElement(n.p,null,"La norme ECMAScript, le standard pour le JS côté client, a débouché sur de multiples implémentations du JS (ActionScript, JScript, JavaScript, CommonJS...)."),"\n",r.createElement(n.p,null,"ECMAScript est utilisé généralement pour des scripts côté client, mais de plus en plus est aussi utilisé côté serveur avec Node.js."),"\n",r.createElement(n.p,null,"A la mi-juin 2023, la version en cours approuvée de ECMAScript est ECMAScript 2022 ",r.createElement(n.a,{href:"/js2/references/#r24"},"[R.24]"),"."),"\n",r.createElement(n.p,null,"Par exemple, ECMAScript 2015 (aussi appelée ES6) à mis en place de nouveaux éléments importants au sein du JS : ",r.createElement(n.strong,null,r.createElement(n.code,null,"arrow functions")),", ",r.createElement(n.strong,null,r.createElement(n.code,null,"let"))," & ",r.createElement(n.strong,null,r.createElement(n.code,null,"const")),", ",r.createElement(n.strong,null,r.createElement(n.code,null,"Promise")),", ",r.createElement(n.strong,null,r.createElement(n.code,null,"class")),"…"),"\n",r.createElement(n.p,null,"ECMAScript 2015 (ES6) est supporté par la majorité des browsers modernes, mais pas par IE !"),"\n",r.createElement(n.p,null,"👍 Nous vous recommandons d'écrire du code moderne conforme à ES6 ou une version plus récente.\r\nSi vos applications doivent supporter de vieux browsers, vous devriez utiliser des outils comme Babel qui automatiquement convertiront votre code ES6+ vers des versions de JS plus anciennes."),"\n",r.createElement(n.p,null,"Si l'aspect normatif vous passionne et que vous souhaitez suivre les propositions d'inclusion dans la norme : ",r.createElement(n.a,{href:"https://tc39.es/"},"https://tc39.es/")," ",r.createElement(n.a,{href:"/js2/references/#r25"},"[R.25]"),"."),"\n",r.createElement(n.h1,null,r.createElement(u,null," Exercice 2.1 : 1er script externe ")),"\n",r.createElement(n.p,null,"Via un script JS externe, veuillez créer une application web affichant, au chargement d'une page HTML, un pop-up dont le message reprend la date et l'heure au moment de l'affichage de ce pop-up."),"\n",r.createElement(n.p,null,"Ce même message doit être affiché dans la console."),"\n",r.createElement(n.p,null,"Pour ce faire, vous allez créer, puis appeler, une fonction ",r.createElement(n.strong,null,r.createElement(n.code,null,"addDateTime(message)"))," qui renvoie une string concaténant :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"la date et l'heure à l'appel de la fonction ;"),"\n",r.createElement(n.li,null,"le ",r.createElement(n.strong,null,r.createElement(n.code,null,"message"))," passé en argument de la fonction."),"\n"),"\n",r.createElement(n.p,null,"Par exemple, si le ",r.createElement(n.strong,null,r.createElement(n.code,null,"message"))," est ",r.createElement(n.em,null,'"This is the best moment to have a look at this website !"'),", le pop-up affichera quelque chose du genre ",r.createElement(n.em,null,'"06/09/2022 14:59 : This is the best moment to have a look at this website !"'),"."),"\n",r.createElement(n.p,null,"Veuillez créer un nouveau projet dans votre repository local et votre web repository (normalement appelé ",r.createElement(n.strong,null,r.createElement(n.code,null,"web2")),") nommé ",r.createElement(n.strong,null,r.createElement(n.code,null,"/exercises/2.1")),".  Quand votre application est finalisée, veuillez faire un ",r.createElement(n.strong,null,r.createElement(n.code,null,"commit"))," de votre code avec le message suivant : ",r.createElement(n.strong,null,r.createElement(n.code,null,"2.1 : HMI : first external script")),"."),"\n",r.createElement(n.h4,null,"🤝 Tips"),"\n",r.createElement(n.p,null,"Vous pouvez vous aider du code donné ci-dessous :"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},"const dateTimeNow = new Date();\r\nconsole.log(dateTimeNow.toLocaleDateString()); // 17/08/2020\r\nconsole.log(dateTimeNow.toLocaleTimeString()); // 13:26:15\n")),"\n",r.createElement(n.p,null,"Autre référence pouvant vous aider :\r\n",r.createElement(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"mdn web docs - Date"),"."))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(a,e)):a(e)};function s(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var c=t(4854),u=t(5583),i=t(5679),m=t(307),d=t(7410),p=t(9523),E=t(8075),g=t(9063),v=t(1631),h=t(5772),f=t(2770),b=t(7008),S=t(9771),w=t(1218),x=(t(5258),t(9394)),I=t(4579),M=t(9416),L=t(9256),C=t(6488),J=t(5175),j=t(6387),q=t(6044);const P={Link:c.Link,Image:i.Z,Section:m.Z,Content:d.Z,Background:p.Z,SectionHeader:E.Z,SectionFooter:g.Z,PageHeader:v.Z,CodeBlock:f.Z,LinkFile:b.Z,ScrollableImage:S.Z,PublicProjectsView:w.Z,AuthenticatedBlock:x.Z,UnAuthenticatedBlock:I.Z,NestedMdxBlock:M.Z,YoutubeImage:L.Z,InternalPageMenu:C.Z,InternalPageMenuItem:J.Z,InternalPageTitle:j.Z,PathViewer:q.k,PathViewerItem:q.F};function T(e){var n,t,a,o,s;let{data:{mdx:c,allImages:i},children:m}=e;return P.PageHeader=(0,h.u)(v.Z,null==c?void 0:c.frontmatter),r.createElement(u.Z,Object.assign({},null!=c&&c.frontmatter?{frontmatter:c.frontmatter}:{},null!=c&&null!==(n=c.frontmatter)&&void 0!==n&&n.navbarExtraStyles?{navbarExtraStyles:c.frontmatter.navbarExtraStyles}:{},null!=c&&null!==(t=c.frontmatter)&&void 0!==t&&t.headerImage?{headerImage:c.frontmatter.headerImage}:{},null!=c&&null!==(a=c.frontmatter)&&void 0!==a&&a.featuredImage?{featuredImage:c.frontmatter.featuredImage}:{},null!=c&&null!==(o=c.frontmatter)&&void 0!==o&&o.title?{pageTitle:c.frontmatter.title}:{},i&&i.length>0?{allImages:i}:{}),r.createElement(l.Zo,{components:P},r.createElement("div",{className:null!=c&&null!==(s=c.frontmatter)&&void 0!==s&&s.autoMargin?"page page--auto-margin ":"page"},m)))}function y(e){return r.createElement(T,e,r.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-mdx-pages-js-content-file-path-src-mdx-pages-part-2-js-intro-fr-mdx-0935dc3bf61e2512b9e7.js.map