"use strict";(self.webpackChunkmyjscourse=self.webpackChunkmyjscourse||[]).push([[1114],{6802:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var l=t(3905),a=t(7294);function r(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",ol:"ol",li:"li",br:"br",em:"em",pre:"pre",h2:"h2",a:"a",ul:"ul",h4:"h4"},(0,l.ah)(),e.components),{InternalPageMenu:t,PathViewer:r,PathViewerItem:i,InternalPageMenuItem:u,InternalPageTitle:s,LinkFile:c,UnAuthenticatedBlock:m,AuthenticatedBlock:d}=n;return d||o("AuthenticatedBlock",!0),t||o("InternalPageMenu",!0),u||o("InternalPageMenuItem",!0),s||o("InternalPageTitle",!0),c||o("LinkFile",!0),r||o("PathViewer",!0),i||o("PathViewerItem",!0),m||o("UnAuthenticatedBlock",!0),a.createElement(a.Fragment,null,a.createElement(n.h1,null,"i) Les animations et jeux vidéo"),"\n",a.createElement(t,null,a.createElement(r,null,a.createElement(i,{to:"/"}," web2course "),a.createElement(i,{to:"/part2"}," Partie 2 "),a.createElement(i,{selected:!0}," i) Les animations et jeux vidéo ")),a.createElement(u,null," 🍬 Animations via l'API Canvas "),a.createElement(u,null," 🍬 Animations via une librairie externe "),a.createElement(u,null," Exercice 2.13 : Gestion d'événements associés à une animation "),a.createElement(u,null," 🍬 Jeux vidéo en 2D via Phaser "),a.createElement(u,null," Projet 2.14 : animation ")),"\n",a.createElement(n.h1,null,a.createElement(s,null," 🍬 Animations via l'API Canvas ")),"\n",a.createElement(n.p,null,"L'API Canvas offerte par le browser permet de créer des animations (2D ou 3D) à l'aide de JS et de l'élément HTML ",a.createElement(n.strong,null,a.createElement(n.code,null,"<canvas>")),"."),"\n",a.createElement(n.p,null,"Il existe d'autres API fournies par le browser pour dessiner dans un browser qui ne seront pas vues dans ce cours : WebGL, SVG DOM Interface..."),"\n",a.createElement(n.p,null,"Voici les étapes pour créer une animation à l'aide de l'API Canvas :"),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"Ajout d'un élément ",a.createElement(n.strong,null,a.createElement(n.code,null,"<canvas>"))," dans votre HTML et accès à cet objet via du JS ;",a.createElement(n.br),"\n",a.createElement(n.em,null,"Voici un exemple où l'on crée un élément ",a.createElement(n.strong,null,a.createElement(n.code,null,"canvas"))," dans le main d'",a.createElement(n.strong,null,a.createElement(n.code,null,"index.html"))," à l'aide de JS")," :"),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"const main = document.querySelector('main');  \nmain.innerHTML = '<canvas />';\nconst canvas = document.querySelector('canvas');\n")),"\n",a.createElement(n.ol,{start:"2"},"\n",a.createElement(n.li,null,"Si nécessaire, définition du style du ",a.createElement(n.strong,null,a.createElement(n.code,null,"canvas"))," et éventuellement du ",a.createElement(n.strong,null,a.createElement(n.code,null,"body"))," à l'aide de CSS, Bootstrap ou autres, ou directement du JS.",a.createElement(n.br),"\n",a.createElement(n.em,null,"Voici un exemple où l'on gère la taille du canvas via du JS")," :"),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"const main = document.querySelector('main');\nconst mainWidth = main.clientWidth;\nconst mainHeight = main.clientHeight;\nconst canvas = document.querySelector('canvas');\ncanvas.width = mainWidth;\ncanvas.height = mainHeight;\n")),"\n",a.createElement(n.ol,{start:"3"},"\n",a.createElement(n.li,null,"Accès au contexte de rendu du canvas pour pouvoir dessiner dessus en 2D en utilisant les ",a.createElement(n.strong,null,"Canvas API"),".",a.createElement(n.br),"\n",a.createElement(n.em,null,"Voici un exemple où l'on dessine un carré de couleur bleue à une position aléatoire dans le main :")),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"const DEFAULT_COLOR = 'blue';\nconst main = document.querySelector('main');\nconst mainWidth = main.clientWidth;\nconst mainHeight = main.clientHeight;\nconst canvas = document.querySelector('canvas');\ncanvasContext = canvas.getContext('2d');\ncanvasContext.fillStyle = DEFAULT_COLOR;\ncanvasContext.fillRect(Math.random() * mainWidth, Math.random() * mainHeight, 20, 20);\n")),"\n",a.createElement(n.ol,{start:"4"},"\n",a.createElement(n.li,null,'Création d\'une animation en affichant successivement des "frames".',a.createElement(n.br),"\n",a.createElement(n.em,null,"On pourrait appeler la fonction ",a.createElement(n.strong,null,a.createElement(n.code,null,"setInterval")),", néanmoins cette fonction n'est pas optimisée pour s'assurer que le browser a les ressources pour effectuer les appels périodiques demandés.  On utilise donc la fonction ",a.createElement(n.strong,null,a.createElement(n.code,null,"window.requestAnimationFrame(callback)"))," qui permet d'appeler une ",a.createElement(n.strong,null,a.createElement(n.code,null,"callback"))," environ 60 fois / s, quand le browser est prêt. Voici la structure du code JS qui permet de créer une animation à l'aide des Canvas API :")),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"requestAnimationFrame(drawOneFrame);\nfunction drawOneFrame() {\n  // 1. clear de canvas\n  // 2. draw the current frame   \n  // 3. refresh automatically the animation via a recursive call\n  requestAnimationFrame(drawOneFrame);\n}\n")),"\n",a.createElement(n.h2,null,"Exemple d'animation"),"\n",a.createElement(n.p,null,"Nous vous offrons un exemple d'animation faite à l'aide des Canvas API : ",a.createElement(n.a,{href:"https://github.com/e-vinci/js-demos/tree/main/frontend/canvas"},"canvas"),"."),"\n",a.createElement(n.p,null,"N'hésitez pas à exécuter cette application et à comprendre le code associé. Ce code va être utilisé pour un prochain exercice."),"\n",a.createElement(n.h1,null,a.createElement(s,null," 🍬 Animations via une librairie externe ")),"\n",a.createElement(n.p,null,"Il existe de nombreuses librairies JS animant différentes propriétés :  CSS, attributs DOM, objets JS, SVG..."),"\n",a.createElement(n.p,null,"Voici quelques librairies Open Source que nous recommandons :"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Pour les animations 2D : ",a.createElement(n.a,{href:"https://animejs.com/"},"anime")),"\n",a.createElement(n.li,null,"Pour les jeux en 2D : ",a.createElement(n.a,{href:"https://phaser.io/"},"Phaser")),"\n",a.createElement(n.li,null,"Pour les animations 3D : ",a.createElement(n.a,{href:"https://threejs.org/"},"three.js")),"\n"),"\n",a.createElement(n.p,null,"Il existe aussi une librairie commerciale qui reste néanmoins intéressante : ",a.createElement(n.a,{href:"https://greensock.com/"},"GreenSock"),"."),"\n",a.createElement(n.p,null,"Si vous souhaitez utiliser les librairies recommandées pour créer des animations, vous avez les connaissance en JS suffisante pour le faire par vous-même, à l'aide de la documentation proposée sur le site de la librairie que vous choisiriez."),"\n",a.createElement(n.p,null,"Le truc concernant les animations, c'est d'avancer pas à pas, et de réfléchir à ce que vous souhaitez faire en terme d'objectifs fonctionnels."),"\n",a.createElement(n.p,null,"Imaginez que nous souhaitons faire une animation qui mette à disposition un mot tournant comme une hélice :"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Ce mot doit tourner comme une hélice au passage de la souris sur le mot."),"\n",a.createElement(n.li,null,"En cliquant sur la flèche haut ou bas du clavier, l'hélice doit monter ou descendre."),"\n",a.createElement(n.li,null,"En cliquant sur le mot, celui-ci doit :","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"arrêter de tourner"),"\n",a.createElement(n.li,null,"se mettre à grandir puis rapetissir."),"\n"),"\n"),"\n"),"\n",a.createElement(n.p,null,"Fonctionnellement, ce que nous souhaitons faire semble clair."),"\n",a.createElement(n.p,null,"Maintenant, à l'aide d'éléments HTML, de propriétés CSS, et de JS, comment pourrions nous aborder ce problème ?"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Nous avons besoin d'une hélice qui tourne. Nous allons probablement pouvoir utiliser une ",a.createElement(n.strong,null,a.createElement(n.code,null,"div"))," pour cela qui prendra la largeur du mot.",a.createElement(n.br),"\n",a.createElement(n.em,null,"Dans le code associé, nous pourrions identifier cette balise par l'id ",a.createElement(n.strong,null,a.createElement(n.code,null,"propeller"))),"."),"\n",a.createElement(n.li,null,"Nous avons besoin de faire monter ou descendre notre hélice. Pourquoi ne pas utiliser une nouvelle ",a.createElement(n.strong,null,a.createElement(n.code,null,"div"))," qui fera office d'ascenseur, et qui contiendra notre hélice.",a.createElement(n.br),"\n",a.createElement(n.em,null,"Dans le code associé, nous pourrions identifier cette balise par l'id ",a.createElement(n.strong,null,a.createElement(n.code,null,"lift"))),"."),"\n",a.createElement(n.li,null,"Ensuite, il reste à gérer des écouteurs d'événements sur le clavier, et sur ces divs. Il serait pratique d'utiliser une librairie d'animation 2D pour faciliter les mouvements de l'hélice."),"\n"),"\n",a.createElement(n.p,null,"La suite montre comment cela a été implémenté à l'aide de la librairie ",a.createElement(n.strong,null,a.createElement(n.code,null,"anime.js")),"."),"\n",a.createElement(n.h2,null,"Exemple d'animation à l'aide d'anime.js"),"\n",a.createElement(n.p,null,"Nous vous offrons un exemple d'animation faite à l'aide d'",a.createElement(n.strong,null,"anime")," : ",a.createElement(n.a,{href:"https://github.com/e-vinci/js-demos/tree/main/frontend/anime"},"anime")," pour implémenter un mot qui tourne comme une hélice."),"\n",a.createElement(n.p,null,"N'hésitez pas à exécuter cette application et à comprendre le code associé."),"\n",a.createElement(n.p,null,"Voici quelques explications :"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Nous avons statiquement implémenté la structure de l'hélice et de l'ascenseur dans le fichier ",a.createElement(n.strong,null,a.createElement(n.code,null,"index.html"))," :"),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-html"},'<div id="lift">\n \x3c!-- d-inline-block allow to wrap the div to the width of its content --\x3e\n <div class="text-center bg-secondary d-inline-block" id="propeller">\n   XXX<a href="#" class="btn btn-primary" id="message">Welcome</a>XXX\n </div>\n</div>\n')),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Nous avons installé ",a.createElement(n.strong,null,"anime.js")," et appris à l'utiliser grâce à la documentation ",a.createElement(n.a,{href:"https://github.com/juliangarnier/anime/"},"https://github.com/juliangarnier/anime/")," :","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Installation")," :"),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-bash"},"npm i animejs\n")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Utilisation de la librairie")," dans un module :"),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"import anime from 'animejs/lib/anime.es.js';\n")),"\n"),"\n",a.createElement(n.li,null,"On utilise la fonction ",a.createElement(n.strong,null,a.createElement(n.code,null,"anime"))," pour réaliser les animations que l'on cible aux ",a.createElement(n.strong,null,a.createElement(n.code,null,"div"))," via leur ",a.createElement(n.strong,null,a.createElement(n.code,null,"id"))," dans la propriété ",a.createElement(n.strong,null,a.createElement(n.code,null,"targets")),"."),"\n"),"\n",a.createElement(n.h1,null,a.createElement(s,null," Exercice 2.13 : Gestion d'événements associés à une animation ")),"\n",a.createElement(n.p,null,"Veuillez adapter une application web permettant l'affichage de différents scintillements de formes selon la demande de l'utilisateur."),"\n",a.createElement(n.p,null,"Veuillez créer un nouveau projet dans votre repository local et votre web repository (normalement appelé ",a.createElement(n.strong,null,a.createElement(n.code,null,"web2")),") nommé ",a.createElement(n.strong,null,a.createElement(n.code,null,"/exercises/2.13"))," en copiant/collant le code à adapter se trouvant dans ce dossier (du repo associé aux tutoriels & démos) : ",a.createElement(n.a,{href:"https://github.com/e-vinci/js-demos/tree/main/frontend/canvas"},"/demo/canvas"),"."),"\n",a.createElement(n.p,null,"Veuillez retravailler l'animation pour que :"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"elle s'arrête ou démarre lors d'un clic gauche d'un utilisateur ;"),"\n",a.createElement(n.li,null,"les carrés grandissent ou rapetississent au clic sur la touche ",a.createElement(n.strong,null,a.createElement(n.code,null,"+"))," ou la touche ",a.createElement(n.strong,null,a.createElement(n.code,null,"-"))," ;"),"\n",a.createElement(n.li,null,"lors d'un clic droit de la souris, la couleur des carrés change de manière aléatoire."),"\n"),"\n",a.createElement(n.p,null,"Quand votre application est finalisée, veuillez faire un ",a.createElement(n.strong,null,a.createElement(n.code,null,"commit"))," de votre code avec comme message : ",a.createElement(n.strong,null,a.createElement(n.code,null,"2.13 : canvas event management")),"."),"\n",a.createElement(n.h4,null,"🤝 Tips"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Si vous ne souhaitez pas cloner tout un repo afin d'aller simplement chercher un dossier dans celui-ci, GitHub ne vous facilite pas la vie. Par exemple, dans le repo ",a.createElement(n.a,{href:"https://github.com/e-vinci/js-demos"},"https://github.com/e-vinci/js-demos"),", on souhaite télécharger uniquement le contenu du dossier ",a.createElement(n.a,{href:"https://github.com/e-vinci/js-demos/tree/main/frontend/canvas"},"https://github.com/e-vinci/js-demos/tree/main/frontend/canvas"),". Vous pouvez coller ce dernier lien sur le site ",a.createElement(n.a,{href:"https://download-directory.github.io/"},"https://download-directory.github.io/")," qui créera une archive du dossier qui vous intéresse."),"\n",a.createElement(n.li,null,"N'hésitez pas à découvrir la documentation de ",a.createElement(n.strong,null,a.createElement(n.code,null,"requestAnimationFrame()"))," pour voir comment stopper une animation.",a.createElement(n.br),"\n","Toujours pas d'idée ? N'hésitez pas à utiliser la fonction ",a.createElement(n.strong,null,a.createElement(n.code,null,"cancelAnimationFrame()")),"."),"\n",a.createElement(n.li,null,"Vous pouvez utiliser le type d'événement ",a.createElement(n.strong,null,a.createElement(n.code,null,"contextmenu"))," pour gérer les clics droits. Plus d'info dans la ",a.createElement(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event"},"documentation de MDN")),"\n",a.createElement(n.li,null,"Vous pouvez écouter le type d'événement ",a.createElement(n.strong,null,a.createElement(n.code,null,"keydown"))," sur l'objet ",a.createElement(n.strong,null,a.createElement(n.code,null,"document"))," pour gérer l'appui sur les touches ",a.createElement(n.strong,null,a.createElement(n.code,null,"+"))," ou ",a.createElement(n.strong,null,a.createElement(n.code,null,"-")),".",a.createElement(n.br),"\n","Plus d'info dans la ",a.createElement(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event"},"documentation de MDN"),"."),"\n",a.createElement(n.li,null,"Si vous avez besoin de générer un nombre aléatoire de 0 à 255 :"),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"Math.floor(Math.random() * 256); // [0,255]\n")),"\n",a.createElement(n.h1,null,a.createElement(s,null," 🍬 Jeux vidéo en 2D via Phaser ")),"\n",a.createElement(n.h2,null,"Introduction"),"\n",a.createElement(n.p,null,"Si vous souhaitez créer un jeu vidéo en 2D pour des browsers, nous vous conseillons la librairie ",a.createElement(n.a,{href:"https://phaser.io/"},"Phaser"),"."),"\n",a.createElement(n.h2,null,"Cours de Phaser offert"),"\n",a.createElement(n.p,null,'Rudi Giot, un incroyable enseignant à l\'ISIB (HE2B), met généreusement à notre disposition son cours nommé "Phaser - Jeux vidéo 2D" : ',a.createElement(n.a,{href:"https://github.com/RudiGiot/Phaser"},"https://github.com/RudiGiot/Phaser"),"."),"\n",a.createElement(n.p,null,"La dernière version du Syllabus au format pdf est disponible ici : ",a.createElement(c,{name:"Phaser.pdf",target:"_blank",download:!0},"Phaser - Jeux vidéo 2D en Javascript"),"."),"\n",a.createElement(n.h2,null,"Boilerplate pour réaliser un jeu Phaser à l'aide de Webpack"),"\n",a.createElement(n.p,null,"Il n'est pas simple d'intégrer Phaser au sein de Webpack et des outils de développement offerts dans ce cours de JS. Cela peut prendre plusieurs jours avant d'obtenir une bonne configuration, ce qui peut vite devenir frustrant."),"\n",a.createElement(n.p,null,"Nous vous offrons donc un boilerplate si vous souhaitez créer un jeu vidéo Phaser en utilisant les outils modernes mis en place dans ce cours :  ",a.createElement(n.a,{href:"https://github.com/e-vinci/js-phaser-boilerplate"},"js-phaser-boilerplate"),"."),"\n",a.createElement(n.p,null,"Pour information, la source de la configuration de Webpack provient principalement de ",a.createElement(n.a,{href:"https://github.com/photonstorm/phaser3-project-template"},"Phaser 3 Webpack Project Template"),".",a.createElement(n.br),"\n","Le jeu présenté dans le boilerplate est basé sur le tutoriel nommé ",a.createElement(n.a,{href:"https://blog.ourcade.co/posts/2020/make-first-phaser-3-game-modern-javascript-part1/"},"Modern JavaScript Phaser 3 Tutorial : Part 1 to Part 5")," et utilise Webpack au lieu de Parcel comme module bundler."),"\n",a.createElement(n.h1,null,a.createElement(s,null," Projet 2.14 : animation ")),"\n",a.createElement(n.p,null,"Veuillez enrichir le frontend de votre projet en développant une animation 2D, 3D ou un jeu vidéo en utilisant une librairie externe. Nous vous conseillons d'utiliser une des librairies proposées sur cette page, néanmoins, vous pouvez tenter d'utiliser d'autres librairies."),"\n",a.createElement(n.p,null,"Dans un premier temps, identifiez ce qui pourrait être rendu interactif, ce qui aurait du sens.\nSi par exemple votre projet offre un quizz, alors il serait intéressant d'avoir une animation si le score est bon, et une autre animation si le score est mauvais."),"\n",a.createElement(n.p,null,"Une fois que vous avez une bonne idée de ce que vous souhaitez animer, du comportement fonctionnel attendu, vous devez sélectionner une librairie externe pour le faire (",a.createElement(n.strong,null,"anime.js"),", ",a.createElement(n.strong,null,"three.js"),"...)."),"\n",a.createElement(n.p,null,"Veuillez repartir du code de ",a.createElement(n.a,{href:"../routing/#projet_2_12_navigation_router"},"Projet 2.12"),".",a.createElement(n.br),"\n","Le code de votre application doit se trouver dans votre repository local et votre web repository (normalement appelé ",a.createElement(n.strong,null,a.createElement(n.code,null,"web2")),") dans le répertoire nommé ",a.createElement(n.strong,null,a.createElement(n.code,null,"/project/2.14")),"."),"\n",a.createElement(m,null,a.createElement(n.p,null,"Si vous avez choisi comme projet de travailler sur l'application ",a.createElement(n.strong,null,a.createElement(n.code,null,"myMovies")),", vous pourriez commencer par créer une simple animation à l'aide de la librairie anime.js pour rendre votre ",a.createElement(n.strong,null,a.createElement(n.code,null,"HomePage"))," attractive.")),"\n",a.createElement(d,null,a.createElement(n.p,null,"Veuillez travailler avec les membres de votre groupe.",a.createElement(n.br),"\n","S'il y a plusieurs animations à développer pour votre projet, il est intéressant de vous partager le travail.",a.createElement(n.br),"\n","N'hésitez pas à soit chacun coder un prototype de l'application, soit en pair programming, soit à 3-4-5 étudiants, selon vos goûts."),a.createElement(n.p,null,"Au cours de la séance, vos enseignants vous inviteront :"),a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"à identifier les technologies appropriées pour vos animations ;"),"\n",a.createElement(n.li,null,"à discuter de vos choix technologiques ;"),"\n",a.createElement(n.li,null,"à identifier comment vous allez apprendre la nouvelle technologie (",a.createElement(n.strong,null,"anime.js"),", ",a.createElement(n.strong,null,"three.js"),"...) et développer vos animations."),"\n"),a.createElement(n.p,null,"Quand vous travaillez sur le code de votre projet, vous pouvez aussi directement travailler sur le web repo de votre groupe. Néanmoins, il peut être intéressant de d'abord fournir un prototype d'animation dans votre web repo personnel au sein de ",a.createElement(n.strong,null,a.createElement(n.code,null,"/project/2.14")),".")),"\n",a.createElement(n.p,null,"Quand un prototype d'animation est finalisé, veuillez faire un ",a.createElement(n.strong,null,a.createElement(n.code,null,"commit"))," de votre code avec comme message : ",a.createElement(n.strong,null,a.createElement(n.code,null,"2.14 : animation")),"."))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)};function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=t(4160),s=t(5583),c=t(5679),m=t(307),d=t(7410),p=t(9523),E=t(8075),v=t(9063),h=t(1631),g=t(5772),f=t(2770),b=t(7008),j=t(9771),P=t(1218),x=(t(5258),t(9394)),q=t(4579),I=t(7743),S=t(9256),w=t(6488),z=t(5175),y=t(6387),k=t(6044);const A={Link:u.Link,Image:c.Z,Section:m.Z,Content:d.Z,Background:p.Z,SectionHeader:E.Z,SectionFooter:v.Z,PageHeader:h.Z,CodeBlock:f.Z,LinkFile:b.Z,ScrollableImage:j.Z,PublicProjectsView:P.Z,AuthenticatedBlock:x.Z,UnAuthenticatedBlock:q.Z,NestedMdxBlock:I.Z,YoutubeImage:S.Z,InternalPageMenu:w.Z,InternalPageMenuItem:z.Z,InternalPageTitle:y.Z,PathViewer:k.k,PathViewerItem:k.F};function N(e){var n,t,r,i,o;let{data:{mdx:u,allImages:c},children:m}=e;return A.PageHeader=(0,g.u)(h.Z,null==u?void 0:u.frontmatter),a.createElement(s.Z,Object.assign({},null!=u&&u.frontmatter?{frontmatter:u.frontmatter}:{},null!=u&&null!==(n=u.frontmatter)&&void 0!==n&&n.navbarExtraStyles?{navbarExtraStyles:u.frontmatter.navbarExtraStyles}:{},null!=u&&null!==(t=u.frontmatter)&&void 0!==t&&t.headerImage?{headerImage:u.frontmatter.headerImage}:{},null!=u&&null!==(r=u.frontmatter)&&void 0!==r&&r.featuredImage?{featuredImage:u.frontmatter.featuredImage}:{},null!=u&&null!==(i=u.frontmatter)&&void 0!==i&&i.title?{pageTitle:u.frontmatter.title}:{},c&&c.length>0?{allImages:c}:{}),a.createElement(l.Zo,{components:A},a.createElement("div",{className:null!=u&&null!==(o=u.frontmatter)&&void 0!==o&&o.autoMargin?"page page--auto-margin ":"page"},m)))}function C(e){return a.createElement(N,e,a.createElement(i,e))}}}]);
//# sourceMappingURL=component---src-templates-mdx-pages-js-content-file-path-src-mdx-pages-part-2-animations-fr-mdx-ea68b9f8bfbcb4e1ea48.js.map