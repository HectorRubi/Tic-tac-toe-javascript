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
    console.log('dice', content, index);
    this.__boxList[index].mark(content);
  }

  finish() {
    this.__boxList.forEach(box => {
      box.finish();
    });
  }

  clear() {
    this.__boxList.forEach(box => {
      box.clear();
    });
  }

  getBoxListContent() {
    const boxListContent = [];
    this.__boxList.forEach(box => {
      boxListContent.push(box.getContent());
    });
    return boxListContent;
  }

  __onClickedBoard(index) {
    this.__onClickedBoardCallback(index - 1);
  }
}
