// // this is my Javascript for Lab02
'use strict'


// Ask for the User's name

 var nameOfUser = prompt('What is your name?');
  alert('Hello! ' + nameOfUser + " Welcome to my site!" );

// /* Question 1 Ask the User's Name  nameOfUser  does michael like to travel */

var answerTravel = prompt(nameOfUser + '  Does Michael like to travel? (y/n)').toLowerCase(); 

function likes2Travel() {
  if (answerTravel === 'y') {
    alert('You are correct!');
  } else if (answerTravel === 'n') {
    alert('He LOVES to TRAVEL!');

  }
}
likes2Travel();

//  Question 2 Hello nameofUser Are you a potential employer? 

var employerAnswer = prompt('Are you a potential employer? (y/n)').toLowerCase();

function isEmployer() {

  while (employerAnswer === 'y' && employerAnswer === 'n'); {
  }
  if (employerAnswer === 'y') {
    alert('Welcome to my site!');
  } else if (employerAnswer === 'n'); {
    alert('What can I help you with?');
  }
}
isEmployer();

// //  Question 3 May I have your email? y/n 

var userEmailAnswer = prompt('May I have your email (y/n)?').toLowerCase();

function answerEmail() {
  if (userEmailAnswer === 'y') {
    alert('Thank you ' + nameOfUser);
  } else {
    alert('OK - Enjoy my site');
  }
}
answerEmail();

// // Question 4 Has Michael lived in New Orleans? Y/n 

var livedNewOrleans = prompt('Did Michael live in New Orleans? (y/n)').toLowerCase();

function livedNOrleans() {
  if (livedNewOrleans === 'y') {
    alert('Correct - he lived there for 7 Mardi Gras');
  } else if (livedNewOrleans === 'n') {
    alert('No Mardi Gras Beads for you!');
  }
}
livedNOrleans();

// // Question 5 Am I color blind? y/n  if yes change the CSS to color blindness css 

function colorBlindAsk() {

  var colorBlindAnswer = prompt('Is Michael color blind (y/n)?').toLowerCase();

  if (colorBlindAnswer === 'y') {
    alert('I\'ll change my website for you');
    alert('I need to find this code to do this - Enjoy');
  } else {
    alert('You may continue with current settings.');
  }
}

colorBlindAsk();

//Question 6 
// •	Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// •	Indicates through an alert if the guess is “too high” or “too low”.
// •	It should give the user exactly four opportunities to get the correct answer.
// •	After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

function numberPicking() {

  var correctAnswer = '4'
  for (var i = 0; i < 3; i++) {
    var pickNumber = prompt(nameOfUser + ' - Lets play: Pick a number between 1- 5');

    if (pickNumber > correctAnswer) {
      alert('Yes you are too high, Try Again');

    } else if (pickNumber < correctAnswer) {
      alert('No you are too low! Try again');

    } else if (pickNumber == correctAnswer) {
      alert('You are Correct');
      break;
    }
  }
}

numberPicking()
  
  
  // •	Add a 7th question that has multiple possible correct answers that are stored in an array.
  // •	Give the user 6 attempts to guess the correct answer.
  // •	The guesses will end once the user guesses a correct answer or they run out of attempts.
  // •	Display all the possible correct answers to the user.
  // •	Consider using a loop of some sort for this question.

function pickMichaelsFavCity() {
  var citiesILike = ['Vegas', 'Berlin', 'Amsterdam', 'Paris', 'Seattle', 'Nawlins', 'Boston', 'Bar Harbor'];
  var numberOfTrys = 0

  for (var i = 0; i < 6; i++) {
    var favoriteCityOfAll = prompt('What is Michaels favorite city of all time? Vegas, Berlin, Amsterdam, Paris, Seattle, Nawlins, Boston, Bar Harbor');
    var numberOfTrys = (numberOfTrys + 1);

    if (favoriteCityOfAll === citiesILike[1]) {
      alert('You are correct!' + ' You got it in ' + numberOfTrys + ' trys !!!')
      break;

    } else if (favoriteCityOfAll !== citiesILike[1]) {
      alert('Try again - You can do Better?')
      console.log(favoriteCityOfAll)
    }
  }
}
pickMichaelsFavCity()










