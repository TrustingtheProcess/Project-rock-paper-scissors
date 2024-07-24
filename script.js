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
    ComputerScore++;
  }
}