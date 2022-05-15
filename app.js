// add event listeners for clicking each box
// let player1 = window.prompt('Player 1, enter your name:')
// let player2 = window.prompt('Player 2, enter your name:')
let score1 = 0
let score2 = 0
let playAgain = true

// add buttons for multiple choice questions in each box, random for each, maybe 20-30 questions per main categories (not random)

let element = document.querySelectorAll(".music .a")
element.forEach(el => {
    el.addEventListener('click', () => {
        console.log("hi")
    })
});



// for correct answers, add marker to space; incorrect, allow player to steal; return to regular space if both wrong

// xxx player wins

// scorecard for whoever has most squares