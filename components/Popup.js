export default class Popup {
  constructor({ popupSelector }) {
    this._element = document.querySelector(popupSelector);
    this._popupCloseBtn = this._element.querySelector(".popup__close");
    // because it is within the element
  }
  open() {
    this._element.classList.add("popup_visible");
  }
  close() {
    this._element.classList.remove("popup_visible");
  }
  _handleEscapeClose() {
    // logic for the escape key
  }
  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });
  }
  // TODO - when user clicks outside of the popup it should close as well
}

// only instantiate the child PopupWithForm class in index.js
