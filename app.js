let playerScore = 0
let playAgain = true
var modal = document.getElementById('modal');
let result = document.getElementById('result');
let currentQuestion = null;
let answered = false;
modal.style.visibility = "hidden"; // default visibility = false


function displayMusicQuestion() {
    let element = document.querySelectorAll("#music")
    let mus = document.querySelectorAll(".mus")

    mus.forEach((el, idx) => {

            el.onclick = function(){
                let q1 = document.getElementById("a_text")
                let q2 = document.getElementById("b_text")
                let q3 = document.getElementById("c_text")
                let q4 = document.getElementById("d_text")
                modal.style.visibility = "visible";
                console.log(musicQuestions, 'line 18')
                document.getElementById('modal-question').innerText = `${musicQuestions[idx].text}`

                q1.innerText = `${musicQuestions[idx].A}`

                q2.innerText = `${musicQuestions[idx].B}`

                q3.innerText = `${musicQuestions[idx].C}`

                q4.innerText = `${musicQuestions[idx].D}`
                
                let r1 = document.getElementById("a")
                let r2 = document.getElementById("b")
                let r3 = document.getElementById("c")
                let r4 = document.getElementById("d")
                let rArray = [r1, r2, r3, r4]

                rArray.forEach((question) => {
                    question.onclick = function() {
                        currentQuestion = question; 
                if (question.value === musicQuestions[idx].correctAnswer) {
                    result.innerText = "Correct!!!" // more lines here for correct answer?
                } else if (question.value !== musicQuestions[idx].correctAnswer) {
                    result.innerText = "Incorrect..."
                }              
            }
            })
        }
    })
}
displayMusicQuestion();

function displayMovieQuestion() {
    let element = document.querySelectorAll("#movies")
    let mov = document.querySelectorAll(".mov")

    mov.forEach((el, idx) => {
        console.log(el, idx)

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

                let r1 = document.getElementById("a")
                let r2 = document.getElementById("b")
                let r3 = document.getElementById("c")
                let r4 = document.getElementById("d")
                let rArray = [r1, r2, r3, r4]
                console.log(r4)

                rArray.forEach((question) => {
                    question.onclick = function() {
                        currentQuestion = question; 
                if (question.value === movieQuestions[idx].correctAnswer) {
                    result.innerText = "Correct!!!" // more lines here for correct answer?
                } else if (question.value !== movieQuestions[idx].correctAnswer) {
                    result.innerText = "Incorrect..."
                }  
            }
            })
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

                let r1 = document.getElementById("a")
                let r2 = document.getElementById("b")
                let r3 = document.getElementById("c")
                let r4 = document.getElementById("d")
                let rArray = [r1, r2, r3, r4]
                console.log(r4)

                rArray.forEach((question) => {
                    question.onclick = function() {
                        currentQuestion = question; 
                if (question.value === tvQuestions[idx].correctAnswer) {
                    result.innerText = "Correct!!!" // more lines here for correct answer?
                } else if (question.value !== tvQuestions[idx].correctAnswer) {
                    result.innerText = "Incorrect..."
                }  
            }
            })
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

                let r1 = document.getElementById("a")
                let r2 = document.getElementById("b")
                let r3 = document.getElementById("c")
                let r4 = document.getElementById("d")
                let rArray = [r1, r2, r3, r4]
                console.log(r4)

                rArray.forEach((question) => {
                    question.onclick = function() {
                        currentQuestion = question; 
                if (question.value === litQuestions[idx].correctAnswer) {
                    result.innerText = "Correct!!!" // more lines here for correct answer?
                } else if (question.value !== litQuestions[idx].correctAnswer) {
                    result.innerText = "Incorrect..."
                }  
            }
            })
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

                let r1 = document.getElementById("a")
                let r2 = document.getElementById("b")
                let r3 = document.getElementById("c")
                let r4 = document.getElementById("d")
                let rArray = [r1, r2, r3, r4]

                rArray.forEach((question) => {
                    question.onclick = function() {
                        currentQuestion = question; 
                if (question.value === webQuestions[idx].correctAnswer) {
                    result.innerText = "Correct!!!" // more lines here for correct answer?
                } else if (question.value !== webQuestions[idx].correctAnswer) {
                    result.innerText = "Incorrect..."
                }  
            }
            })
        }
    })
}
displayWebQuestion();

var questionBox = document.querySelectorAll('.h3');
console.log(questionBox)
questionBox.forEach(qb => {
    qb.addEventListener('click', function handleClick(event) {
        qb.remove();
      });
})
modal.onclick = function() {
        if(answered) {
            result.innerText = "";
            currentQuestion.checked = false;
            answered = false;
            modal.style.visibility = "hidden";
        } else {
            answered = true;
        }
}
// function keepScore() {
//     if(playerAnswer === question.correctAnswer){
//        playerScore = playerScore + 1
//         }
// }

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