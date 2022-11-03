(function() {
  const game = new Game(new Board(), new Player('O'), new Player('X'));
  game.start();

  const resetBtn = document.getElementById('resetBtn');
  resetBtn.addEventListener('click', ev => {
    ev.preventDefault();
    game.reset();
  });
})();
