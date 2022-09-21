class Box {
  constructor(number, content, ref, onClickFn = () => {}) {
    this.number = number;
    this.content = content;
    this.ref = ref;
    this.onClickFn = onClickFn;
    this.init();
  }

  init() {
    this.ref.addEventListener('click', () => {
      this.onClick();
    });
  }

  getNumber() {
    return this.number;
  }

  getContent() {
    return this.content;
  }

  setContent(content) {
    this.content = content;
  }

  isFilled() {
    return !(this.content.length === 0);
  }

  onClick() {
    if (!this.isFilled()) {
      this.onClickFn(this.ref.dataset.index);
      this.ref.innerHTML = this.content;
    }
  }
}
