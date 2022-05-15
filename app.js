// add event listeners for clicking each box
// let player1 = window.prompt('Player 1, enter your name:')
// let player2 = window.prompt('Player 2, enter your name:')
let score1 = 0
let score2 = 0
let playAgain = true

// add buttons for multiple choice questions in each box, random for each, maybe 20-30 questions per main categories (not random)

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array; used to randomize the questions on the grid. For loops iterates through the randomized questions, while math.floor rounds the integers down in the array so that math.random can assign the number in the array to the questions.
function random(a) {
    var j, x, i;
    for (i = a.length; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}



// for correct answers, add marker to space; incorrect, allow player to steal; return to regular space if both wrong

// xxx player wins

// scorecard for whoever has most squares