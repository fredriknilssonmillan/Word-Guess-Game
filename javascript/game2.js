// Creates an array that lists out all of the options (all the DJ's).

var computerChoices = ["Eric Prydz", "Adam Beyer", "Tiesto", "Armin van Buuren", "Carl Cox", "Kungs", "Above Beyond", "Nora en Pure", "Camelphat", "Steve Aoki", "Jamie Jones",
    "Charlotte de Witte", "Paul Oakenfold", "Daft Punk", "Sebastian Ingrosso", "Paul van Dyk", "Steve Angello", "Alan Walker"];

var computerGuess;
var lines = [];
var gfar = [];
var gleft = 10;
var characters;
var wins = 0;
var losses = 0;

aleatorio();

//Making the computer choose a DJ
function aleatorio() {
    gleft = 10;
    lines = [];
    gfar = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)].toUpperCase();
    characters = computerGuess.length;

    // I had trouble with the spacing (" ")... i got help in this part by Manuel Castillo.
    for (i = 0; i < computerGuess.length; i++) {
        if (computerGuess[i] === " ") {
            lines.push(" ");
        }
        else {
            lines.push("_");
        }
    }
    document.getElementById("Current-word").innerHTML = lines.join("");

    //No te olvides de comentar el console.log para que el usuario no pueda hacer trampa.
   // console.log(computerGuess);
}



// esta es nueva, tambièn la aprendì de Manuel: /[^a-zA-Z]/ 
document.onkeydown = function (event) {
    if (gleft > 0 && !/[^a-zA-Z]/.test(event.key)) {

        //Lo que sigue lo estuve viendo con Rafa
        guessing(event.key.toUpperCase());
        if ((lines.join("") == computerGuess) && (gleft > 0)) {
            wins++;
            alert("Great! You Won! " + computerGuess + " was the artist, you know your DJ's");
            if (wins === 1) {
                document.getElementById("Wins").innerHTML = wins + " DJ guessed";
            }
            else {
                document.getElementById("Wins").innerHTML = wins + " DJ's guessed";
            }

            aleatorio();
        }
        else if (gleft == 0) {
            losses++;
            alert("You lost! It seems you like Reguetton. What a shame, you do not deserve to listen to " + computerGuess);
            document.getElementById("Losses").innerHTML = "Reguetton score (this is bad and shameful): " + losses;
            aleatorio();
        }
    }
}

//creo que esta la puedo simplificar màs
function guessing(yesornoguess) {
    var stroke = 0;
    if (gfar.includes(yesornoguess)) {
        stroke++;
    }
    else {
        for (i = 0; i < computerGuess.length; i++) {
            if (computerGuess[i] == yesornoguess) {
                lines[i] = yesornoguess;
                stroke++;
            }
        }
        gfar.push(yesornoguess);
        document.getElementById("Current-word").innerHTML = lines.join("");
    }
    if (stroke == 0) {
        gleft--;
    }
    document.getElementById("Userchoice-text").innerHTML = gfar.join(" ");
    document.getElementById("Guesses-left").innerHTML = "Remaining attempts: " + gleft;
}