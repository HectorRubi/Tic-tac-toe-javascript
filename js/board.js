class Board {
  constructor(boxListRef) {
    this.boxList = [];
    this.currentContent = 'O';
    this.boxListRef = boxListRef;
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
}
