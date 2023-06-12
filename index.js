console.log('Rock Paper Scissors Game:');

// randomly return either 'Rock', 'Paper', 'Scissors'
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) return 'rock';
  else if (computerChoice === 2) return 'paper';
  else if (computerChoice === 3) return 'scissors';
}

// play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'scissors')
  )
    return 'Is a tie. Try again';
  else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  )
    return `You Lose! ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }`;
  else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  )
    return `You Win! ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`;

  return;
}

const playerSelection = window
  .prompt('Choose paper, rock or scissors:')
  .toLowerCase();
const computerSelection = getComputerChoice();
const roundResult = playRound(playerSelection, computerSelection);
console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
console.log(roundResult);
