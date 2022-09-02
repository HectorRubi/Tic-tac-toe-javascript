class Game {
  constructor(board, player1, player2) {
    this.board = board;
    this.player1 = player1;
    this.player2 = player2;
    this.turn = true;
    this.count = 0;
    this.winCombinations = [
      '012','345', '678',   // Horizontal
      '036', '147', '258',  // Vertical
      '048', '246'          // Diagonal
    ];
    this.winner;
  }

  changeTurn(number) {
    this.count += 1;
    this.player1.setTurn(!this.player1.getTurn());
    this.player2.setTurn(!this.player2.getTurn());

    this.turn = !this.turn;
    this.printPlayer();

    this.board.boxClicked(number);
    this.board.setCurrentContent(this.turn ? "O" : "X");
    if (this.count > 4) {
      this.validateWinner();
    }
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
      box.ref.addEventListener('click', () => {
        this.onBoxClick(box);
      });
    });
  }

  stop() {}

  printPlayer() {
    const turnText = document.getElementById("turnText");
    turnText.innerHTML = this.turn ? "Player 1" : "Player 2";
  }

  validateWinner() {
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
}
