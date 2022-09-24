class Board {
  constructor() {
    this.boxList = [];
    this.currentContent = 'O';
    this.boxListRef = Array.prototype.slice.call(document.getElementsByClassName('board__box'));
    this.onBoxClickedFn;
    this.init();
  }

  init() {
    for (let i = 0; i < 9; i++) {
      this.boxList.push(new Box(i + 1, this.boxListRef[i], this.onBoxClicked.bind(this)));
    }
  }

  finish() {
    this.boxList.forEach(box => {
      box.finish();
    });
  }

  clear() {
    this.boxList.forEach(box => {
      box.clear();
    });
    this.currentContent = 'O';
  }

  setCurrentContent(currentContent) {
    this.currentContent = currentContent;
  }

  setOnBoxClickedFn(onBoxClickedFn) {
    this.onBoxClickedFn = onBoxClickedFn;
  }

  getBoxFromList(index) {
    return this.boxList[index];
  }

  getBoxListContent() {
    const boxListContent = [];
    this.boxList.forEach(box => {
      boxListContent.push(box.content);
    });
    return boxListContent;
  }

  onBoxClicked(number) {
    const box = this.getBoxFromList(number - 1);
    box.setContent(this.currentContent);
    this.onBoxClickedFn();
  }
}
