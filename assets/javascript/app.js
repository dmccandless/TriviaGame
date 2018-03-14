//set up the crystals buttons and set the initial value variables of the game

$(document).ready(function(){

	//start button
	$("#startButton").click(function(){
		triviaGame.initGame();
	});

});

//here's the game object

var triviaGame = {

	//opening "screen"
	//qAndA "screens"
	//closing "screen"


//displays cumulative wins and losses for player as of this end of game
//after 2 second delay, starts a new game

	wrapUpGame: function(){
		$("#winsCounted").text("Wins: " + triviaGame.winsCounter);
		$("#lossesCounted").text("Losses: " + triviaGame.lossesCounter);
		setTimeout(triviaGame.resetInitValues, 2000);
	}

}; 
//end of triviaGame object



