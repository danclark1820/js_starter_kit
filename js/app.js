var random = Math.floor((Math.random()*10) + 1);
var user_name = prompt('What is your name?');
var guess = prompt('Hey ' + user_name +', Guess a number between 1 and 10');

if (guess == random){
  alert("You Win!");
} else {
  alert("You Lose");
}
