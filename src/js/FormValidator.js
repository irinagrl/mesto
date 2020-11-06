import Api from './Api.js';
import UserInfo from './UserInfo.js';

export default class FormValidator {
    constructor(element) {
        this.element = element;
        const edit = document.forms.edit;
        this.api = new Api();
        const userInfo = new UserInfo('.profile');
        this.userInfo = userInfo;
        edit.addEventListener('input', this.handleValidate.bind(this));
        edit.addEventListener('input', this.inputEditHandler.bind(this));
        edit.addEventListener('submit', this.setSubmitButtonState.bind(this));
    }

    checkInputValidity(element) {
        const errorElement = document.querySelector(`#error-${element.id}`);

        this.resetError(errorElement);

        if (element.validity.valueMissing) {
            const errorMessage = "Это обязательное поле";
            errorElement.textContent = errorMessage;
            this.activateError(errorElement);
            return false;
        } if (element.validity.tooShort || element.validity.tooLong) {
            const errorMessage = "Должно быть от 2 до 30 символов";
            errorElement.textContent = errorMessage;
            this.activateError(errorElement);
            return false;
        } if (element.validity.typeMismatch) {
            const errorMessage = "Здесь должна быть ссылка";
            errorElement.textContent = errorMessage;
            this.activateError(errorElement);
            return false;
        } {
            return true;
        }
    }

    activateError(element) {
        element.parentNode.classList.add('input-container__invalid');
    }

    resetError(element) {
        element.parentNode.classList.remove('input-container__invalid');
        element.textContent = '';
    }

    inputEditHandler(inputs) {
        const popupEditButton = document.querySelector('.popup__edit_button');

        if (Array.from(inputs).every((input) => this.checkInputValidity(input))) {
            popupEditButton.removeAttribute('disabled');
            popupEditButton.classList.remove('popup__edit_button-disabled');
        } else {
            popupEditButton.setAttribute('disabled', true);
            popupEditButton.classList.add('popup__edit_button-disabled');
        }
    }

    setSubmitButtonState(inputs) {
        event.preventDefault();
        const submit = document.querySelector('#submit');

        const isValidForm = Array.from(inputs).every((input) => this.checkInputValidity(input));

        [inputs].forEach(element => {

            if (element.type != submit.type) {
                if (!this.checkInputValidity(element)) isValidForm = false;
            }
        });

        if (isValidForm) {
            this.api.editUserInfo(username.value, aboutUser.value)
                .then((result) => {
                    this.userInfo.updateUserInfo(result);
                    document.querySelector('.popup__edit').classList.remove('popup_is-opened')
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    handleValidate(event) {
        this.checkInputValidity(event.target);
    }

}