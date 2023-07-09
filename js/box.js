class Box {
  constructor(reference, callback) {
    this.__content = null;
    this.__element = reference;
    this.__onClickCallback = callback;
    this.__onClickHandler = this.__onClick.bind(this);
    this.__element.addEventListener('click', this.__onClickHandler, true);
  }

  mark(content) {
    this.__element.innerHTML = content;
    this.__content = content;
  }

  getContent() {
    return this.__content;
  }

  finish() {
    this.__element.removeEventListener('click', this.__onClickHandler, true);
  }

  clear() {
    this.__element.innerHTML = '';
    this.__content = null;
    this.init();
  }

  getNumber() {
    return this.number;
  }

  __isFilled() {
    return this.__content !== null;
  }

  __onClick() {
    if (!this.__isFilled()) {
      this.__onClickCallback(this.__element.dataset.index);
    }
  }
}
