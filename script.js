const boardGame = document.querySelector("#game-board");
const coupsElement = document.querySelector("#coups");
const pairesElement = document.querySelector("#paires");
const btnRestart = document.querySelector("#btn-restart");
const messageVictoire = document.querySelector("#message-victoire");

let flippedCards = [];

const images = [
    "images/img1.png",
    "images/img2.png",
    "images/img3.png",
    "images/img4.png",
    "images/img5.png",
    "images/img6.png",
];

// Doubler le tableau images pour obtenir 12 cartes (6 paires)
let cardsData = [...images, ...images];

// Fonction pour mélanger un tableau de manière aléatoire
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
// console.log(shuffle(cardsData));


function flipCard(event)
{
    const clickedCard = event.target.closest('.card');

    if (clickedCard.classList.contains('flipped') || flippedCards.length === 2) {
        return;
    }
    clickedCard.classList.add('flipped');
    flippedCards.push(clickedCard);

    if (flippedCards.length === 2) {
        const img1 = flippedCards[0].querySelector('img').src;
        const img2 = flippedCards[1].querySelector('img').src;
        if (img1 === img2) {
            flippedCards = [];
        }else {
            setTimeout(()=> { 
            flippedCards[0].classList.remove('flipped')
            flippedCards[1].classList.remove('flipped')
            flippedCards = [];
            },1000)
        }
    }
}


function createBoard()
{
    boardGame.innerHTML = '';
    const shuffleCards = shuffle([...cardsData]);
    shuffleCards.forEach(cardImage => {
        // creer le div de card
        const card = document.createElement('div');
        card.classList.add('card');
        
        const cardImg = document.createElement('img');
        cardImg.src = cardImage;
        
        card.appendChild(cardImg);
        boardGame.appendChild(card);
        card.addEventListener('click', flipCard);
    });
}

createBoard();