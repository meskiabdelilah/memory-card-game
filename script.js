const boardGame = document.querySelector("#game-board");
const coupsElement = document.querySelector("#coups");
const pairesElement = document.querySelector("paires");
const btnRestart = document.querySelector("#btn-restart");
const messageVictoire = document.querySelector("#message-victoire");

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