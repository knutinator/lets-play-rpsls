// jshint esversion: 6

// Create main variables for game //
let playerChoice = "";
let cpuChoice = "";
let cpuOptions = ["rock", "paper", "scissors", "lizard", "spock"];
let playerScore = 0;
let cpuScore = 0;
let winMessage = "";

// Clear styles of icons from previous game round //
function clearStyles() {
    for (let i = 0; i < cpuOptions.length; i++) {
            let iconStyle = document.getElementById(cpuOptions[i]);
            iconStyle.style.removeProperty("color");
    }
}

// Start game when player clicks an icon (code was inspired by: https://www.codewizardshq.com/javascript-tutorial-for-kids-rock-paper-scissors/) //
let playerChoiceContainer = document.querySelector("#game-area");
playerChoiceContainer.addEventListener("click", handlePlayerChoice);
function handlePlayerChoice(event) {
    if (!event.target.classList.contains("icon")) {
            return;
    } else {
    playerChoice = event.target.dataset.choice;
    }
    clearStyles();
    cpuPlay();
}

function cpuPlay() {
    // Make the computer choose an icon randomly //
    let randomNumber = Math.floor(Math.random() * 5);
    cpuChoice = cpuOptions[randomNumber];
        
    // display the computer's choice (change styling of cpu choice icon) //
    document.getElementById(cpuChoice).style.color="gray";
    determineWinner();
}

// compare the choices, determine round winner, display message //
function determineWinner() { 
    // round win messages (also explains the rules) //
    let win0 = "Draw!";
    let win1 = "Scissors cuts Paper!";
    let win2 = "Paper covers Rock!";
    let win3 = "Rock crushes Lizard!";
    let win4 = "Lizard poisons Spock!";
    let win5 = "Spock smashes Scissors!";
    let win6 = "Scissors decapitates Lizard!";
    let win7 = "Lizard eats Paper!";
    let win8 = "Paper disproves Spock!";
    let win9 = "Spock vaporizes Rock!";
    let win10 = "Rock crushes Scissors!";

    // All possible outcomes of game rounds: //
    // Draw //
    if (playerChoice === cpuChoice) {
        winMessage = win0;
        updateWinMessage();
    }
    // Scissors + Paper //
    else if (playerChoice === "scissors" && cpuChoice === "paper") {
        winMessage = win1;
        incPlayerScore();
    }
    else if (playerChoice === "paper" && cpuChoice === "scissors") {
        winMessage = win1;
        incCpuScore();
    }
    // Paper + Rock //
    else if (playerChoice === "paper" && cpuChoice === "rock") {
        winMessage = win2;
        incPlayerScore();
    }
    else if (playerChoice === "rock" && cpuChoice === "paper") {
        winMessage = win2;
        incCpuScore();
    }
    // Rock + Lizard //
    else if (playerChoice === "rock" && cpuChoice === "lizard") {
        winMessage = win3;
        incPlayerScore();
    }
    else if (playerChoice === "lizard" && cpuChoice === "rock") {
        winMessage = win3;
        incCpuScore();
    }
    // Lizard + Spock //
    else if (playerChoice === "lizard" && cpuChoice === "spock") {
        winMessage = win4;
        incPlayerScore();
    }
    else if (playerChoice === "spock" && cpuChoice === "lizard") {
        winMessage = win4;
        incCpuScore();
    }
    // Spock + Scissors //
    else if (playerChoice === "spock" && cpuChoice === "scissors") {
        winMessage = win5;
        incPlayerScore();
    }
    else if (playerChoice === "scissors" && cpuChoice === "spock") {
        winMessage = win5;
        incCpuScore();
    }
    // Scissors + Lizard //
    else if (playerChoice === "scissors" && cpuChoice === "lizard") {
        winMessage = win6;
        incPlayerScore();
    }
    else if (playerChoice === "lizard" && cpuChoice === "scissors") {
        winMessage = win6;
        incCpuScore();
    }
    // Lizard + Paper //
    else if (playerChoice === "lizard" && cpuChoice === "paper") {
        winMessage = win7;
        incPlayerScore();
    }
    else if (playerChoice === "paper" && cpuChoice === "lizard") {
        winMessage = win7;
        incCpuScore();
    }
    // Paper + Spock //
    else if (playerChoice === "paper" && cpuChoice === "spock") {
        winMessage = win8;
        incPlayerScore();
    }
    else if (playerChoice === "spock" && cpuChoice === "paper") {
        winMessage = win8;
        incCpuScore();
    }
    // Spock + Rock //
    else if (playerChoice === "spock" && cpuChoice === "rock") {
        winMessage = win9;
        incPlayerScore();
    }
    else if (playerChoice === "rock" && cpuChoice === "spock") {
        winMessage = win9;
        incCpuScore();
    }
    // Rock + Scissors //
    else if (playerChoice === "rock" && cpuChoice === "scissors") {
        winMessage = win10;
        incPlayerScore();
    }
    else if (playerChoice === "scissors" && cpuChoice === "rock") {
        winMessage = win10;
        incCpuScore();
    }

    // display round winner message and increase score tally (code was inspired by https://stackoverflow.com/questions/68074211/make-score-counter-from-javascript-display-as-text-in-html) //
    function incPlayerScore() {
        playerScore++;
        let playerScoreNew = document.getElementById("player1-score");
        playerScoreNew.textContent = `${playerScore}`;
        updateWinMessage();
    }
    function incCpuScore() {
        cpuScore++;
        let cpuScoreNew = document.getElementById("cpu-score");
        cpuScoreNew.textContent = `${cpuScore}`;
        updateWinMessage(); 
    }
    function updateWinMessage() {
        let winMessageNew = document.getElementById("winner-message-area");
        winMessageNew.textContent = `${winMessage}`;
        checkPlayerScore();
    }
}

// check if any player has 5 points and display game win message, then restart game //
function checkPlayerScore(){
    if (cpuScore === 5) {
        alert("You lost... :(");
        location.reload();
    } else if (playerScore === 5) {
        alert("You won!!! :D");
        location.reload();
    // Error handling if score goes above 5 //    
    } else if (playerScore >= 6 || cpuScore >= 6) {
        alert("ERROR! Something went wrong, please restart the game");
        location.reload();
    }
}