// add event listeners for clicking each box
// let player1 = window.prompt('Player 1, enter your name:')
// let player2 = window.prompt('Player 2, enter your name:')
let score1 = 0
let score2 = 0
let playAgain = true
document.getElementById("modal").style.visibility = "hidden"; // default visibility = false

// add buttons for multiple choice questions in each box, random for each, maybe 20-30 questions per main categories (not random)

function displayQuestion() {
    let element = document.querySelectorAll("#music")
    element.forEach(el => {
            var modal = document.getElementById("modal")
            document.getElementById('modal-question').innerText = "" // this will be replaced by question from bank
            el.onclick = function(){
                modal.style.visibility = "visible";
            }

    })
}
displayQuestion();


// for correct answers, add marker to space; incorrect, allow player to steal; return to regular space if both wrong

// xxx player wins

// scorecard for whoever has most squares