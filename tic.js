//--Selectors--
const restartBtn = document.querySelector(".restart");
const turnShow = document.querySelector(".turns");
const squares = document.querySelectorAll(".square");
const grid = document.querySelector(".grid");

//--Variables--

let playerTurn = "X";
const randomTruns = ["X's turn", "O's turn"];

//Events
restartBtn.addEventListener("click", gameRestart);

squares.forEach((square) => {
  square.addEventListener("click", put, { once: true });
});

// --Functions --

//Restart the game
function gameRestart() {
  squares.forEach((box) => {
    box.classList.remove("X");
    box.classList.remove("O");
    box.classList.remove("winColor");
    box.classList.remove("drawColor");
    grid.classList.remove("disabled");

    randomize();
    squares.forEach((square) => {
      square.addEventListener("click", put, { once: true });
    });
  });
}
//Random turns
randomize = () => {
  const random = Math.floor(Math.random() * 2);
  randomUser = randomTruns[random];
  turnShow.innerHTML = randomUser;
  if (randomUser === "X's turn") {
    playerTurn;
  } else {
    playerTurn = "O";
  }
};

//Calling the function

randomize();

//

//Switching turns
function put(e) {
  //Indicating the classList
  let squareDiv = e.target.classList;

  //Checking truns
  if (playerTurn === "X") {
    turnShow.innerHTML = "O's turn";
    squareDiv.add("X");
    playerTurn = "O";
    checkGameStatus();
  } else {
    turnShow.innerHTML = "X's turn";
    squareDiv.add("O");
    playerTurn = "X";
    checkGameStatus();
  }
}
//Checking for wins

const checkGameStatus = () => {
  //Selecting squares
  const one = squares[0].classList[2];
  const two = squares[1].classList[2];
  const three = squares[2].classList[2];
  const four = squares[3].classList[2];
  const five = squares[4].classList[2];
  const six = squares[5].classList[2];
  const seven = squares[6].classList[2];
  const eight = squares[7].classList[2];
  const nine = squares[8].classList[2];

  //Disabling the grid

  function disableGrid() {
    grid.classList.add("disabled");
  }
  //Winning positions
  if (one && one === two && one === three) {
    winning();
    disableGrid();
    squares[0].classList.add("winColor");
    squares[1].classList.add("winColor");
    squares[2].classList.add("winColor");
  } else if (one && one === four && one === seven) {
    winning();
    squares[0].classList.add("winColor");
    squares[3].classList.add("winColor");
    squares[6].classList.add("winColor");
  } else if (one && one === five && one === nine) {
    winning();
    disableGrid();
    squares[0].classList.add("winColor");
    squares[4].classList.add("winColor");
    squares[8].classList.add("winColor");
  } else if (two && two === five && two === eight) {
    winning();
    disableGrid();
    squares[1].classList.add("winColor");
    squares[4].classList.add("winColor");
    squares[7].classList.add("winColor");
  } else if (three && three === six && three === nine) {
    winning();
    disableGrid();
    squares[2].classList.add("winColor");
    squares[5].classList.add("winColor");
    squares[8].classList.add("winColor");
  } else if (four && four === five && four === six) {
    winning();
    disableGrid();
    squares[3].classList.add("winColor");
    squares[4].classList.add("winColor");
    squares[5].classList.add("winColor");
  } else if (seven && seven === eight && seven === nine) {
    winning();
    disableGrid();
    squares[6].classList.add("winColor");
    squares[7].classList.add("winColor");
    squares[8].classList.add("winColor");
    playSound();
  } else if (three && three === five && three === seven) {
    winning();
    disableGrid();
    squares[2].classList.add("winColor");
    squares[4].classList.add("winColor");
    squares[6].classList.add("winColor");
  } else if (
    one &&
    two &&
    three &&
    four &&
    five &&
    six &&
    seven &&
    eight &&
    nine
  ) {
    draw();
    disableGrid();
    squares[0].classList.add("drawColor");
    squares[1].classList.add("drawColor");
    squares[2].classList.add("drawColor");
    squares[3].classList.add("drawColor");
    squares[4].classList.add("drawColor");
    squares[5].classList.add("drawColor");
    squares[6].classList.add("drawColor");
    squares[7].classList.add("drawColor");
    squares[8].classList.add("drawColor");
  }
};
//Changing game status for the winner
winning = () => {
  if (playerTurn === "O") {
    turnShow.innerHTML = "<span style ='color : red'> X wins the game!</span>";
  } else {
    turnShow.innerHTML = "<span  style ='color : red'> O wins the game!</span>";
  }
};
//Draw function
draw = () => {
  turnShow.innerHTML =
    "<span style='color:rgb(255, 196, 0)'> It's a draw</span>";
};
