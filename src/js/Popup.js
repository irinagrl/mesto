import UserInfo from './UserInfo.js';

export default class Popup {
    constructor(popup, open, close) {
        this.popup = popup;
        this.popupOpen = open;
        this.popupClose = close;
        this.userInfo = new UserInfo();
        this.popupOpen.addEventListener('click', this.open.bind(this));
        this.popupClose.addEventListener('click', this.close.bind(this));
    }
    open(event) {
        if (event.target.classList.contains('button') || event.target.classList.contains('place-card__image'))
        this.popup.classList.add('popup_is-opened');
        this.userInfo.setInputValue(username, aboutUser);
    }
    close() {
        this.popup.classList.remove('popup_is-opened');
    }
}