class Board {
  constructor() {
    this.boxList = [];
    for (let i = 0; i < 9; i++) {
      this.boxList.push(new Box(i + 1, ""));
    }
  }
}
