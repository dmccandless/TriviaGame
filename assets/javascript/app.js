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
//significant input validation issues that are not addressed here:
//"very friendly user" assumption


//put related arrays together in objects

var question01 = {
	question: "Which of the following Presidents was impeached?",
	answers: ["Lyndon Johnson", "Andrew Johnson", "Dwight Eisenhower", "Herbert Hoover"],
	correctAnswer: "Andrew Johnson",
	correctImg: "../images/johnsonA.png"
}

var question02 = {
	question: "Which President was President for two non-consecutive terms?",
	answers: ["Grover Cleveland", "James Monroe", "Woodrow Wilson", "Ulysses S. Grant"],
	correctAnswer: "Grover Cleveland",
	correctImg: "../images/cleveland.png"
}

var question03 = {
	question: "Which President was NOT a general before he was President?",
	answers: ["Dwight Eisenhower", "George Washington", "Franklin D. Roosevelt", "Ulysses S. Grant"],
	correctAnswer: "Franklin D. Roosevelt",
	correctImg: "../images/rooseveltFD.png"
}

var question04 = {
	question: "Which President was NOT from Virginia?",
	answers: ["John Adams", "Thomas Jefferson", "James Madison", "Woodrow Wilson"],
	correctAnswer: "John Adams",
	correctImg: "../images/adamsJ.png"
}

var question05 = {
	question: "Which President served the shortest span of time as President?",
	answers: ["Zachary Taylor", "William Henry Harrison", "James A. Garfield", "William McKinley"],
	correctAnswer: "William Henry Harrison",
	correctImg: "../images/harrisonWH.png"
}

//set up array of question objects

var questionArray = ["question01", "question02", "question03", "question04", "question05"];


//questionArray[0].question
//questionArray[0].answer[2]
//questionArray[0].correctAnswer

/*
var letters = [a, b, c];

for(var i = 0; i < letters.length; i++){
	var letterBtn = $("<button>");
	letterBtn.addClass("letter-button letter letter-button-color");
	letterBtn.attr("data-letter", letters[i]);
	letterBtn.text(letters[i]);
	$("#buttons").append(letterBtn);
}


$(".letter-button").click(function(){
	var fridgeMagnet = $("<div>");
	fridgeMagnet.addClass("letter fridge-color");
	fridgeMagnet.text($(this).attr("data-letter"));
	console.log(fridgeMagnet);
	$("#display").append(fridgeMagnet);
});

$("#clear").click(function(){
	$("#display").empty();
});

//***************** some mock-ups

$("#startButton").click(function(){
	$("#viewScreen").empty();
});
*/

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

var remarkArray = ["Yep, you got it right!", "Nope! But here's the correct answer....",
					 "Time's up for this question, let's move to the next one."];

var triviaGame = {

	pageTime: 20000,
	correctAnswers: 0,
	incorrectAnswers: 0,
	outOfTimes: 0,

	initGame: function(){
		//call assembleHelloBoard() to make opening gameBoard
	}

	timer: function(){
		triviaGame.pageTime--;
	}

	/*assembleHelloBoard: function(){
		//assemble opening gameBoard
	}*/

	displayHelloBoard: function(){
		//display opening gameBoard
		//$("#startButton").click(function(){call first qAndA gameBoard, set page timer to 20000});
	}
	//flip timer should be set to 3000

	/*assembleQandA_Board: function(){
		//
	}*/

	displayQandA_Board: function(/*questionArray[i]*/){
		$("#viewScreen").append(/*timer*/);//in a <p>
		$("#viewScreen").append(questionArray[0].question);//in a <p>
		$("#viewScreen").append(questionArray[0].answer[0]);//on a <button>
		$("#viewScreen").append(questionArray[0].answer[1]);//on a <button>
		$("#viewScreen").append(questionArray[0].answer[2]);//on a <button>
		$("#viewScreen").append(questionArray[0].answer[3]);//on a <button>
		//on any answer button click, call processSelections(question[i]) 
		//on expiration of page timer, call processSelections(question[i], answerInput)
	}

	//click button event for player to submit answer
	//click button event to start game
	//click button event to start another game

	//timer event to move to another page if no answer

	/*processSelections: function(question[i], answerInput){
		//if(questionArray[0].correctAnswer === answerInput){
		answerStatus = 1;
		correctAnswers++;
		}
		else if(questionArray[0].correctAnswer !== answerInput){
			answerStatus = -1;
			incorrectAnswers++;
		} else{
			answerStatus = 0;
			outOfTimes++;
		}
		call displayAnswerBoard(answerStatus);
		set flip timer to 3000
			when timer expires and answerGivenCounter === 5, call displayWrapUpBoard()
			when timer expires and answerGivenCounter < 5, call displayQandABoard() with
				questionArray[i + 1]
	}*/

	displayAnswerBoard: function(answerStatus){
		$("#viewScreen").append(/*pageTimer -- but stopped*/);
		$("#viewScreen").append(questionArray[0].question);
		$("#viewScreen").append(remarkArray[0]);
		$("#viewScreen").append(questionArray[0].correctAnswer);
		$("#viewScreen").append(questionArray[0].correctImg);

	}

	keepScore: function(){
		//update counters
	}

	/*assembleWrapUpBoard: function(){

	}*/

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



