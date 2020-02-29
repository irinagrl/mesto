import Api from './js/Api.js';
import CardList from './js/CardList.js';
import FormValidator from './js/FormValidator.js';
import FormValidatorImg from './js/FormValidatorImg.js';
import Popup from './js/Popup.js';
import UserInfo from './js/UserInfo.js';

import './style.css';

import './images/avatar.jpg';
import './images/like-active.svg';
import './images/like-inactive.svg';
import './images/close.svg';
import './images/logo.svg';

(function () {

  const cardlist = new CardList();
  const container = '';
  const cards = [];
  cardlist.render(container, cards);

  const userInfo = new UserInfo('.profile');
  const serverUrl = NODE_ENV === "development" ? "http://praktikum.tk/cohort7" : "https://praktikum.tk/cohort7";
  const api = new Api({
    baseUrl: serverUrl,
    headers: {
      authorization: '6f6ef78e-9a11-4731-8716-e6c213c6ad6a',
      'Content-Type': 'application/json'
    }
  });

  const validatorUserInfo = new FormValidator(api);
  const validatorImage = new FormValidatorImg(cardlist);

  const popupCard = document.querySelector('.popup');
  const infoButton = document.querySelector('.user-info__button');
  const popupCardClose = document.querySelector('.popup__close');
  const popupCardOpen = new Popup(popupCard, infoButton, popupCardClose);

  const popupEdit = document.querySelector('.popup__edit');
  const editButton = document.querySelector('.user-info__edit');
  const popupEditClose = document.querySelector('.popup__close_edit');
  const popupEditOpen = new Popup(popupEdit, editButton, popupEditClose);

  const popupImage = document.querySelector('.popup__image');
  const placeCardOpen = document.querySelector('.place-card__image');
  const popupImageClose = document.querySelector('.popup__close_image');
  const popupImageOpen = new Popup(popupImage, placeCardOpen, popupImageClose);

  api.getUserInfo()
    .then((data) => {
      const avatarElement = document.querySelector('.user-info__photo');
      const usernameElement = document.querySelector('.user-info__name');
      const aboutUserElement = document.querySelector('.user-info__job');
      avatarElement.style.backgroundImage = `url(${data.avatar})`;
      usernameElement.textContent = data.name;
      aboutUserElement.textContent = data.about;
    })
    .catch((err) => {
      console.log(err);
    });

  api.getCards()
    .then((cards) => {
      cards.forEach((element) => cardlist.addCard(element.name, element.link));
    })
    .catch((err) => console.log(err));

}());