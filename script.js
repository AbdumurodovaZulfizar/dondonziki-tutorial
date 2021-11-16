const choices = document.querySelectorAll('.choice'),
score = document.querySelector('#score'),
result = document.querySelector("#result"),
modal = document.querySelector(".modal"),
restart = document.querySelector("#restart"),
scoreBoard = {
  player: 0,
  computer: 0,
  draw: 0,
};

const play = (event) => {
  restart.style.display = 'inline-block';
  const playerChoice = event.target.id;
  console.log(playerChoice);
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  const winner = getWinner(playerChoice , computerChoice);
  console.log(winner)
  showWinner(winner, computerChoice);
}

const getComputerChoice = () => {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'rock'
  } else if (rand < 0.67) {
    return 'scissors'
  } else {
    return 'paper'
  }
}

const getWinner = (p, c) => {
  if (p == c) {
    return 'Draw'
  }else if (p == 'scissors') {
    if (c == 'paper') {
      return 'player'
    } else {
      return 'computer'
    }
  } else if (p = 'rock') {
    if (c == 'paper') {
      return 'computer'
    } else {
      return 'player'
    }
  } else if (p == 'paper') {
    if (c == 'scissors') {
      return 'computer'
    } else if (c == 'rock') {
      return 'player'
    }
  }
}


const showWinner = (winner, computerChoice) => {
  if (winner == 'Draw') {
    scoreBoard.draw++;
    result.innerHTML = `
    <h1 class='text-lose'>Its a draw</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer choose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
    `
  }else if (winner == 'player') {
    scoreBoard.player++;
    result.innerHTML = `<h1 class='text-win'>You win</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer choose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`
  } else if (winner = 'computer') {
    scoreBoard.computer++;
    result.innerHTML = `<h1 class='text-lose'>You lose</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer choose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>`
  }

  score.innerHTML = `
    <p>
    Player: ${scoreBoard.player}</p>
    <p>Computer: ${scoreBoard.computer}</p>
    <p>Draw: ${scoreBoard.draw}</p>
  `;

  modal.style.display = 'block';
}

const restartGame = () => {

  scoreBoard.player = 0;
  scoreBoard.computer = 0;
  scoreBoard.draw = 0;
  score.innerHTML = `
    <p>
    Player: ${scoreBoard.player}</p>
    <p>Computer: ${scoreBoard.computer}</p>
    <p>Draw: ${scoreBoard.draw}</p>
    `

}

const clearModal = (e) => {
  if (e.target == modal) {
    modal.style.display = 'none'
  }
}

// event Listeners

choices.forEach(choice => {
  choice.addEventListener("click", play)
})

window.addEventListener('click', clearModal)
restart.addEventListener("click", restartGame)