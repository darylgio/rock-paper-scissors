function getComputerChoice() {
  // Define Array with choices
  const choices = ["rock", "paper", "scissors"];
  // A random index 0-2
  const randomIndex = Math.floor(Math.random() * choices.length);
  // Raeturn the random index from the array
  return choices[randomIndex];
}

function getHumanChoice() {
  // Prompt to ask for user choice
  const choices = prompt("Rock, paper or scissors?").toLowerCase();
  // Switch statement to handle different choices
  switch (choices) {
    case "rock":
      return "rock";
    case "paper":
      return "paper";
    case "scissors":
      return "scissors";
    default:
      console.log(
        "Invalid choice, please choose between rock, paper or scissors!"
      );
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let rounds = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return "tie";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      return "win";
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
      return "lose";
    }
  }

  while (rounds < 5) {
    playRound();
    rounds++;
  }
  console.log("Human Score: " + humanScore);
  console.log("Computer Score: " + computerScore);
}

playGame();
