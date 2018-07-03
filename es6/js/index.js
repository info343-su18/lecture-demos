'use strict';

class Card {
    constructor(text){
        this.text = text; //store the text of the card
        this.clickCount = 0;
        this.cardBody = document.createElement('div');
    }

    getText() {
        return this.text;
    }

    updateText() {
        this.clickCount++;
        this.cardBody.textContent = this.text + ' x'+this.clickCount;        
    }

    //card -- draw yourself!
    render() {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.style.maxWidth = '300px';
        cardDiv.style.border = '2px solid black';

        this.cardBody.classList.add('card-body');
        this.updateText();

        cardDiv.appendChild(this.cardBody);

        //console.log(this); //refers to the card!
        cardDiv.addEventListener('click', () => this.updateText());

        return cardDiv;
    }
}

let messages = ['Hello world!', "Goodbye y'all", "silence", "...", "Bueller?"];

let cards = messages.map((msg) => new Card(msg));

console.log(cards);

let content = document.querySelector('#content');
cards.forEach((card) => content.appendChild(card.render()))


let myCard = new Card("Hello world!");
let otherCard = new Card("Goodbye y'all");

myCard.getText();

// content.appendChild(myCard.render());
// content.appendChild(otherCard.render());

// console.log(myCard.getText());

let foo = param => 'foo '+param;

let sayHello = () => console.log("Hello");