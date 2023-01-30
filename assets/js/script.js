// Get the players choice of icon //

let playerChoice = "";
let playerChoiceContainer = document.querySelector("#game-area");

playerChoiceContainer.addEventListener("click", handlePlayerChoice);

function handlePlayerChoice(event) {
    if (!event.target.classList.contains("icon")) {
        return;
    } else {

    playerChoice = event.target.dataset.choice;
    console.log(playerChoice);
    }
    cpuPlay();
}
    
function cpuPlay() {
let cpuChoice = "";

// Make the computer choose an icon randomly //
let cpuOptions = ["rock", "paper", "scissors", "lizard", "spock"];
let randomNumber = Math.floor(Math.random() * 5);
cpuChoice = cpuOptions[randomNumber];
console.log(cpuChoice);


// display the computer's choice //


}


// compare the icons, determine winner //



// display round winner message and increase score tally //



// check if any player has 5 points and display game win message //



// display button to restart the game //