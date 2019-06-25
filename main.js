// let player = playerX;
// let winner = null;
let turnCount = 1;
let whosTurn = document.getElementById("whosTurn");

let cell_0 = document.getElementById("cell-0");
let cell_1 = document.getElementById("cell-1");
let cell_2 = document.getElementById("cell-2");
let cell_3 = document.getElementById("cell-3");
let cell_4 = document.getElementById("cell-4");
let cell_5 = document.getElementById("cell-5");
let cell_6 = document.getElementById("cell-6");
let cell_7 = document.getElementById("cell-7");
let cell_8 = document.getElementById("cell-8");

// * Play function initiates only after Let's Go button has been activated and subsequently disabled.
// * Alert message triggers if claimed cell is already populated with "X" or "O"

function play(e) {
  let move = turnCount % 2 ? "X" : "O";
  let nextMove = turnCount % 2 ? "O" : "X";
  if (e.target.textContent === "") {
    turnCount++;
    e.target.textContent = move;
    if (
      cell_0.textContent === "X" && // create if function for each possible "win" statement.
      cell_1.textContent === "X" &&
      cell_2.textContent === "X"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
    if (
      cell_0.textContent === "X" && // create if function for each possible "win" statement.
      cell_3.textContent === "X" &&
      cell_6.textContent === "X"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
    if (
      cell_0.textContent === "X" && // create if function for each possible "win" statement.
      cell_4.textContent === "X" &&
      cell_8.textContent === "X"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
    if (
      cell_1.textContent === "X" && // create if function for each possible "win" statement.
      cell_4.textContent === "X" &&
      cell_7.textContent === "X"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
    if (
      cell_3.textContent === "X" && // create if function for each possible "win" statement.
      cell_4.textContent === "X" &&
      cell_5.textContent === "X"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
    if (
      cell_2.textContent === "X" && // create if function for each possible "win" statement.
      cell_4.textContent === "X" &&
      cell_6.textContent === "X"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
    if (
      cell_2.textContent === "X" && // create if function for each possible "win" statement.
      cell_5.textContent === "X" &&
      cell_8.textContent === "X"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
    if (
      cell_6.textContent === "X" && // create if function for each possible "win" statement.
      cell_7.textContent === "X" &&
      cell_8.textContent === "X"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
    if (
      cell_0.textContent === "O" && // create if function for each possible "win" statement.
      cell_1.textContent === "O" &&
      cell_2.textContent === "O"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
    if (
      cell_0.textContent === "O" && // create if function for each possible "win" statement.
      cell_3.textContent === "O" &&
      cell_6.textContent === "O"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
    if (
      cell_0.textContent === "O" && // create if function for each possible "win" statement.
      cell_4.textContent === "O" &&
      cell_8.textContent === "O"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
    if (
      cell_1.textContent === "O" && // create if function for each possible "win" statement.
      cell_4.textContent === "O" &&
      cell_7.textContent === "O"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
    if (
      cell_3.textContent === "O" && // create if function for each possible "win" statement.
      cell_4.textContent === "O" &&
      cell_5.textContent === "O"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
    if (
      cell_2.textContent === "O" && // create if function for each possible "win" statement.
      cell_4.textContent === "O" &&
      cell_6.textContent === "O"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
    if (
      cell_2.textContent === "O" && // create if function for each possible "win" statement.
      cell_5.textContent === "O" &&
      cell_8.textContent === "O"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
    if (
      cell_6.textContent === "O" && // create if function for each possible "win" statement.
      cell_7.textContent === "O" &&
      cell_8.textContent === "O"
    ) {
      alert(">CELLS WITHIN CELLS WITHIN CELLS INTERLINKED \n>YOU WIN");
    }
  } else {
    alert("Sorry, you must choose an unclaimed cell.");
  }
  whosTurn.innerHTML = `Player ${nextMove} 's Turn!`;
}

let startButton = document.getElementById("start");
startButton.addEventListener("click", setupBoard);

function setupBoard(e) {
  e.target.disabled = true;
  // let gameStatus = document.createElement("p");
  // document.querySelector("div.status").appendChild(gameStatus);
  // gameStatus.textContent = "Player X's turn.";
  document.getElementById("cell-0").addEventListener("click", play);
  document.getElementById("cell-1").addEventListener("click", play);
  document.getElementById("cell-2").addEventListener("click", play);
  document.getElementById("cell-3").addEventListener("click", play);
  document.getElementById("cell-4").addEventListener("click", play);
  document.getElementById("cell-5").addEventListener("click", play);
  document.getElementById("cell-6").addEventListener("click", play);
  document.getElementById("cell-7").addEventListener("click", play);
  document.getElementById("cell-8").addEventListener("click", play);
}
