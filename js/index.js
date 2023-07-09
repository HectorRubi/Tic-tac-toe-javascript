(function() {
  const game = new Game();

  const resetBtn = document.getElementById('resetBtn');
  resetBtn.addEventListener('click', ev => {
    ev.preventDefault();
    game.reset();
  });

  document.querySelectorAll('.selector__button').forEach((selectorButton) => {
    selectorButton.addEventListener('click', () => {
      game.chooseInitialPlayer(selectorButton.dataset.value);
      console.log(game.player1.letter, game.player2.letter);
      game.play();

      document.querySelector('.selector').style.display = 'none';
      document.querySelector('.game').style.display = 'block';
    });
  });
})();
