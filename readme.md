# Mice & Mystics

Cet exercice propose au lecteur de recréer certains éléments de gameplay du jeu de plateau Mice and Mystics.


## Contexte

Dans cet exercice, nous ferons s'affronter deux héros, Maginos, le mage, et Nez, le tank de l'équipe, contre une araignée.
Ce combat à mort se déroulera en plusieurs tours de jeux, chacun attaquant et se defendant à son tour, en respectant vaguement le *gameplay* original basé sur des lancés de dés.

## Notions abordées

* *separation of concerns* & modularisation
* tableaux
* objets
* méthodes
* aléatoire
* structure itératives
* affichage dans la console
* affichage dans le corps de la page
* prototype ?

## Methodologie

Dans toute la suite, chaque partie ajoute des fonctionalités. Certaines seront de évolutions par rapport à ce qui existait précédement. 

Une fois les objectifs d'une partie accomplis, on pourra modifier le code pour remplir exclusivement les objectifs de la partie suivante.



## Partie 1 : lancé de dés & modularisation

### Initialisation

* création de la page vide et de deux fichier JS (utils.js, gameplay.js)
* inclusion de ces deux fichiers dans le html

### Générer

Dans utils.js, définir une fonction qui permet de tirer un D6. Dans le jeu, un dé à 6 faces particulier est employé, il possede :
* une face fromage
* deux faces arc
* une face epée
* deux faces épée & bouclier

Cette fonction devra retourner un objet contenant quatres membres, chacun à true ou false, 
* Formage
* Arc
* Epée
* EpeeBouclier


### Utiliser

Dans gameplay.js, on vérifiera qu'on peut apperler la fonction précédement crée en écrivant le résultat d'un tirage dans le corps du document.

## Partie 2 : Duel au dé
Pour s'échauffer avant la bataille Maginos et Nez se lancent dans un duel au dé.

### Création des souris
On créra un objet pour chacune des souris, qui seront les deux éléments d'un tableau, dans le gameplay.js
Chacune aura donc un champ nom, et un nombre de fromage obtenu, initialisé à 0;

### Boucle de jeu
Dans le gameplay.js, on créar une boucle de 50 itération. A chacune de ces itérations, chaque souris fera un lancé de dé, et ajoutera un pour chaque dé indiquant un fromage.

### Fin de jeu
Une fois les dés lancés jusqu'à épuisement, on affichera à l'écran le nom de la souris qui a obtenu le plus de fromage.

## Partie 3 : Entrainement sur une noix

Après quelques parties, nos souris se rendent compte qu'elle ne peuvent pas vaincre Filch le filou aux dés, qui les avaient rejoint, et se décident à s'entrainer sur une noix.

### Multiple lancé de dés
Ajouter une fonction a utils.js qui prendra en paramettre le nombre de dés que l'on souhaite lancer. Elle retourne un objet contenant cinq membres, 
* nbFormage
* nbArc
* nbEpée
* nbBouclier

La valeur de ces membre sera la somme des lancés demandés.

### Attaquer

Chaque souris se dotera donc d'une methode attaquer. Celle de Maginos se base sur les arcs tirés aux dés également. Celle de Nez, sur les épées. Serieux, qui prend le temps de lancer des dés avant d'attaquer ?!

* Maginos
  * envoie des boules de feu
  * touche une fois par Arc obtenu
  * lance 4 dés.
* Nez
  * attaque au marteau
  * touche une fois par épée obtenue
  * lance 3 dés.

Ces methodes retourneront le nombre de touches obtenues. A chaque attaque, on indiquera dans la console combien de touche fait la souris ainsi que son nom.

### Fendre la noix

On crera un objet noix qui aura deux propriétés : 
* PVmax = 25
* PVactuels = 25

On fera attaquer chacune des souris à son tour. Les touches obtenues seront autant de points de vie à déduire des PV actuels de la noix. Si ces PV tombent à 0 ou moins, on arrete les assauts et la noix cède.


## Partie 4 : Une araignée sauvage apparait !

La noix cède enfin. Nos souris se rendent compte avec horreur que la noix était pourrie et qu'une arraignée avait élu domicile à l'intérieur. Celle-ci semble encore sonnée par les multiples assauts des souris sur la noix et ne semble pas en état d'attaquer bien qu'elle arrive à esquiver et parer les coups !

### L'objet arraignée

On replacera l'objet noix par une araignée. Celle-ci a 10PV. 

