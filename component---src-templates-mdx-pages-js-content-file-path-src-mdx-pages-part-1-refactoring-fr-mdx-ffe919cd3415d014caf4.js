"use strict";(self.webpackChunkmyjscourse=self.webpackChunkmyjscourse||[]).push([[3745],{8294:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var r=t(3905),l=t(7294);function a(e){const n=Object.assign({h1:"h1",p:"p",a:"a",br:"br",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h4:"h4"},(0,r.ah)(),e.components),{InternalPageMenu:t,PathViewer:a,PathViewerItem:i,InternalPageMenuItem:o,YoutubeImage:u,InternalPageTitle:d}=n;return t||s("InternalPageMenu",!0),o||s("InternalPageMenuItem",!0),d||s("InternalPageTitle",!0),a||s("PathViewer",!0),i||s("PathViewerItem",!0),u||s("YoutubeImage",!0),l.createElement(l.Fragment,null,l.createElement(n.h1,null,"c) Refactoring à l'aide de services"),"\n",l.createElement(t,null,l.createElement(a,null,l.createElement(i,{to:"/"}," web2course "),l.createElement(i,{to:"/part1"}," Partie 1)"),l.createElement(i,{selected:!0}," c) Refactoring ")),l.createElement(o,null," Architectures web possibles pour une API ? "),l.createElement(o,null," Architecture Express & services "),l.createElement(o,null," Exercice 1.8 : Refactoring à l'aide d'un service "),l.createElement(o,null," Exercice 1.9 : Encore un service ")),"\n",l.createElement("div",{className:"card card__simple-youtube-container"},l.createElement(u,{src:"https://youtu.be/FihV6wXpIQE"})),"\n",l.createElement(n.h1,null,l.createElement(d,null," Architectures web possibles pour une API ? ")),"\n",l.createElement(n.p,null,"Si nous reprenons le code actuel du tutoriel de l'API gérant des boissons (",l.createElement(n.a,{href:"https://github.com/e-vinci/js-demos/tree/main/back/api/persistence"},"persistence"),"), nous pouvons détecter que celui-ci pourrait être plus propre."),"\n",l.createElement(n.p,null,"Par exemple, le routeur de \"drinks\" s'occupe tant de gérer les requêtes des clients que d'accéder directement aux données.",l.createElement(n.br),"\n","Généralement, nous préférons séparer le code gérant les accès aux données du code gérant la présentation du résultat des opérations."),"\n",l.createElement(n.p,null,"On peut donc se demander comment séparer le code traitant de sujets très différents. Il existe une multitude d'architectures possibles, voici par exemple certains des plus grands noms :"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"Architecture MVC (Model View Controller)")," ; au niveau backend, ce genre d'architecture est généralement très utile quand on fait des MPA (ou Multi-Page Applications) via du Server-Side Rendering. Les ",l.createElement(n.strong,null,"Views")," permettent de générer le frontend à l'aide d'un moteur de templating ; le ",l.createElement(n.strong,null,"Controller")," s'occupe de traiter les requêtes en appelant le ",l.createElement(n.strong,null,"Model")," pour l'accès aux opérations sur les données et en renvoyant les ",l.createElement(n.strong,null,"Views")," adéquates. Pour une API, cette architecture n'est pas la plus adaptée."),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,'Architecture classique "three-tier"')," ; au niveau backend, quand on développe une architecture trois tiers, cela signifie que l'on découpe notre API en trois couches :","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"couche de présentation")," : cette couche est responsable de présenter les ressources aux clients et d'interpréter les représentations des ressources données dans les requêtes ;"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"couche business")," : cette couche s'occupe de toute la logique de l'API, elle fait l'intermédiaire entre la couche de présentation et la couche de données ;"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"couche de données")," : cette couche s'occupe des accès aux données et permet notamment la persistance des ressources au sein de bases de données.",l.createElement(n.br),"\n","Le modèle trois tiers est fort intéressant, mais il demande un peu trop d'écriture de codes sans grande valeur ajoutée quand nous utilisons le framework Express."),"\n"),"\n"),"\n",l.createElement(n.li,null,"..."),"\n"),"\n",l.createElement(n.p,null,"Finalement, parmi les architectures classiques, il n'y a pas réellement une architecture qui colle parfaitement à ce qui est offert par le framework Express, sans devoir écrire du code sans valeur ajoutée."),"\n",l.createElement(n.p,null,'Ainsi, nous allons simplement créer notre propre architecture "maison", sur base de ces points :'),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"On souhaite pouvoir ",l.createElement(n.strong,null,"facilement remplacer la couche d'accès aux données sans changer la représentation des ressources")," ; en effet, dans un premier temps, nous sauvegarderons des données dans des fichiers JSON. Plus tard, si l'on venait à sauvegarder les données dans un système de gestion de base de données, on ne veut pas devoir mettre à jour le code prenant en compte les requêtes des clients et présentant la réponse à ces requêtes ; en gros, on souhaite que le code de nos routers, au sein d'Express, soit indépendant de l'implémentation des accès aux données."),"\n",l.createElement(n.li,null,"Nous n'avons pas vraiment de contraintes pour l'aspect \"business\" de nos APIs : la logique de l'application peut soit s'associer à la couche de données, soit à la couche présentation. Néanmoins, nous allons préférer ",l.createElement(n.strong,null,"associer un maximum de la logique de notre application")," à ce que nous allons appeler un ",l.createElement(n.strong,null,"service"),". Le ",l.createElement(n.strong,null,"service")," contiendra toutes les ",l.createElement(n.strong,null,"opérations possibles sur les ressources"),", ainsi que les ",l.createElement(n.strong,null,"accès aux données"),"."),"\n",l.createElement(n.li,null,"Le ",l.createElement(n.strong,null,"service")," peut être soit écrit en orienté objet, soit simplement être un module fournissant des fonctions. Dans le cadre de ce cours, nous choisissons de présenter un maximum de programmation fonctionnelle plutôt que de l'orienté objet.",l.createElement(n.br),"\n","Néanmoins, n'hésitez pas à écrire des classes si cela vous tient à coeur 😉."),"\n"),"\n",l.createElement(n.h1,null,l.createElement(d,null," Architecture Express & services ")),"\n",l.createElement(n.p,null,"Dans un nouveau tutoriel, nous allons maintenant faire un refactor de notre API de gestion des pizzas en créant et utilisant un service."),"\n",l.createElement(n.p,null,"Veuillez créer un nouveau projet ",l.createElement(n.strong,null,l.createElement(n.code,null,"/tutorials/back/api/services"))," sur base d'un copier/coller de votre répertoire ",l.createElement(n.strong,null,l.createElement(n.code,null,"/tutorials/back/api/persistence")),"."),"\n",l.createElement(n.p,null,"En cas de souci, vous pouvez télécharger le code du tutoriel précédent ici : ",l.createElement(n.a,{href:"https://github.com/e-vinci/ts-demos/tree/main/back/api/persistence"},"persistence"),"."),"\n",l.createElement(n.p,null,"Nous allons commencer par créer le ",l.createElement(n.strong,null,"service")," offrant les opérations sur les boissons.",l.createElement(n.br),"\n","Veuillez créer le fichier ",l.createElement(n.strong,null,l.createElement(n.code,null,"/services/drinks.ts")),".",l.createElement(n.br),"\n",'Au sein de ce fichier, veuillez ajouter le code s\'occupant des opérations sur les ressources de type "drinks" :'),"\n",l.createElement(n.pre,{numbered:!0},l.createElement(n.code,{className:"language-ts"},'import path from "node:path";\nimport { Drink, NewDrink } from "../types";\nimport { parse, serialize } from "../utils/json";\nconst jsonDbPath = path.join(__dirname, "/../data/drinks.json");\n\nconst defaultDrinks: Drink[] = [\n  {\n    id: 1,\n    title: "Coca-Cola",\n    image:\n      "https://media.istockphoto.com/id/1289738725/fr/photo/bouteille-en-plastique-de-coke-avec-la-conception-et-le-chapeau-rouges-d%C3%A9tiquette.jpg?s=1024x1024&w=is&k=20&c=HBWfROrGDTIgD6fuvTlUq6SrwWqIC35-gceDSJ8TTP8=",\n    volume: 0.33,\n    price: 2.5,\n  },\n  {\n    id: 2,\n    title: "Pepsi",\n    image:\n      "https://media.istockphoto.com/id/185268840/fr/photo/bouteille-de-cola-sur-un-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=xdsxwb4bLjzuQbkT_XvVLyBZyW36GD97T1PCW0MZ4vg=",\n    volume: 0.33,\n    price: 2.5,\n  },\n  {\n    id: 3,\n    title: "Eau Minérale",\n    image:\n      "https://media.istockphoto.com/id/1397515626/fr/photo/verre-deau-gazeuse-%C3%A0-boire-isol%C3%A9.jpg?s=1024x1024&w=is&k=20&c=iEjq6OL86Li4eDG5YGO59d1O3Ga1iMVc_Kj5oeIfAqk=",\n    volume: 0.5,\n    price: 1.5,\n  },\n  {\n    id: 4,\n    title: "Jus d\'Orange",\n    image:\n      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",\n    volume: 0.25,\n    price: 4.5,\n  },\n  {\n    id: 5,\n    title: "Limonade",\n    image:\n      "https://images.unsplash.com/photo-1583064313642-a7c149480c7e?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",\n    volume: 0.33,\n    price: 5,\n  },\n];\n\nfunction readAllDrinks(budgetMax: number): Drink[] {\n  const drinks = parse(jsonDbPath, defaultDrinks);\n  if (!budgetMax) {\n    return drinks;\n  }\n\n  const budgetMaxNumber = Number(budgetMax);\n\n  const filteredDrinks = drinks.filter((drink) => {\n    return drink.price <= budgetMaxNumber;\n  });\n  return filteredDrinks;\n}\n\nfunction readOneDrink(id: number): Drink | undefined {\n  const drinks = parse(jsonDbPath, defaultDrinks);\n  const drink = drinks.find((drink) => drink.id === id);\n  if (!drink) {\n    return undefined;\n  }\n  return drink;\n}\n\nfunction createOneDrink(newDrink: NewDrink): Drink {\n  const drinks = parse(jsonDbPath, defaultDrinks);\n\n  const nextId =\n    drinks.reduce((maxId, drink) => (drink.id > maxId ? drink.id : maxId), 0) +\n    1;\n\n  const createdDrink = {\n    id: nextId,\n    ...newDrink,\n  };\n\n  drinks.push(createdDrink);\n  serialize(jsonDbPath, drinks);\n\n  return createdDrink;\n}\n\nfunction deleteOneDrink(drinkId: number): Drink | undefined {\n  const drinks = parse(jsonDbPath, defaultDrinks);\n  const index = drinks.findIndex((drink) => drink.id === drinkId);\n  if (index === -1) {\n    return undefined;\n  }\n\n  const deletedElements = drinks.splice(index, 1);\n  serialize(jsonDbPath, drinks);\n  return deletedElements[0];\n}\n\nfunction updateOneDrink(\n  drinkId: number,\n  newDrink: Partial<NewDrink>\n): Drink | undefined {\n  const drinks = parse(jsonDbPath, defaultDrinks);\n  const drink = drinks.find((drink) => drink.id === drinkId);\n  if (!drink) {\n    return undefined;\n  }\n\n  if (newDrink.title !== undefined) {\n    drink.title = newDrink.title!; // the router already checks for the presence of title\n  }\n  if (newDrink.image !== undefined) {\n    drink.image = newDrink.image!;\n  }\n  if (newDrink.volume !== undefined) {\n    drink.volume = newDrink.volume!;\n  }\n  if (newDrink.price !== undefined) {\n    drink.price = newDrink.price!;\n  }\n\n  serialize(jsonDbPath, drinks);\n  return drink;\n}\n\nexport {\n  readAllDrinks,\n  readOneDrink,\n  createOneDrink,\n  deleteOneDrink,\n  updateOneDrink,\n};\n')),"\n",l.createElement(n.p,null,"Maintenant, nous allons mettre à jour le router ",l.createElement(n.strong,null,l.createElement(n.code,null,"/routes/drinks.ts"))," afin de faire les appels aux fonctions offertes par le modèle :"),"\n",l.createElement(n.pre,{numbered:!0},l.createElement(n.code,{className:"language-ts"},'import { Router } from "express";\nimport { NewDrink } from "../types";\nimport {\n  createOneDrink,\n  deleteOneDrink,\n  readAllDrinks,\n  readOneDrink,\n  updateOneDrink,\n} from "../services/drinks";\n\nconst router = Router();\n\nrouter.get("/", (req, res) => {\n  const budgetMax = Number(req.query["budget-max"]);\n  const drinks = readAllDrinks(budgetMax);\n  return res.json(drinks);\n});\n\nrouter.get("/:id", (req, res) => {\n  const id = Number(req.params.id);\n  const drink = readOneDrink(id);\n  if (!drink) {\n    return res.sendStatus(404);\n  }\n  return res.json(drink);\n});\n\nrouter.post("/", (req, res) => {\n  const body: unknown = req.body;\n  if (\n    !body ||\n    typeof body !== "object" ||\n    !("title" in body) ||\n    !("image" in body) ||\n    !("volume" in body) ||\n    !("price" in body) ||\n    typeof body.title !== "string" ||\n    typeof body.image !== "string" ||\n    typeof body.volume !== "number" ||\n    typeof body.price !== "number" ||\n    !body.title.trim() ||\n    !body.image.trim() ||\n    body.volume <= 0 ||\n    body.price <= 0\n  ) {\n    return res.sendStatus(400);\n  }\n\n  const { title, image, volume, price } = body as NewDrink;\n\n  const newDrink = createOneDrink({ title, image, volume, price });\n  return res.json(newDrink);\n});\n\nrouter.delete("/:id", (req, res) => {\n  const id = Number(req.params.id);\n  const deletedDrink = deleteOneDrink(id);\n  if (!deletedDrink) {\n    return res.sendStatus(404);\n  }\n  return res.json(deletedDrink);\n});\n\nrouter.patch("/:id", (req, res) => {\n  const id = Number(req.params.id);\n\n  const body: unknown = req.body;\n\n  if (\n    !body ||\n    typeof body !== "object" ||\n    ("title" in body &&\n      (typeof body.title !== "string" || !body.title.trim())) ||\n    ("image" in body &&\n      (typeof body.image !== "string" || !body.image.trim())) ||\n    ("volume" in body &&\n      (typeof body.volume !== "number" || body.volume <= 0)) ||\n    ("price" in body && (typeof body.price !== "number" || body.price <= 0))\n  ) {\n    return res.sendStatus(400);\n  }\n\n  const { title, image, volume, price }: Partial<NewDrink> = body;\n\n  const updatedDrink = updateOneDrink(id, { title, image, volume, price });\n\n  if (!updatedDrink) {\n    return res.sendStatus(404);\n  }\n\n  return res.json(updatedDrink);\n});\n\nexport default router;\n')),"\n",l.createElement(n.p,null,"Lancer votre API soit via le debugger, soit via la commande ",l.createElement(n.strong,null,l.createElement(n.code,null,"npm run dev")),".",l.createElement(n.br),"\n","Veuillez ensuite tester que les opérations sur les boissons fonctionnent bien en exécutant les requêtes HTTP déjà présentes dans le répertoire ",l.createElement(n.strong,null,l.createElement(n.code,null,"REST Client"))," du boilerplate."),"\n",l.createElement(n.p,null,'Maintenant, nous allons aussi mettre à jour l\'architecture pour traiter des ressources de type "pizzas". Veuillez créer un fichier ',l.createElement(n.strong,null,l.createElement(n.code,null,"/services/pizzas.ts"))," :"),"\n",l.createElement(n.pre,{numbered:!0},l.createElement(n.code,{className:"language-ts"},'// Create the pizzas service based on the drinks.ts service\nimport path from "node:path";\nimport { Pizza, NewPizza } from "../types";\nimport { parse, serialize } from "../utils/json";\nconst jsonDbPath = path.join(__dirname, "/../data/pizzas.json");\n\nconst defaultPizzas: Pizza[] = [\n  {\n    id: 1,\n    title: "4 fromages",\n    content: "Gruyère, Sérac, Appenzel, Gorgonzola, Tomates",\n  },\n  {\n    id: 2,\n    title: "Vegan",\n    content: "Tomates, Courgettes, Oignons, Aubergines, Poivrons",\n  },\n  {\n    id: 3,\n    title: "Vegetarian",\n    content: "Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives",\n  },\n  {\n    id: 4,\n    title: "Alpage",\n    content: "Gruyère, Mozarella, Lardons, Tomates",\n  },\n  {\n    id: 5,\n    title: "Diable",\n    content: "Tomates, Mozarella, Chorizo piquant, Jalapenos",\n  },\n];\n\nfunction readAllPizzas(order: string | undefined): Pizza[] {\n  const orderByTitle = order && order.includes("title") ? order : undefined;\n\n  let orderedMenu: Pizza[] = [];\n  const pizzas = parse(jsonDbPath, defaultPizzas);\n  if (orderByTitle)\n    orderedMenu = [...pizzas].sort((a, b) => a.title.localeCompare(b.title));\n\n  if (orderByTitle === "-title") orderedMenu = orderedMenu.reverse();\n\n  return orderedMenu.length === 0 ? pizzas : orderedMenu;\n}\n\nfunction readPizzaById(id: number): Pizza | undefined {\n  const pizzas = parse(jsonDbPath, defaultPizzas);\n  return pizzas.find((pizza) => pizza.id === id);\n}\n\nfunction createPizza(newPizza: NewPizza): Pizza {\n  const pizzas = parse(jsonDbPath, defaultPizzas);\n  const lastId = pizzas[pizzas.length - 1].id;\n  const pizza: Pizza = { id: lastId + 1, ...newPizza };\n  const updatedPizzas = [...pizzas, pizza];\n  serialize(jsonDbPath, updatedPizzas);\n  return pizza;\n}\n\nfunction deletePizza(id: number): Pizza | undefined {\n  const pizzas = parse(jsonDbPath, defaultPizzas);\n  const index = pizzas.findIndex((pizza) => pizza.id === id);\n  if (index === -1) return undefined;\n\n  const deletedElements = pizzas.splice(index, 1);\n  serialize(jsonDbPath, pizzas);\n  return deletedElements[0];\n}\n\nfunction updatePizza(\n  id: number,\n  updatedPizza: Partial<NewPizza>\n): Pizza | undefined {\n  const pizzas = parse(jsonDbPath, defaultPizzas);\n  const pizza = pizzas.find((pizza) => pizza.id === id);\n  if (!pizza) return undefined;\n\n  if (updatedPizza.title !== undefined) {\n    pizza.title = updatedPizza.title;\n  }\n  if (updatedPizza.content !== undefined) {\n    pizza.content = updatedPizza.content;\n  }\n\n  serialize(jsonDbPath, pizzas);\n  return pizza;\n}\n\nexport { readAllPizzas, readPizzaById, createPizza, deletePizza, updatePizza };\n')),"\n",l.createElement(n.p,null,"Et le router ",l.createElement(n.strong,null,l.createElement(n.code,null,"/routes/pizzas.ts"))," doit aussi être mis à jour :"),"\n",l.createElement(n.pre,{numbered:!0},l.createElement(n.code,{className:"language-ts"},'import { Router } from "express";\n\nimport { NewPizza, PizzaToUpdate } from "../types";\nimport {\n  createPizza,\n  deletePizza,\n  readAllPizzas,\n  readPizzaById,\n  updatePizza,\n} from "../services/pizzas";\n\nconst router = Router();\n\nrouter.get("/error", (_req, _res, _next) => {\n  throw new Error("This is an error");\n  // equivalent of next(new Error("This is an error"));\n});\n\n/* Read all the pizzas from the menu\n   GET /pizzas?order=title : ascending order by title\n   GET /pizzas?order=-title : descending order by title\n*/\nrouter.get("/", (req, res) => {\n  if (req.query.order && typeof req.query.order !== "string") {\n    return res.sendStatus(400);\n  }\n\n  const pizzas = readAllPizzas(req.query.order);\n  return res.json(pizzas);\n});\n\n// Read the pizza identified by an id in the menu\nrouter.get("/:id", (req, res) => {\n  const id = Number(req.params.id);\n  const pizza = readPizzaById(id);\n  if (!pizza) return res.sendStatus(404);\n  return res.json(pizza);\n});\n\n// Create a pizza to be added to the menu.\nrouter.post("/", (req, res) => {\n  const body: unknown = req.body;\n  if (\n    !body ||\n    typeof body !== "object" ||\n    !("title" in body) ||\n    !("content" in body) ||\n    typeof body.title !== "string" ||\n    typeof body.content !== "string" ||\n    !body.title.trim() ||\n    !body.content.trim()\n  ) {\n    return res.sendStatus(400);\n  }\n\n  const { title, content } = body as NewPizza;\n\n  const addedPizza = createPizza({ title, content });\n\n  return res.json(addedPizza);\n});\n\n// Delete a pizza from the menu based on its id\nrouter.delete("/:id", (req, res) => {\n  const id = Number(req.params.id);\n  const deletedPizza = deletePizza(id);\n  if (!deletedPizza) return res.sendStatus(404);\n\n  return res.json(deletedPizza);\n});\n\n// Update a pizza based on its id and new values for its parameters\nrouter.patch("/:id", (req, res) => {\n  const body: unknown = req.body;\n  if (\n    !body ||\n    typeof body !== "object" ||\n    ("title" in body &&\n      (typeof body.title !== "string" || !body.title.trim())) ||\n    ("content" in body &&\n      (typeof body.content !== "string" || !body.content.trim()))\n  ) {\n    return res.sendStatus(400);\n  }\n\n  const pizzaToUpdate: PizzaToUpdate = body;\n\n  const id = Number(req.params.id);\n  const updatedPizza = updatePizza(id, pizzaToUpdate);\n  if (!updatedPizza) return res.sendStatus(404);\n\n  return res.json(updatedPizza);\n});\n\nexport default router;\n')),"\n",l.createElement(n.p,null,"Lancer votre API soit via le debugger, soit via la commande ",l.createElement(n.strong,null,l.createElement(n.code,null,"npm run dev")),".",l.createElement(n.br),"\n","Veuillez ensuite tester que tout fonctionne bien en exécutant quelques requêtes HTTP associées aux pizzas et déjà présentes dans le répertoire ",l.createElement(n.strong,null,l.createElement(n.code,null,"REST Client"))," du boilerplate."),"\n",l.createElement(n.p,null,"En cas de souci, vous pouvez accéder au code du tutoriel ici :\n",l.createElement(n.a,{href:"https://github.com/e-vinci/js-demos/tree/main/back/api/services"},"services"),"."),"\n",l.createElement(n.h1,null,l.createElement(d,null," Exercice 1.8 : Refactoring à l'aide d'un service ")),"\n",l.createElement(n.p,null,"Vous allez faire un nouveau refactor de la RESTful API de ",l.createElement(n.strong,null,"myMovies"),", afin de restructurer l'application selon l'architecture recommandée, en utilisant un service pour gérer les opérations sur les films."),"\n",l.createElement(n.p,null,"Veuillez repartir du code de la solution de votre ",l.createElement(n.a,{href:"../json/#exercice_1_7_persistance_des_donnees"},"Exercice 1.7"),".",l.createElement(n.br),"\n","Le code de votre application doit se trouver dans votre repo git dans ",l.createElement(n.strong,null,l.createElement(n.code,null,"/exercises/1.8")),"."),"\n",l.createElement(n.p,null,"Veuillez faire un refactor de votre API gérant les films afin que tout ce qui traite des opérations sur les ressources soit fait au sein du service ",l.createElement(n.strong,null,l.createElement(n.code,null,"/services/films.ts")),"."),"\n",l.createElement(n.p,null,"Veuillez tester que votre API fonctionne toujours aussi bien après le refactoring."),"\n",l.createElement(n.p,null,"Veuillez faire un ",l.createElement(n.strong,null,l.createElement(n.code,null,"commit"))," de votre code avec le message suivant : ",l.createElement(n.strong,null,l.createElement(n.code,null,"new: ex1.8")),"."),"\n",l.createElement(n.h1,null,l.createElement(d,null," Exercice 1.9 : Encore un service ")),"\n",l.createElement(n.p,null,"Vous allez créer une nouvelle API mettant à disposition des opérations CRUD (",l.createElement(n.strong,null,"C"),"reate, ",l.createElement(n.strong,null,"R"),"ead, ",l.createElement(n.strong,null,"U"),"pdate & ",l.createElement(n.strong,null,"D"),'elete) sur des ressources de type "texte à dactylographier".'),"\n",l.createElement(n.p,null,"Vous devez appliquer les outils de développement et l'architecture recommandée dans ce cours-ci en mettant en place un service."),"\n",l.createElement(n.p,null,"Pour ce faire, veuillez créer un nouveau projet dans votre repo git dans ",l.createElement(n.strong,null,l.createElement(n.code,null,"/exercises/1.9"))," sur base du boilerplate ",l.createElement(n.a,{href:"https://github.com/e-vinci/basic-ts-api-boilerplate"},"basic-ts-api-boilerplate")," ou sur base de votre exercice précédent (",l.createElement(n.strong,null,l.createElement(n.code,null,"/exercises/1.8")),")."),"\n",l.createElement(n.p,null,"⚡ Si vous avez fait un clone du boilerplate, attention au Git dans le Git, n'oubliez pas de supprimer le dossier ",l.createElement(n.strong,null,l.createElement(n.code,null,".git"))," présent dans votre nouveau projet."),"\n",l.createElement(n.p,null,"Un texte à dactylographier contient comme propriétés :"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,l.createElement(n.code,null,"id"))," : un uuid généré via la librairie ",l.createElement(n.a,{href:"https://www.npmjs.com/package/uuid"},"https://www.npmjs.com/package/uuid")," ;"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,l.createElement(n.code,null,"content"))," : un contenu textuel ;"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,l.createElement(n.code,null,"level"))," : le niveau associé au texte; les seules valeurs autorisées sont : ",l.createElement(n.strong,null,"easy"),", ",l.createElement(n.strong,null,"medium")," et ",l.createElement(n.strong,null,"hard"),"."),"\n"),"\n",l.createElement(n.p,null,"Voici le tableau formalisant toutes les opérations que vous devez implémenter :"),"\n",l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"URI"),l.createElement(n.th,null,"Méthode"),l.createElement(n.th,null,"Méthode"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,l.createElement(n.code,null,"texts"))),l.createElement(n.td,null,"GET"),l.createElement(n.td,null,"READ ALL : Lire toutes les ressources de la collection")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,l.createElement(n.code,null,"texts?level=value"))),l.createElement(n.td,null,"GET"),l.createElement(n.td,null,"READ ALL FILTERED : Lire toutes les ressources de la collection selon le filtre donné")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,l.createElement(n.code,null,"texts/:id"))),l.createElement(n.td,null,"GET"),l.createElement(n.td,null,"READ ONE : Lire la ressource identifiée")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,l.createElement(n.code,null,"texts"))),l.createElement(n.td,null,"POST"),l.createElement(n.td,null,"CREATE ONE : Créer une ressource basée sur les données de la requête")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,l.createElement(n.code,null,"texts/:id"))),l.createElement(n.td,null,"DELETE"),l.createElement(n.td,null,"DELETE ONE : Effacer la ressource identifiée")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,l.createElement(n.code,null,"texts/:id"))),l.createElement(n.td,null,"PUT"),l.createElement(n.td,null,"UPDATE ONE : Remplacer l'entièreté de la ressource par les données de la requête")))),"\n",l.createElement("br"),"\n",l.createElement(n.p,null,"Veuillez bien valider les valeurs des paramètres. Notamment, une ",l.createElement(n.strong,null,l.createElement(n.code,null,"level"))," doit être compris dans les valeurs autorisées, sinon un code d'erreur approprié doit être renvoyé."),"\n",l.createElement(n.p,null,"Veuillez tester toutes les méthodes offertes par votre application à l'aide du client HTTP de REST Client."),"\n",l.createElement(n.h4,null,"🤝 Tips"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Pour utiliser la librairie ",l.createElement(n.strong,null,l.createElement(n.code,null,"uuid")),", consultez la documentation en ligne : ",l.createElement(n.a,{href:"https://www.npmjs.com/package/uuid"},"https://www.npmjs.com/package/uuid")),"\n",l.createElement(n.li,null,"Si vous avez oublié d'installer les définitions de type pour ",l.createElement(n.strong,null,l.createElement(n.code,null,"uuid")),", vous pouvez le faire via la commande ",l.createElement(n.strong,null,l.createElement(n.code,null,"npm install --save-dev @types/uuid")),". Pour rappel, cela est expliqué dans l'",l.createElement(n.a,{href:"../../part0/nodejs-app/#introduction_aux_packages_node_js_npm"},"Introduction aux packages Node.js & npm"),' (voir "Installer un package").'),"\n"),"\n",l.createElement(n.p,null,"Veuillez faire un ",l.createElement(n.strong,null,l.createElement(n.code,null,"commit"))," de votre code avec le message suivant : ",l.createElement(n.strong,null,l.createElement(n.code,null,"new: ex1.9")),"."))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)};function s(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var o=t(4160),u=t(5583),d=t(5679),c=t(307),m=t(7410),p=t(9523),E=t(8075),z=t(9063),f=t(1631),g=t(5772),b=t(2770),h=t(7008),k=t(9771),v=t(1218),P=(t(5258),t(9394)),y=t(4579),D=t(7743),x=t(9256),w=t(6488),j=t(5175),q=t(6387),I=t(6044);const A={Link:o.Link,Image:d.Z,Section:c.Z,Content:m.Z,Background:p.Z,SectionHeader:E.Z,SectionFooter:z.Z,PageHeader:f.Z,CodeBlock:b.Z,LinkFile:h.Z,ScrollableImage:k.Z,PublicProjectsView:v.Z,AuthenticatedBlock:P.Z,UnAuthenticatedBlock:y.Z,NestedMdxBlock:D.Z,YoutubeImage:x.Z,InternalPageMenu:w.Z,InternalPageMenuItem:j.Z,InternalPageTitle:q.Z,PathViewer:I.k,PathViewerItem:I.F};function T(e){var n,t,a,i,s;let{data:{mdx:o,allImages:d},children:c}=e;return A.PageHeader=(0,g.u)(f.Z,null==o?void 0:o.frontmatter),l.createElement(u.Z,Object.assign({},null!=o&&o.frontmatter?{frontmatter:o.frontmatter}:{},null!=o&&null!==(n=o.frontmatter)&&void 0!==n&&n.navbarExtraStyles?{navbarExtraStyles:o.frontmatter.navbarExtraStyles}:{},null!=o&&null!==(t=o.frontmatter)&&void 0!==t&&t.headerImage?{headerImage:o.frontmatter.headerImage}:{},null!=o&&null!==(a=o.frontmatter)&&void 0!==a&&a.featuredImage?{featuredImage:o.frontmatter.featuredImage}:{},null!=o&&null!==(i=o.frontmatter)&&void 0!==i&&i.title?{pageTitle:o.frontmatter.title}:{},d&&d.length>0?{allImages:d}:{}),l.createElement(r.Zo,{components:A},l.createElement("div",{className:null!=o&&null!==(s=o.frontmatter)&&void 0!==s&&s.autoMargin?"page page--auto-margin ":"page"},c)))}function M(e){return l.createElement(T,e,l.createElement(i,e))}}}]);
//# sourceMappingURL=component---src-templates-mdx-pages-js-content-file-path-src-mdx-pages-part-1-refactoring-fr-mdx-ffe919cd3415d014caf4.js.map