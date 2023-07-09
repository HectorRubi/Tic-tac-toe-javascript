class Game {
  constructor() {
    this.board = new Board();
    this.player1 = new Player();
    this.player2 = new Player();

    // True = Player 1
    // False = Player 2
    this.__turn = true;
    this.__winner = null;
  }

  chooseInitialPlayer(initalPlayerValue) {
    let turn = '';
    if (initalPlayerValue === '0') {
      this.player1.letter = 'O';
      this.player2.letter = 'X';
      turn = 'score__turn--player1';
    }

    if (initalPlayerValue === '1') {
      this.player1.letter = 'X';
      this.player2.letter = 'O';
      turn = 'score__turn--player2';
    }

    const scoreTurn = document.querySelector('.score__turn');
    scoreTurn.classList.add(turn);
  }

  play() {
    this.board.waitingForClick(this.__playerMarkInBoard.bind(this));
  }

  reset() {
    this.board.reset();
    this.player1.reset();
    this.player2.reset();
    this.__winner = null;
  }

  __playerMarkInBoard(index) {
    this.__markBoard(index);
    this.__changeTurn();
    this.__validateWinner();
  }

  __markBoard(index) {
    let content = '';
    if (this.__turn) {
      content = this.player1.letter;
    } else {
      content = this.player2.letter;
    }
    this.board.throw(content, index);
  }

  __changeTurn() {
    this.__turn = !this.__turn;
    this.__moveScorePlayerLine();
  }

  __moveScorePlayerLine() {
    const scoreTurn = document.querySelector('.score__turn');

    if (scoreTurn.classList.contains('score__turn--player1')) {
      scoreTurn.classList.remove('score__turn--player1');
      scoreTurn.classList.add('score__turn--player2');
    } else {
      scoreTurn.classList.remove('score__turn--player2');
      scoreTurn.classList.add('score__turn--player1');
    }
  }

  __validateWinner() {
    const boardContent = this.board.getBoardContent();

    let movesO = '';
    let movesX = '';

    boardContent.forEach((boxContent, index) => {
      if (boxContent === 'O') {
        movesO += index.toString();
      }
      if (boxContent === 'X') {
        movesX += index.toString();
      }
    });

    this.player1.isWinner = this.__checkCombinations(movesO);
    this.player2.isWinner = this.__checkCombinations(movesX);

    if (this.player1.isWinner) {
      console.log('Player 1 is winner');
      this.__winner = this.player1;
    } else if (this.player2.isWinner) {
      console.log('Player 2 is winner');
      this.__winner = this.player2;
    }

    if (this.__winner) {
      this.__gameOver();
    }
  }

  __checkCombinations(moves) {
    let isWinner = false;
    const winCombinations = [
      '012','345', '678',   // Horizontal
      '036', '147', '258',  // Vertical
      '048', '246'          // Diagonal
    ];
    winCombinations.forEach(combination => {
      const combArr = combination.split('');
      if (moves.match(`(?=.*${combArr[0]})(?=.*${combArr[1]})(?=.*${combArr[2]})`)) {
        isWinner = true;
      }
    });
    return isWinner;
  }

  __gameOver() {
    this.board.finish();
    // TODO: Show animation if is a winner or if is due game
  }
}
