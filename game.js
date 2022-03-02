const shapes = ["rock", "paper", "scissors"];

function computerPlay() {
  const randomInt = Math.floor(3 * Math.random());
  return shapes[randomInt];
}

