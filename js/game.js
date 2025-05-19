const choices = ['piedra', 'papel', 'tijera'];

const buttons = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const winnerDisplay = document.getElementById('winner');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);

    userChoiceDisplay.textContent = capitalize(userChoice);
    computerChoiceDisplay.textContent = capitalize(computerChoice);
    winnerDisplay.textContent = winner;
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(user, computer) {
  if (user === computer) {
    return "¡Empate!";
  }

  if (
    (user === 'piedra' && computer === 'tijera') ||
    (user === 'papel' && computer === 'piedra') ||
    (user === 'tijera' && computer === 'papel')
  ) {
    return "¡Ganaste! 🎉";
  } else {
    return "¡Perdiste! 😢";
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
