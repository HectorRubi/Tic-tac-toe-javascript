(function() {
  const game = new Game(new Board(), new Player('O'), new Player('X'));
  const resetBtn = document.getElementById('resetBtn');

  game.start();

  resetBtn.addEventListener('click', ev => {
    ev.preventDefault();
    game.reset();
  });
})();
