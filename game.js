const shapes = ["rock", "paper", "scissors"];

function computerPlay() {
  const randomInt = Math.floor(3 * Math.random());
  return shapes[randomInt];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "That is a draw, try again...";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else {
    return "Error! self-destruct sequence initiated ...";
  }
}

function game() {
  let score = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose either, Rock, Paper or Scissors", "rock").toLowerCase();
    const computerSelection = computerPlay();

    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    // check if second word is Win! then increase score with 1
    if (result.split(" ")[1] === "Win!") {
      score++;
    } else if (result.split(" ")[1] === "Lose!") {
      computerScore++;
    }
  }
  console.log(`Your score is: ${score} to ${computerScore} out of 5 games`);
}

