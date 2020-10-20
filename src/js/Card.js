export default class Card {
    constructor(name, link) {
        this.name = name;
        this.link = link;
        const placeList = document.querySelector('.places-list');
        placeList.addEventListener('click', this.imageHandler.bind(this));
        placeList.addEventListener('click', this.like.bind(this));
        placeList.addEventListener('click', this.remove.bind(this));
    }

    createCard(name, link) {
        const placeCard = document.createElement("div");
        placeCard.classList.add("place-card");
        placeCard.insertAdjacentHTML('afterbegin', `
        <div class="place-card__image">
            <button class="place-card__delete-icon"></button>
        </div>
        <div class="place-card__description">
        <h3 class="place-card__name"></h3>
        <button class="place-card__like-icon"></button>
        </div>`);
        placeCard.querySelector(".place-card__name").textContent = name;
        placeCard.querySelector(".place-card__image").style.backgroundImage = `url(${link})`;

        return placeCard;
    }

    updateCard(name, link) {
        return this.createCard(name, link);
    }

    imageHandler(event) {
        if (event.target.classList.contains('place-card__image')) {
            document.querySelector('.popup__image').classList.add('popup_is-opened');
            let image = event.target.style.backgroundImage.slice(5, -2);
            const imageOpened = document.querySelector(".imageOpened");
            imageOpened.setAttribute('src', image);
        }
    }

    like(event) {
        if (event.target.classList.contains('place-card__like-icon')) {
            event.target.classList.toggle('place-card__like-icon_liked');
        }

    }

    remove(event) {
        if (event.target.classList.contains('place-card__delete-icon')) {
            this.placeCard = event.target.parentElement.parentElement;
            document.querySelector('.places-list').removeChild(this.placeCard);
        }
    }
}