(function() {
  const boxList = Array.prototype.slice.call(document.getElementsByClassName('box'));
  const game = new Game(new Board(boxList), new Player(true, 'O'), new Player(false, 'X'));
  game.start();
})();
