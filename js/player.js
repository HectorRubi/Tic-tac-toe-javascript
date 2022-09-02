class Player {
  constructor(turn, letter) {
    this.turn = turn;
    this.letter = letter;
    this.isWinner = false;
  }

  setTurn(turn) {
    this.turn = turn;
  }

  getTurn() {
    return this.turn;
  }
}
