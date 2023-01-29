// Get the players choice of icon //

let playerChoice = "";
let playerChoiceContainer = document.querySelector("#game-area");

playerChoiceContainer.addEventListener("click", handlePlayerChoice);

function handlePlayerChoice(event) {

    playerChoice = event.target.dataset.choice;
    console.log(playerChoice);
}
  
    
// Make the computer choose an icon randomly //



// compare the icons, determine winner //



// display round winner message and increase score tally //



// check if any player has 5 points and display game win message //



// display button to restart the game //