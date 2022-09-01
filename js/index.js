(function() {
  const game = new Game(new Board(), new Player(true, "O"), new Player(false, "X"));
  game.start();
})();