// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function getRandomCard() {
//     let  randomNumber = Math.floor(Math.random() * 13 ) + 1
//    if (randomNumber > 10) {
//        return 10
//    }else if (randomNumber === 1) {
//     return 11
//    }else {
//        return randomNumber
//    }
// }


// function startGame() {
//     isAlive = true
//     // Generate two random numbes
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     // Re-assign the cards and sum variables so that the game can start
//     let cards = [firstCard, secondCard]
//     let sum = firstCard + secondCard
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: "
//     for (let i = 0; i < cards.length; i++) {
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
    // let card = getRandomCard()
//     sum += card
//     cards.push(card)
//     renderGame()
// }


//logical OR operator:
// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = true
let likesStartups = true

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}
