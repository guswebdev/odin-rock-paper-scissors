const d = document;

class Jugador {
  score = 0;
  choice;
  nombre = "Human";

  set setChoice(nuevoChoice) {
    this.choice = nuevoChoice;
  }

  get getScore() {
    return this.score;
  }

  incrementarScore() {
    this.score++;
  }

  resetearScore() {
    this.score = 0;
  }
}

class Computer extends Jugador {
  score = 0;
  choice;
  nombre = "Computer";

  #seleccionarComputerChoice(choice) {
    switch (choice) {
      case 1:
        return "piedra";
      case 2:
        return "papel";
      case 3:
        return "tijera";
    }
  }

  getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    return this.#seleccionarComputerChoice(choice);
  }
}

class Display {
  $btns = d.querySelectorAll(".btn");

  $btnPiedra = d.querySelector("[data-id=piedra]");
  $btnPapel = d.querySelector("[data-id=papel]");
  $btnTijera = d.querySelector("[data-id=tijera]");
  $mensajeResultado = d.querySelector(".rounds p");
  $mensajePuntajeHuman = d.querySelector("[data-puntaje-human]");
  $mensajePuntajeComputer = d.querySelector("[data-puntaje-computer]");
  $mensajeWinner = d.querySelector("[data-winner]");

  imprimirEmpate() {
    this.$mensajeResultado.textContent = "¡Empate!";
  }
  imprimirHumanRonda() {
    this.$mensajeResultado.textContent = `¡Ganaste ${jugador.nombre}! ${jugador.choice} le gana a ${computer.choice}`;
  }
  imprimirComputerRonda() {
    this.$mensajeResultado.textContent = `¡Ganaste ${computer.nombre}! ${computer.choice} le gana a ${jugador.choice}`;
  }

  imprimirScoreHuman() {
    this.$mensajePuntajeHuman.textContent = jugador.score;
  }
  imprimirScoreComputer() {
    this.$mensajePuntajeComputer.textContent = computer.score;
  }
  imprimirGanadorHuman() {
    this.$mensajeWinner.textContent = jugador.nombre;
  }
  imprimirGanadorComputer() {
    this.$mensajeWinner.textContent = computer.nombre;
  }
  resetarDisplay() {
    this.$mensajeResultado.textContent = "-";
    this.$mensajePuntajeHuman.textContent = "-";
    this.$mensajePuntajeComputer.textContent = "-";
    this.$mensajeWinner.textContent = "-";
  }
}

class Controlador {
  gameOver = false;

  playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
      display.imprimirEmpate();
    } else if (
      (humanSelection === "tijera" && computerSelection === "papel") ||
      (humanSelection === "papel" && computerSelection === "piedra") ||
      (humanSelection === "piedra" && computerSelection === "tijera")
    ) {
      display.imprimirHumanRonda();
      jugador.incrementarScore();
    } else {
      display.imprimirComputerRonda();
      computer.incrementarScore();
    }

    display.imprimirScoreHuman();

    display.imprimirScoreComputer();

    if (jugador.score === 5) {
      display.imprimirGanadorHuman();
      this.gameOver = true;
    } else if (computer.score === 5) {
      display.imprimirGanadorComputer();
      this.gameOver = true;
    }
  }

  playGame(humanSelection, computerSelection) {
    if (this.gameOver) {
      jugador.resetearScore();
      computer.resetearScore();
      display.resetarDisplay();
      this.gameOver = false;
    }

    this.playRound(humanSelection, computerSelection);
  }

  click(e) {
    if (
      e.target === display.$btnPiedra ||
      e.target === display.$btnPapel ||
      e.target === display.$btnTijera
    ) {
      jugador.setChoice = e.target.dataset.id;
      computer.setChoice = computer.getComputerChoice();
      controlador.playGame(jugador.choice, computer.choice);
    }
  }
}

const jugador = new Jugador();
const computer = new Computer();
const display = new Display();
const controlador = new Controlador();

d.addEventListener("click", controlador.click);
