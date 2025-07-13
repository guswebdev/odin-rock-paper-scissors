//Variables
const d = document;
const $btns = d.querySelectorAll(".btn");

const $btnPiedra = d.querySelector("[data-id=piedra]");
const $btnPapel = d.querySelector("[data-id=papel]");
const $btnTijera = d.querySelector("[data-id=tijera]");

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

let playGame = (humanSelection) => {
  let humanScore = 0;
  let computerScore = 0;

  let playRound = (humanSelection) => {
    let computerSelection = getComputerChoice();

    if (humanSelection === computerSelection) {
      console.log("¡Empate!");
    } else if (
      (humanSelection === "tijera" && computerSelection === "papel") ||
      (humanSelection === "papel" && computerSelection === "piedra") ||
      (humanSelection === "piedra" && computerSelection === "tijera")
    ) {
      console.log(
        `¡Ganaste!, ${humanSelection} le gana a ${computerSelection}`
      );
      humanScore++;
    } else {
      console.log(
        `¡Perdiste!, ${computerSelection} le gana a ${humanSelection}`
      );
      computerScore++;
    }

    console.log(
      `Puntuacion: 'HUMAN' : ${humanScore} | 'COMPUTER': ${computerScore}`
    );
  };

  console.log("--------------------------");
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