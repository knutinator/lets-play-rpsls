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
}

// maybe add function to stop function if something else is clicked //
  
    
// Make the computer choose an icon randomly //



// compare the icons, determine winner //



// display round winner message and increase score tally //



// check if any player has 5 points and display game win message //



// display button to restart the game //