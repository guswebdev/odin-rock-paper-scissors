console.log("Hello World!");

let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3) + 1;

  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
};

let getHumanChoice = () => {
  return prompt(`Ingresa 'piedra', 'Papel', o 'Tijera'`);
};

let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice());
console.log("*********************");
console.log(getHumanChoice());
