class Game {
  constructor(board, player1, player2) {
    this.board = board;
    this.player1 = player1;
    this.player2 = player2;
    this.turn = true;
    this.count = 0;
  }

  changeTurn(number) {
    this.count += 1;
    this.player1.setTurn(!this.player1.getTurn());
    this.player2.setTurn(!this.player2.getTurn());

    this.turn = !this.turn;
    this.printPlayer();

    this.board.boxClicked(number);
    this.board.setCurrentContent(this.turn ? 'O' : 'X');
  }

  onBoxClick(box) {
    if (!box.isFilled()) {
      box.ref.innerHTML = this.board.currentContent;
      this.changeTurn(box.ref.dataset.index);
    }
  }

  start() {
    this.printPlayer();
    this.board.boxList.forEach(box => {
      box.ref.addEventListener('click', () => {this.onBoxClick(box)});
    });
  }

  printPlayer() {
    const turnText = document.getElementById('turnText');
    turnText.innerHTML = this.turn ? 'Player 1' : 'Player 2';
  }
}
