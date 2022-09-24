class Box {
  constructor(number, ref, onClickFn = () => {}) {
    this.number = number;
    this.content = '';
    this.ref = ref;
    this.onClickFn = onClickFn;
    this.onClickHandler = () => {};
    this.init();
  }

  init() {
    this.onClickHandler = this.onClick.bind(this);
    this.ref.addEventListener('click', this.onClickHandler, true);
  }

  finish() {
    this.ref.removeEventListener('click', this.onClickHandler, true);
  }

  clear() {
    this.ref.innerHTML = '';
    this.content = '';
    this.init();
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
