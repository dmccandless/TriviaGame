$("#startButton").click(function(){
	triviaGame.startBtn();
});

$("#answer01Btn").click(function(){
	triviaGame.firstPossAnsBtn();
});

$("#answer02Btn").click(function(){
	triviaGame.secondPossAnsBtn();
});

$("#answer03Btn").click(function(){
	triviaGame.thirdPossAnsBtn();
});

$("#answer04Btn").click(function(){
	triviaGame.fourthPossAnsBtn();
});



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

var questionArray = ["question01", "question02", "question03", "question04", "question05"];



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
		assembleQandA_Board(questIndex);
		setTimeout(processSelections, 20000);
		questIndex++;
	},

	firstPossAnsBtn: function(){
		clearTimeout();
		var btnAnsInput = $(this).attr("data-possAns");
		processSelections(questionArray[0], btnAnsInput);
	},

	secondPossAnsBtn: function(){
		clearTimeout();
		var btnAnsInput = $(this).attr("data-possAns");
		processSelections(questionArray[1], btnAnsInput);
	},

	thirdPossAnsBtn: function(){
		clearTimeout();
		var btnAnsInput = $(this).attr("data-possAns");
		processSelections(questionArray[2], btnAnsInput);
	},

	fourthPossAnsBtn: function(){
		clearTimeout();
		var btnAnsInput = $(this).attr("data-possAns");
		processSelections(questionArray[3], btnAnsInput);
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

	assembleQandA_Board: function(questIndex){
		resetPageTimer(); //?
		var timerPara = $("<p>");
		timerPara.text("Time remaining: " + pageTimer + "seconds");//will this be in milliseconds and going up not down?
		var questPara = $("<p>");
		questPara.text(questionArray[questIndex].question);
		var firstPossAnsBtn = $("<button>");
		firstPossAnsBtn.addClass("possAns");
		firstPossAnsBtn.attr("data-possAns", questionArray[questIndex].answers[0])
		firstPossAnsBtn.text(questionArray[questIndex].answers[0]);
		var secondPossAnsBtn = $("<button>");
		secondPossAnsBtn.addClass("possAns");
		secondPossAnsBtn.attr("data-possAns", questionArray[questIndex].answers[1])
		secondPossAnsBtn.text(questionArray[questIndex].answers[1]);
		var thirdPossAnsBtn = $("<button>");
		thirdPossAnsBtn.addClass("possAns");
		thirdPossAnsBtn.attr("data-possAns", questionArray[questIndex].answers[2])
		thirdPossAnsBtn.text(questionArray[questIndex].answers[2]);
		var fourthPossAnsBtn = $("<button>");
		fourthPossAnsBtn.addClass("possAns");
		fourthPossAnsBtn.attr("data-possAns", questionArray[questIndex].answers[3])
		fourthPossAnsBtn.text(questionArray[questIndex].answers[3]);

		triviaGame.displayQandA_Board();
	},

	displayQandA_Board: function(){
		$("#viewScreen").empty();
		$("#viewScreen").append(timerPara);
		$("#viewScreen").append(questPara);
		$("#viewScreen").append(firstPossAnsBtn);
		$("#viewScreen").append(secondPossAnsBtn);
		$("#viewScreen").append(thirdPossAnsBtn);
		$("#viewScreen").append(fourthPossAnsBtn);
	},


	processSelections: function(questIndex, answerInput){
		answersGivenCounter++;
		if(questionArray[questIndex].correctAnswer === answerInput){
		answerStatus = 0;
		correctAnswers++;
		}
		else if(questionArray[questIndex].correctAnswer !== answerInput){
			answerStatus = 1;
			incorrectAnswers++;
		} else{
			answerStatus = 2;
			outOfTimes++;
		}
		assembleAnswerBoard(answerStatus);
	},

	assembleAnswerBoard: function(questIndex, answerStatus){
		var timerPara = $("<p>");
		timerPara.text("Time remaining: " + pageTimer + "seconds");//will this be in milliseconds and going up not down?
		var questPara = $("<p>");
		questPara.text(questionArray[questIndex].question);
		var remarkPara = $("<p>");
		remarkArray.text(remarkArray[answerStatus]);
		var corrAnsPara = $("<p>");
		corrAnsPara.text(questionArray[questIndex].correctAnswer);
		var corrAnsImg = $("<img>");
		corrAnsImg.html(questionArray[questIndex].correctImg);
		displayAnswerBoard(answerStatus);
	},

	displayAnswerBoard: function(answerStatus){
		$("#viewScreen").empty();
		$("#viewScreen").append(timerPara);//but this timerPara will be stopped
		$("#viewScreen").append(questPara);
		$("#viewScreen").append(remarkPara);
		$("#viewScreen").append(corrAnsPara);
		$("#viewScreen").append(corrAnsImg);

		setTimeout(autoNewPage, 3000);		
	},

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

	displayWrapUpBoard: function(){
		$("#viewScreen").empty();
		$("#viewScreen").append(gameOverPara);
		$("#viewScreen").append(winsPara);
		$("#viewScreen").append(lossesPara);
		$("#viewScreen").append(outOfTimesPara);
		$("#viewScreen").append(startBtn);
		
	}

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

