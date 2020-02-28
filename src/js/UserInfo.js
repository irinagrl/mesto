export default class UserInfo {
    constructor(element) {
        this.element = element;
    }

    setInputValue(username, aboutUser) {
        const userInfoName = document.querySelector(".user-info__name");
        const userInfoJob = document.querySelector(".user-info__job");
        username.value = userInfoName.textContent;
        aboutUser.value = userInfoJob.textContent;
    }

    setUserInfo(username, aboutUser) {
        const userInfoName = document.querySelector(".user-info__name");
        const userInfoJob = document.querySelector(".user-info__job");
        username.value = userInfoName.textContent;
        aboutUser.value = userInfoJob.textContent;
    }

    updateUserInfo() {
        const username = document.querySelector('.popup__input_username');
        const aboutUser = document.querySelector('.popup__input_aboutUser');
        const userInfoName = document.querySelector(".user-info__name");
        const userInfoJob = document.querySelector(".user-info__job");
        userInfoName.textContent = username.value;
        userInfoJob.textContent = aboutUser.value;
        return this.setUserInfo;
    }
}