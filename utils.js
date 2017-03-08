'use strict';

function rollDie(){
	var dieLaunch = Math.ceil(6*Math.random());
	switch(dieLaunch){
		case 1:
			return{			
				fromage : true,
				arc : false,
				epee : false,
				epeeBouclier : false
			};
		break;
		case 2:
		case 3:
		return{
				fromage : false,
				arc : true,
				epee: false,
				epeeBouclier : false
			};
		break;
		case 4:
			return{
				fromage : false,
				arc : false,
				epee : true,
				epeeBouclier : false
			};
		break;
		case 5:
		case 6:
			return{
				fromage : false,
				arc : false,
				epee : false,
				epeeBouclier : true
			};
		break;
	}
}

function rollDice(nbDice){
	var diceLaunched = [];
	for(var i=1; i<= nbDice; i++){
		diceLaunched.push(rollDie());
	}
	var result= {
		nbFromage : 0,
		nbEpee : 0,
		nbBouclier : 0,
		nbArc : 0
	};
	diceLaunched.forEach(function(die){ 
		if(die.fromage === true){
			result.nbFromage ++;
		}
		else if(die.arc === true){
			result.nbArc ++;
		}
		else if(die.epee === true){
			result.nbEpee ++;
		}
		else if(die.epeeBouclier === true){
			result.nbEpee ++;
			result.nbBouclier ++;
		}
	});
	return result;
}