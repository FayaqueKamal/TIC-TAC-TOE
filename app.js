// getting elements from the DOM
let player1 = prompt(`Enter 1st player's Name (X)`);
let player2 = prompt(`Enter 2nd player's Name (O)`);
const notify = document.querySelector("#playerTurn");
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".resetbtn");

// winning patterns
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnO = true;
let count = 0;
notify.innerHTML = `${player1}'s Turn`;

// creating click function
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (turnO) {
      notify.innerHTML = `${player2}'s Turn`;
      box.innerHTML = "X";
      turnO = false;
    } else {
      notify.innerHTML = `${player1}'s Turn`;
      box.innerHTML = "O";
      turnO = true;
    }
    count++;
    box.disabled = true;
    let winner = checkWinner();
    if (count == 9 && !winner) {
      notify.innerHTML = `game was a draw`;
      box.disabled = true;
      boxes.forEach((box) => {
        box.style.backgroundColor = "rgb(228 48 87 / 78%)";
      });
    }
  });
});

function checkWinner() {
  for (let i = 0; i < winPattern.length; i++) {
    const [a, b, c] = winPattern[i];
    if (
      boxes[a].innerHTML === boxes[b].innerHTML &&
      boxes[a].innerHTML === boxes[c].innerHTML &&
      boxes[a].innerHTML !== ""
    ) {
      if (boxes[a].innerHTML === "X") {
        notify.innerHTML = `${player1} is winner `;
      } else {
        notify.innerHTML = `${player2} is winner`;
      }
      boxes[a].style.backgroundColor = "#43e043cf";
      boxes[b].style.backgroundColor = "#43e043cf";
      boxes[c].style.backgroundColor = "#43e043cf";
      return true;
    }
  }
  // if no winner
  return false;
}

// reset button
resetBtn.addEventListener("click", resetGame);
function resetGame() {
  turnO = true;
  count = 0;
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
    playerTurn.innerHTML = `${player1}'s Turn (X)`;
    box.style.backgroundColor = "#96C5B0";
  }
}
