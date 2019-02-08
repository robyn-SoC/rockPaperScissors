const moveList = ["rock", "paper", "scissors"];
let compScore = 0;
let playerScore = 0;

document.getElementById("p1Score").innerText = playerScore;
document.getElementById("cpuScore").innerText = compScore;

function compareMoves(selectedMove, computerMove) {
  let winner;
  if (selectedMove === computerMove) {
    document.getElementById("resultActual").innerText = `It's a draw!`;
    winner = "draw";
  } else if (selectedMove === "rock") {
    if (computerMove === "paper") {
      document.getElementById(
        "resultActual"
      ).innerText = `Computer is the winner`;
      winner = "cpu";
    } else if (computerMove === "scissors") {
      document.getElementById(
        "resultActual"
      ).innerText = `Player is the winner`;
      winner = "p1";
    }
  } else if (selectedMove === "paper") {
    if (computerMove === "scissors") {
      document.getElementById(
        "resultActual"
      ).innerText = `Computer is the winner`;
      winner = "cpu";
    } else if (computerMove === "rock") {
      document.getElementById(
        "resultActual"
      ).innerText = `Player is the winner`;
      winner = "p1";
    }
  } else if (selectedMove === "scissors") {
    if (computerMove === "rock") {
      document.getElementById(
        "resultActual"
      ).innerText = `Computer is the winner`;
      winner = "cpu";
    } else if (computerMove === "paper") {
      document.getElementById(
        "resultActual"
      ).innerText = `Player is the winner`;
      winner = "p1";
    }
  }
  return winner;
}

function playerChoice(playerMove) {
  let computerMove = moveList[Math.floor(Math.random() * moveList.length)];
  document.getElementById(
    "resultText"
  ).innerText = `You have chosen ${playerMove} and computer has chosen ${computerMove}`;

  let result = compareMoves(playerMove, computerMove);

  if (result === "cpu") {
    compScore += 1;
  } else if (result === "p1") {
    playerScore += 1;
  }
  return compScore && playerScore;
}
