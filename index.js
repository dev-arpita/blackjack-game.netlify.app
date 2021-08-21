// // 2. Use getRandomCard() to set the values of firstCard and secondCard
// let firstCard =  getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// // 1. Create a function, getRandomCard(), that always returns the number 5
// function getRandomCard() {
//     return 5;
   
// }

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: "
//     // Create a for loop that renders out all the cards instead of just two
//     for (let i = 0; i < cards.length; i++) {
//         console.log( cards[i]);
//         cardsEl.textContent += cards[i] + " "
//     }
    
//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackJack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }


// function newCard() {
//     // 3. Use the getRandomCard() to set the value of card
//     let card = getRandomCard()
//     sum += card
//     // Push the card to the cards array
//     cards.push(card)
//     console.log(cards)
//     renderGame()
// }
// Try to modify the expression so that we get a range from 1 to 6
let randomNumber = Math.floor(Math.random()*6 ) + 1 ;

console.log(randomNumber);
// Create a function, rollDice(), that returns a random number between 1 and 6
function rollDice() {
    let randomNumber = Math.floor(Math.random()*6 ) + 1 ;

    return randomNumber;    
}