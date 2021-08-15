let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard ;
let hasBlackJack = false;
let isAlive = true;
let message = " ";
let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")
console.log(cardsEl);
function startGame() {
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = "cards: " + firstCard + " " +secondCard
    sumEl.textContent = " Sum: "+ sum;
    if (sum <= 20) {
        message ="Do you want to draw a new card?" ;
    } else if (sum === 21) {
        message = "You've got Blackjack!" ;
        hasBlackJack = true
    } else {
        message = "You're out of the game!" ;
        isAlive = false
    }
   messageEl.textContent = message;
}

startGame();