class Player {
  constructor(letter) {
    this.turn = false;
    this.letter = letter;
    this.isWinner = false;
  }

  setTurn(turn) {
    this.turn = turn;
  }

  getTurn() {
    return this.turn;
  }

  reset() {
    this.isWinner = false;
    this.turn = false;
  }
}
