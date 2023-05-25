"use strict";(self.webpackChunkmyjscourse=self.webpackChunkmyjscourse||[]).push([[2832],{7422:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var l=t(3905),r=t(7294);function a(e){const n=Object.assign({h1:"h1",p:"p",br:"br",h2:"h2",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code",a:"a",h4:"h4"},(0,l.ah)(),e.components),{PathViewer:t,PathViewerItem:a,InternalPageMenu:u,InternalPageMenuItem:i,InternalPageTitle:s}=n;return u||o("InternalPageMenu",!0),i||o("InternalPageMenuItem",!0),s||o("InternalPageTitle",!0),t||o("PathViewer",!0),a||o("PathViewerItem",!0),r.createElement(r.Fragment,null,r.createElement(t,null,r.createElement(a,{to:"/"}," web2course "),r.createElement(a,{to:"/part1"}," Partie 1 "),r.createElement(a,{selected:!0}," d) Tools ")),"\n",r.createElement(n.h1,null,"d) Amélioration des outils de développement"),"\n",r.createElement(u,null,r.createElement(i,null," Redémarrage automatique au changement d'un fichier "),r.createElement(i,null," Debugging "),r.createElement(i,null," Autres outils de développement "),r.createElement(i,null," Exercice 1.3 : Persistance de la RESTfull API pour myMovies ")),"\n",r.createElement(n.p,null,"Dans le développement de nos API, nous souhaitons plus de facilités.",r.createElement(n.br),"\n","Notamment, à chaque changement de notre code, nous ne souhaitons pas devoir redémarrer manuellement notre application."),"\n",r.createElement(n.p,null,"Nous souhaiterions aussi bénéficier d'un debugger et d'autres outils, comme un linter..."),"\n",r.createElement(n.h1,null,r.createElement(s,null," Redémarrage automatique au changement d'un fichier ")),"\n",r.createElement(n.h2,null,"Configuration de l'utilisation de nodemon"),"\n",r.createElement(n.p,null,"Il est possible de faire en sorte qu'à chaque fois que vous sauvez un fichier, votre application ",r.createElement(n.strong,null,"node.js")," redémarre automatiquement."),"\n",r.createElement(n.p,null,"Voici la précédure :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Installez ",r.createElement(n.strong,null,"nodemon")," au niveau du répertoire du projet :"),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-bash"},"npm i nodemon -D\n")),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Pour lancer ",r.createElement(n.strong,null,"nodemon")," (au lieu du simple ",r.createElement(n.strong,null,"node"),") quand on tape ",r.createElement(n.strong,null,r.createElement(n.code,null,"npm run dev"))," : Veuillez ajouter la ligne ",r.createElement(n.strong,null,r.createElement(n.code,null,'"dev": "nodemon /bin/www"'))," dans ",r.createElement(n.strong,null,"package.json")," :"),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-json"},'"scripts": {\r\n    "dev": "nodemon ./bin/www",\r\n    "start": "node ./bin/www"\r\n  },\n')),"\n",r.createElement(n.h2,null,"Configuration des fichiers à ignorer pour éviter des rédémarrages"),"\n",r.createElement(n.p,null,"Il est possible d'indiquer les fichiers qui doivent être ignorés par ",r.createElement(n.strong,null,"nodemon")," via l'ajout dans ",r.createElement(n.strong,null,"package.json")," :"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-json"},'"nodemonConfig": {\r\n    "ignore": [\r\n      "data/*"\r\n    ]\r\n  },\n')),"\n",r.createElement(n.p,null,"Dans la configuration ajoutée ci-dessous, tous les fichiers qui seraient mis à jour dans le répertoire ",r.createElement(n.strong,null,"/data")," ne provoqueront pas de redémarrage du serveur ",r.createElement(n.strong,null,"nodemon")," lorsqu'il est lancé (en mode 'dev')."),"\n",r.createElement(n.p,null,"Veuillez installer ",r.createElement(n.strong,null,"nodemon")," dans le cadre de votre tutoriel ",r.createElement(n.strong,null,"api-persistence")," et configurer celui-ci pour que l'application ne redémarre pas à chaque fois que vous créez une nouvelle pizza.",r.createElement(n.br),"\n","N'hésitez pas à tester la création d'une pizza avant de dire à ",r.createElement(n.strong,null,"nodemon")," d'ignorer les fichiers se trouvant dans ",r.createElement(n.strong,null,"/data"),"."),"\n",r.createElement(n.h1,null,r.createElement(s,null," Debugging ")),"\n",r.createElement(n.h2,null,"Introduction"),"\n",r.createElement(n.p,null,"Est-ce que nous pouvons utiliser VS Code pour débugger notre API ?",r.createElement(n.br),"\n","Oui, heureusement, car le debugger est probablement le meilleur ami des développeurs."),"\n",r.createElement(n.p,null,"Il est toujours là pour aider, à l'écoute de nos investigations, mettant régulièrement en lumière des pistes de sortie de problèmes, tout cela de manière bienveillante, sans jamais nous brusquer 😁."),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"https://code.visualstudio.com/docs/editor/debugging"},"Debugging via VS Code")," ",r.createElement(n.a,{href:"/js2/references/#r59"},"[R.59]")," fournit le détails de comment débugger sous VS Code. Nous vous offrons par la suite une façon pratique de rapidement débugger."),"\n",r.createElement(n.h2,null,"Debugging sans configuration"),"\n",r.createElement(n.p,null,"Sans aucune configuration, il est possible de débugger une application ",r.createElement(n.strong,null,"Node.js"),"."),"\n",r.createElement(n.p,null,"Il suffit d'ouvrir le script d'entrée de votre application dans VS Code. Pour une application Express, le script d'entrée est ",r.createElement(n.strong,null,"/bin/www"),". Cliquez dans l'Explorer de VS Code sur ",r.createElement(n.strong,null,"/bin/www")," de votre tutoriel ",r.createElement(n.strong,null,"api-persistence"),". Une fois le script ",r.createElement(n.strong,null,"/bin/www")," ouvert, il ne reste plus qu'à exécuter le ",r.createElement(n.strong,null,"Debug"),".",r.createElement(n.br),"\n","Pour ce faire :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"soit vous cliquez sur l'icône \"",r.createElement(n.strong,null,"Run and Debug"),'" à gauche de l\'Explorer, puis sur le bouton "',r.createElement(n.strong,null,"Run and Debug"),'";'),"\n",r.createElement(n.li,null,'soit vous cliquez sur "',r.createElement(n.strong,null,"Run"),'" puis sur "',r.createElement(n.strong,null,"Start Debugging"),'";'),"\n",r.createElement(n.li,null,'soit vous cliquez sur "',r.createElement(n.strong,null,"F5"),'",'),"\n",r.createElement(n.li,null,"Il est probable que la première fois que vous lancez le ",r.createElement(n.strong,null,"Debug"),", vous devrez sélectionner ",r.createElement(n.strong,null,"Node.js"),'   (il sera indiqué : "',r.createElement(n.strong,null,"Select debugger"),'") comme debugger dans une liste.'),"\n"),"\n",r.createElement(n.p,null,"En résumé, une fois le debugger lancé, il suffit d'ajouter des breakpoints dans le code source et d'exécuter le code pas à pas."),"\n",r.createElement(n.p,null,"N'hésitez pas à exécuter pas à pas une opération de votre api, comme la création d'une pizza par exemple."),"\n",r.createElement(n.h2,null,"Debugging avec une bonne configuration"),"\n",r.createElement(n.p,null,"Trouver une configuration qui permet de bien débugger n'est pas si aisé. Nous allons donc voir ensemble comment mettre en place une configuration des plus utiles dans le cadre de ce cours."),"\n",r.createElement(n.p,null,"Premièrement, il est important que quand on lance le debugger, on puisse bénéficier de ",r.createElement(n.strong,null,"nodemon")," et des redémarrages automatiques en cas de changement de code.",r.createElement(n.br),"\n","Pour ce faire, veuillez mettre à jour le fichier ",r.createElement(n.strong,null,"packages.json")," pour rajouter un script de démarrage :"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-json"},'"scripts": {\r\n    "debug": "nodemon ./bin/www",\r\n    "dev": "nodemon ./bin/www",\r\n    "start": "node ./bin/www"\r\n  },\n')),"\n",r.createElement(n.p,null,"Nous allons maintenant créer une configuration de debugging associée à notre repo ",r.createElement(n.strong,null,"web2")," :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Cliquez sur l'icône \"",r.createElement(n.strong,null,"Run and Debug"),'" à gauche de l\'Explorer, puis sur le lien "',r.createElement(n.strong,null,"create launch.json file"),'" (',r.createElement(n.strong,null,".vscode/launch.json"),")."),"\n",r.createElement(n.li,null,'Quand il sera indiqué "',r.createElement(n.strong,null,"Select debugger"),'", sélectionnez ',r.createElement(n.strong,null,"Node.js"),".",r.createElement(n.br),"\n","NB : Peu importe le debugger que vous sélectionnez, car vous aller par la suite copier / coller la configuration proposée."),"\n",r.createElement(n.li,null,"Une fois le debugger ",r.createElement(n.strong,null,"Node.js")," choisi, VS Code crée un répertoire ",r.createElement(n.strong,null,".vscode")," à la racine du folder ouvert au sein de VS Code (normalement vous devriez avoir ouvert votre repo local ",r.createElement(n.strong,null,"web2"),") contenant un fichier ",r.createElement(n.strong,null,"launch.json")," et une configuration initiale. Veuillez remplacer le contenu de ce fichier (",r.createElement(n.strong,null,".vscode/launch.json"),") par celui-ci :"),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-json"},'{\r\n  // Use IntelliSense to learn about possible attributes.\r\n  // Hover to view descriptions of existing attributes.\r\n  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\r\n  "version": "0.2.0",\r\n  "configurations": [\r\n    {\r\n      "name": "Launch via NPM",\r\n      "request": "launch",\r\n      "runtimeArgs": ["run-script", "debug"],\r\n      "runtimeExecutable": "npm",\r\n      "skipFiles": ["<node_internals>/**"],\r\n      "type": "pwa-node",\r\n      "cwd": "${fileDirname}"\r\n    }\r\n  ]\r\n}\n')),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"runtimeArgs")," permet de sélectionner le script à lancer par le debugger, à savoir ici : ",r.createElement(n.strong,null,"debug"),".",r.createElement(n.br),"\n","Ainsi, quand on lancera le debugger, celui-ci lancera le programme avec l'équivalent de la commande ",r.createElement(n.strong,null,r.createElement(n.code,null,"npm run debug")),"."),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,r.createElement(n.code,null,'"cwd":"${fileDirname}"'))," : ",r.createElement(n.strong,null,"cwd")," permet d'indiquer le chemin vers la racine du programme à débugger. La variable ",r.createElement(n.strong,null,"fileDirname")," permet de sélectionner le programme à débugger sur base du fichier ouvert et actif dans VS Code."),"\n",r.createElement(n.p,null,"Si vous avez plusieurs applications au sein d'un folder de VS Code, pour débugger une application en particulier, nous vous conseillons cette approche :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Ouvrez le fichier ",r.createElement(n.strong,null,"package.json")," de l'application à débugger ;"),"\n",r.createElement(n.li,null,"Cliquez sur l'icône ",r.createElement(n.strong,null,"Run and Debug")," à gauche de l'Explorer, puis cliquez sur ",r.createElement(n.strong,null,"Start Debugging")," (ou cliquez juste sur ",r.createElement(n.strong,null,"F5"),") en vérifiant que la configuration de debugging sélectionnée est bien nommée ",r.createElement(n.strong,null,"Launch via NPM"),"."),"\n"),"\n",r.createElement(n.p,null,"Nottons que le nom de la configuration de debugging peut facilement être modifiée en changeant la valeur de l'attribut ",r.createElement(n.strong,null,"name")," dans ",r.createElement(n.strong,null,"/.vscode/launch.json"),"."),"\n",r.createElement(n.p,null,"Veuillez tester cette configuration de debugging au sein de votre repo local ",r.createElement(n.strong,null,"web2"),".",r.createElement(n.br),"\n","Vous pourriez par exemple observer pas à pas une opération de suppression d'une pizza, afin de voir à quel moment le contenu de l'array ",r.createElement(n.strong,null,"pizzas")," est mis à jour, ainsi que le fichier ",r.createElement(n.strong,null,"/data/pizzas.json"),"."),"\n",r.createElement(n.p,null,"Si tout fonctionne bien, faites un ",r.createElement(n.strong,null,"commit")," de votre repo (",r.createElement(n.strong,null,"web2"),') avec le message "',r.createElement(n.strong,null,"api-persistence"),'".'),"\n",r.createElement(n.p,null,"En cas de souci, vous pouvez accéder au code du tutoriel ici :\r\n",r.createElement(n.a,{href:"https://github.com/e-vinci/js-demos/tree/main/backend-restful-api/restful-api-essentials/persistence"},"api-persistence"),"."),"\n",r.createElement(n.h1,null,r.createElement(s,null," Autres outils de développement ")),"\n",r.createElement(n.p,null,"Il serait utile de bénéficier :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,'d\'un linter : celui-ci devrait imposer un "style guide" qui est équivalent à notre style de programmation pour les IHM.'),"\n",r.createElement(n.li,null,"d'un formater : celui-ci devrait automatiquement permettre d'améliorer le style de notre code pour se rapprocher de ce qui est imposé par le linter."),"\n"),"\n",r.createElement(n.p,null,"Un boilerplate a été créé afin de mettre en place ces outils :\r\n",r.createElement(n.a,{href:"https://github.com/e-vinci/basic-api-boilerplate"},"basic-api-boilerplate")),"\n",r.createElement(n.p,null,"Vous ne devez pas savoir comment créer et configurer un tel boilerplate.",r.createElement(n.br),"\n","Néanmoins, pour les personnes très curieuses, la création du boilerplate est expliquée dans le ",r.createElement(n.strong,null,"README")," du boilerplate."),"\n",r.createElement(n.p,null,"Pour la suite du cours, nous n'utiliserons plus le générateur d'application Express, mais ce boilerplate."),"\n",r.createElement(n.p,null,"Il est important d'avoir installé les extensions ",r.createElement(n.strong,null,"ESLint")," et ",r.createElement(n.strong,null,"prettier")," au sein de VS Code pour bien utiliser le boilerplate d'une API.",r.createElement(n.br),"\n","Vous l'avez normalement déjà fait au module 2. Si non, veuillez suivre la procédure donnée ici : ",r.createElement(n.a,{href:"/js2/modules/2/#a6"},"Module 2 : a.6) Installation des extensions pour le linter et le formater")),"\n",r.createElement(n.h1,null,r.createElement(s,null," Exercice 1.3 : Persistance de la RESTfull API pour myMovies ")),"\n",r.createElement(n.p,null,"Vous allez faire un refactor de la RESTful API de ",r.createElement(n.strong,null,"myMovies"),", afin d'utiliser les outils de développement modernes mis à disposition dans un boilerplate et afin de rendre les données persistantes dans un fichier JSON."),"\n",r.createElement(n.p,null,"Afin de réaliser cet exercice, voici les contraintes d'implémentation :"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Veuillez créer un nouveau projet dans votre repository local et votre web repository (normalement appelé ",r.createElement(n.strong,null,"web2"),") nommé ",r.createElement(n.strong,null,"/exercises/module5/5.1")," sur base du boilerplate : ",r.createElement(n.a,{href:"https://github.com/e-vinci/basic-api-boilerplate"},"basic-api-boilerplate"),"."),"\n",r.createElement(n.li,null,"Reprenez le code du router que vous avez développé à l'exercice précédent (Exercice 4.1) et intégrez le dans votre nouveau projet."),"\n",r.createElement(n.li,null,"Faites un refactor de votre API gérant les films afin que les ressources persistent au sein du fichier ",r.createElement(n.strong,null,"/data/films.json")," ou ",r.createElement(n.strong,null,"/data/movies.json"),"."),"\n",r.createElement(n.li,null,"Veuillez tester toutes les fonctions de la RESTful API pour la collection de films à l'aide du REST Client en copiant les requêtes développées pour l'Exercice 4.1 (fichier ",r.createElement(n.strong,null,"films.http")," du répertoire ",r.createElement(n.strong,null,"REST Client"),"). Normalement, il n'y a pas de nouvelles requêtes à écrire, il suffit juste de les exécuter."),"\n"),"\n",r.createElement(n.h4,null,"🤝 Tips"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"⚡ Si vous avez fait un clone du boilerplate, attention au Git dans le Git, n'oubliez pas de supprimer le dossier ",r.createElement(n.strong,null,".git")," présent dans votre nouveau projet."),"\n",r.createElement(n.li,null,"Vous pourriez simplement commencer en faisant un refactor de votre code sans gérer la persistance, simplement en utilisant le ",r.createElement(n.strong,null,"linter")," et ",r.createElement(n.strong,null,"formater"),".",r.createElement(n.br),"\n","Tant que nous n'installez pas les packages, le linter n'est pas activé dans VS Code. Il faut aussi fermer et réouvrir les fichiers une fois les packages installés pour que les erreurs de style apparaissent dans VS Code.",r.createElement(n.br),"\n","Il est intéressant de corriger toutes les erreurs de style avant de s'attaquer à la persistance."),"\n",r.createElement(n.li,null,"Vous avez un problème du type \"no such file or directory\" ? N'hésitez pas à créer un chemin correct vers votre fichier JSON à l'aide de la méthode ",r.createElement(n.code,null,"join")," de l'objet ",r.createElement(n.strong,null,"path")," :"),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},"const path = require('node:path');\r\n\r\nconst jsonDbPath = path.join(__dirname, '/../data/films.json');\n")),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Vous pourriez avoir besoin de convertir une string vers un entier, par exemple : ",r.createElement(n.code,null,"const id = parseInt(req.params.id, 10);"),"."),"\n"),"\n",r.createElement(n.p,null,"Le code de votre application web doit donc se trouver dans votre repository local et votre web repository (normalement appelé ",r.createElement(n.strong,null,"web2"),") dans le répertoire nommé ",r.createElement(n.strong,null,"/exercises/module5/5.1"),"."),"\n",r.createElement(n.p,null,"Veuillez faire un ",r.createElement(n.strong,null,"commit"),' de votre code avec le message suivant : "',r.createElement(n.strong,null,"myMovies : module 5 : persistent API"),'".'))}var u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(a,e)):a(e)};function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var i=t(4854),s=t(1263),c=t(5679),m=t(307),d=t(7410),p=t(9523),g=t(8075),E=t(9063),v=t(1631),b=t(6896),f=t(2770),h=t(7008),q=t(9771),z=t(1218),w=(t(5258),t(9394)),j=t(4579),I=t(9653),P=t(9256),S=t(6488),V=t(5175),x=t(158),N=t(6044);const k={Link:i.Link,Image:c.Z,Section:m.Z,Content:d.Z,Background:p.Z,SectionHeader:g.Z,SectionFooter:E.Z,PageHeader:v.Z,CodeBlock:f.Z,LinkFile:h.Z,ScrollableImage:q.Z,PublicProjectsView:z.Z,AuthenticatedBlock:w.Z,UnAuthenticatedBlock:j.Z,NestedMdxBlock:I.Z,YoutubeImage:P.Z,InternalPageMenu:S.Z,InternalPageMenuItem:V.Z,InternalPageTitle:x.Z,PathViewer:N.k,PathViewerItem:N.F};function y(e){var n,t,a,u,o;let{data:{mdx:i,allImages:c},children:m}=e;return k.PageHeader=(0,b.u)(v.Z,null==i?void 0:i.frontmatter),r.createElement(s.Z,Object.assign({},null!=i&&i.frontmatter?{frontmatter:i.frontmatter}:{},null!=i&&null!==(n=i.frontmatter)&&void 0!==n&&n.navbarExtraStyles?{navbarExtraStyles:i.frontmatter.navbarExtraStyles}:{},null!=i&&null!==(t=i.frontmatter)&&void 0!==t&&t.headerImage?{headerImage:i.frontmatter.headerImage}:{},null!=i&&null!==(a=i.frontmatter)&&void 0!==a&&a.featuredImage?{featuredImage:i.frontmatter.featuredImage}:{},null!=i&&null!==(u=i.frontmatter)&&void 0!==u&&u.title?{pageTitle:i.frontmatter.title}:{},c&&c.length>0?{allImages:c}:{}),r.createElement(l.Zo,{components:k},r.createElement("div",{className:null!=i&&null!==(o=i.frontmatter)&&void 0!==o&&o.autoMargin?"page page--auto-margin":"page"},m)))}function C(e){return r.createElement(y,e,r.createElement(u,e))}}}]);
//# sourceMappingURL=component---src-templates-mdx-pages-js-content-file-path-src-mdx-pages-part-1-tools-fr-mdx-caa72d6a24dd5ac11f25.js.map