// add event listeners for clicking each box
// let player1 = window.prompt('Player 1, enter your name:')
// let player2 = window.prompt('Player 2, enter your name:')
let score1 = 0
let score2 = 0
let playAgain = true
document.getElementById("modal").style.visibility = "hidden"; // default visibility = false

// add buttons for multiple choice questions in each box, random for each, maybe 20-30 questions per main categories (not random)

function displayMusicQuestion() {
    let element = document.querySelectorAll("#music")
    let mus = document.querySelectorAll(".mus")
    console.log(mus)
    console.log(element)
    mus.forEach((el, idx) => {
        console.log(el, idx)
            var modal = document.getElementById("modal")

            el.onclick = function(){
                modal.style.visibility = "visible";
                document.getElementById('modal-question').innerText = `${musicQuestions[idx].text}`
            }
                  
    })
}
displayMusicQuestion();