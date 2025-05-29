export default class Popup {
  constructor({ popupSelector }) {
    this._element = document.querySelector(popupSelector);
    this._popupCloseBtn = this._element.querySelector(".popup__close");
    // because it is within the element
  }
  open() {
    this._element.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }
  close() {
    this._element.classList.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscapeClose);
  }
  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    // after the mousedown listener, delete this one because it will do both
    // this._popupCloseBtn.addEventListener("click", () => {
    //   this.close();
    // });

    this._element.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup__close") ||
        evt.target.classList.contains("popup")
      ) {
        this.close();
      }
    });
  }
}

// only instantiate the child PopupWithForm class in index.js
