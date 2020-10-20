export default class CardList {
    constructor(placesList) {
            this.placesList = placesList;
            this.arrayCards = [];
            this.card = new Card();
        }
        // render() {
        //     initialCards.forEach((element) => this.addCard(element.name, element.link));

    // }
    // addCard(name, link) {
    //     const placesList = document.querySelector('.places-list');
    //     placesList.appendChild(this.card.updateCard(name, link));
    //     this.card.updateCard(name, link);
    // }


    // updateCard(name, link) {
    //     return this.createCard(name, link);
    // }
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
}