# Let’s play RPSLS (Rock-Paper-Scissors-Lizard-Spock)

[Let's play RPSLS](https://knutinator.github.io/lets-play-rpsls/) is a browser based JavaScript game of luck against the computer. It is a useful tool for people needing help to make decisions, since the outcome of each game is truly random.

The game is also targeted towards people who have heard about the "RPSLS" game from the TV series “The Big Bang Theory”, and wishes to try it out for themselves. 

<img src="assets/readme/rpsls-main-image.png" alt="Game running on devices with different screen sizes"/>

## Features

### Existing Features

- Header

    - Sits at the top of the page and shows the name of the game in a minimalistic font.
    - Gets the users's attention and creates intrigue about the odd abbreviation.
    - RPSLS is written in brackets to give it a "technical" feel, in line with the game's nerd culture roots.


<img src="assets/readme/rpsls-logo.png" alt="Header of game page" width="50%"/>

&nbsp;<br>

- Game interface

    - The game interface displays five icons to choose from, each of them below an explanatory label.
    - The labels doubles as explanation for the abbreviation RPSLS, which sits directly above.
    - When the user touches an icon, it turns bright red and increases in size, indicating that it can be clicked.
    - When clicked, the user's selected icon will remain bright red, while the computers selection will be displayed in gray. 

<img src="assets/readme/rpsls-interface2.png" alt="Game interface" width="75%"/>

&nbsp;<br>

- Game explanation field

    - Below the game icons is a text field that changes use depending of the actions of the user.
    - At first, it encourages the user to start the game by clicking one of the icons, while also explaining the win conditions: First to five points wins.
    - When the game has started, the field instead explains the outcome of the latest game round, so the user understands what just happened. This also teaches the user the game rules.
    
<i><figcaption>Before game</figcaption></i>
<img src="assets/readme/rpsls-text1b.png" alt="The explanation field before game" width="50%"/>
<i><figcaption>During game</figcaption></i>
<img src="assets/readme/rpsls-text2b.png" alt="The explanation field during game" width="30%"/>

&nbsp;<br>

- Game results and score field

    - When the user clicks an icon, the JavaScript code chooses an icon for the computer player at random. 
    - The code then determines the winner of the round according to the game rules, and awards a point to the winning player.
    - The scores are counted in the two score boxes, which are clearly marked in an outline color which corresponds with the icon colors of the game field.
    - This gives the user a clear view of the current standing of the game, making it easy to play.
    - When either of the players has gained five points, they are declared the winner of the game. A pop-up message tells this to the player, and the game is automatically restarted, when the user clicks the "ok" button.

<img src="assets/readme/rpsls-score.png" alt="The score field" width="75%"/>

&nbsp;<br>

### Features left to implement

- I would like to expand the game with a multiplayer option, so the user can play either against a human or a computer.

## Testing

- Game was tested and worked perfectly in three different browsers: Chrome, Firefox and Safari.
- Responsiveness was tested using Chrome Devtols and an Android Phone.
- Game was validated for Accessibility using Lighthouse in Devtools.
- HTML was validated using [W3C HTML Validator](https://jshint.com/).
- CSS was validated with [W3C CSS Validator (Jigsaw)](https://validator.w3.org/).
- JavaScript was validated with [JSHint JavaScript Validator](https://jigsaw.w3.org/css-validator/).
- All validation passed with no errors detected.

## Deployment
 - The game site was deployed to Github Pages, using the following method:
    - In the Github repository, click the Settings Tab.
    - Select the Pages section.
    - Under the Build and deployment headline, click the dropdown menu under Branch and select "main". 
    - Click the save button.
    - Once the page has been deployed, you can access the live link from the Pages section.

Live link can be found here - [Let's play RPSLS](https://knutinator.github.io/lets-play-rpsls/)

## Credits

Styling

- Favicon generated using: https://favicon.io/

- Icons implemented using https://fontawesome.com/

Scripts

- Code for determining player choice was inspired by: https://www.codewizardshq.com/javascript-tutorial-for-kids-rock-paper-scissors/

- Code for increasing score tally was inspired by: https://stackoverflow.com/questions/68074211/make-score-counter-from-javascript-display-as-text-in-html
