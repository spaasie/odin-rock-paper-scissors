let updateScoreComputer = 0;
let updateScorePlayer = 0;

const signs = ["rock", "paper", "scissors"];

function computerPlay() {
  const randomInt = Math.floor(3 * Math.random());
  return signs[randomInt];
}

const selectionComputer = document.querySelector("#selection-computer");
const selectionPlayer = document.querySelector("#selection-player");
const scoreInfo = document.querySelector("#score-info");
const scoreComputer = document.querySelector("#score-computer");
const scorePlayer = document.querySelector("#score-player");

function playRound(playerSelection, computerSelection) {
  selectionComputer.textContent = computerSelection;
  selectionPlayer.textContent = playerSelection;
  if (playerSelection === computerSelection) {
    scoreInfo.textContent = "That is a draw, try again...";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    scoreInfo.textContent = "You Lose! Paper beats Rock";
    updateScoreComputer++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    scoreInfo.textContent = "You Lose! Scissors beats Paper";
    updateScoreComputer++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    scoreInfo.textContent = "You Lose! Rock beats Scissors";
    updateScoreComputer++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    scoreInfo.textContent = "You Win! Rock beats Scissors";
    updateScorePlayer++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    scoreInfo.textContent = "You Win! Paper beats Rock";
    updateScorePlayer++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    scoreInfo.textContent = "You Win! Scissors beats Paper";
    updateScorePlayer++;
  } else {
    scoreInfo.textContent = "Error! You broke the game";
  }
  scoreComputer.textContent = updateScoreComputer;
  scorePlayer.textContent = updateScorePlayer;
}

const buttons = document.querySelectorAll("#selection-buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.id, computerPlay());
  });
});