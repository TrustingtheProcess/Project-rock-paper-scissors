function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]; 
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice = prompt("Please enter rock, paper, or scissors:");
  while(choice === null || !["rock", "paper", "scissors"].includes(choice.toLowerCase())) {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors:");
  } 
  return choice.toLowerCase();
}

let humanScore = 0;
let ComputerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound (humanChoice, computerChoice);
    console.log(`Round ${i + 1}: Human Score: ${humanScore}, Computer Score: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, you lost the game.");
  } else {
    console.log("The game is a tie");
  }
}

playGame();