var max = 10;
var random = Math.floor((Math.random()*max) + 1);
var userName = prompt('What is your name?');
var guess = prompt('Hey ' + userName +', Guess a number between 1 and ' + max);
var count = 0;
var play = "yes";

// wrap in a method and use and call the method again if the player wins
    while (guess != random){
        if (guess > random) {
            guess = prompt(guess + " was too high, try again...");
            count++;
        } else {
            guess = prompt(guess + " was too low, try again...");
            count++;
        }
    }

    if (guess == random) {
        count++;
        alert("Congratulations, you've guessed the number in " + count + " guesses!");
    }
