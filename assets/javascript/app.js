$("#startButton").click(function(){
	triviaGame.startBtn();
});

$("#answer01Btn").click(function(){
	triviaGame.firstPossAnsBtnPressed();
});

$("#answer02Btn").click(function(){
	triviaGame.secondPossAnsBtnPressed();
});

$("#answer03Btn").click(function(){
	triviaGame.thirdPossAnsBtnPressed();
});

$("#answer04Btn").click(function(){
	triviaGame.fourthPossAnsBtnPressed();
});









var questionArray = [

	{	question: "Which of the following Presidents was impeached?",
		answers: ["Lyndon Johnson", "Andrew Johnson", "Dwight Eisenhower", "Herbert Hoover"],
		correctAnswer: "Andrew Johnson",
		correctImg: "../images/johnsonA.png" },

	{	question: "Which President was President for two non-consecutive terms?",
		answers: ["Grover Cleveland", "James Monroe", "Woodrow Wilson", "Ulysses S. Grant"],
		correctAnswer: "Grover Cleveland",
		correctImg: "../images/cleveland.png" },

	{	question: "Which President was NOT a general before he was President?",
		answers: ["Dwight Eisenhower", "George Washington", "Franklin D. Roosevelt", "Ulysses S. Grant"],
		correctAnswer: "Franklin D. Roosevelt",
		correctImg: "../images/rooseveltFD.png" },

	{	question: "Which President was NOT from Virginia?",
		answers: ["John Adams", "Thomas Jefferson", "James Madison", "Woodrow Wilson"],
		correctAnswer: "John Adams",
		correctImg: "../images/adamsJ.png" },

	{	question: "Which President served the shortest span of time as President?",
		answers: ["Zachary Taylor", "William Henry Harrison", "James A. Garfield", "William McKinley"],
		correctAnswer: "William Henry Harrison",
		correctImg: "../images/harrisonWH.png" }
];



var remarkArray = ["Yep, you got it right!", "Nope! But here's the correct answer....",
					 "Time's up for this question, let's move to the next one."];

//use triviaGame prefix on calls when necessary
//remember to use val() when necessary

	





