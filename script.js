//Variables
const d = document;
let humanScore = 0;
let computerScore = 0;
let gameOver = false;
const $btns = d.querySelectorAll(".btn");

const $btnPiedra = d.querySelector("[data-id=piedra]");
const $btnPapel = d.querySelector("[data-id=papel]");
const $btnTijera = d.querySelector("[data-id=tijera]");
const $mensajeResultado = d.querySelector(".rounds p");
const $mensajePuntajeHuman = d.querySelector("[data-puntaje-human]");
const $mensajePuntajeComputer = d.querySelector("[data-puntaje-computer]");
const $mensajeWinner = d.querySelector("[data-winner]");

//Funciones
let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3) + 1;

  switch (choice) {
    case 1:
      return "piedra";
    case 2:
      return "papel";
    case 3:
      return "tijera";
  }
};

let imprimirResultado = (nodo, human, computer, result) => {
  if (human === computer) {
    nodo.textContent = "¡Empate!";
  } else if (result) {
    nodo.textContent = `¡Ganaste!, ${human} le gana a ${computer}`;
  } else {
    nodo.textContent = `¡Perdiste!, ${computer} le gana a ${human}`;
  }
};

let playGame = (humanSelection) => {
  let playRound = (humanSelection) => {
    let computerSelection = getComputerChoice();

    if (humanSelection === computerSelection) {
      imprimirResultado($mensajeResultado, humanSelection, computerSelection);
    } else if (
      (humanSelection === "tijera" && computerSelection === "papel") ||
      (humanSelection === "papel" && computerSelection === "piedra") ||
      (humanSelection === "piedra" && computerSelection === "tijera")
    ) {
      imprimirResultado(
        $mensajeResultado,
        humanSelection,
        computerSelection,
        true
      );
      humanScore++;
    } else {
      imprimirResultado(
        $mensajeResultado,
        humanSelection,
        computerSelection,
        false
      );
      computerScore++;
    }

    $mensajePuntajeHuman.textContent = humanScore;
    $mensajePuntajeComputer.textContent = computerScore;

    if (humanScore === 5) {
      $mensajeWinner.textContent = "HUMAN";
      gameOver = true;
    } else if (computerScore === 5) {
      $mensajeWinner.textContent = "COMPUTER";
      gameOver = true;
    }
  };
  if (gameOver) {
    humanScore = 0;
    computerScore = 0;
    $mensajeResultado.textContent = "-";
    $mensajePuntajeHuman.textContent = "-";
    $mensajePuntajeComputer.textContent = "-";
    $mensajeWinner.textContent = "-";
    gameOver = false;
  }

  playRound(humanSelection);
};

//Ejecucion
let funcionClick = (e) => {
  if (
    e.target === $btnPiedra ||
    e.target === $btnPapel ||
    e.target === $btnTijera
  ) {
    playGame(e.target.dataset.id);
  }
};

d.addEventListener("click", funcionClick);
