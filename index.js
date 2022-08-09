
// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// // Add player details (with Object data type)
// let player = {
//     name  : Arpita,
//     chips : 145
// }
// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips;

// function getRandomCard() {
//     let randomNumer = Math.floor( Math.random()*13 ) + 1
//     if (randomNumer > 10) {
//         return 10
//     } else if (randomNumer === 1) {
//         return 11
//     } else {
//         return randomNumer
//     }
// }

// function startGame() {
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard
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
//     // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
//     if (isAlive === true && hasBlackJack === false) {
//         let card = getRandomCard()
//         sum += card
//         cards.push(card)
//         renderGame()
//     }

// }


// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let airbnbCastleListing = {
    title    : "Live like a king in my castle",
    price    : 190,
    perNight : true,
    facility : [
        "4 guests" ,
        "1 bedroom",
        "2 beds",
        "private half baths"
    ]
}

console.log(airbnbCastleListing .facility)
console.log(airbnbCastleListing .perNight)

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
    title: "Live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle1.png", "img/caste2.png"]
}

console.log(castle.price)
console.log(castle.isSuperHost)

