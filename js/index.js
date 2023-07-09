(function() {
  const game = new Game();

  document.querySelectorAll('.selector__button').forEach((selectorButton) => {
    selectorButton.addEventListener('click', () => {
      game.chooseInitialPlayer(selectorButton.dataset.value);
      game.play();

      document.querySelector('.selector').style.display = 'none';
      document.querySelector('.game').style.display = 'block';
    });
  });

  document.querySelector('.header__reset--button').addEventListener('click', ev => {
    ev.preventDefault();
    game.reset();
  });
})();
