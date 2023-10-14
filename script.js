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
  document.getElementById('holdBtn').setAttribute('disabled', 'disabled');
}

init();
