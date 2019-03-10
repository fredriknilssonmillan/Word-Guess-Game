// Creates an array that lists out all of the options (all the DJ's).

var computerChoices = ["Eric Prydz", "Adam Beyer", "Tiesto", "Armin van Buuren", "Carl Cox", "Kungs", "Above Beyond", "Nora en Pure", "Camelphat", "Steve Aoki", "Jamie Jones",
"Charlotte de Witte", "Paul Oakenfold", "Daft Punk"];



var display;
var count = 0;
var lines = [];
var gfar = [];
var gleft = 10;
const totalguesses = 10;
var computerGuess;
var characters;
var playing = true;
var wins = 0;
var losses = 0;

aleatorio();

function aleatorio() {
  gleft = totalguesses;
  lines = [];
  gfar = [];
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)].toUpperCase();
  console.log(computerGuess);
  characters = computerGuess.length;
  formato();
  datos();
  playing = true;
}

formato()
// I had a lot of trouble with this part, got some help from Rafa and got a loooot of help from Manuel Castillo, in fact, I still don't completetly understand it.
function formato() {
  for (i = 0, j = characters; i < j; i++) {
      if (computerGuess[i] === " ") {
        lines.push(" ");
      }
      else {
        lines.push("_");
      }
  }
  document.getElementById("Current-word").innerHTML = lines.join("");
}

// esta es nueva, tambièn la aprendì de Manuel: /[^a-zA-Z]/ 
document.onkeydown = function (event) {
  if (gleft > 0 && playing && !/[^a-zA-Z]/.test(event.key)) {

    //letterFound me la enseño Rafa y es para ver si està la letra
  letterFound(event.key.toUpperCase());
  if ((lines.join("") == computerGuess) && (gleft > 0)) {
      wins++;
      alert("Great! you know your DJ's. You Won!");
      gameAlive = false;
  }
  else if (tries == 0) {
      losses++;
      alert("It seems you like reguetton, what a shame, you lost!");
      document.getElementById("Current-word").innerHTML = lines;
      gameAlive = false;
  }
  datos();
}
}


// function aleatorio () {
//   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//   for (var i = 0; i < computerGuess.length; i++) {
//   lines[i] = "_";
//   display = lines.join (" ")

//   var characters = computerGuess.length}
  
console.log(computerGuess);
console.log(computerGuess.length)
console.log(lines);
console.log(display);
console.log("caracteres " + characters);


var displayText = document.getElementById("Current-word");
displayText.textContent = (display);

//para obtener letras que teclea el usuario
document.onkeyup = function (event) {
  var userGuess = event.key;
  gfar.push(userGuess);
  gleft--;
  var Guessesleft = document.getElementById("Guesses-left");
  Guessesleft.textContent = ("You have " + gleft + " more guesses");

//  for (var i = 0; i < computerGuess.length; i++) {
//   if (computerGuess.indexOf(userGuess) = 1) {
var indexofletter = 0;
var position = [];

while (indexofletter >= 0) {

  
 // lo siguiente jala, pero sòlo cuando no son letras repetidas. 
  if (computerGuess.indexOf(userGuess, indexofletter +1)  < 0) {
    indexofletter = -1;
    console.log(userGuess + " failed");
    }
    else {
      indexofletter = computerGuess.indexOf(userGuess, indexofletter);
      
      position.push(computerGuess.indexOf(userGuess, indexofletter))
    
      console.log(userGuess + " is a hit");      
 //   }
  }
}   
console.log("position "+position)

  
  
  // if (computerGuess[i] === userGuess) {
  //   lines[i] = userGuess;
  //    }

  console.log(gfar);
  console.log(gleft);
  console.log("VEAMOS " + computerGuess);

  
 
  }



//   var letter = document.getElementById("letter").value;
//   if (letter.length > 0) {
//     for (var i = 0; i < computerGuess.length; i++) {
//  document.getElementById("answer").innerHTML = lines.join (" ");
//       }
//    count++;
//    document.getElementById("counter").innerHTML = "No of clicks: " + count;

