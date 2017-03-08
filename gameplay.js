'use strict';

// Vérification d'appel de la fonction rollDice

console.log(rollDice(4));

// PARTIE 2  : DUEL AU DE

// Création des souris

var mice =[
	{name : 'Nez', nbFromageObtained : 0},
	{name : 'Maginos', nbFromageObtained : 0}
];

// Boucle de jeu

for(var i=1; i<=50; i++){
	mice[0].nbFromageObtained += rollDice(1).nbFromage;
	mice[1].nbFromageObtained += rollDice(1).nbFromage;
}

console.log(mice);

// Affichage du gagnant du Duel


if(mice[0].nbFromageObtained < mice[1].nbFromageObtained){
	document.write(mice[1].name + ' a gagné le duel de dés<br>');
}
else if(mice[0].nbFromageObtained > mice[1].nbFromageObtained){
	document.write(mice[0].name + ' a gagné le duel de dés<br>');
}
else{
	document.write("Egalité aux dés entre Nez et Maginos ! <br>");
}

// PARTIE 3  : ENTRAINEMENT SUR UNE NOIX

// Multiple lancer de dé ==> fonction rollDice() dans utils.

// Attaquer

mice[0].attack = function(){
	var nbTouches = rollDice(3).nbEpee;
	console.log(mice[0].name + ' a obtenu ' + nbTouches + ' touche(s)');
	return nbTouches;
};

mice[1].attack = function(){
	var nbTouches = rollDice(4).nbArc;
	console.log(mice[1].name + ' a obtenu ' + nbTouches + ' touche(s)');
	return nbTouches;
};

var noix = {
	PVmax : 25,
	PVactuels : 25
};

var attackRound;

function initializeAttackRound(){
	attackRound = 1;
} 

initializeAttackRound();

while(noix.PVactuels > 0){
	console.log('Tour numéro ' + attackRound);
	noix.PVactuels = noix.PVactuels - mice[0].attack();
	console.log('Il reste ' + noix.PVactuels + ' PV à la noix');
	attackRound ++;
	console.log('Tour numéro ' + attackRound);
	noix.PVactuels = noix.PVactuels - mice[1].attack();
	console.log('Il reste ' + noix.PVactuels + ' PV à la noix');
	attackRound ++;
}

if(attackRound%2 === 0){
	document.write(attackRound + " attaques ont été nécessaires pour casser la noix et c'est Maginos qui l'a achevée <br>");
}
else{
	document.write(attackRound + " attaques ont été nécessaires pour casser la noix et c'est Nez qui l'a achevée <br>");
}

var araignee = {
	PVmax : 10,
	PVactuels : 10,
	defendre : function(nbTouches){
		var defenseResult = nbTouches - rollDice(4).nbBouclier;
		var strikes;
		if(defenseResult <=0){
			var strikes = 0;
			console.log("L'araignée se défend et esquive toutes les touches potentielles!");
		}
		else{
			var strikes = console.log("L'araignée se défend mais subit " + defenseResult + " blessure(s)");
			return araignee.PVactuels -= defenseResult;
		}
	}
};


mice[0].attack = function(){
	var nbTouches = rollDice(3).nbEpee;
	console.log(mice[0].name + ' a obtenu ' + nbTouches + ' touche(s)');
	return araignee.defendre(nbTouches);
}

mice[1].attack = function(){
	var nbTouches = rollDice(4).nbArc;
	console.log(mice[1].name + ' a obtenu ' + nbTouches + ' touche(s)');
	return araignee.defendre(nbTouches);
}

mice[0].attack();
console.log("Il reste " + araignee.PVactuels + " PV à l'araignée");
mice[1].attack();
console.log("Il reste " + araignee.PVactuels + " PV à l'araignée");



while(noix.PVactuels > 0){
	console.log('Tour numéro ' + attackRound);
	noix.PVactuels = noix.PVactuels - mice[0].attack();
	console.log('Il reste ' + noix.PVactuels + ' PV à la noix');
	attackRound ++;
	console.log('Tour numéro ' + attackRound);
	noix.PVactuels = noix.PVactuels - mice[1].attack();
	console.log('Il reste ' + noix.PVactuels + ' PV à la noix');
	attackRound ++;
}