Elle a en plus une methode defendre. Cette methode prend en parametre le nombre de touche contre lesquelles elle doit se défendre. Pour ce faire, elle tirera 4 dés (oui, elle aussi prend le temps d'attraper et lancer les dés avec ses mandibulles avant que la boulle de feu ou le marteau ne la touche). Pour chaque bouclier obtenu, elle pare une touche. Pour chaque touche non parée, elle perd un point de vie.

### Les souris ciblent l'araignée

On modifiera la methode d'attaque des deux souris pour qu'elle apelle la methode de défense de l'araignée.

Les formages obtenus lors de ces lancés d'attaque ajoutent un au compteur de fromage de la souris.

L'araignée est terrassée quand ses points de vie tombent à 0 ou moins.


## Partie 5 : L'araignée contre-attaque !
Heureux de leur victoire facile, les deux souris celebrent leur nouveau badge tueur de gros énemis. Pourtant, l'araignée se relève, plus furieuse que jamais.

### Les souris se défendent
On dotera les souris 
* d'un nombre de point de vie:
  * Maginos : 5
  * Nez : 6
* d'une methode défendre. Toutes deux lanceront 3 dés. Les héros parreront une touche pour chaque bouclier obtenu, et obtiendront un fromage pour chaque dé indiquant fromage.

### L'araignée attaque
L'araignée peut désormais attaquer, de maniere assez similaire aux souris à ces différences près :
* Elle ne gagne pas de fromage
* Elle cible aléatoirement l'une ou l'autre des souris.
* Elle touche pour chaque symbol épee
* Elle lance 5 dés

### Se restaurer
Au lieu d'attaquer, les souris ayant deja perdu la moitié de leurs PV peuvent manger un formage pour se restaurer et regagner 1PV. Elle ne peuvent le faire que si elles ont au moins un fromage dans leur stock, et réduisent ainsi ce stock de 1. 


## Partie 6 : Le choix des actions

Devant la difficulté qu'ont les souris à vaincre cette arraignée, les souris se disent qu'elle peuvent tenter de regagner quelques forces en mangant du fromage.

### Une methode se restaurer
on ajoutera une methode se restaurer aux deux souris.
Ceci ne sera possible que si la souris a moins de la moitié de ses PV, et qu'elle dispose au moins trois fromage.
Cette methode retirera 3 fromages de la réserve des souris, et remettra leurs pv au max.
Si elle respecte ces deux conditions, cette méthode retournera true (pour indiquer que la souris s'est restaurée.
Sinon, elle retournera false.

### Une methode Instinct de survie
Si une souris n'a plus de PV, elle pourra consommer l'intégralité de sa réserve de fromages pour revenir à 2PV.
Elle mettra également la propeiété "pret au combat" que l'on aura ajouté à la définition des souris, et initialisé à true au début du jeu.
Cette methode retournera true si elle se trouve à 0PV au début de son tour, qu'elle récupère des PV ou non. Elle retourne false sinon.

### modification de l'attaque
On modifiera la métohde attaquer pour qu'elle retourne true, que l'on touche ou pas.

### Une methode play
On ajoutera une methode play à chacune des souris. Cette méthode représentera les choix qui s'offrent à une souris à son tour de jeu.
Elle devra, dans l'ordre de priorité :
1. Faire confiance à son instinct de surive
2. Se restaurer
3. Attaquer
On s'auupyera sur la valeur de retour de chacune de ses methodes pour savoir si on peut passer à la suivante.

De même on donnera une methode identique à l'araignée, mais celle-ci ne pourra faire qu'attaquer.

### modification de la boucle de jeu
Avant, nos personnages ne pouvaient qu'attaquer. On veillera désormais à faire appel à leur methode de jeu.
Ainsi, la souris et l'araignée récupèrent de l'intelligence. Elle décide pour elle même, au lieu que la boucle de jeu décide pour elle.

De même, la boucle de jeu se basera sur le membre "ready" de chaque personnage pour savoir si le jeu doit continuer. C'est à dire tant que l'araignée est opérationelle, ou qu'au moins une des deux souris est en état de combattre. Le changement d'état de l'araignée se fera dans la méthode défendre.

## Partie 7 : Victoire ou GameOver


On laissera au lecteur le soin de signaler de maniere visuelle qui des héros ou de l'araignée sort vivant de ce combat à mort.

## Partie 8 : Changements sur la piste d'initiative
Ici, on voudra tirer au hazard, au début de chaque tour de jeu, l'ordre d'initiative.


## Partie 9 : Reflexion autour du refactoring possible.

### Prototype
Bon nombre d'objets ici ont des comportement similaires. L'utilisation de prototype permettrait peut être un code plus structuré.

### Modularisation
Telle qu'elle est faite, la modularisation n'est pas bonne. On pourra se documenter plus sur ce point.







 


 







