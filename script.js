// Declare our variables
const gameOptions = ['rock', 'paper', 'scissors'];
// Track the total number of wins per player
let playerScore = 0;
let computerScore = 0;
// Track the total number of rounds and rounds played
const totalRounds = 5;

// Computer decides on one of rock, paper or scissors (via a function)
function getComputerSelection() {
    let optionIndex = Math.floor(Math.random() * gameOptions.length);
    console.log(`computerSelection: ${gameOptions[optionIndex]}`);
    return gameOptions[optionIndex];
}

function getPlayerSelection() {
    let playerSelection = prompt('Choose one of rock, paper, or scissors: ').toLowerCase();
    console.log(`playerSelection: ${playerSelection}`);
    return playerSelection;
}

// Plays a round of rock, paper, scissors by comparing the player choice vs. the computer choice
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('It\'s a tie! Replaying the round');
        computerSelection = getComputerSelection();
        playerSelection = getPlayerSelection();
        playRound(playerSelection, computerSelection);
    // If the player choice is scissors and the computer choice is paper, player wins
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        console.log(`Current player score is: ${playerScore}.`);
        console.log(`Current computer score is: ${computerScore}.`);
    // If the player choice is paper and the computer choice is rock, player wins
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        console.log(`Current player score is: ${playerScore}.`);
        console.log(`Current computer score is: ${computerScore}.`);
    // If the player choice is rock and the computer choice is scissors, player wins
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        console.log(`Current player score is: ${playerScore}.`);
        console.log(`Current computer score is: ${computerScore}.`);
    // Otherwise, computer wins
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
        console.log(`Current player score is: ${playerScore}.`);
        console.log(`Current computer score is: ${computerScore}.`);
    }
}

function game() {
    // For the total number of rounds (5)
    for (let i = 0; i < totalRounds; i++) {
        playRound(playerSelection, computerSelection);
        // Declare who the winner is from a best of five
        if (playerScore >= 3 && totalRounds < 5) {
            console.log('Player wins!');
        } else if (computerScore >= 3 && totalRounds < 5) {
            console.log('Computer wins!');
        } else if (playerScore === computerScore && totalRounds === 5) {
            console.log('It\'s a tie!');
        } else {
            // keep playing
            let playerSelection = getPlayerSelection();
            let computerSelection = getComputerSelection();
            playRound(playerSelection, computerSelection);
        }
    }
}

// The browser asks the user for one of rock, paper or scissors(simple prompt)
// It should be case -insensitive so ‘RoCk’ is allowed and similar variants
// Converts this input into lower -case

let playerSelection = getPlayerSelection();
let computerSelection = getComputerSelection();

game();

// If invalid input, returns an error and prompts again

// if (
//     playerSelection != gameOptions[1] ||
//     playerSelection != gameOptions[2] ||
//     playerSelection != gameOptions[3]
// )