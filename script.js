function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]; 
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const results = document.getElementById("results");

  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  results.textContent = `${resultMessage}\nHuman Score: ${humanScore}, Computer Score: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const winnerMessage = humanScore === 5 ? "Congratulations! You won the game!" : "Sorry, you lost the game.";
    results.textContent += `\n${winnerMessage}`;
    disableButtons();
    }
  }

  function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
  }


document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));