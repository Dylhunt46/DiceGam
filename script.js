let scores, roundScore, activePlayer, gamePlaying;

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById('roundScore1').textContent = '0';
  document.getElementById('roundScore2').textContent = '0';
  document.getElementById('globalScore1').textContent = '0';
  document.getElementById('globalScore2').textContent = '0';
  document.getElementById('player1').classList.remove('active');
  document.getElementById('player2').classList.remove('active');
  document.getElementById('player1').classList.add('active');
  document.getElementById('rollBtn').removeAttribute('disabled');
  document.getElementById('holdBtn').removeAttribute('disabled');
}

init();

function switchPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById('roundScore1').textContent = '0';
  document.getElementById('roundScore2').textContent = '0';
  document.getElementById('player1').classList.toggle('active');
  document.getElementById('player2').classList.toggle('active');
}

document.getElementById('rollBtn').addEventListener('click', function () {
  if (gamePlaying) {
    let dice = Math.floor(Math.random() * 6) + 1;
    let diceDom = document.createElement('img');
    diceDom.src = 'dice' + dice + '.png';
    diceDom.style.width = '100px';
    diceDom.style.height = '100px';
    const DICE_CONTAINER = document.getElementById('dice-container');
    DICE_CONTAINER.innerHTML = '';
    DICE_CONTAINER.appendChild(diceDom);

    if (dice !== 1) {
      roundScore += dice;
      document.getElementById('roundScore' + (activePlayer + 1)).textContent =
        roundScore;
    } else {
      switchPlayer();
    }
  }
});

document.getElementById('holdBtn').addEventListener('click', function () {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;

    document.getElementById('globalScore' + (activePlayer + 1)).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document.getElementById('player' + (activePlayer + 1)).textContent =
        'Winner!';
      document.getElementById('rollBtn').setAttribute('disabled', 'disabled');
      document.getElementById('holdBtn').setAttribute('disabled', 'disabled');
      gamePlaying = false;
    } else {
      switchPlayer();
    }
  }
});

document.getElementById('newGameBtn').addEventListener('click', init);
