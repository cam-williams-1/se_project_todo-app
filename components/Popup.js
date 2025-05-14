export default class Popup {
  constructor({ popupSelector }) {
    this._element = document.querySelector(popupSelector);
    console.log(this._element);
  }
  open() {
    //
  }
  close() {
    //
  }
  _handleEscapeClose() {
    // logic for the escape key
  }
  setEventListeners() {}
}

// only instantiate the child PopupWithForm class in index.js
