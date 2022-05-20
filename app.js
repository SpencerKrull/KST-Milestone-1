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

                q4.innerText = `${musicQuestions[idx].D}`
                console.log(q4)
            }
    })
}
displayMusicQuestion();

function displayMovieQuestion() {
    let element = document.querySelectorAll("#movies")
    let mov = document.querySelectorAll(".mov")
    console.log(mov)
    console.log(element)

    mov.forEach((el, idx) => {
        console.log(el, idx)
            var modal = document.getElementById("modal")

            el.onclick = function(){
                let q1 = document.getElementById("a_text")
                let q2 = document.getElementById("b_text")
                let q3 = document.getElementById("c_text")
                let q4 = document.getElementById("d_text")
                modal.style.visibility = "visible";
                document.getElementById('modal-question').innerText = `${movieQuestions[idx].text}`

                q1.innerText = `${movieQuestions[idx].A}`
                console.log(q1)

                q2.innerText = `${movieQuestions[idx].B}`
                console.log(q2)

                q3.innerText = `${movieQuestions[idx].C}`
                console.log(q3)

                q4.innerText = `${movieQuestions[idx].D}`
                console.log(q4)
            }
    })
}
displayMovieQuestion();

function displayTvQuestion() {
    let element = document.querySelectorAll("#television")
    let tv = document.querySelectorAll(".tv")
    console.log(tv)
    console.log(element)

    tv.forEach((el, idx) => {
        console.log(el, idx)
            var modal = document.getElementById("modal")

            el.onclick = function(){
                let q1 = document.getElementById("a_text")
                let q2 = document.getElementById("b_text")
                let q3 = document.getElementById("c_text")
                let q4 = document.getElementById("d_text")
                modal.style.visibility = "visible";
                document.getElementById('modal-question').innerText = `${tvQuestions[idx].text}`

                q1.innerText = `${tvQuestions[idx].A}`
                console.log(q1)

                q2.innerText = `${tvQuestions[idx].B}`
                console.log(q2)

                q3.innerText = `${tvQuestions[idx].C}`
                console.log(q3)

                q4.innerText = `${tvQuestions[idx].D}`
                console.log(q4)
            }
    })
}
displayTvQuestion();

function displayLitQuestion() {
    let element = document.querySelectorAll("#books")
    let lit = document.querySelectorAll(".lit")
    console.log(lit)
    console.log(element)

    lit.forEach((el, idx) => {
        console.log(el, idx)
            var modal = document.getElementById("modal")

            el.onclick = function(){
                let q1 = document.getElementById("a_text")
                let q2 = document.getElementById("b_text")
                let q3 = document.getElementById("c_text")
                let q4 = document.getElementById("d_text")
                modal.style.visibility = "visible";
                document.getElementById('modal-question').innerText = `${litQuestions[idx].text}`

                q1.innerText = `${litQuestions[idx].A}`
                console.log(q1)

                q2.innerText = `${litQuestions[idx].B}`
                console.log(q2)

                q3.innerText = `${litQuestions[idx].C}`
                console.log(q3)

                q4.innerText = `${litQuestions[idx].D}`
                console.log(q4)
            }
    })
}
displayLitQuestion();

function displayWebQuestion() {
    let element = document.querySelectorAll("#internet")
    let web = document.querySelectorAll(".web")
    console.log(web)
    console.log(element)

    web.forEach((el, idx) => {
        console.log(el, idx)
            var modal = document.getElementById("modal")

            el.onclick = function(){
                let q1 = document.getElementById("a_text")
                let q2 = document.getElementById("b_text")
                let q3 = document.getElementById("c_text")
                let q4 = document.getElementById("d_text")
                modal.style.visibility = "visible";
                document.getElementById('modal-question').innerText = `${webQuestions[idx].text}`

                q1.innerText = `${webQuestions[idx].A}`
                console.log(q1)

                q2.innerText = `${webQuestions[idx].B}`
                console.log(q2)

                q3.innerText = `${webQuestions[idx].C}`
                console.log(q3)

                q4.innerText = `${webQuestions[idx].D}`
                console.log(q4)
            }
    })
}
displayWebQuestion();

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