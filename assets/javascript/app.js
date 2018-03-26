$("#startButton").click(function(){
	triviaGame.startBtnPressed();
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

$("#reStartButton").click(function(){
	triviaGame.reStartBtnPressed();
});



var btnAnsInput = "";



var questionArray = [

	{	question: "Which of the following Presidents was impeached?",
		answers: ["Lyndon Johnson", "Andrew Johnson", "Dwight Eisenhower", "Herbert Hoover"],
		correctAnswer: "Andrew Johnson",
		correctImg: "assets/images/johnsonA.png",
		correctImgDescrip: "Picture of President Andrew Johnson"},

	{	question: "Which President was President for two non-consecutive terms?",
		answers: ["Grover Cleveland", "James Monroe", "Woodrow Wilson", "Ulysses S. Grant"],
		correctAnswer: "Grover Cleveland",
		correctImg: "assets/images/clevelandG.png",
		correctImgDescrip: "Picture of President Grover Cleveland"},

	{	question: "Which President was NOT a general before he was President?",
		answers: ["Dwight Eisenhower", "George Washington", "Franklin D. Roosevelt", "Ulysses S. Grant"],
		correctAnswer: "Franklin D. Roosevelt",
		correctImg: "assets/images/rooseveltFD.png", 
		correctImgDescrip: "Picture of President Franklin D. Roosevelt"},

	{	question: "Which President was NOT from Virginia?",
		answers: ["John Adams", "Thomas Jefferson", "James Madison", "Woodrow Wilson"],
		correctAnswer: "John Adams",
		correctImg: "assets/images/adamsJ.png", 
		correctImgDescrip: "Picture of President John Adams"},

	{	question: "Which President served the shortest span of time as President?",
		answers: ["Zachary Taylor", "William Henry Harrison", "James A. Garfield", "William McKinley"],
		correctAnswer: "William Henry Harrison",
		correctImg: "assets/images/harrisonWH.png", 
		correctImgDescrip: "Picture of President William Henry Harrison"}
];



var remarkArray = ["Yep, you got it right!", "Nope! But here's the correct answer....",
					 "Time's up for this question, let's move on to the next one."];

//use triviaGame prefix on calls when necessary
//remember to use val() when necessary

	





var triviaGame = {

	correctAnswers: 0,
	incorrectAnswers: 0,
	outOfTimes: 0,
	questIndex: 0,
	answersGivenCounter: 0,
	answerStatus: 0,


	startBtnPressed: function(){
		triviaGame.assembleQandA_Board();
	},

	firstPossAnsBtnPressed: function(){
		stopwatch.stop();
		//clearTimeout(triviaGame.outOfTimeProcessing);
		stopwatch.reset();
		console.log(stopwatch.time);
		btnAnsInput = $("#answer01Btn").attr("data-possAns");
		console.log($("#answer01Btn").attr("data-possAns"));
		console.log(btnAnsInput);
		triviaGame.processSelections(questionArray[0], btnAnsInput);
	},

	secondPossAnsBtnPressed: function(){
		stopwatch.stop();
		//clearTimeout(triviaGame.outOfTimeProcessing);
		stopwatch.reset();
		console.log(stopwatch.time);
		btnAnsInput = $("#answer02Btn").attr("data-possAns");
		triviaGame.processSelections(questionArray[1], btnAnsInput);
	},

	thirdPossAnsBtnPressed: function(){
		stopwatch.stop();
		//clearTimeout(triviaGame.outOfTimeProcessing);
		stopwatch.reset();
		console.log(stopwatch.time);
		btnAnsInput = $("#answer03Btn").attr("data-possAns");
		triviaGame.processSelections(questionArray[2], btnAnsInput);
	},

	fourthPossAnsBtnPressed: function(){
		stopwatch.stop();
		//clearTimeout(triviaGame.outOfTimeProcessing);
		stopwatch.reset();
		console.log(stopwatch.time);
		btnAnsInput = $("#answer04Btn").attr("data-possAns");
		triviaGame.processSelections(questionArray[3], btnAnsInput);
	},

	reStartBtnPressed: function(){
		stopwatch.reset();
		console.log(stopwatch.time);
		triviaGame.correctAnswers = 0;
		console.log(triviaGame.correctAnswers);
		triviaGame.incorrectAnswers = 0;
		triviaGame.outOfTimes = 0;
		triviaGame.questIndex = 0;
		triviaGame.answersGivenCounter = 0;
		triviaGame.answerStatus = 0;
		btnAnsInput = "";
		triviaGame.displayQuestAnsScreenAgain();
	},

	initGame: function(){
		triviaGame.displayHelloScreen();
	},

	displayHelloScreen: function(){
		$("#viewHelloScreen").css("display", "block");
	},

	displayQuestAnsScreen: function(){
		$("#viewHelloScreen").css("display", "none");
		$("#viewQuestAnsScreen").css("display", "block");
		//setTimeout(triviaGame.outOfTimeProcessing, 20000);
	},

	displayAnsScreen: function(){
		$("#viewQuestAnsScreen").css("display", "none");
		$("#viewAnsScreen").css("display", "block");
		setTimeout(triviaGame.autoNewPage, 3000);
	},

	displayClosingScreen: function(){
		$("#viewAnsScreen").css("display", "none");
		$("#viewClosingScreen").css("display", "block");
	},

	displayQuestAnsScreenAgain: function(){
		$("#viewClosingScreen").css("display", "none");
		triviaGame.assembleQandA_Board();
		$("#viewQuestAnsScreen").css("display", "block");
	},


	assembleQandA_Board: function(){
		stopwatch.reset();
		console.log(stopwatch.time);
		stopwatch.start();
		$("#questionDisplay").text(questionArray[triviaGame.questIndex].question);
		console.log(questionArray[triviaGame.questIndex]);
		$("#answer01Btn").addClass("possAns");
		$("#answer01Btn").attr("data-possAns", questionArray[triviaGame.questIndex].answers[0]);
		$("#answer01Btn").text(questionArray[triviaGame.questIndex].answers[0]);
		$("#answer02Btn").addClass("possAns");
		$("#answer02Btn").attr("data-possAns", questionArray[triviaGame.questIndex].answers[1]);
		$("#answer02Btn").text(questionArray[triviaGame.questIndex].answers[1]);
		$("#answer03Btn").addClass("possAns");
		$("#answer03Btn").attr("data-possAns", questionArray[triviaGame.questIndex].answers[2]);
		$("#answer03Btn").text(questionArray[triviaGame.questIndex].answers[2]);
		$("#answer04Btn").addClass("possAns");
		$("#answer04Btn").attr("data-possAns", questionArray[triviaGame.questIndex].answers[3]);
		$("#answer04Btn").text(questionArray[triviaGame.questIndex].answers[3]);
		//setTimeout(triviaGame.outOfTimeProcessing, 20000);
		triviaGame.displayQuestAnsScreen();
	},


	processSelections: function(questIndex, btnAnsInput){
		triviaGame.answersGivenCounter++;
		console.log(btnAnsInput);
		console.log(questIndex);
		if(questionArray[triviaGame.questIndex].correctAnswer === btnAnsInput){
			triviaGame.answerStatus = 0;
			triviaGame.correctAnswers++;
		}
		else if(questionArray[triviaGame.questIndex].correctAnswer !== btnAnsInput){
			triviaGame.answerStatus = 1;
			triviaGame.incorrectAnswers++;
		} else{
			triviaGame.answerStatus = 2;
			triviaGame.outOfTimes++;
		}
		triviaGame.assembleAnswerBoard();
		console.log(triviaGame.answerStatus);
	},

	outOfTimeProcessing: function(){/*
		stopwatch.stop();
		clearTimeout(triviaGame.outOfTimeProcessing);
		triviaGame.answerStatus = 2;
		triviaGame.outOfTimes++;
		btnAnsInput = "Nobody";
		$("#timerDisplay").text("Seconds remaining: " + stopwatch.time);
		$("#questionDisplayAns").text(questionArray[triviaGame.questIndex].question);
		$("#playerGuess").text("You guessed: " + btnAnsInput);
		$("#resultMessage").text(remarkArray[triviaGame.answerStatus]);
		console.log(remarkArray[triviaGame.answerStatus]);
		$("#corrAnsDisplay").text("The correct answer is: " + questionArray[triviaGame.questIndex].correctAnswer);
		$("#corrAnsImg").attr("src", questionArray[triviaGame.questIndex].correctImg);
		$("#corrAnsImg").attr("alt", questionArray[triviaGame.questIndex].correctImgDescrip);
		console.log(questionArray[triviaGame.questIndex].correctImg);
		stopwatch.reset();
		console.log(stopwatch.time);
		triviaGame.displayAnsScreen();
		triviaGame.answersGivenCounter++; */
	},

	assembleAnswerBoard: function(){
		$("#timerDisplay").text("Seconds remaining: " + stopwatch.time);
		$("#questionDisplayAns").text(questionArray[triviaGame.questIndex].question);
		console.log(questionArray[triviaGame.questIndex].question);
		$("#playerGuess").text("You guessed: " + btnAnsInput);
		console.log(btnAnsInput);
		$("#resultMessage").text(remarkArray[triviaGame.answerStatus]);
		console.log(remarkArray[triviaGame.answerStatus]);
		$("#corrAnsDisplay").text("The correct answer is: " + questionArray[triviaGame.questIndex].correctAnswer);
		$("#corrAnsImg").attr("src", questionArray[triviaGame.questIndex].correctImg);
		$("#corrAnsImg").attr("alt", questionArray[triviaGame.questIndex].correctImgDescrip);
		console.log(questionArray[triviaGame.questIndex].correctImg);
		triviaGame.displayAnsScreen();
	},

	autoNewPage: function(){
		$("#viewAnsScreen").css("display", "none");
		if(triviaGame.answersGivenCounter === 5){
			triviaGame.assembleClosingBoard();
		} else if(triviaGame.answersGivenCounter < 5){
			triviaGame.questIndex++;
			stopwatch.reset();
			triviaGame.assembleQandA_Board();
			console.log(questionArray[triviaGame.questIndex]);
		}
	},				

	assembleClosingBoard: function(){
		$("#timerDisplay").text("Seconds remaining: " + stopwatch.time);
		$("#playerPerfMessage").text("Game's over.  Here's how you did.");
		$("#totalCorrectDisplay").text("Correct Answers: " + triviaGame.correctAnswers);
		$("#totalIncorrectDisplay").text("Incorrect Answers: " + triviaGame.incorrectAnswers);
		$("#totalUnansweredDisplay").text("Unanswered: " + triviaGame.outOfTimes);
		$("#reStartButton").text("Start Over?");
		triviaGame.displayClosingScreen();
	},

};
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




var intervalHolder;


var clockRunning = false;  //prevents the clock from being sped up unnecessarily

var stopwatch = {

  time: 20,

  reset: function() {

    stopwatch.time = 20;

    $("#timerDisplay").text("Seconds remaining: " + stopwatch.time);

  },

  start: function() {

  	$("#timerDisplay").text("Seconds remaining: " + stopwatch.time);

    if (!clockRunning) {
        intervalHolder = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },

  stop: function() {

    clearInterval(intervalHolder);
    clockRunning = false;
  },

  count: function() {

    stopwatch.time--;
    var converted = stopwatch.timeConverter(stopwatch.time);

    $("#timerDisplay").text("Seconds remaining: " + converted);
    if(stopwatch.time === 0){
    	stopwatch.stop();
    }

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
}; //end of stopwatch object



$(document).ready(function(){

	triviaGame.initGame();

});