var triviaGame = {

	pageTimer: 20000, //? is this really needed if I use setTimeouts of 20000 - seems necessary for display of time to user
	correctAnswers: 0,
	incorrectAnswers: 0,
	outOfTimes: 0,
	questIndex: 0,
	answersGivenCounter: 0,


	startBtn: function(){
		triviaGame.assembleQandA_Board(triviaGame.questIndex);
		//setTimeout(processSelections, 20000);
		//triviaGame.displayQuestAnsScreen(triviaGame.questIndex);
		//triviaGame.questIndex++;
	},

	firstPossAnsBtnPressed: function(){
		clearTimeout();	
		var btnAnsInput = $(this).attr("data-possAns");
		triviaGame.processSelections(questionArray[0], btnAnsInput);
	},

	secondPossAnsBtnPressed: function(){
		clearTimeout();
		var btnAnsInput = $(this).attr("data-possAns");
		triviaGame.processSelections(questionArray[1], btnAnsInput);
	},

	thirdPossAnsBtnPressed: function(){
		clearTimeout();
		var btnAnsInput = $(this).attr("data-possAns");
		triviaGame.processSelections(questionArray[2], btnAnsInput);
	},

	fourthPossAnsBtnPressed: function(){
		clearTimeout();	
		var btnAnsInput = $(this).attr("data-possAns");
		triviaGame.processSelections(questionArray[3], btnAnsInput);
	},

	initGame: function(){
		triviaGame.displayHelloScreen();
	},

	resetPageTimer: function(){
		pageTimer: 20000
	},

	displayHelloScreen: function(){
		$("#viewHelloScreen").css("display", "block");
	},

	displayQuestAnsScreen: function(){
		$("#viewHelloScreen").css("display", "none");
		$("#viewQuestAnsScreen").css("display", "block");
	},

	displayAnsScreen: function(){
		$("#viewQuestAnsScreen").css("display", "none");
		$("#viewAnsScreen").css("display", "block");
	},

	displayClosingScreen: function(){
		$("#viewAnsScreen").css("display", "none");
		$("#viewClosingScreen").css("display", "block");
	},

	displayHelloAgainScreen: function(){
		$("#viewClosingScreen").css("display", "none");
		$("#viewHelloScreen").css("display", "block");
	},


	assembleQandA_Board: function(questIndex){
		//$("#viewQuestAnsScreen").empty();
		$("#timerDisplay").text("20 seconds");
		$("#questionDisplay").text(questionArray[triviaGame.questIndex].question);
		console.log(questionArray[triviaGame.questIndex]);
		$("#answer01Btn").addClass("possAns");
		$("#answer01Btn").attr("data-possAns", questionArray[triviaGame.questIndex].answers[0]);
		$("#answer01Btn").text(questionArray[triviaGame.questIndex].answers[0]);
		$("#answer02Btn").addClass("possAns");
		$("#answer02Btn").attr("data-possAns", questionArray[triviaGame.questIndex].answers[1]);
		$("#answer02Btn").text(questionArray[questIndex].answers[1]);
		$("#answer03Btn").addClass("possAns");
		$("#answer03Btn").attr("data-possAns", questionArray[triviaGame.questIndex].answers[2]);
		$("#answer03Btn").text(questionArray[questIndex].answers[2]);
		$("#answer04Btn").addClass("possAns");
		$("#answer04Btn").attr("data-possAns", questionArray[triviaGame.questIndex].answers[3]);
		$("#answer04Btn").text(questionArray[questIndex].answers[3]);

		triviaGame.displayQuestAnsScreen();
	},


	processSelections: function(questIndex, answerInput){
		triviaGame.answersGivenCounter++;
		if(questionArray[triviaGame.questIndex].correctAnswer === answerInput){
		triviaGame.answerStatus = 0;
		triviaGame.correctAnswers++;
		}
		else if(questionArray[triviaGame.questIndex].correctAnswer !== answerInput){
			triviaGame.answerStatus = 1;
			triviaGame.incorrectAnswers++;
		} else{
			triviaGame.answerStatus = 2;
			triviaGame.outOfTimes++;
		}
		triviaGame.assembleAnswerBoard(triviaGame.answerStatus);
	},

	assembleAnswerBoard: function(questIndex, answerStatus){
		$("#timerDisplay").text("20 seconds");
		$("#questionDisplay").text(questionArray[triviaGame.questIndex].question);
		
		remarkArray.text(remarkArray[answerStatus]);
		var corrAnsPara = $("<p>");
		corrAnsPara.text(questionArray[questIndex].correctAnswer);
		var corrAnsImg = $("<img>");
		corrAnsImg.html(questionArray[questIndex].correctImg);
		displayAnswerBoard(answerStatus);
	},

	

	//setTimeout(autoNewPage, 3000);		
	

	//helper function for automatically shifting to another page
	autoNewPage: function(answersGivenCounter, questIndex){
		if(answersGivenCounter === 5){
			assembleWrapUpBoard();
		} else if(answersGivenCounter < 5){
			assembleQandABoard(questionArray[questIndex + 1]);
		}
	},				

	assembleWrapUpBoard: function(){
		var gameOverPara = $("<p>");
		gameOverPara.text("Game's over.  Here's how you did.");
		var winsPara = $("<p>");
		winsPara.text("Wins: " + correctAnswers);
		var lossesPara = $("<p>");
		lossesPara.text("Losses: " + incorrectAnswers);
		var outOfTimesPara = $("<p>");
		outOfTimesPara.text("Unanswered: " + outOfTimes);
		var startBtn = $("<button>");
		startBtn.text("START OVER?");

	},

};

$(document).ready(function(){

	triviaGame.initGame();

});
//end of triviaGame object

//significant input validation issues that are not addressed here:
//"very friendly user" assumption

/*from Bootcamp video:

var game = {
	......
	counter: 20,
	........
	countdown: function(){
		game.counter--;
		$("#counter").html(game.counter);
		if(game.counter <= 0){
			game.timeUp();
		}
	},
	loadQuestion: function{
		timer = setInterval(game.countdown, 1000);
		$("#subWrapper").html("<h2>Time Remaining <span id='counter'>20 </span>Seconds</h2>");
	}


}
*/




//unclear if I will need the timer control help of something like timeCompute object
/*
var timeCompute = {

// This code will run as soon as the page loads
window.onload = function() {
  //$("#lap").on("click", stopwatch.recordLap);
  $("#stop").on("click", stopwatch.stop);
  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {

  time: 0,
  //lap: 1,

  reset: function() {

    stopwatch.time = 0;
    //stopwatch.lap = 1;

    // DONE: Change the "display" div to "00:00."
    $("#display").text("00:00");

  },
  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 20000);
        clockRunning = true;
    }
  },
  stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },

  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time++;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
}; //end of timeCompute object

*/

//**********************************************************************
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

