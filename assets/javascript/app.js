$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
/*
	var trivia = {
		questions: ['Who was the host for Kitchen Kabaret?',
								'Who starred in the title role of Condorman?',
								'In Captain EO, what is the name of the elephant like alien?',
								'The 1980\'s were big for new personal computer introductions. Which of the following computers was introduced in 1980?',
								'What country was welcomed into the World Showcase at EPCOT Center in 1984?',
								'In 1981 a Disney constructed WED-Way People Mover opened at which airport?',
								'What school is attended in the Disney Channel Series, Girl Meets World?',
								'Which Walt Disney World location opened on the same day as the Disney-MGM Studios theme park on May 1, 1989?',
								'Which of the following films is NOT part of the Walt Disney Studios Silly Symphonies?',
								'Which wartime activity did the Walt Disney Studios partake in to support the American war effort?'],
		q1: ['A. Fud Wrapper',
				 'B. Cookie Ann Milk',
				 'C. Bonnie Appetit',
				 'D. Cherry Ontop'],
		q2: ['A. Zac Efron',
				 'B. Michael Crawford',
				 'C. Billy Crystal',
				 'D. Michael Keaton'],
		q3: ['A. Trunks',
				 'B. Hooter',
				 'C. Elle',
				 'D. Odie'],
		q4: ['A. Sinclair ZX80',
				 'B. IBM PC',
				 'C. Commodore 64',
				 'D. Atari 2600'],
		q5: ['A. Norway',
				 'B. Morocco',
				 'C. France',
				 'D. Japan'],
		q6: ['A. Houston Intercontinental Airport',
				 'B. Orlando International Airport',
				 'C. Atlanta International Airport',
				 'D. Dallas/Ft. Worth International Airport'],
		q7: ['A. Vintage High School',
				 'B. Peyton Middle School',
				 'C. John Quincy Adams Middle School',
				 'D. Washington High School'],
		q8: ['A. Typhoon Lagoon',
				 'B. Pleasure Island',
				 'C. Both A & B',
				 'D. None of the above'],
		q9: ['A. The Night Before Christmas',
				 'B. Three Little Pigs',
				 'C. The Old Mill',
				 'D. The Gallopin\' Gaucho'],
		q10: ['A. Recycling used film footage',
				  'B. Designing US Army & US Navy insignia',
				  'C. Hosted a Studio Victory Garden where employees grew food for their families',
				  'D. Forced employees to carpool by closing parking lots to non-carpool cars']		 						
	}
*/
var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Who is the friendly Springfield drunk?',
	possibleAnswers : ['A. Moe',
				 'B. Ned',
				 'C. Barney',
				 'D. Homer'],
	flags : [false, false, true, false],
	answer : 'C. Barney'
};

var q2 = {
	question: 'Ralph is the son of...?',
	possibleAnswers: ['A. Moe',
				 'B. Chief Wiggum',
				 'C. Apu',
				 'D. Smithers'],
	flags : [false, true, false, false],
	answer : 'B. Cheif Wiggum'
};

var q3 = {
	question : 'Homer prefers which of the following beer?',
	possibleAnswers : ['A. Coors',
				 'B. Duff',
				 'C. Bud Light',
				 'D. Corona'],
	flags : [false, true, false, false],
	answer : 'B. Duff'
};

var q4 = {
	question : 'Which instrument does Lisa play?',
	possibleAnswers : ['A. Saxophone',
				 'B. Trumpet',
				 'C. Clarinet',
				 'D. Flute'],
	flags : [true, false, false, false],
	answer : 'A. Saxophone'
};

var q5 = {
	question : 'What year did the Simpsons debut',
	possibleAnswers : ['A. 1988',
				 'B. 1989',
				 'C. 1990',
				 'D. 1991'],
	flags : [false, true, false, false],
	answer : 'B. 1989'
};

var q6 = {
	question : 'How many kids does Ned Flanders have?',
	possibleAnswers : ['A. 1',
				 'B. 4',
				 'C. 2',
				 'D. 3'],
	flags : [false, false, true, false],
	answer : 'C. 2'
};

var q7 = {
	question : 'Who is Homers boss?',
	possibleAnswers : ['A. Smithers',
				 'B. Mr. Burns',
				 'C. Moe',
				 'D. Chief Wiggum'],
	flags : [false, true, false, false],
	answer : 'B. Mr. Burns'
};

var q8 = {
	question : 'What is the name of the store that Apu works in?',
	possibleAnswers : ['A. Corner Mart',
				 'B. Kwik-E-Mart',
				 'C. Springfield Mart',
				 'D. None of the above'],
	flags : [false, true, false, false],
	answer : 'B. Kwik-E-Mart'
};

var q9 = {
	question : 'What is the name of the rival town in Springfield?',
	possibleAnswers : ['A. Kansas City',
				 'B. Countryville',
				 'C. Cartoonville',
				 'D. Shelbyville'],
	flags : [false, false, false, true],
	answer : 'D. Shelbyville'
};

var q10 = {
	question : 'What is Moes last name?',
	possibleAnswers : ['A. Muntz',
				  'B. Szyslak',
				  'C. Flanders',
				  'D. Wiggum'],
	flags : [false, true, false, false],
	answer : 'B. Szyslak'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
//		for (var i=0; i<questionArray.length; i++) {
//			$('.question').append('<p>'+questionArray[i].question+'</p>');
//			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
//				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
//			}
//			$('#possibleAnswers').on('click', function() {


//		console.log("click");
//		countdownTimer.start();
//		for (var i = 0; i < questionArray.length; i++) {
//			console.log(i);

//			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
//			$('.question').html(questionArray[i].question);
//			while (countdownTimer != 0) {

//			}
		
//	});
//	$('#startButton').click(countdownTimer.start);

//}
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});