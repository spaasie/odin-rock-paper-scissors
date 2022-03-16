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
    "Great minds think alike",
    "Copy cat"
  ]
  const winStrings = [
    "Gratz, You Win!",
    "Yeay, Winning!",
    "Super, You Won!",
    "Styling, we have a winner",
    "Great, Keep it up"
  ]
  const loseStrings = [
    "Soz, You Lost",
    "Too bad, Your loss",
    "Better luck next time",
    "You Lose this one",
    "Oef, not this one",
    "Almost, but not"
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

function fieldColor(status) {
  switch (status) {
    case "win":
      field.style.backgroundColor = "var(--green)";
      break;
    case "draw":
      field.style.backgroundColor = "var(--yellow)";
      break;
    case "lose":
      field.style.backgroundColor = "var(--red)";
  }
}

const selectionComputer = document.querySelector("#selection-computer");
const selectionPlayer = document.querySelector("#selection-player");
const scoreResult = document.querySelector("#score-result");
const scoreInfo = document.querySelector("#score-info");
const scoreComputer = document.querySelector("#score-computer");
const scorePlayer = document.querySelector("#score-player");
const field = document.querySelector("#field");

function playRound(playerSelection, computerSelection) {
  selectionComputer.style.backgroundImage = `url("img/${computerSelection}.png")`;
  selectionPlayer.style.backgroundImage = `url("img/${playerSelection}.png")`;
  if (playerSelection === computerSelection) {
    fieldColor("draw");
    scoreResult.textContent = randomText("draw");
    scoreInfo.textContent = "try again...";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    fieldColor("lose");
    scoreResult.textContent = randomText("lose");
    scoreInfo.textContent = "Paper beats Rock";
    updateScoreComputer++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    fieldColor("lose");
    scoreResult.textContent = randomText("lose");
    scoreInfo.textContent = "Scissors beats Paper";
    updateScoreComputer++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    fieldColor("lose");
    scoreResult.textContent = randomText("lose");
    scoreInfo.textContent = "Rock beats Scissors";
    updateScoreComputer++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    fieldColor("win");
    scoreResult.textContent = randomText("win");
    scoreInfo.textContent = "Rock beats Scissors";
    updateScorePlayer++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    fieldColor("win");
    scoreResult.textContent = randomText("win");
    scoreInfo.textContent = "Paper beats Rock";
    updateScorePlayer++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    fieldColor("win");
    scoreResult.textContent = randomText("win");
    scoreInfo.textContent = "Scissors beats Paper";
    updateScorePlayer++;
  } else {
    fieldColor("lose");
    scoreResult.textContent = "Error!";
    scoreInfo.textContent = "You broke the game";
  }
  scoreComputer.textContent = updateScoreComputer;
  scorePlayer.textContent = updateScorePlayer;
  endGame();
}

const selectionButtons = document.querySelector('#selection-buttons');
const restart = document.querySelector('#restart');

function endGame() {
  if (updateScoreComputer === 5 || updateScorePlayer === 5) {
    scoreResult.textContent = "We have a winner";
    if (updateScoreComputer === 5) {
      fieldColor("lose");
      scoreInfo.textContent = "The Computer Won";
      selectionComputer.style.backgroundImage = "url('img/awesome.png')";
      selectionPlayer.style.backgroundImage = "url('img/head-bandage.png')";
    } else {
      fieldColor("win");
      scoreInfo.textContent = "You won!";
      selectionComputer.style.backgroundImage = "url('img/head-bandage.png')";
      selectionPlayer.style.backgroundImage = "url('img/awesome.png')";
    }
    selectionButtons.style.display = "none";
    restart.style.display = "block";
  }
}

const buttons = document.querySelectorAll("#selection-buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.id, computerPlay());
  });
});

restart.addEventListener("click", () => location.reload(true) )