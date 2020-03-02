export default class FormValidatorImg {
  constructor(cardlist,element) {
    this.element = element;
    const form = document.forms.newform;
    this.cardlist = cardlist;
    form.addEventListener('input', this.handleValidateImg.bind(this));
    form.addEventListener('input', this.inputEditHandlerImg.bind(this));
    form.addEventListener('submit', this.setSubmitButtonStateImg.bind(this));
  }

  checkInputValidityImg(element) {
    const errorElement = document.querySelector(`#error-${element.id}`);

    this.resetErrorImg(errorElement);

    if (element.validity.valueMissing) {
      const errorMessage = "Это обязательное поле";
      errorElement.textContent = errorMessage;
      this.activateErrorImg(errorElement);
      return false;
    } if (element.validity.tooShort || element.validity.tooLong) {
      const errorMessage = "Должно быть от 2 до 30 символов";
      errorElement.textContent = errorMessage;
      this.activateErrorImg(errorElement);
      return false;
    } if (element.validity.typeMismatch) {
      const errorMessage = "Здесь должна быть ссылка";
      errorElement.textContent = errorMessage;
      this.activateErrorImg(errorElement);
      return false;
    } {
      return true;
    }
  }

  activateErrorImg(element) {
    element.parentNode.classList.add('input-container__invalid');
  }

  resetErrorImg(element) {
    element.parentNode.classList.remove('input-container__invalid');
    element.textContent = '';
  }

  inputEditHandlerImg(inputs) {
    const popupButton = document.querySelector('.popup__button');

    if (Array.from(inputs).every((input) => this.checkInputValidityImg(input))) {
      popupButton.removeAttribute('disabled');
      popupButton.classList.remove('popup__button_disabled');
    } else {
      popupButton.setAttribute('disabled', true);
      popupButton.classList.add('popup__button_disabled');
    }
  }

  setSubmitButtonStateImg(inputs) {
    event.preventDefault();

    const inputsImg = document.querySelectorAll('.popup__input');

    const isValidForm = Array.from(inputs).every((input) => this.checkInputValidityImg(input))
    inputsImg.forEach((elem) => {

      if (elem.type != submit.type) {
        if (!this.checkInputValidityImg(elem)) isValidForm = false;
      }
    });

    if (isValidForm) {
      this.cardlist.addCard(newform.elements.name.value, newform.elements.link.value);
      document.querySelector('.popup').classList.remove('popup_is-opened');
    }

  }

  handleValidateImg(event) {
    this.checkInputValidityImg(event.target);
  }

}