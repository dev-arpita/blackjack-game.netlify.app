// let firstCard = 10
// let secondCard = 4
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

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
//     let card = 6
//     sum += card
//     // Push the card to the cards array
//     cards.push(card)
//     console.log(cards)
//     renderGame()
// }

let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out
function getTotalRaceTime() {
    return player1Time + player2Time
}

let totalRaceTime = getTotalRaceTime();
console.log(totalRaceTime);
