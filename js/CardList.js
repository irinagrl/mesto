'use strict';

class CardList {
    constructor(placesList) {
        this.placesList = placesList;
        this.arrayCards = [];
        this.card = new Card();
    }

    addCard(name, link) {
        const placesList = document.querySelector('.places-list');
        placesList.appendChild(this.card.updateCard(name, link));
        this.card.updateCard(name,link);
    }

    render() {
        initialCards.forEach((element) => this.addCard(element.name, element.link));

    }
}