console.log("Hello World!");

let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3) + 1;

  switch (choice) {
    case 1:
      return "Piedra";
    case 2:
      return "Papel";
    case 3:
      return "Tijera";
  }
};

let getHumanChoice = () => {
  return prompt(`Ingresa 'piedra', 'Papel', o 'Tijera'`);
};

let playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  let playRound = () => {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    let humanChoiceLower = humanSelection.toLowerCase();
    let computerChoiceLower = computerSelection.toLowerCase();

    if (humanChoiceLower === computerChoiceLower) {
      console.log("¡Empate!");
    } else if (
      (humanChoiceLower === "tijera" && computerChoiceLower === "papel") ||
      (humanChoiceLower === "papel" && computerChoiceLower === "piedra") ||
      (humanChoiceLower === "piedra" && computerChoiceLower === "tijera")
    ) {
      console.log(
        `¡Ganaste!, ${humanChoiceLower} le gana a ${computerChoiceLower}`
      );
      humanScore++;
    } else {
      console.log(
        `¡Perdiste!, ${computerChoiceLower} le gana a ${humanChoiceLower}`
      );
      computerScore++;
    }

    console.log(
      `Puntuacion: 'HUMAN' : ${humanScore} | 'COMPUTER': ${computerScore}`
    );
  };

  for (let i = 1; i <= 5; i++) {
    console.log("--------------------------");
    console.log("Ronda " + i);
    playRound();
  }
};

playGame();
