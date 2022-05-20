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
                let q1 = document.getElementById("a_text")
                let q2 = document.getElementById("b_text")
                let q3 = document.getElementById("c_text")
                let q4 = document.getElementById("d_text")
                modal.style.visibility = "visible";
                document.getElementById('modal-question').innerText = `${musicQuestions[idx].text}`

                q1.innerText = `${musicQuestions[idx].A}`
                console.log(q1)

                q2.innerText = `${musicQuestions[idx].B}`
                console.log(q2)

                q3.innerText = `${musicQuestions[idx].C}`
                console.log(q3)

                q4.innerText = `${musicQuestions[idx].B}`
                console.log(q4)

                // document.getElementById("b").innerHTML = `${musicQuestions[idx].B}`

                

                // document.getElementById("c").innerHTML = `${musicQuestions[idx].C}`
                // document.getElementById("d").innerHTML = `${musicQuestions[idx].D}`
            }
    
    })
}
displayMusicQuestion();

// while (playAgain === true) {
//     playGame()
//     let userChoice = window.prompt('Would you like to play again?')
//     if(userChoice === 'yes'){
//         playAgain = true
//     } else {
//         playAgain = false
//         window.alert('Thanks for playing the game')
//     }
// }