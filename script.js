var array  = ["rock", "paper", "scissors", "lizard", "spock"]; // Array of possible moves that the computer can make
var length = array.length;

var wins = 0;
var winsc = 0;

//var rchoice= array[random];


// random choice for computer
/*var rchoice = document.getElementById("random").addEventListener("click", function(){
    var random = Math.floor(Math.random() * length); //// get a random number between 0 & 4 and use it to get a random move from the computer
    return array[random];
    
}) 
*/

document.getElementById("rock").addEventListener("click", function () {
    var random = Math.floor(Math.random() * length);
    var rchoice = array[random];
    winner("rock", rchoice); 
});

document.getElementById("paper").addEventListener("click", function () {
    var random = Math.floor(Math.random() * length);
    var rchoice = array[random];
    winner("paper", rchoice);
});

document.getElementById("scissors").addEventListener("click", function () {
    var random = Math.floor(Math.random() * length);
    var rchoice = array[random];
    winner("scissors", rchoice);
});

document.getElementById("lizard").addEventListener("click", function () {
    var random = Math.floor(Math.random() * length);
    var rchoice = array[random];
    winner("lizard", rchoice);
});

document.getElementById("spock").addEventListener("click", function () {
    var random = Math.floor(Math.random() * length);
    var rchoice = array[random];
    winner("spock", rchoice);
    
});

document.getElementById("reset").addEventListener("click", function () {
    window.location.reload();
        
});

let winner =  function getWinner(playerMove, computerMove) { 
    if ((playerMove === "rock" && computerMove === "rock") || (playerMove === "paper" && computerMove === "paper") || (playerMove === "scissors" && computerMove === "scissors") || (playerMove === "lizard" && computerMove === "lizard") || (playerMove === "spock" && computerMove === "spock")){
        
        document.getElementById("result").innerText = `You played ${playerMove}, Computer played ${computerMove}. \n It's a tie!`
    
    } else if ((playerMove === "rock" && computerMove === "scissors") || (playerMove === "scissors" && computerMove === "paper") || (playerMove === "paper" && computerMove === "rock") || (playerMove === "rock" && computerMove === "lizard") || (playerMove === "scissors" && computerMove === "lizard") || (playerMove === "lizard" && computerMove === "spock") || (playerMove === "lizard" && computerMove === "paper") || (playerMove === "paper" && computerMove === "spock") || (playerMove === "spock" && computerMove === "scissors") || (playerMove === "spock" && computerMove === "rock")) {
        wins +=5;

        document.getElementById("result").innerText = `You played ${playerMove}, Computer played ${computerMove}. \n You won!`
        document.getElementById("score").innerText=`Your score is: ${wins}` 
    } else {
        winsc +=5;

        document.getElementById("result").innerText = `You played ${playerMove}, Computer played ${computerMove}. \n You lost!`
        document.getElementById("scorec").innerText=`Computer score is: ${winsc}` 
    }
}

// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