//  }
//  if (count>10){
//    document.getElementById("stat").innerHTML = "you lost";
//  }
//  }




// // // Creating variables that hold guesses left and guesses so far
// // var gleft = 9;
// // var gfar = [];
// // 

// // // Mostrarle al usuario cuantas rondas tiene ganadas y cuantas tiene perdidas
// // var wins = 0;
// // var losses = 0;

// // // Create variables that hold references to the places in the HTML where we want to display things.

// // var winsText = document.getElementById("Wins");
// // var lossesText = document.getElementById("Losses");
// // var Guessessofar = document.getElementById("Userchoice-text");
// // var Guessesleft = document.getElementById("Guesses-left");
// // var userGuess = "";
// // var computerGuess = "";


// // //var computerChoiceText = document.getElementById("computerchoice-text");

// // window.onload = function aleatorio () {
// //     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// //     cGuess.push(computerGuess);
// //    // console.log("cGuess " + cGuess);
// //   }
  
 
// // // allow the user to make his guesses 9 times
// // // This function is run whenever the user presses a key.
// // document.onkeyup = function (event) {

// // // Determines which key was pressed and adds it to the gfar.
// //   var userGuess = event.key;
// //   gfar.push(userGuess);
// //   gleft--;
// //   //console.log("cGuess 2 " + cGuess);
// //   Guessesleft.textContent = ("You have " + gleft + " more guesses");
// //   Guessessofar.textContent = ("Your guesses so far are: " + gfar);
// //   if (userGuess === cGuess[0]) {
// //     wins++;
// //     winsText.textContent = ("Wins "+ wins);

// //     alert("you won, \"" +  userGuess + "\" was the correct letter");
// //     cGuess = [];
// //     console.log("cguess final " + cGuess);
    
// //     console.log("aleatorio nuevo" + cGuess);

// //     // no sé como invocar la mugre función de aleatorio, traté de todas las maneras y no pude, por eso estoy repitiendo todo en lo que sigue.
// //     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// //     cGuess.push(computerGuess);
// //     console.log("cGuess " + cGuess);
// //     gleft = 9;
// //     Guessesleft.textContent = ("You have " + gleft + " more guesses");
// //     gfar = [];
// //     Guessessofar.textContent = ("Your guesses so far are: " + gfar);
// //   }
// //   if (gleft === 0 && cGuess[0] !== userGuess) {
// //     alert("you lost, the letter was \"" + cGuess + "\"");
// //     cGuess = [];
// //     losses++;
// //     lossesText.textContent = ("Losses "+ losses);
// //         // no sé como invocar la mugre función de aleatorio, traté de todas las maneras, por eso estoy repitiendo todo en lo que sigue.
// //     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// //     cGuess.push(computerGuess);
// //     console.log("cGuess " + cGuess);
// //     gleft = 9;
// //     Guessesleft.textContent = ("You have " + gleft + " more guesses");
// //     gfar = [];
// //     Guessessofar.textContent = ("Your guesses so far are: " + gfar);

// //   }
// // }



// //if (cGuess.length = 9 && )










// // allow the user to make his guesses 9 times
// //for (var i = 9; i > 0, i--) {
    

// //}

//     // Reworked our code from last step to use "else if" instead of lots of if statements.

//     // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
//   //  if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

//     //    if ((userGuess === "r" && computerGuess === "s") ||
//       //      (userGuess === "s" && computerGuess === "p") ||
//         //    (userGuess === "p" && computerGuess === "r")) {
//           //  wins++;
//     //    } else if (userGuess === computerGuess) {
//       //      ties++;
//         //} else {
//           //  losses++;
//        // }

//         // Hide the directions
        //directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.
     //   userChoiceText.textContent = "You chose: " + userGuess;
     //   computerChoiceText.textContent = "The computer chose: " + computerGuess;
     //   winsText.textContent = "wins: " + wins;
     //   lossesText.textContent = "losses: " + losses;
     //   tiesText.textContent = "ties: " + ties;
   // }
  //};