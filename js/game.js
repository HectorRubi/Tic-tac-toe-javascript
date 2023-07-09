class Game {
  constructor() {
    this.board = new Board();
    this.player1 = new Player();
    this.player2 = new Player();

    // True = Player 1
    // False = Player 2
    this.__turn = true;

    this.winner;
    this.winCombinations = [
      '012','345', '678',   // Horizontal
      '036', '147', '258',  // Vertical
      '048', '246'          // Diagonal
    ];
    this.printPlayer();
  }

  chooseInitialPlayer(initalPlayerValue) {
    if (initalPlayerValue === '0') {
      this.player1.letter = 'O';
      this.player2.letter = 'X';
    }

    if (initalPlayerValue === '1') {
      this.player1.letter = 'X';
      this.player2.letter = 'O';
    }
  }

  play() {
    this.board.waitingForClick(this.__playerMarkInBoard.bind(this));
  }

  __playerMarkInBoard(index) {
    // Set the right mark in board
    let content = '';
    if (this.__turn) {
      content = this.player1.letter;
    } else {
      content = this.player2.letter;
    }
    this.board.throw(content, index);

    this.__changeTurn();
    this.__validateWinner();
  }

  __changeTurn() {
    this.__turn = !this.__turn;
    this.printPlayer();
  }

  __validateWinner() {
    const boardContent = this.board.getBoxListContent();

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

    this.player1.isWinner = this.checkCombinations(movesO);
    this.player2.isWinner = this.checkCombinations(movesX);

    const winnerText = document.getElementById('winnerText');
    if (this.player1.isWinner) {
      winnerText.innerHTML = 'Player 1 is winner';
      this.winner = this.player1;
    } else if (this.player2.isWinner) {
      winnerText.innerHTML = 'Player 2 is winner';
      this.winner = this.player2;
    }

    if (this.winner) {
      this.stop();
    }
  }

  reset() {
    this.board.clear();
    this.player1.reset();
    this.player1.setTurn(true);
    this.player2.reset();
    this.__turn = true;
    this.__turnCounter = 0;
    this.winner = undefined;
    this.printPlayer();
  }

  stop() {
    this.board.finish();
    // const winnerSlide = document.getElementById('winnerSlide');
    // winnerSlide.classList.add('active');
  }

  checkCombinations(moves) {
    let isWinner = false;
    this.winCombinations.forEach(combination => {
      const combArr = combination.split('');
      if (moves.match(`(?=.*${combArr[0]})(?=.*${combArr[1]})(?=.*${combArr[2]})`)) {
        isWinner = true;
      }
    });
    return isWinner;
  }

  printPlayer() {
    const turnText = document.getElementById("turnText");
    turnText.innerHTML = this.__turn ? "Player 1" : "Player 2";
    
    const scoreTurn = document.querySelector('.score__turn');
    const scorePlayer = document.querySelector('.score__player');
    scoreTurn.style.width = `${scorePlayer.offsetWidth}px`;
    if (this.__turn) {
      scoreTurn.classList.add('score__turn--player1');
      scoreTurn.classList.remove('score__turn--player2');
    } else {
      scoreTurn.classList.add('score__turn--player2');
      scoreTurn.classList.remove('score__turn--player1');
    }
  }
}
