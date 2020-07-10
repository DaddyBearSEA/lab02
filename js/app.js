// // this is my Javascript for Lab02
// 'use strict'


// Ask for the User's name

//  var nameOfUser = prompt('What is your name?');
//   alert('Hello! ' + nameOfUser + " Welcome to my site!" );
//   console.log ('Name of User:  ' + nameOfUser);


// /* Question 1 Ask the User's Name  nameOfUser  does michael like to travel */
// // prompt user a question does michael like to travel
// // convert answer to lower case
// // compare answer with appropriate response  = CODE IS GOOD / Need to add a Function Wrapper around it for today later

// var answerTravel = prompt(nameOfUser + '  Does Michael like to travel? (y/n)').toLowerCase(); 
//   if (answerTravel === 'y'){
//     alert('You are correct!');
//   console.log('Travel Answer:' + answerTravel);
// } else if (answerTravel === 'n') {
//   alert('He LOVES to TRAVEL!');
//   console.log(answerTravel);
// }


// //  Question 2 Hello nameofUser Are you a potential employer?  y/n  GOOD CODE

// var employerAnswer = prompt('Are you a potential employer? (y/n)').toLowerCase();
// //  console.log('should be lower case?  ' + employerAnswer);
// function isEmployer() {
//   while (employerAnswer ==='y' && employerAnswer ==='n');{
//     console.log(employerAnswer);
//     //employerAnswer = ('Please answer with a y or n lowercase!');
//   }

//   if (employerAnswer === 'y') {
//     alert('Welcome to my site!');
//     console.log(employerAnswer);
//   }else if (employerAnswer === 'n');{
//     alert('What can I help you with?');
//     console.log(employerAnswer);
//   }
// }
// isEmployer();
// console.log(employerAnswer);

// //  Question 3 May I have your email? y/n - GOOD CODE

// var userEmailAnswer = prompt('May I have your email (y/n)?').toLowerCase();

// function answerEmail() {
//   if (userEmailAnswer === 'y') {
//   alert('Thank you ' + nameOfUser);
// }else {
//   alert('OK - Enjoy my site');
// }
// }
// answerEmail();
// console.log(userEmailAnswer);

// // Question 4 Has Michael lived in New Orleans? Y/n  Good Code - need to add Function Wrapper

// var livedNewOrleans = prompt('Did Michael live in New Orleans? (y/n)').toLowerCase();

// if (livedNewOrleans === 'y') {
//   alert('Correct - he lived there for 7 Mardi Gras');
//   console.log(livedNewOrleans);
// } else if (livedNewOrleans === 'n') { 
//   alert('No Mardi Gras Beads for you!');
//   console.log(livedNewOrleans);
// }





// // Question 5 Am I color blind? y/n  if yes change the CSS to color blindness css   - Good Code - still need CSS for Colorblindness

// var colorBlindAnswer = prompt('Is Michael color blind (y/n)?').toLowerCase();

// function colorBlindAsk() {
//   if (colorBlindAnswer === 'y') {
//     alert('I\'ll change my website for you');
//     alert('I need to find this code to do this - Enjoy');
//   } else {
//     alert('You may continue with current settings.');
//   }
// }
// colorBlindAsk();
// console.log(colorBlindAnswer);

//Question 6 
// •	Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// •	Indicates through an alert if the guess is “too high” or “too low”.
// •	It should give the user exactly four opportunities to get the correct answer.
// •	After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

// you have a number set to 4.  You ask a prompt for a number between 1 and 5
// you cycle through using a counter 5 times if needed - Maybe add a code saying you maxed out guesses?

// function numberPicking() {

//   var correctAnswer = '4'

//   console.log(correctAnswer)

//   for (var i = 0; i < 3; i++) {
//     var pickNumber = prompt('Pick a number between 1- 5');

//     console.log('pass thru code ' + i);

//     if (pickNumber > correctAnswer) {
//       alert('Yes you are too high, Try Again');
//       console.log(correctAnswer + ' is to ' + pickNumber);
//     } else if (pickNumber < correctAnswer) {
//       alert('No you are too low! Try again');
//       console.log(correctAnswer + 'is to ' + pickNumber);
//     } else if (pickNumber == correctAnswer) {
//       alert('You are Correct');
//       break;
//       console.log(correctAnswer + 'is to ' + pickNumber);
//     }
//   }

// }
// numberPicking()
  
  
  
  // •	Add a 7th question that has multiple possible correct answers that are stored in an array.
  // •	Give the user 6 attempts to guess the correct answer.
  // •	The guesses will end once the user guesses a correct answer or they run out of attempts.
  // •	Display all the possible correct answers to the user.
  // •	Consider using a loop of some sort for this question.
  // setup an Array of all the Favorite Citys in his Top 10
  // ask What's michael's favorite city to visit?
  // loop through 6 Times until he gets the question correct. if he gets the question correct, stop asking

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
