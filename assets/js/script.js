// Get the players choice of icon //

let playerChoice = "";
let cpuChoice = "";
let playerScore;
let cpuScore;

let playerChoiceContainer = document.querySelector("#game-area");

playerChoiceContainer.addEventListener("click", handlePlayerChoice);

function handlePlayerChoice(event) {
    if (!event.target.classList.contains("icon")) {
        return;
    } else {

    playerChoice = event.target.dataset.choice;
   
    }
    cpuPlay();
}
    
function cpuPlay() {


// Make the computer choose an icon randomly //
let cpuOptions = ["rock", "paper", "scissors", "lizard", "spock"];
let randomNumber = Math.floor(Math.random() * 5);
cpuChoice = cpuOptions[randomNumber];



// display the computer's choice (change the id of the icon in game area to get styling with grey color) //

detWinner();
}


// compare the icons, determine winner //
let win0 = "Draw!"
let win1 = "Scissors cuts Paper!"
let win2 = "Paper covers Rock!"
let win3 = "Rock crushes Lizard!"
let win4 = "Lizard poisons Spock!"
let win5 = "Spock smashes Scissors!"
let win6 = "Scissors decapitates Lizard!"
let win7 = "Lizard eats Paper!"
let win8 = "Paper disproves Spock!"
let win9 = "Spock vaporizes Rock!"
let win10 = "Rock crushes Scissors!"


function detWinner() {

    if (playerChoice === cpuChoice) {
        winMessage = win0;
    }
    // Scissors + Paper //
    else if (playerChoice === "scissors" && cpuChoice === "paper") {
        winMessage = win1;
        playerScore = playerScore++;
    }
    else if (playerChoice === "paper" && cpuChoice === "scissors") {
        winMessage = win1;
        cpuScore = cpuScore++;
    }
    // Paper + Rock //
    else if (playerChoice === "paper" && cpuChoice === "rock") {
        winMessage = win2;
        playerScore = playerScore++;
    }
    else if (playerChoice === "rock" && cpuChoice === "paper") {
        winMessage = win2;
        cpuScore = cpuScore++;
    }
    // Rock + Lizard //
    else if (playerChoice === "rock" && cpuChoice === "lizard") {
        winMessage = win3;
        playerScore = playerScore++;
    }
    else if (playerChoice === "lizard" && cpuChoice === "rock") {
        winMessage = win3;
        cpuScore = cpuScore++;
    }
    // Lizard + Spock //
    else if (playerChoice === "lizard" && cpuChoice === "spock") {
        winMessage = win4;
        playerScore = playerScore++;
    }
    else if (playerChoice === "spock" && cpuChoice === "lizard") {
        winMessage = win4;
        cpuScore = cpuScore++;
    }
    // Spock + Scissors //
    else if (playerChoice === "spock" && cpuChoice === "scissors") {
        winMessage = win5;
        playerScore = playerScore++;
    }
    else if (playerChoice === "scissors" && cpuChoice === "spock") {
        winMessage = win5;
        cpuScore = cpuScore++;
    }
    // Scissors + Lizard //
    else if (playerChoice === "scissors" && cpuChoice === "lizard") {
        winMessage = win5;
        playerScore = playerScore++;
    }
    else if (playerChoice === "lizard" && cpuChoice === "scissors") {
        winMessage = win5;
        cpuScore = cpuScore++;
    }
    // Lizard + Paper //
    else if (playerChoice === "lizard" && cpuChoice === "paper") {
        winMessage = win5;
        playerScore = playerScore++;
    }
    else if (playerChoice === "paper" && cpuChoice === "lizard") {
        winMessage = win5;
        cpuScore = cpuScore++;
    }
    // Paper + Spock //
    else if (playerChoice === "paper" && cpuChoice === "spock") {
        winMessage = win5;
        playerScore = playerScore++;
    }
    else if (playerChoice === "spock" && cpuChoice === "paper") {
        winMessage = win5;
        cpuScore = cpuScore++;
    }
    // Spock + Rock //
    else if (playerChoice === "spock" && cpuChoice === "rock") {
        winMessage = win5;
        playerScore = playerScore++;
    }
    else if (playerChoice === "rock" && cpuChoice === "spock") {
        winMessage = win5;
        cpuScore = cpuScore++;
    }
    // Rock + Scissors //
    else if (playerChoice === "rock" && cpuChoice === "scissors") {
        winMessage = win5;
        playerScore = playerScore++;
    }
    else if (playerChoice === "scissors" && cpuChoice === "rock") {
        winMessage = win5;
        cpuScore = cpuScore++;
    }
    console.log(winMessage);
    console.log(playerScore)
    console.log(cpuScore)
 }






// display round winner message and increase score tally //



// check if any player has 5 points and display game win message //



// display button to restart the game //