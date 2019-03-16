// Creates an array that lists out all of the options (all the DJ's).

var computerChoices = ["Eric Prydz", "Adam Beyer", "Tiesto", "Armin van Buuren", "Carl Cox", "Kungs", "Above Beyond", "Nora en Pure", "Camelphat", "Steve Aoki", "Jamie Jones",
    "Charlotte de Witte", "Paul Oakenfold", "Daft Punk", "Sebastian Ingrosso", "Paul van Dyk", "Steve Angello", "Alan Walker"];

// Creates an array that lists out all the letters the user can push.
var options = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "V", "X", "Y", "Z"];

//variables
var computerGuess;
var lines = [];
var gfar = [];
var gleft = 10;
var characters;
var wins = 0;
var losses = 0;

//starting the game with a random choice and resetting values, this function will be invoked every time after user wins or loses.
aleatorio();

//creating the function for starting the game with a random choice and resetting values
function aleatorio() {
    gleft = 10;
    lines = [];
    gfar = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)].toUpperCase();
    characters = computerGuess.length;

    // This is to substitute the computer choice with lines. I had trouble with the spacing (" ")... i got help in this part by Manuel Castillo.
    for (i = 0; i < computerGuess.length; i++) {
        if (computerGuess[i] === " ") {
            lines.push(" ");
        }
        else {
            lines.push("_");
        }
    }
    dibujar();
}

//whenever the user pushes a key we have to check that it is a valid key and if it is a key in the word, otherwise add it to guesses so far without repeating
document.onkeydown = function (event) {
    var letterChosen = event.key.toUpperCase();
    for (var i = 0; i < computerGuess.length; i++) {

        if (letterChosen === computerGuess[i]) {
            lines[i] = letterChosen
        }
    }

//This is so that if the user repeats a key nothing happens in the count or the list of guesses left
    if (options.indexOf(letterChosen) != -1) {
        if (computerGuess.indexOf(letterChosen) === -1) {
            if (gfar.indexOf(letterChosen) === -1) {
                gfar.push(letterChosen);
                gleft--;
            }
        }
    }

//Decides that the user wins when the "lines" = "computer guess"
    if (lines.join("") == computerGuess) {
        wins++;
        dibujar();
        alert("Great! You Won! " + computerGuess + " was the artist, you know your DJ's");
        aleatorio();
    }

//The user loses when counter of gleft reaches 0
    if (gleft == 0) {
        losses++;
        dibujar();
        alert("You lost! It seems you like Reguetton. What a shame, you do not deserve to listen to " + computerGuess);
        aleatorio();
    }
    dibujar();
}

//this function is in order to write the text each time it is requiered in the html
function dibujar() {
    document.getElementById("Current-word").innerHTML = lines.join("");
    document.getElementById("Userchoice-text").innerHTML = "Your used letters so far are: <br>" + gfar.join(" ");
    document.getElementById("Guesses-left").innerHTML = "Remaining attempts: " + gleft;
    document.getElementById("Losses").innerHTML = "Reguetton score (this is bad and shameful): " + losses;

//this is just to us an apostrophe when it's plural and not use it when it is singular
    if (wins === 1) {
        document.getElementById("Wins").innerHTML = wins + " DJ guessed";
    }
    else {
        document.getElementById("Wins").innerHTML = wins + " DJ's guessed";
    }
}