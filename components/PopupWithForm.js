import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handFormSubmit }) {
    super({ popupSelector });
  }
}
