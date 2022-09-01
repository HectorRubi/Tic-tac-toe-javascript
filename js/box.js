class Box {
  constructor(number, content, ref) {
    this.number = number;
    this.content = content;
    this.ref = ref;
  }

  getNumber() {
    return this.number;
  }

  setContent(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  isFilled() {
    return !(this.content.length === 0);
  }
}
