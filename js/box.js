class Box {
  constructor(reference, callback) {
    this.__content = null;
    this.__element = reference;
    this.__onClickCallback = callback;
    this.__onClickHandler = this.__onClick.bind(this);
    this.__addListener();
  }

  mark(content) {
    this.__content = content;

    let data = '';
    if (content === 'X') {
      data = './assets/icons/cross.svg';
    } else {
      data = './assets/icons/circle_light.svg';
    }

    const object = document.createElement('object');
    object.type = 'image/svg+xml';
    object.data = data;

    this.__element.appendChild(object);
  }

  getContent() {
    return this.__content;
  }

  removeListener() {
    this.__element.removeEventListener('click', this.__onClickHandler, true);
  }

  reset() {
    this.__element.innerHTML = '';
    this.__content = null;
    this.__addListener();
  }
  
  __addListener() {
    this.__element.addEventListener('click', this.__onClickHandler, true);
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
