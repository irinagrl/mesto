import UserInfo from './UserInfo.js';

export default class Api {
    constructor(options) {
        this.options = options;
        this.userInfo = new UserInfo('.profile');
    }

    getUserInfo() {
        return fetch(`${this.options.baseUrl}/users/me`, {
            headers: this.options.headers
        })

            .then((res) => {
                if (!res.ok) {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
                return res.json();
            })
    }

    getCards() {
        return fetch(`${this.options.baseUrl}/cards`, {
            headers: this.options.headers
        })
            .then((res) => {
                if (!res.ok) {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
                return res.json();
            })
    }

    editUserInfo(username, aboutUser) {
        return fetch('http://nomoreparties.co/cohort7/users/me', {
            method: 'PATCH',
            headers: {
                authorization: '6f6ef78e-9a11-4731-8716-e6c213c6ad6a',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: username,
                about: aboutUser
            })
        })
            .then((res) => {
                if (!res.ok) {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
                return res.json();
            })
    }
}  
