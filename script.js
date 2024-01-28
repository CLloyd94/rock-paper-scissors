// Declare our variables
const gameOptions = ['rock', 'paper', 'scissors'];
// Track the total number of wins per player
let playerScore = 0;
let computerScore = 0;
// Computer decides on one of rock, paper or scissors (via a function)
function getComputerSelection() {
    let optionIndex = Math.floor(Math.random() * gameOptions.length);
    // console.log(`computerSelection: ${gameOptions[optionIndex]}`);
    return gameOptions[optionIndex];
}
// Plays a round of rock, paper, scissors by comparing the player choice vs. the computer choice
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundOutcome.textContent = 'It\'s a tie!';
    // If the player choice is scissors and the computer choice is paper, player wins
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundOutcome.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        runningplayerScore.textContent = `Player Score: ${playerScore}`;
        runningcomputerScore.textContent = `Computer Score: ${computerScore}`;
        displayWinner();
    // If the player choice is paper and the computer choice is rock, player wins
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundOutcome.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        runningplayerScore.textContent = `Player Score: ${playerScore}`;
        runningcomputerScore.textContent = `Computer Score: ${computerScore}`;
        displayWinner();
    // If the player choice is rock and the computer choice is scissors, player wins
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundOutcome.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        runningplayerScore.textContent = `Player Score: ${playerScore}`;
        runningcomputerScore.textContent = `Computer Score: ${computerScore}`;
        displayWinner();
    // Otherwise, computer wins
    } else {
        roundOutcome.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        runningplayerScore.textContent = `Player Score: ${playerScore}`;
        runningcomputerScore.textContent = `Computer Score: ${computerScore}`;
        displayWinner();
    }
}
// Add an event listener to each button
const buttons = document.querySelectorAll('button');
// Get the value of the button clicked
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Assign this value to playerSelection
        let playerSelection = button.value.toLowerCase();
        // Call the playRound function with playerSelection
        computerSelection = getComputerSelection();
        playRound(playerSelection, computerSelection);
        playerSelection = '';
    });
});
// Insert a div to display the results
const body = document.querySelector('body');
body.classList.add('body');
const results = document.createElement('div');
results.classList.add('results');
// Put the running scores in the results table
const runningplayerScore = document.createElement('p');
runningplayerScore.classList.add('runningPlayerScore');
runningplayerScore.textContent = `Player Score: ${playerScore}`;
const runningcomputerScore = document.createElement('p');
runningcomputerScore.classList.add('runningComputerScore');
runningcomputerScore.textContent = `Computer Score: ${computerScore}`;

results.appendChild(runningplayerScore);
results.appendChild(runningcomputerScore);

body.appendChild(results);

// Show results of that round
const roundOutcome = document.createElement('p');
roundOutcome.classList.add('roundOutcome');
roundOutcome.textContent = '';
body.appendChild(roundOutcome);

// Display the running score and announce the winner once one player reaches 5 points
const winner = document.createElement('p');
winner.classList.add('winner');
winner.textContent = '';
body.appendChild(winner);

function displayWinner() {
    if (playerScore >= 5) {
        winner.textContent = 'You win this game!';
    } else if (computerScore >= 5) {
        winner.textContent = 'You lose! The computer wins!';
    } else {
        winner.textContent = '';
    }
}