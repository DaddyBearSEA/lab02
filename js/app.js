// this is my Javascript for Lab02
'use strict'


/* Question 1 Ask the User's Name  nameOfUser */

 var nameOfUser = prompt('What is your name?');
  alert('Hello! ' + nameOfUser + " Welcome to my site!" );
  console.log ('Name of User:  ' + nameOfUser);





//  Question 2 Hello nameofUser Are you a potential employer?  y/n

var ruaEmployer = prompt('A   re you a potential employer? (y/n)');

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

if (fellowCodeBuddy === 'y' || fellowCodeBuddy === 'Y'){
  alert('Hi ' + nameOfUser + 'Make sure you leave feedback in slack for me.');
}else (fellowCodeBuddy === 'n' || fellowCodeBuddy === 'N') {
  alert('See you Later! You have nothing to see here!');
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
