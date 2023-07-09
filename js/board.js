class Board {
  constructor() {
    this.__boxList = [];
    this.__onClickedBoardCallback = () => {};
    
    const boxListRef = Array.prototype.slice.call(document.querySelectorAll('.board__box'));
    for (let i = 0; i < 9; i++) {
      this.__boxList.push(new Box(boxListRef[i], this.__onClickedBoard.bind(this)));
    }
  }

  waitingForClick(callback) {
    this.__onClickedBoardCallback = callback;
  }

  throw(content, index) {
    this.__boxList[index].mark(content);
  }

  getBoardContent() {
    const boardContent = [];
    this.__boxList.forEach(box => {
      boardContent.push(box.getContent());
    });
    return boardContent;
  }

  finish() {
    this.__boxList.forEach(box => {
      box.removeListener();
    });
  }

  reset() {
    this.__boxList.forEach(box => {
      box.reset();
    });
  }

  __onClickedBoard(index) {
    this.__onClickedBoardCallback(index - 1);
  }
}
