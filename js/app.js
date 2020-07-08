// this is my Javascript for Lab02
'use strict'

// Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.
//Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.

// As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.

// Ask the user their name through a prompt()

// Display that name back to the user through a custom greeting welcoming them to your site.

// Display the user’s name back to them in your final message to the user.

// Developer Style Guide
// A style guide is a series of standards and practices that must be followed in order for your code to be accepted by the team. This can include variable naming, file structure, and process. Below is a list of practices that you will be required to follow within this lab:

// Your JS file must contain a 'use strict' declaration at the top, and your javascript file must be linked in your html file as an external script file.

// Make sure that all code is cleanly written with correct indentation and syntax. Look at examples online and in your textbook. Note that your JS must pass the rules in the linter that we installed.

// Follow the Add, Commit, Push process. It should be evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.



/* Question 1 Ask the User's Name  nameOfUser */

 var nameOfUser = prompt('What is your name?');
  alert('Hello! ' + nameOfUser + " Welcome to my site!" );
  console.log ('Name of User:  ' + nameOfUser);





//  Question 2 Hello nameofUser Are you a potential employer?  y/n

var ruaEmployer = prompt('Are you a potential employer? (y/n)');

  if (ruaEmployer === 'y' || ruaEmployer==='Y') {
    alert('Welcome to my site!');
    console.log(ruaEmployer);
  }else {
    alert('What can I help you with?');
    console.log(ruaEmployer);
  }


//  Question 3 May I have your email? y/n

var userEmailAnswer = prompt('May I have your email (y/n)?');

if (userEmailAnswer === 'y' || userEmailAnswer ==='Y'){
  alert('Thank you ' + nameOfUser);
  var userEmail = prompt('What is your email?');
}else {
  alert('OK - Enjoy my site');
}

// Question 4 Are you a fellow Codefellower? Y/n

var fellowCodeBuddy = prompt('Are you a fellow Codefellower? (y/n)');

if (fellowCodeBuddy === 'y'){
  alert('Hi ' + nameOfUser + 'Make sure you leave feedback in slack for me.');
}else {
  alert('See you Later! You have nothing to see here!')
  window.location.replace('https://tenor.com/view/futurama-hypnotoad-hypnotic-hypno-all-hail-hypnotoad-gif-3690710');

}
 



// Question 5 Are you color blind? y/n  if yes change the CSS to color blindness css 

var colorBlindAnswer = prompt('Are you color blind (y/n)?');

if (colorBlindAnswer === 'y' || colorBlindAnswer === 'Y'){
  alert('I\'ll change my website for you');
  alert('I need to find this code to do this - Enjoy');
} else {
  alert('You may continue with current settings.');
}


// Question 6 Pick a number between 1 and 5 ? That the number I choose or that's not between 1 and 5 silly nameOfUser

var pickNumber = prompt('Pick a number between 1 and 5');

switch(pickNumber){
  case '1':
    alert('Try again later');
    break;
  case '2':
    alert('Better luck tomorrow');
    break;
  case '3':
    alert('Yes - thats my number!');
    break;
  case '4':
    alert('Nope');
    break;
  case '5':
    alert('Oh so close!');
    break;

}
