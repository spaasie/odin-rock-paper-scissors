let updateScoreComputer = 0;
let updateScorePlayer = 0;

const signs = ["rock", "paper", "scissors"];

function computerPlay() {
  const randomInteger = randomInt(3);
  return signs[randomInteger];
}

function randomInt(number) {
  return Math.floor(number * Math.random());
}

function randomText(type) {
  const drawStrings = [
    "It's a Draw",
    "That's a Tie",
    "Snap",
    "Great minds think alike"
  ]
  const winStrings = [
    "Gratz! You Win!",
    "Yeay! Winning!",
    "Super! You Won!",
    "Styling, we have a winner"
  ]
  const loseStrings = [
    "Soz, You Lost",
    "Too bad, Your loss",
    "Better luck next time",
    "You Lose this one"
  ]
  switch (type) {
    case "draw":
      return drawStrings[randomInt(drawStrings.length)];
    case "win":
      return winStrings[randomInt(winStrings.length)];
    case "lose":
      return loseStrings[randomInt(loseStrings.length)];
    default:
      console.log("Error with randomText");
  }
}

const selectionComputer = document.querySelector("#selection-computer");
const selectionPlayer = document.querySelector("#selection-player");
const scoreResult = document.querySelector("#score-result");
const scoreInfo = document.querySelector("#score-info");
const scoreComputer = document.querySelector("#score-computer");
const scorePlayer = document.querySelector("#score-player");

function playRound(playerSelection, computerSelection) {
  // selectionComputer.textContent = computerSelection;
  selectionComputer.style.backgroundImage = `url("img/${computerSelection}.png")`;
  // selectionPlayer.textContent = playerSelection;
  selectionPlayer.style.backgroundImage = `url("img/${playerSelection}.png")`;
  if (playerSelection === computerSelection) {
    scoreResult.textContent = randomText("draw");
    scoreInfo.textContent = "try again...";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    scoreResult.textContent = randomText("lose");
    scoreInfo.textContent = "Paper beats Rock";
    updateScoreComputer++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    scoreResult.textContent = randomText("lose");
    scoreInfo.textContent = "Scissors beats Paper";
    updateScoreComputer++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    scoreResult.textContent = randomText("lose");
    scoreInfo.textContent = "Rock beats Scissors";
    updateScoreComputer++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    scoreResult.textContent = randomText("win");
    scoreInfo.textContent = "Rock beats Scissors";
    updateScorePlayer++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    scoreResult.textContent = randomText("win");
    scoreInfo.textContent = "Paper beats Rock";
    updateScorePlayer++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    scoreResult.textContent = randomText("win");
    scoreInfo.textContent = "Scissors beats Paper";
    updateScorePlayer++;
  } else {
    scoreResult.textContent = "Error!";
    scoreInfo.textContent = "You broke the game";
  }
  scoreComputer.textContent = updateScoreComputer;
  scorePlayer.textContent = updateScorePlayer;
  endGame();
}

function endGame() {
  if (updateScoreComputer === 5 || updateScorePlayer === 5) {
    scoreResult.textContent = "We have a winner";
    if (updateScoreComputer === 5) {
      scoreInfo.textContent = "The Computer Won";
    } else {
      scoreInfo.textContent = "You won!";
    }
  }
}

const buttons = document.querySelectorAll("#selection-buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.id, computerPlay());
  });
});