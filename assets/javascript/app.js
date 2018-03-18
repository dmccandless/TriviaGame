$(document).ready(function(){

	triviaGame.initGame();

});

//here's the game object
//needed:
//opening "gameBoard"
//qAndA "gameBoards"
//closing "gameBoard"
//array of strings of questions
//array of objects containing strings of answers to questions
//marker on correct string in each answer object
//each question string is placed in a <p> on each qAndA gameBoard
//each answer string is placed on a button in each qAndA gameBoard


//put arrays together in an object

var question01 = {
	question: "Which of the following Presidents was impeached?",
	answers: ["Lyndon Johnson", "Andrew Johnson", "Dwight Eisenhower", "Herbert Hoover"],
	correctAnswer: "Andrew Johnson"
}

var question02 = {
	question: "Which President was President for two non-consecutive terms?",
	answers: ["Grover Cleveland", "James Monroe", "Woodrow Wilson", "Ulysses S. Grant"],
	correctAnswer: "Grover Cleveland"
}

var question03 = {
	question: "Which President was NOT a general before he was President?",
	answers: ["Dwight Eisenhower", "George Washington", "Franklin D. Roosevelt", "Ulysses S. Grant"],
	correctAnswer: "Franklin D. Roosevelt"
}

var question04 = {
	question: "Which President was NOT from Virginia?",
	answers: ["John Adams", "Thomas Jefferson", "James Madison", "Woodrow Wilson"],
	correctAnswer: "John Adams"
}

var question05 = {
	question: "Which President served the shortest span of time as President?",
	answers: ["Zachary Taylor", "William Henry Harrison", "James A. Garfield", "William McKinley"],
	correctAnswer: "William Henry Harrison"
}

/*var questions = ["Which President was impeached?", 
				 "Which President was President for two non-consecutive terms?",
				 "Which President was NOT a general before he was President?",
				 "Which President was NOT from Virginia?",
				 "Which President served the shortest amount of time as President?"];

var answers = [["Lyndon Johnson", "Andrew Johnson*", "Dwight Eisenhower", "Herbert Hoover"],
			   ["Grover Cleveland*", "James Monroe", "Woodrow Wilson" "Ulysses S. Grant"],
			   ["Dwight Eisenhower", "George Washington", "Franklin D. Roosevelt*", "Ulysses S. Grant"],
			   ["John Adams*", "Thomas Jefferson", "James Madison", "Woodrow Wilson"],
			   ["Zachary Taylor", "William Henry Harrison*", "James A. Garfield", "William McKinley"]];*/

var triviaGame = {

	pageTime: 20000,

	initGame: function(){
		//call assembleHelloBoard() to make opening gameBoard
	}

	timer: function(){
		triviaGame.pageTime--;
	}

	assembleHelloBoard: function(){
		//assemble opening gameBoard
	}

	displayHelloBoard: function(){
		//display opening gameBoard
		//$("#startButton").click(function(){call first qAndA gameBoard, set timer to 20s});
	}


	assembleQandA_Board: function(){
		//
	}

	displayQandA_Board: function(){
		//display opening gameBoard
	}

	processSelections: function(){

	}

	keepScore: function(){

	}

	assembleWrapUpBoard: function(){

	}

	displayWrapUpBoard: function(){

	}

//displays cumulative wins and losses for player as of this end of game
//after 2 second delay, starts a new game

	wrapUpGame: function(){
		$("#winsCounted").text("Wins: " + triviaGame.winsCounter);
		$("#lossesCounted").text("Losses: " + triviaGame.lossesCounter);
		setTimeout(triviaGame.resetInitValues, 2000);
	}

}; 
//end of triviaGame object



