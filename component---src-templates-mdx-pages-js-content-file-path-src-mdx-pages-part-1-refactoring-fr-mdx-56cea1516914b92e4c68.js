"use strict";(self.webpackChunkmyjscourse=self.webpackChunkmyjscourse||[]).push([[3745],{701:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var r=t(3905),l=t(7294);function a(e){const n=Object.assign({h1:"h1",p:"p",a:"a",br:"br",ul:"ul",li:"li",strong:"strong",ol:"ol",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components),{PathViewer:t,PathViewerItem:a,InternalPageMenu:s,InternalPageMenuItem:u,InternalPageTitle:i,ScrollableImage:c}=n;return s||o("InternalPageMenu",!0),u||o("InternalPageMenuItem",!0),i||o("InternalPageTitle",!0),t||o("PathViewer",!0),a||o("PathViewerItem",!0),c||o("ScrollableImage",!0),l.createElement(l.Fragment,null,l.createElement(t,null,l.createElement(a,{to:"/"}," web2course "),l.createElement(a,{to:"/part1"}," Partie 1)"),l.createElement(a,{selected:!0}," d) Refactoring ")),"\n",l.createElement(n.h1,null,"d) Refactoring à l'aide d'un \"fat model\""),"\n",l.createElement(s,null,l.createElement(u,null," Architectures web possibles pour une API ? "),l.createElement(u,null,' Architecture Express & "fat model" '),l.createElement(u,null," Exercice 1.9 : Refactoring à l'aide d'un fat model "),l.createElement(u,null," Exercice 1.10 : Encore un fat model ")),"\n",l.createElement(n.h1,null,l.createElement(i,null," Architectures web possibles pour une API ? ")),"\n",l.createElement(n.p,null,"Si nous reprenons le code actuel du tutoriel de l'API gérant des pizzas (",l.createElement(n.a,{href:"https://github.com/e-vinci/js-demos/tree/main/backend-restful-api/restful-api-essentials/persistence"},"api-persistence"),"), nous pouvons détecter que celui-ci pourrait être plus propre."),"\n",l.createElement(n.p,null,"Par exemple, le routeur de \"pizzas\" s'occupe tant de gérer les requêtes des clients que d'accéder directement aux données.",l.createElement(n.br),"\n","Généralement, nous préférons séparer le code gérant les accès aux données du code gérant la présentation du résultat des opérations."),"\n",l.createElement(n.p,null,"On peut donc se demander comment séparer le code traitant de sujets très différents. Il existe une multitude d'architectures possibles, voici par exemple certains des plus grands noms :"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"Architecture MVC (Model View Controller)")," ; au niveau backend, ce genre d'architecture est généralement très utile quand on fait des MPA (ou Multi-Page Applications) via du Server-Side Rendering. Les ",l.createElement(n.strong,null,"Views")," permettent de générer le frontend à l'aide d'un moteur de templating ; le ",l.createElement(n.strong,null,"Controller")," s'occupe de traiter les requêtes en appelant le ",l.createElement(n.strong,null,"Model")," pour l'accès aux opérations sur les données et en renvoyant les ",l.createElement(n.strong,null,"Views")," adéquates. Pour une API, cette architecture n'est pas la plus adaptée."),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,'Architecture classique "three-tier"')," ; au nivau backend, quand on développe une architecture trois tiers, cela signifie que l'on découpe notre API en trois couches :","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"couche de présentation")," : cette couche est responsable de présenter les ressources aux clients et d'interpréter les représentations des ressources données dans les requêtes ;"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"couche business")," : cette couche s'occupe de toute la logique de l'API, elle fait l'intermédiaire entre la couche de présentation et la couche de données ;"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"couche de données")," : cette couche s'occupe des accès aux données et permet notamment la persistance des ressources au sein de bases de données.",l.createElement(n.br),"\n","Le modèle trois tiers est fort intéressant, mais il demande un peu trop d'écriture de codes sans grande valeur ajoutée quand nous utilisons le framework Express."),"\n"),"\n"),"\n",l.createElement(n.li,null,"..."),"\n"),"\n",l.createElement(n.p,null,"Finalement, parmi les architectures classiques, il n'y a pas réellement une architecture qui colle parfaitement à ce qui est offert par le framework Express, sans devoir écrire du code sans valeur ajoutée."),"\n",l.createElement(n.p,null,'Ainsi, nous allons simplement créer notre propre architecture "maison", sur base de ces points :'),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"On souhaite pouvoir ",l.createElement(n.strong,null,"facilement remplacer la couche d'accès aux données sans changer la représentation des ressources")," ; en effet, dans un premier temps, nous sauvegarderons des données dans des fichiers JSON. Plus tard, si l'on venait à sauvegarder les données dans un système de gestion de base de données, on ne veut pas devoir mettre à jour le code prenant en compte les requêtes des clients et présentant la réponse à ces requêtes ; en gros, on souhaite que le code de nos routers, au sein d'Express, soit indépendant de l'implémentation des accès aux données."),"\n",l.createElement(n.li,null,"Nous n'avons pas vraiment de contraintes pour l'aspect \"business\" de nos APIs : la logique de l'application peut soit s'associer à la couche de données, soit à la couche présentation. Néanmoins, nous allons préférer ",l.createElement(n.strong,null,"associer un maximum de la logique de notre application")," à ce que nous allons appeler un ",l.createElement(n.strong,null,"fat model"),". Le ",l.createElement(n.strong,null,"fat model")," contiendra toutes les ",l.createElement(n.strong,null,"opérations possibles sur les ressources"),", ainsi que les ",l.createElement(n.strong,null,"accès aux données"),"."),"\n",l.createElement(n.li,null,"Le ",l.createElement(n.strong,null,"fat model")," peut être soit écrit en orienté objet, soit simplement être un module fournissant des fonctions. Dans le cadre de ce cours, nous choisissons de présenter un maximum de programmation fonctionnelle plutôt que de l'orienté objet.",l.createElement(n.br),"\n","Néanmoins, n'hésitez pas à écrire des classes si cela vous tient à coeur 😉."),"\n"),"\n",l.createElement(n.h1,null,l.createElement(i,null,' Architecture Express & "fat model" ')),"\n",l.createElement(n.p,null,"Voici l'architecture que nous allons appliquer dans nos prochaines API :"),"\n",l.createElement(c,{name:"architecture.png",minWidth:"859px",maxWidth:"859px"}),"\n",l.createElement("figcaption",null,"Architecture recommandée pour ce cours"),"\n",l.createElement(n.p,null,"Voici quelques explications sur ce diagramme que nous allons appliquer dans le prochain tutoriel :"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Un client fait la requête à l'API demandant de lire toutes les pizzas."),"\n",l.createElement(n.li,null,'Le router de "pizzas" prend le rôle de "Controller". Il s\'occupe de traiter de la requête et d\'appeler une opération du ',l.createElement(n.strong,null,"fat model")," pour accéder aux ressources."),"\n",l.createElement(n.li,null,"Le ",l.createElement(n.strong,null,"fat model")," s'occupe d'accéder aux données, qui se trouvent au sein d'un fichier JSON, et de les lire."),"\n",l.createElement(n.li,null,"Le ",l.createElement(n.strong,null,"fat model"),' retourne des données sous forme d\'un objet JS au router de "pizzas".'),"\n",l.createElement(n.li,null,'Le router de "pizzas" renvoient une représentation JSON de l\'objet JS, un array de pizzas, au client.'),"\n"),"\n",l.createElement(n.p,null,'Dans un nouveau tutoriel, nous allons maintenant faire un refactor de notre API de gestion des pizzas en créant et utilisant un "fat model".'),"\n",l.createElement(n.p,null,"Au sein de votre repo ",l.createElement(n.strong,null,l.createElement(n.code,null,"web2")),", à l'aide du boilerplate du cours ",l.createElement(n.a,{href:"https://github.com/e-vinci/basic-api-boilerplate"},"basic-api-boilerplate"),", veuillez créer le projet nommé ",l.createElement(n.strong,null,l.createElement(n.code,null,"/web2/tutorials/pizzeria/api/fat-model")),"."),"\n",l.createElement(n.p,null,"Si vous ne voyez pas comment utiliser le boilerplate, tout est expliqué dans le ",l.createElement(n.strong,null,l.createElement(n.code,null,"README"))," associé au repository du boilerplate. N'hésitez pas à le (re)lire ; )"),"\n",l.createElement(n.p,null,"Pour la suite du tutoriel, nous considérons que tous les chemins absolus démarrent du répertoire ",l.createElement(n.strong,null,l.createElement(n.code,null,"/web2/tutorials/pizzeria/api/fat-model")),"."),"\n",l.createElement(n.p,null,"Nous allons commencer par créer le ",l.createElement(n.strong,null,"fat model")," offrant les opérations sur les pizzas.",l.createElement(n.br),"\n","Veuillez créer le fichier ",l.createElement(n.strong,null,l.createElement(n.code,null,"/models/pizzas.js")),".",l.createElement(n.br),"\n",'Au sein de ce fichier, veuillez ajouter le code s\'occupant des opérations sur les ressources de type "pizzas" :'),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},"const path = require('node:path');\r\nconst { parse, serialize } = require('../utils/json');\r\n\r\nconst jsonDbPath = path.join(__dirname, '/../data/pizzas.json');\r\n\r\nconst defaultPizzas = [\r\n  {\r\n    id: 1,\r\n    title: '4 fromages',\r\n    content: 'Gruyère, Sérac, Appenzel, Gorgonzola, Tomates',\r\n  },\r\n  {\r\n    id: 2,\r\n    title: 'Vegan',\r\n    content: 'Tomates, Courgettes, Oignons, Aubergines, Poivrons',\r\n  },\r\n  {\r\n    id: 3,\r\n    title: 'Vegetarian',\r\n    content: 'Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives',\r\n  },\r\n  {\r\n    id: 4,\r\n    title: 'Alpage',\r\n    content: 'Gruyère, Mozarella, Lardons, Tomates',\r\n  },\r\n  {\r\n    id: 5,\r\n    title: 'Diable',\r\n    content: 'Tomates, Mozarella, Chorizo piquant, Jalapenos',\r\n  },\r\n];\r\n\r\nfunction readAllPizzas(orderBy) {\r\n  const orderByTitle = orderBy?.includes('title') ? orderBy : undefined;\r\n  let orderedMenu;\r\n  const pizzas = parse(jsonDbPath, defaultPizzas);\r\n  if (orderByTitle)\r\n    orderedMenu = [...pizzas].sort((a, b) => a.title.localeCompare(b.title));\r\n  if (orderByTitle === '-title') orderedMenu = orderedMenu.reverse();\r\n\r\n  const allPizzasPotentiallyOrderd = orderedMenu ?? pizzas;\r\n  return allPizzasPotentiallyOrderd;\r\n}\r\n\r\nfunction readOnePizza(id) {\r\n  const idNumber = parseInt(id, 10);\r\n  const pizzas = parse(jsonDbPath, defaultPizzas);\r\n  const indexOfPizzaFound = pizzas.findIndex((pizza) => pizza.id === idNumber);\r\n  if (indexOfPizzaFound < 0) return undefined;\r\n\r\n  return pizzas[indexOfPizzaFound];\r\n}\r\n\r\nfunction createOnePizza(title, content) {\r\n  const pizzas = parse(jsonDbPath, defaultPizzas);\r\n\r\n  const createdPizza = {\r\n    id: getNextId(),\r\n    title,\r\n    content,\r\n  };\r\n\r\n  pizzas.push(createdPizza);\r\n\r\n  serialize(jsonDbPath, pizzas);\r\n\r\n  return createdPizza;\r\n}\r\n\r\nfunction getNextId() {\r\n  const pizzas = parse(jsonDbPath, defaultPizzas);\r\n  const lastItemIndex = pizzas?.length !== 0 ? pizzas.length - 1 : undefined;\r\n  if (lastItemIndex === undefined) return 1;\r\n  const lastId = pizzas[lastItemIndex]?.id;\r\n  const nextId = lastId + 1;\r\n  return nextId;\r\n}\r\n\r\nfunction deleteOnePizza(id) {\r\n  const idNumber = parseInt(id, 10);\r\n  const pizzas = parse(jsonDbPath, defaultPizzas);\r\n  const foundIndex = pizzas.findIndex((pizza) => pizza.id === idNumber);\r\n  if (foundIndex < 0) return undefined;\r\n  const deletedPizzas = pizzas.splice(foundIndex, 1);\r\n  const deletedPizza = deletedPizzas[0];\r\n  serialize(jsonDbPath, pizzas);\r\n\r\n  return deletedPizza;\r\n}\r\n\r\nfunction updateOnePizza(id, propertiesToUpdate) {\r\n  const idNumber = parseInt(id, 10);\r\n  const pizzas = parse(jsonDbPath, defaultPizzas);\r\n  const foundIndex = pizzas.findIndex((pizza) => pizza.id === idNumber);\r\n  if (foundIndex < 0) return undefined;\r\n\r\n  const updatedPizza = { ...pizzas[foundIndex], ...propertiesToUpdate };\r\n\r\n  pizzas[foundIndex] = updatedPizza;\r\n\r\n  serialize(jsonDbPath, pizzas);\r\n\r\n  return updatedPizza;\r\n}\r\n\r\nmodule.exports = {\r\n  readAllPizzas,\r\n  readOnePizza,\r\n  createOnePizza,\r\n  deleteOnePizza,\r\n  updateOnePizza,\r\n};\n")),"\n",l.createElement(n.p,null,"Maintenant, il ne reste plus qu'à mettre à jour le router ",l.createElement(n.strong,null,l.createElement(n.code,null,"/routes/pizzas.js"))," afin de faire les appels aux fonctions offertes par le modèle :"),"\n",l.createElement(n.pre,{numbered:!0,highlighting:"1-8,17,24,39,46,62"},l.createElement(n.code,{className:"language-js"},"const express = require('express');\r\nconst {\r\n  readAllPizzas,\r\n  readOnePizza,\r\n  createOnePizza,\r\n  deleteOnePizza,\r\n  updateOnePizza,\r\n} = require('../models/pizzas');\r\n\r\nconst router = express.Router();\r\n\r\n/* Read all the pizzas from the menu\r\n   GET /pizzas?order=title : ascending order by title\r\n   GET /pizzas?order=-title : descending order by title\r\n*/\r\nrouter.get('/', (req, res) => {\r\n  const allPizzasPotentiallyOrdered = readAllPizzas(req?.query?.order);\r\n\r\n  return res.json(allPizzasPotentiallyOrdered);\r\n});\r\n\r\n// Read the pizza identified by an id in the menu\r\nrouter.get('/:id', (req, res) => {\r\n  const foundPizza = readOnePizza(req.params.id);\r\n\r\n  if (!foundPizza) return res.sendStatus(404);\r\n\r\n  return res.json(foundPizza);\r\n});\r\n\r\n// Create a pizza to be added to the menu.\r\nrouter.post('/', (req, res) => {\r\n  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;\r\n  const content =\r\n    req?.body?.content?.length !== 0 ? req.body.content : undefined;\r\n\r\n  if (!title || !content) return res.sendStatus(400); // error code '400 Bad request'\r\n\r\n  const createdPizza = createOnePizza(title, content);\r\n\r\n  return res.json(createdPizza);\r\n});\r\n\r\n// Delete a pizza from the menu based on its id\r\nrouter.delete('/:id', (req, res) => {\r\n  const deletedPizza = deleteOnePizza(req.params.id);\r\n\r\n  if (!deletedPizza) return res.sendStatus(404);\r\n\r\n  return res.json(deletedPizza);\r\n});\r\n\r\n// Update a pizza based on its id and new values for its parameters\r\nrouter.patch('/:id', (req, res) => {\r\n  const title = req?.body?.title;\r\n  const content = req?.body?.content;\r\n\r\n  if ((!title && !content) || title?.length === 0 || content?.length === 0) {\r\n    return res.sendStatus(400);\r\n  }\r\n\r\n  const updatedPizza = updateOnePizza(req.params.id, { title, content });\r\n\r\n  if (!updatedPizza) return res.sendStatus(404);\r\n\r\n  return res.json(updatedPizza);\r\n});\r\n\r\nmodule.exports = router;\n")),"\n",l.createElement(n.p,null,"Lancer votre API soit via le debugger, soit via la commande ",l.createElement(n.strong,null,l.createElement(n.code,null,"npm run dev")),".",l.createElement(n.br),"\n","Veuillez ensuite tester que tout fonctionne bien en exécutant les requêtes HTTP déjà présentes dans le répertoire ",l.createElement(n.strong,null,l.createElement(n.code,null,"REST Client"))," du boilerplate."),"\n",l.createElement(n.p,null,"Si tout fonctionne bien, faites un ",l.createElement(n.strong,null,l.createElement(n.code,null,"commit"))," de votre repo (",l.createElement(n.strong,null,l.createElement(n.code,null,"web2")),") avec comme message : ",l.createElement(n.strong,null,l.createElement(n.code,null,"fat-model tutorial")),"."),"\n",l.createElement(n.p,null,"En cas de souci, vous pouvez accéder au code du tutoriel ici :\r\n",l.createElement(n.a,{href:"https://github.com/e-vinci/js-demos/tree/main/backend-restful-api/restful-api-essentials/fat-model"},"fat-model"),"."),"\n",l.createElement(n.h1,null,l.createElement(i,null," Exercice 1.9 : Refactoring à l'aide d'un fat model ")),"\n",l.createElement(n.p,null,"Vous allez faire un nouveau refactor de la RESTful API de ",l.createElement(n.strong,null,"myMovies"),", afin de restructurer l'application selon l'architecture recommandée, en utilisant un \"fat model\" pour gérer les opérations sur les films."),"\n",l.createElement(n.p,null,"Veuillez repartir du code de la solution de votre ",l.createElement(n.a,{href:"../tools/#exercice_1_8_refactoring_a_laide_de_linter_formatter"},"Exercice 1.8"),".",l.createElement(n.br),"\n","Le code de votre application doit se trouver dans votre repository local et votre web repository (normalement appelé ",l.createElement(n.strong,null,l.createElement(n.code,null,"web2")),") dans le répertoire nommé ",l.createElement(n.strong,null,l.createElement(n.code,null,"/exercises/1.9")),"."),"\n",l.createElement(n.p,null,"Veuillez faire un refactor de votre API gérant les films afin que tout ce qui traite des opérations sur les ressources soit fait au sein du modèle ",l.createElement(n.strong,null,l.createElement(n.code,null,"/models/films.js")),"."),"\n",l.createElement(n.p,null,"Veuillez tester que votre API fonctionne toujours aussi bien après le refactoring."),"\n",l.createElement(n.p,null,"Veuillez faire un ",l.createElement(n.strong,null,l.createElement(n.code,null,"commit"))," de votre code avec le message suivant : ",l.createElement(n.strong,null,l.createElement(n.code,null,"1.9 : API : fat model")),"."),"\n",l.createElement(n.h1,null,l.createElement(i,null," Exercice 1.10 : Encore un fat model ")),"\n",l.createElement(n.p,null,"Vous allez créer une nouvelle API mettant à disposition des opérations CRUD (",l.createElement(n.strong,null,"C"),"reate, ",l.createElement(n.strong,null,"R"),"ead, ",l.createElement(n.strong,null,"U"),"pdate & ",l.createElement(n.strong,null,"D"),'elete) sur des ressources de type "texte à dactylographier".'),"\n",l.createElement(n.p,null,'Vous devez appliquer les outils de développement et l\'architecture recommandée dans ce cours-ci en mettant en place un "fat model".'),"\n",l.createElement(n.p,null,"Pour ce faire, veuillez créer un nouveau projet dans votre repository local et votre web repository (normalement appelé ",l.createElement(n.strong,null,l.createElement(n.code,null,"web2")),") nommé ",l.createElement(n.strong,null,l.createElement(n.code,null,"/exercises/1.10"))," sur base du boilerplate : ",l.createElement(n.a,{href:"https://github.com/e-vinci/basic-api-boilerplate"},"basic-api-boilerplate"),"."),"\n",l.createElement(n.p,null,"⚡ Si vous avez fait un clone du boilerplate, attention au Git dans le Git, n'oubliez pas de supprimer le dossier ",l.createElement(n.strong,null,l.createElement(n.code,null,".git"))," présent dans votre nouveau projet."),"\n",l.createElement(n.p,null,"Un texte à dactylographier contient comme propriétés :"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,l.createElement(n.code,null,"id"))," : un entier ;"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,l.createElement(n.code,null,"content"))," : un contenu textuel ;"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,l.createElement(n.code,null,"level"))," : le niveau associé au texte; les seules valeurs autorisées sont : ",l.createElement(n.strong,null,"easy"),", ",l.createElement(n.strong,null,"medium")," et ",l.createElement(n.strong,null,"hard"),"."),"\n"),"\n",l.createElement(n.p,null,"Voici le tableau formalisant toutes les opérations que vous devez implémenter :"),"\n",l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"URI"),l.createElement(n.th,null,"Méthode"),l.createElement(n.th,null,"Méthode"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,l.createElement(n.code,null,"texts"))),l.createElement(n.td,null,"GET"),l.createElement(n.td,null,"READ ALL : Lire toutes les ressources de la collection")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,l.createElement(n.code,null,"texts?level=value"))),l.createElement(n.td,null,"GET"),l.createElement(n.td,null,"READ ALL FILTERED : Lire toutes les ressources de la collection selon le filtre donné")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,l.createElement(n.code,null,"texts/{id}"))),l.createElement(n.td,null,"GET"),l.createElement(n.td,null,"READ ONE : Lire la ressource identifiée")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,l.createElement(n.code,null,"texts"))),l.createElement(n.td,null,"POST"),l.createElement(n.td,null,"CREATE ONE : Créer une ressource basée sur les données de la requête")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,l.createElement(n.code,null,"texts/{id}"))),l.createElement(n.td,null,"DELETE"),l.createElement(n.td,null,"DELETE ONE : Effacer la ressource identifiée")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,l.createElement(n.code,null,"texts/{id}"))),l.createElement(n.td,null,"PUT"),l.createElement(n.td,null,"UPDATE ONE : Remplacer l'entièreté de la ressource par les données de la requête")))),"\n",l.createElement("br"),"\n",l.createElement(n.p,null,"Veuillez bien valider les valeurs des paramètres. Notament, une ",l.createElement(n.strong,null,l.createElement(n.code,null,"level"))," doit être compris dans les valeurs autorisées, sinon un code d'erreur approprié doit être renvoyé."),"\n",l.createElement(n.p,null,"Veuillez tester toutes les méthodes offertes par votre application à l'aide du client HTTP\r\nde REST Client."),"\n",l.createElement(n.p,null,"Veuillez faire un ",l.createElement(n.strong,null,l.createElement(n.code,null,"commit"))," de votre code avec le message suivant : ",l.createElement(n.strong,null,l.createElement(n.code,null,"1.10 : API : CRUD texts & fat model")),"."))}var s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)};function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=t(4854),i=t(5583),c=t(5679),d=t(307),m=t(7410),p=t(9523),E=t(8075),z=t(9063),f=t(1631),g=t(5772),h=t(2770),b=t(7008),P=t(9771),v=t(1218),x=(t(5258),t(9394)),I=t(4579),q=t(9416),y=t(9256),j=t(6488),A=t(5175),O=t(6387),T=t(6044);const S={Link:u.Link,Image:c.Z,Section:d.Z,Content:m.Z,Background:p.Z,SectionHeader:E.Z,SectionFooter:z.Z,PageHeader:f.Z,CodeBlock:h.Z,LinkFile:b.Z,ScrollableImage:P.Z,PublicProjectsView:v.Z,AuthenticatedBlock:x.Z,UnAuthenticatedBlock:I.Z,NestedMdxBlock:q.Z,YoutubeImage:y.Z,InternalPageMenu:j.Z,InternalPageMenuItem:A.Z,InternalPageTitle:O.Z,PathViewer:T.k,PathViewerItem:T.F};function w(e){var n,t,a,s,o;let{data:{mdx:u,allImages:c},children:d}=e;return S.PageHeader=(0,g.u)(f.Z,null==u?void 0:u.frontmatter),l.createElement(i.Z,Object.assign({},null!=u&&u.frontmatter?{frontmatter:u.frontmatter}:{},null!=u&&null!==(n=u.frontmatter)&&void 0!==n&&n.navbarExtraStyles?{navbarExtraStyles:u.frontmatter.navbarExtraStyles}:{},null!=u&&null!==(t=u.frontmatter)&&void 0!==t&&t.headerImage?{headerImage:u.frontmatter.headerImage}:{},null!=u&&null!==(a=u.frontmatter)&&void 0!==a&&a.featuredImage?{featuredImage:u.frontmatter.featuredImage}:{},null!=u&&null!==(s=u.frontmatter)&&void 0!==s&&s.title?{pageTitle:u.frontmatter.title}:{},c&&c.length>0?{allImages:c}:{}),l.createElement(r.Zo,{components:S},l.createElement("div",{className:null!=u&&null!==(o=u.frontmatter)&&void 0!==o&&o.autoMargin?"page page--auto-margin":"page"},d)))}function V(e){return l.createElement(w,e,l.createElement(s,e))}}}]);
//# sourceMappingURL=component---src-templates-mdx-pages-js-content-file-path-src-mdx-pages-part-1-refactoring-fr-mdx-56cea1516914b92e4c68.js.map