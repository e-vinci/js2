"use strict";(self.webpackChunkmyjscourse=self.webpackChunkmyjscourse||[]).push([[8626],{2502:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r=t(5680),l=t(6540);function a(e){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",br:"br",h2:"h2",strong:"strong",ul:"ul",li:"li",h4:"h4"},(0,r.RP)(),e.components),{InternalPageMenu:t,PathViewer:a,PathViewerItem:o,InternalPageMenuItem:s,InternalPageTitle:u}=n;return t||i("InternalPageMenu",!0),s||i("InternalPageMenuItem",!0),u||i("InternalPageTitle",!0),a||i("PathViewer",!0),o||i("PathViewerItem",!0),l.createElement(l.Fragment,null,l.createElement(n.h1,null,"c) Destructuring et l'état"),"\n",l.createElement(t,null,l.createElement(a,null,l.createElement(o,{to:"/"}," web2course "),l.createElement(o,{to:"/part2"}," Partie 2 "),l.createElement(o,{selected:!0}," c) Destructuring et l'état ")),l.createElement(s,null," Destructuring "),l.createElement(s,null," Gestion de l'état "),l.createElement(s,null," Gestionnaire d'événements "),l.createElement(s,null," Exercice 2.5 : Destructing & composant stateful "),l.createElement(s,null," Exercice 2.6 : Un autre composant stateful "),l.createElement(s,null," Exercice 2.6b : Composant de sélection de couleur ")),"\n",l.createElement(n.h1,null,l.createElement(u,null," Destructuring  ")),"\n",l.createElement(n.p,null,'Un premier exemple de "destructing assignment" a déjà été présenté dans ce cours : ',l.createElement(n.a,{href:"../../part0/js-language/#le_destructuring_assignment"},"apprentissage de JS"),"."),"\n",l.createElement(n.p,null,"Nous souhaitons améliorer la lisibilité de notre code et ne plus avoir à taper ",l.createElement(n.code,null,"props.nomDeLaProps")," au sein de nos composants React."),"\n",l.createElement(n.p,null,"Pour ce tutoriel, veuillez créer une copie du tutoriel ",l.createElement(n.code,null,"collections"),", si nécessaire voici le code du tutoriel ",l.createElement(n.a,{href:"https://github.com/e-vinci/ts-demos/tree/main/front/collections"},"collections"),", et l'appeler ",l.createElement(n.code,null,"start-state"),". Changez le nom du projet dans ",l.createElement(n.code,null,"package.json"),"."),"\n",l.createElement(n.p,null,"Par exemple, nous pourrions simplifier ce composant ",l.createElement(n.code,null,"Header")," :"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-tsx"},'const Header = (props: HeaderProps) => {\r\n  return (\r\n    <header>\r\n      <h1 className="animate__animated animate__bounce">{props.title}</h1>\r\n      <h4>Version: {props.version}</h4>\r\n    </header>\r\n  );\r\n};\n')),"\n",l.createElement(n.p,null,'Une première étape, en utilisant le "destructuring assignment", serait :'),"\n",l.createElement(n.pre,{highlighting:"2,5-6"},l.createElement(n.code,{className:"language-tsx"},'const Header = (props: HeaderProps) => {\r\n  const { title, version } = props;\r\n  return (\r\n    <header>\r\n      <h1 className="animate__animated animate__bounce">{title}</h1>\r\n      <h4>Version: {version}</h4>\r\n    </header>\r\n  );\r\n};\n')),"\n",l.createElement(n.p,null,"Mais nous pouvons faire le destructuring assignment directement dans le paramètre de la fonction ",l.createElement(n.code,null,"Header")," :"),"\n",l.createElement(n.pre,{highlighting:"1,4-5"},l.createElement(n.code,{className:"language-tsx"},'const Header = ({ title, version }: HeaderProps) => {\r\n  return (\r\n    <header>\r\n      <h1 className="animate__animated animate__bounce">{title}</h1>\r\n      <h4>Version: {version}</h4>\r\n    </header>\r\n  );\r\n};\n')),"\n",l.createElement(n.p,null,"Ainsi, nous avons un code plus concis et plus clair : on sait directement quelles props le composant attend et utilise.",l.createElement(n.br),"\n","👍 Dans la suite de ce cours, nous vous recommandons d'utiliser le destructuring assignment pour passer vos props. Cela rend le code plus lisible, on voit directement les paramètres attendus par la fonction."),"\n",l.createElement(n.p,null,"En plus de mettre à jour ",l.createElement(n.code,null,"Header"),", veuillez mettre à jour ",l.createElement(n.code,null,"DrinkMenu")," :"),"\n",l.createElement(n.pre,{highlighting:"1,4-5"},l.createElement(n.code,{className:"language-tsx"},'const DrinkMenu = ({ title, children }: DrinkMenuProps) => {\r\n  return (\r\n    <div className="drink-menu">\r\n      <h4>{title}</h4>\r\n      <div className="drink-items">{children}</div>\r\n    </div>\r\n  );\r\n};\n')),"\n",l.createElement(n.p,null,"Veuillez aussi mettre à jour ",l.createElement(n.code,null,"DrinkCard")," :"),"\n",l.createElement(n.pre,{highlighting:"1,4-6"},l.createElement(n.code,{className:"language-tsx"},'const DrinkCard = ({ title, image, children }: DrinkCardProps) => {\r\n  return (\r\n    <div className="drink-card">\r\n      <img src={image} alt={title} className="drink-image" width="50" />\r\n      <h2>{title}</h2>\r\n      <div className="drink-details">{children}</div>\r\n    </div>\r\n  );\r\n};\n')),"\n",l.createElement(n.h1,null,l.createElement(u,null," Gestion de l'état  ")),"\n",l.createElement(n.h2,null,"Comment gérer l'affichage de nouvelles informations ?"),"\n",l.createElement(n.p,null,"Jusque là, toutes les UI que nous avons développées ne changent pas d'apparence après le premier rendu."),"\n",l.createElement(n.p,null,'Néanmoins, il y a plein de cas où nous souhaiterions avoir une UI qui se "re-render", se "ré-affiche", après un événement, tel qu\'une action des utilisateurs ou un événement temporel.'),"\n",l.createElement(n.p,null,"Par exemple, nous souhaiterions que dans notre application, lorsqu'on clique sur le ",l.createElement(n.code,null,"Header"),", nous affichions un message au sein de ce ",l.createElement(n.code,null,"Header"),"."),"\n",l.createElement(n.p,null,'Si nous faisions de la programmation "old school", que l\'on appelle la ',l.createElement(n.strong,null,'programmation "impérative"'),", nous devrions nous même :"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"attacher des fonctions à notre UI qui permettent de gérer les événements. Lors d'un clic par exemple, on devrait récupérer une référence vers la représentation mémoire du ",l.createElement(n.code,null,"<header>"),";"),"\n",l.createElement(n.li,null,"mettre à jour le contenu HTML de cette représentation, généralement via la propriété ",l.createElement(n.code,null,".innerHTML")," de ",l.createElement(n.code,null,"<header>")," en lui passant le message à afficher (soit sous forme de string, soit en attachant un nouvel élément mémoire correspondant au message).\r\nLe browser se charge ensuite de réafficher la page une fois la structure mémoire de la page mise à jour par le JS/TS."),"\n"),"\n",l.createElement(n.p,null,"Ici, comme nous utilisons React, nous faisons de la ",l.createElement(n.strong,null,'programmation "déclarative"'),". Nous déclarons des UI (via des composants React), et si nous souhaitons rafraîchir les pages, nous devons :"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"déclarer un état associé à notre UI. L'état de notre application, c'est toutes les variables qui vont pouvoir amener à un changement de notre UI."),"\n",l.createElement(n.li,null,"attacher notre UI à des variables d'état."),"\n",l.createElement(n.li,null,"attacher des fonctions à notre UI qui permettent de gérer les événements. Lors d'un event, ces fonctions doivent informer React qu'il y a eu un changement d'état."),"\n",l.createElement(n.li,null,"laisser la magie de l'outil (React ici) mettre à jour toutes les parties de l'UI qui sont impactées par le changement d'état : on parle de \"re-rendering\".\r\nCes mécanismes permettent de bien simplifier et optimiser le rendering d'UI."),"\n"),"\n",l.createElement(n.p,null,"Voyons ce que ça donne dans la pratique !"),"\n",l.createElement(n.h2,null,"Composant stateful"),"\n",l.createElement(n.p,null,"Un composant \"stateful\" est un composant qui a un état, c'est à dire au moins une variable qui va permettre de rafraîchir l'UI."),"\n",l.createElement(n.p,null,"Pour notre tutoriel, nous allons créer la variable d'état ",l.createElement(n.code,null,"messagePrinted")," qui sera un booléen permettant de savoir si l'on affiche ou pas le message caché du ",l.createElement(n.code,null,"Header"),". Nous allons aussi avoir une fonction ",l.createElement(n.code,null,"setMessagePrinted")," pour changer la valeur du booléen."),"\n",l.createElement(n.p,null,"Mettons à jour le composant ",l.createElement(n.code,null,"Header")," (qui se trouve dans ",l.createElement(n.code,null,"/src/components/Main/index.tsx"),") :"),"\n",l.createElement(n.pre,{numbered:!0,highlighting:"1,10,13,15"},l.createElement(n.code,{className:"language-tsx"},'import { useState } from "react";\r\nimport "./Header.css";\r\n\r\ninterface HeaderProps {\r\n  title: string;\r\n  version: number;\r\n}\r\n\r\nconst Header = ({ title, version }: HeaderProps) => {\r\n  const [menuPrinted, setMenuPrinted] = useState(false);\r\n\r\n  return (\r\n    <header onClick={() => setMenuPrinted(!menuPrinted)}>\r\n      <h1 className="animate__animated animate__bounce">\r\n        {menuPrinted ? `${title}... and rarely do we hate it!` : title}\r\n      </h1>\r\n      <h4>Version: {version}</h4>\r\n    </header>\r\n  );\r\n};\r\n\r\nexport default Header;\n')),"\n",l.createElement(n.p,null,"D'abord, nous avons importé le hook ",l.createElement(n.code,null,"useState")," de React, qui permet aux composants fonctionnels de gérer leur état interne."),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"useState(false)")," initialise une variable d'état ",l.createElement(n.code,null,"menuPrinted")," avec une valeur initiale de ",l.createElement(n.code,null,"false"),".",l.createElement(n.br),"\n",l.createElement(n.code,null,"setMenuPrinted")," est une fonction qui permet de mettre à jour l'état ",l.createElement(n.code,null,"menuPrinted"),". Elle est conventionnellement nommée avec ",l.createElement(n.code,null,"set")," suivi du nom de la variable d'état (",l.createElement(n.code,null,"MenuPrinted")," dans ce cas)."),"\n",l.createElement(n.p,null,"Que fait ce morceau de code ?"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-tsx"},"<header onClick={() => setMenuPrinted(!menuPrinted)}>\n")),"\n",l.createElement(n.p,null,"Cela attache un gestionnaire d'événements ",l.createElement(n.code,null,"onClick")," à l'élément ",l.createElement(n.code,null,"<header>"),".\r\n",l.createElement(n.code,null,"onClick"),' s\'attend à recevoir une fonction ! Ici on lui a passé une "function arrow" qui ne prend aucun paramètre.',l.createElement(n.br),"\n","Lorsque le ",l.createElement(n.strong,null,l.createElement(n.code,null,"<header>"))," est cliqué, la fonction bascule l'état ",l.createElement(n.code,null,"menuPrinted")," en appelant ",l.createElement(n.code,null,"setMenuPrinted(!menuPrinted)")," : si ",l.createElement(n.code,null,"menuPrinted")," est à ",l.createElement(n.code,null,"false"),", sa valeur est changée vers ",l.createElement(n.code,null,"true"),", et vice versa."),"\n",l.createElement(n.p,null,"La fonction ",l.createElement(n.code,null,"setMenuPrinted"),", qui permet de changer l'état, va informer React qu'il y a eu un changement d'état ! Et donc React va opérer un re-render."),"\n",l.createElement(n.p,null,"Lorsqu'un composant React subit un re-render, seule la fonction de rendu (c'est-à-dire la fonction qui contient le ",l.createElement(n.code,null,"return")," et qui définit l'interface utilisateur du composant) est réévaluée."),"\n",l.createElement(n.p,null,"Finalement, lors du rerender, nous allons assurer un rendu conditionnel sur base de la variable d'état :"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-tsx"},"{menuPrinted ? `${title}... and rarely do we hate it!` : title}\n")),"\n",l.createElement(n.p,null,"Notons que nous avons utilisé ici l'opérateur ternaire :",l.createElement(n.br),"\n",l.createElement(n.code,null,"condition ? valeurSiVraie : valeurSiFausse")),"\n",l.createElement(n.p,null,"Cette opérateur permet d'avoir du code plus concis. Si nous ne l'avions pas utilisé, nous aurions du écrire quelque chose du style :"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-tsx"},'const Header = ({ title, version }: HeaderProps) => {\r\n  const [menuPrinted, setMenuPrinted] = useState(false);\r\n\r\n  if (!menuPrinted) {\r\n    return (\r\n      <header onClick={() => setMenuPrinted(!menuPrinted)}>\r\n        <h1 className="animate__animated animate__bounce">{title}</h1>\r\n        <h4>Version: {version}</h4>\r\n      </header>\r\n    );\r\n  }\r\n\r\n  return (\r\n    <header onClick={() => setMenuPrinted(!menuPrinted)}>\r\n      <h1 className="animate__animated animate__bounce">\r\n        {`${title}... and rarely do we hate it!`}\r\n      </h1>\r\n      <h4>Version: {version}</h4>\r\n    </header>\r\n  );\r\n};\n')),"\n",l.createElement(n.p,null,"Ce code contient des répétitions et est moins lisible."),"\n",l.createElement(n.h1,null,l.createElement(u,null," Gestionnaire d'événements ")),"\n",l.createElement(n.p,null,"Un gestionnaire d'événement est une fonction."),"\n",l.createElement(n.pre,{highlighting:"5"},l.createElement(n.code,{className:"language-tsx"},'const Header = ({ title, version }: HeaderProps) => {\r\n  const [menuPrinted, setMenuPrinted] = useState(false);\r\n\r\n  return (\r\n    <header onClick={() => setMenuPrinted(!menuPrinted)}>\r\n      <h1 className="animate__animated animate__bounce">\r\n        {menuPrinted ? `${title}... and rarely do we hate it!` : title}\r\n      </h1>\r\n      <h4>Version: {version}</h4>\r\n    </header>\r\n  );\r\n};\n')),"\n",l.createElement(n.p,null,'Nous pouvons définir cette fonction comme "function arrow" (comme fait ci-dessus à côté de ',l.createElement(n.code,null,"onClick"),"),\r\nmais aussi comme fonction anonyme ou fonction nommée."),"\n",l.createElement(n.p,null,"Lorsqu'une fonction commence à avoir plusieurs instructions, il est recommandé de créer une fonction nommée.",l.createElement(n.br),"\n","En voici un exemple à reprendre dans votre tutoriel dans le composant ",l.createElement(n.code,null,"Header")," :"),"\n",l.createElement(n.pre,{numbered:!0,highlighting:"4-7,10"},l.createElement(n.code,{className:"language-tsx"},'const Header = ({ title, version }: HeaderProps) => {\r\n  const [menuPrinted, setMenuPrinted] = useState(false);\r\n\r\n  const handleClick = () => {\r\n    console.log(`value of menuPrinted before click: ${menuPrinted}`);\r\n    setMenuPrinted(!menuPrinted);\r\n  }\r\n\r\n  return (\r\n    <header onClick={handleClick}>\r\n      <h1 className="animate__animated animate__bounce">\r\n        {menuPrinted ? `${title}... and rarely do we hate it!` : title}\r\n      </h1>\r\n      <h4>Version: {version}</h4>\r\n    </header>\r\n  );\r\n};\n')),"\n",l.createElement(n.p,null,"👍 Il est recommandé que vos fonctions de gestion d'événements reçoivent un unique paramètre et portent un nom qui commence par ",l.createElement(n.strong,null,'"handle"')," afin de les identifier facilement."),"\n",l.createElement(n.p,null,"⚡️ Attention, un attributs d'événement (",l.createElement(n.code,null,"onClick"),"...) doit ",l.createElement(n.strong,null,"recevoir une fonction")," en valeur !",l.createElement(n.br),"\n","Une erreur classique est de lui passer l'",l.createElement(n.strong,null,"appel d'une fonction"),", comme par exemple :"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-tsx"},"<header onClick={handleClick()}>\n")),"\n",l.createElement(n.p,null,"Ici ça veut dire que dès que le script est appelé, à l'initialisation de l'application, on va automatiquement faire l'appel à ",l.createElement(n.code,null,"handleClick"),", bien qu'il n'y ait pas eu de clic..."),"\n",l.createElement(n.p,null,"Allez-y, veuillez tester pour voir ce que cette erreur classique provoque...\r\n",l.createElement(n.code,null,"Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.")," 😱."),"\n",l.createElement(n.p,null,"💭 Veuillez prendre un moment, au niveau de la compréhension de React, pour voir si vous savez expliquer pourquoi on va vers une boucle infinie."),"\n",l.createElement(n.p,null,"Si nécessaire, vous pouvez trouver le code associé à ce tutoriel ici : ",l.createElement(n.a,{href:"https://github.com/e-vinci/ts-demos/tree/main/front/start-state"},"start-state"),"."),"\n",l.createElement(n.h1,null,l.createElement(u,null," Exercice 2.5 : Destructing & composant stateful ")),"\n",l.createElement(n.p,null,"Veuillez créer un nouveau projet en utilisant les technos Vite + React + TS + SWC nommé ",l.createElement(n.code,null,"/exercises/2.5")," dans votre git repo."),"\n",l.createElement(n.p,null,"Par défaut, le projet de base vous offre déjà un compteur de clic."),"\n",l.createElement(n.p,null,"Commencez par prendre quelques minutes pour comprendre ce code et externaliser le compteur de clics dans un composant stateful nommé ",l.createElement(n.code,null,"ClickCounter"),"."),"\n",l.createElement(n.p,null,"Une fois tout fonctionnel et le code compris, veuillez faire un commit avec le message suivant : ",l.createElement(n.strong,null,l.createElement(n.code,null,"new:ex2.5-init")),"."),"\n",l.createElement(n.p,null,"Veuillez ensuite mettre à jour ce composant pour afficher :"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"un titre qu'il reçoit en props."),"\n",l.createElement(n.li,null,"un message sous le nombre de clics à afficher seulement à partir de 10 clics. Ce message doit être passé en props. Vous passerez cette valeur pour votre application : ",l.createElement(n.code,null,'"You are a master in the art of clicking !"'),"."),"\n"),"\n",l.createElement(n.p,null,'Veuillez utiliser le "destructing assignment" comme vu dans le cours.'),"\n",l.createElement(n.p,null,"Une fois tout fonctionnel, veuillez faire un commit avec le message suivant : ",l.createElement(n.strong,null,l.createElement(n.code,null,"new:ex2.5-destructuring")),"."),"\n",l.createElement(n.p,null,"Veuillez continuer votre application et ajouter deux gestionnaires d'événements qui permettront :"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"lors du passage de la souris sur le compteur, d'afficher un message au dessus du comptage de clics. Notez que ce message doit aussi être passé en props à ",l.createElement(n.code,null,"ClickCounter"),".",l.createElement(n.br),"\n","Vous passerez cette valeur pour votre application : ",l.createElement(n.code,null,'"Please click on me now !"'),"."),"\n",l.createElement(n.li,null,"lorsque la souris quitte le compteur, ce message doit être enlevé."),"\n"),"\n",l.createElement(n.p,null,"Une fois tout fonctionnel, veuillez faire un commit avec le message suivant : ",l.createElement(n.strong,null,l.createElement(n.code,null,"new:ex2.5-events")),"."),"\n",l.createElement(n.h4,null,"🤝 Tips"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Vous allez devoir gérer une nouvelle variable d'état pour savoir si la souris est sur le compteur ou si la souris a quitté le compteur."),"\n",l.createElement(n.li,null,"Quels gestionnaires d'événements ? Commencer à taper ",l.createElement(n.code,null,"on")," en propriétés de l'élément sur lequel vous voulez écouter les passages de souris et vous verrez la liste de tous les événements."),"\n",l.createElement(n.li,null,"Vous ne voyez toujours pas ? ",l.createElement(n.code,null,"onMouseEnter"),", ",l.createElement(n.code,null,"onMouseLeave")," ; )"),"\n",l.createElement(n.li,null,"N'hésitez pas à utiliser tout ce qui existe déjà dans ",l.createElement(n.code,null,"index.css")," concernant le button pour vous aider à gérer l'aspect visuel du compteur."),"\n"),"\n",l.createElement(n.h4,null,"🍬 Challenge : paramètres optionnels"),"\n",l.createElement(n.p,null,"Tentez de rendre les 2 messages passés en props à ",l.createElement(n.code,null,"ClickCounter")," optionnels, tout en leur donnant une valeur par défaut."),"\n",l.createElement(n.h1,null,l.createElement(u,null," Exercice 2.6 : Un autre composant stateful ")),"\n",l.createElement(n.p,null,"Veuillez partir d'un copier/coller du projet précédent ",l.createElement(n.code,null,"/exercises/2.1-2-3-4")," pour créer un nouveau projet nommé ",l.createElement(n.code,null,"/exercises/2.6")," dans votre git repo."),"\n",l.createElement(n.p,null,"Notre client a rajouté, dans les données des images associées aux films, une courte description. Veuillez créer un nouveau composant ",l.createElement(n.code,null,"Movie")," qui doit permettre :"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"D'afficher les mêmes données de films qui sont actuellement toutes traitées dans le composant ",l.createElement(n.code,null,"Cinema"),"(",l.createElement(n.code,null,"Cinema")," fera donc appel à ",l.createElement(n.code,null,"Movie"),") ;"),"\n",l.createElement(n.li,null,"D'afficher la description d'un film si les utilisateurs cliquent sur le film ;"),"\n",l.createElement(n.li,null,"De ne plus afficher cette description si les utilisateurs cliquent dessus."),"\n"),"\n",l.createElement(n.p,null,"Voici le nouveau format des données :"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-ts"},'const App = () => {\r\n  const pageTitle = "Informations sur les films dans les cinémas";\r\n\r\n  const cinema1Name = "UGC De Brouckère";\r\n\r\n  const moviesCinema1 = [\r\n    {\r\n      title: "HAIKYU-THE DUMPSTER BATTLE",\r\n      director: "Susumu Mitsunaka",\r\n      description:\r\n        "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors.",\r\n    },\r\n    {\r\n      title: "GOODBYE JULIA",\r\n      director: "Mohamed Kordofani",\r\n      description:\r\n        "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative.",\r\n    },\r\n    {\r\n      title: "INCEPTION",\r\n      director: "Christopher Nolan",\r\n      description:\r\n        "A mind-bending sci-fi thriller where a skilled thief, who enters people\'s dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target\'s subconscious.",\r\n    },\r\n    {\r\n      title: "PARASITE",\r\n      director: "Bong Joon-ho",\r\n      description:\r\n        "An Oscar-winning dark comedy thriller that examines class disparities through the story of two families — one wealthy, the other destitute — and their increasingly complicated relationship.",\r\n    },\r\n  ];\r\n\r\n  const cinema2Name = "UGC Toison d\'Or";\r\n\r\n  const moviesCinema2 = [\r\n    {\r\n      title: "THE WATCHERS",\r\n      director: "Ishana Night Shyamalan",\r\n      description:\r\n        "A suspenseful thriller that follows a group of people who are under constant surveillance, leading them to uncover dark secrets about their observers and themselves.",\r\n    },\r\n    {\r\n      title: "BAD BOYS: RIDE OR DIE",\r\n      director: "Adil El Arbi, Bilall Fallah",\r\n      description:\r\n        "The latest installment in the action-packed Bad Boys franchise, featuring detectives Mike Lowrey and Marcus Burnett as they take on their most dangerous case yet.",\r\n    },\r\n    {\r\n      title: "TENET",\r\n      director: "Christopher Nolan",\r\n      description:\r\n        "A complex and visually stunning sci-fi action film where a protagonist embarks on a time-bending mission to prevent World War III, navigating through a world of temporal inversion.",\r\n    },\r\n    {\r\n      title: "THE IRISHMAN",\r\n      director: "Martin Scorsese",\r\n      description:\r\n        "An epic crime drama that chronicles the life of Frank Sheeran, a mob hitman, as he reflects on his involvement with the Bufalino crime family and the mysterious disappearance of his friend, Jimmy Hoffa.",\r\n    },\r\n  ];\r\n  //... the following does not change\n')),"\n",l.createElement(n.p,null,"Une fois tout fonctionnel, veuillez faire un commit avec le message suivant : ",l.createElement(n.strong,null,l.createElement(n.code,null,"new:ex2.6")),"."),"\n",l.createElement(n.h1,null,l.createElement(u,null," Exercice 2.6b : Composant de sélection de couleur ")),"\n",l.createElement(n.p,null,"Veuillez créer un nouveau projet en utilisant les technos Vite + React + TS + SWC nommé ",l.createElement(n.code,null,"/exercises/ex2.6b")," dans votre git repo."),"\n",l.createElement(n.p,null,"Veuillez créer un composant React qui permette à l'utilisateur de changer la couleur de fond d'une boîte en cliquant sur un bouton."),"\n",l.createElement(n.p,null,"Au sein de la boîte (une ",l.createElement(n.strong,null,l.createElement(n.code,null,"div"))," par exemple) ayant une taille fixe, veuillez afficher un bouton contenant le nom de la prochaine couleur disponible. Après chaque clic sur le bouton, la boîte doit :"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"prendre la couleur qui était annoncée."),"\n",l.createElement(n.li,null,"afficher un texte indiquant la couleur affichée (sous le bouton)."),"\n"),"\n",l.createElement(n.p,null,'Veuillez prévoir un cycle de 5 couleurs : rouge, vert, bleu, jaune, violet. Après le violet, on revient au rouge. La première couleur à afficher, sans action de l\'utilisateur, est le rouge (et donc un bouton avec comme texte : "vert" et un texte "rouge" au-dessous du bouton).'),"\n",l.createElement(n.p,null,"Veuillez utiliser votre composant React dans votre application principale pour afficher 3 boîte dont la couleur peut changer."),"\n",l.createElement(n.p,null,"Une fois tout fonctionnel, veuillez faire un commit avec le message suivant : ",l.createElement(n.strong,null,l.createElement(n.code,null,"new:ex2.6b")),"."),"\n",l.createElement(n.h4,null,"🤝 Tips"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Quel événement gérer au niveau de la liste déroulante ?",l.createElement(n.br),"\n",l.createElement(n.strong,null,l.createElement(n.code,null,"onChange"))," ; )"),"\n",l.createElement(n.li,null,"Plutôt que d'utiliser du CSS, vous pouvez utiliser des couleurs prédéfinies dans React. Par exemple, pour le rouge, vous pouvez utiliser l'attribut ",l.createElement(n.strong,null,l.createElement(n.code,null,"style={{ backgroundColor: 'red' }}")),"."),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.RP)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)};function i(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var s=t(4810),u=t(2662),c=t(9640),m=t(5938),d=t(9460),p=t(7929),E=t(794),h=t(4092),g=t(4262),v=t(3528),f=t(9942),b=t(4698),P=t(2214),q=t(9838),x=(t(1262),t(1731)),k=t(7050),C=t(2483),I=t(4902),A=t(9294),N=t(7828),y=t(2035),M=t(5590);const w={Link:s.Link,Image:c.A,Section:m.A,Content:d.A,Background:p.A,SectionHeader:E.A,SectionFooter:h.A,PageHeader:g.A,CodeBlock:f.A,LinkFile:b.A,ScrollableImage:P.A,PublicProjectsView:q.A,AuthenticatedBlock:x.A,UnAuthenticatedBlock:k.A,NestedMdxBlock:C.A,YoutubeImage:I.A,InternalPageMenu:A.A,InternalPageMenuItem:N.A,InternalPageTitle:y.A,PathViewer:M.E,PathViewerItem:M.F};function H(e){var n,t,a,o,i;let{data:{mdx:s,allImages:c},children:m}=e;return w.PageHeader=(0,v.R)(g.A,null==s?void 0:s.frontmatter),l.createElement(u.A,Object.assign({},null!=s&&s.frontmatter?{frontmatter:s.frontmatter}:{},null!=s&&null!==(n=s.frontmatter)&&void 0!==n&&n.navbarExtraStyles?{navbarExtraStyles:s.frontmatter.navbarExtraStyles}:{},null!=s&&null!==(t=s.frontmatter)&&void 0!==t&&t.headerImage?{headerImage:s.frontmatter.headerImage}:{},null!=s&&null!==(a=s.frontmatter)&&void 0!==a&&a.featuredImage?{featuredImage:s.frontmatter.featuredImage}:{},null!=s&&null!==(o=s.frontmatter)&&void 0!==o&&o.title?{pageTitle:s.frontmatter.title}:{},c&&c.length>0?{allImages:c}:{}),l.createElement(r.xA,{components:w},l.createElement("div",{className:null!=s&&null!==(i=s.frontmatter)&&void 0!==i&&i.autoMargin?"page page--auto-margin ":"page"},m)))}function z(e){return l.createElement(H,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-mdx-pages-js-content-file-path-src-mdx-pages-part-2-start-state-fr-mdx-7e9db2a4000130c3e9c7.js.map