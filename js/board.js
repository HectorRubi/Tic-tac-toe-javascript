class Board {
  constructor(boxListRef) {
    this.boxList = [];
    this.currentContent = 'O';
    this.boxListRef = Array.prototype.slice.call(document.getElementsByClassName('board__box'));
    this.fillBoxList();
  }

  setCurrentContent(currentContent) {
    this.currentContent = currentContent;
  }

  getBoxFromList(index) {
    return this.boxList[index];
  }

  boxClicked(number) {
    const box = this.getBoxFromList(number - 1);
    box.setContent(this.currentContent);
  }

  fillBoxList() {
    for (let i = 0; i < 9; i++) {
      this.boxList.push(new Box(i + 1, '', this.boxListRef[i]));
    }
  }

  getBoxListContent() {
    const boxListContent = [];
    this.boxList.forEach(box => {
      boxListContent.push(box.content);
    });
    return boxListContent;
  }
}
