class Player {
  constructor(turn, letter) {
    this.turn = turn;
    this.letter = letter;
  }

  setTurn(turn) {
    this.turn = turn;
  }

  getTurn() {
    return this.turn;
  }
}
