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
      game.play();

      document.querySelector('.selector').style.display = 'none';
      document.querySelector('.game').style.display = 'block';
    });
  });
})();
