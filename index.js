const moveList = ["rock", "paper", "scissors"];
let compScore = 0;
let playerScore = 0;

document.getElementById("p1Score").innerText = playerScore;
document.getElementById("cpuScore").innerText = compScore;

function compareMoves(selectedMove, computerMove) {
  let winner;
  if (selectedMove === computerMove) {
    document.getElementById("resultOverlay").setAttribute("style", "display: block;")
    document.getElementById("resultActual").innerText = `It's a draw!`;
    winner = "draw";
  } else if (selectedMove === "rock") {
    if (computerMove === "paper") {
      document.getElementById("resultOverlay").setAttribute("style", "display: block;")
      document.getElementById(
        "resultActual"
      ).innerText = `The computer wins this round!`;
      winner = "cpu";
    } else if (computerMove === "scissors") {
      document.getElementById("resultOverlay").setAttribute("style", "display: block;")
      document.getElementById(
        "resultActual"
      ).innerText = `You are the winner!`;
      winner = "p1";
    }
  } else if (selectedMove === "paper") {
    if (computerMove === "scissors") {
      document.getElementById("resultOverlay").setAttribute("style", "display: block;")
      document.getElementById(
        "resultActual"
      ).innerText = `The computer wins this round!`;
      winner = "cpu";
    } else if (computerMove === "rock") {
      document.getElementById("resultOverlay").setAttribute("style", "display: block;")
      document.getElementById(
        "resultActual"
      ).innerText = `You are the winner!`;
      winner = "p1";
    }
  } else if (selectedMove === "scissors") {
    if (computerMove === "rock") {
      document.getElementById("resultOverlay").setAttribute("style", "display: block;")
      document.getElementById(
        "resultActual"
      ).innerText = `The computer wins this round!`;
      winner = "cpu";
    } else if (computerMove === "paper") {
      document.getElementById("resultOverlay").setAttribute("style", "display: block;")
      document.getElementById(
        "resultActual"
      ).innerText = `You are the winner!`;
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
  
  if(playerMove === "rock") {
    document.getElementById("pRock").setAttribute("style", "opacity: 1;")
  }
  else if(playerMove === "paper") {
    document.getElementById("pPaper").setAttribute("style", "opacity: 1;")
  }
  else if(playerMove === "scissors") {
    document.getElementById("pScissors").setAttribute("style", "opacity: 1;")
  }

  if(computerMove === "rock") {
    document.getElementById("cRock").setAttribute("style", "opacity: 1;")
  }
  else if(computerMove === "paper") {
    document.getElementById("cPaper").setAttribute("style", "opacity: 1;")
  }
  else if(computerMove === "scissors") {
    document.getElementById("cScissors").setAttribute("style", "opacity: 1;")
  }

  let result = compareMoves(playerMove, computerMove);

  if (result === "cpu") {
    compScore += 1;
  } else if (result === "p1") {
    playerScore += 1;
  }
  return compScore && playerScore;
}

function okSelect() {
  document.getElementById("resultOverlay").setAttribute("style", "display: none;");
  document.getElementById("pRock").setAttribute("style", "opacity: 0.6");
  document.getElementById("pPaper").setAttribute("style", "opacity: 0.6");
  document.getElementById("pScissors").setAttribute("style", "opacity: 0.6");
  document.getElementById("cRock").setAttribute("style", "opacity: 0.6");
  document.getElementById("cPaper").setAttribute("style", "opacity: 0.6");
  document.getElementById("cScissors").setAttribute("style", "opacity: 0.6");
}
