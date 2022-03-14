let updateScoreComputer = 0;
let updateScorePlayer = 0;

const signs = ["rock", "paper", "scissors"];

function computerPlay() {
  const randomInt = Math.floor(3 * Math.random());
  return signs[randomInt];
}

const selectionComputer = document.querySelector("#selection-computer");
const selectionPlayer = document.querySelector("#selection-player");
const scoreResult = document.querySelector("#score-result");
const scoreInfo = document.querySelector("#score-info");
const scoreComputer = document.querySelector("#score-computer");
const scorePlayer = document.querySelector("#score-player");

function playRound(playerSelection, computerSelection) {
  selectionComputer.textContent = computerSelection;
  selectionPlayer.textContent = playerSelection;
  if (playerSelection === computerSelection) {
    scoreResult.textContent = "It's a Draw";
    scoreInfo.textContent = "try again...";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    scoreResult.textContent = "You Lose!";
    scoreInfo.textContent = "Paper beats Rock";
    updateScoreComputer++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    scoreResult.textContent = "You Lose!";
    scoreInfo.textContent = "Scissors beats Paper";
    updateScoreComputer++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    scoreResult.textContent = "You Lose!";
    scoreInfo.textContent = "Rock beats Scissors";
    updateScoreComputer++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    scoreResult.textContent = "You Win!";
    scoreInfo.textContent = "Rock beats Scissors";
    updateScorePlayer++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    scoreResult.textContent = "You Win!";
    scoreInfo.textContent = "Paper beats Rock";
    updateScorePlayer++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    scoreResult.textContent = "You Win!";
    scoreInfo.textContent = "Scissors beats Paper";
    updateScorePlayer++;
  } else {
    scoreResult.textContent = "Error!";
    scoreInfo.textContent = "You broke the game";
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