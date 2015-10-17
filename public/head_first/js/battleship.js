var randomloc = Math.floor(Math.random() * 5);
var location1 = randomloc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var hits = 0;
var guesses = 0;

var isSunk = false;


while(isSunk == false) {

	var guess = prompt("Ready, aim, fire!! Enter a number between 0-6: ");

	if(0 > guess || guess > 6){
		alert("Please enter a number between 0-6");

	} else {

		guesses+= 1;

		if(guess == location1 || guess == location2 || guess == location3 ) {
			hits+=1;
			alert("HIT!");

			if(hits == 3) {

				isSunk = true;
				alert("You have sunk my battleship!");

			}
		} else {
			alert("MISS");
		}

	}
}

var stats = "You took " + guesses + " guesses to sink my battleship" + "you accuracy was " + (3/guesses);

alert(stats);