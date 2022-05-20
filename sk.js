
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Score')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Score')
}

/* Assigning Buttons */
const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')

let winningScore = 1;
let isGameOver = false;

/* Function to Update Scores */
function updateScores(player, opponent){
    if(!isGameOver){
        player.score +=1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('winner')
            opponent.display.classList.add('loser')
        }
        player.display.textContent= player.score;
    }
}


/* Button Function to Update Score*/
p1.button.addEventListener('click', function(){

    updateScores(p1, p2)
})

p2.button.addEventListener('click', function(){

    updateScores(p2, p1)
})


/* Function to Detect the Change in Select Button */
winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value); /* this.value will give the current the select button (winningScoreSelect) */
    reset()
})

/* Reset Button Function */
resetButton.addEventListener('click', reset)

/* Reset Function */
function reset(){
    isGameOver = false
    for(let p of [p1, p2]){
        p.score = 0
        p.display.textContent = 0
        p.display.classList.remove('winner', 'loser')
    }
    
    // p1.score=0
    // p2.score=0
    // p1.display.textContent=0
    // p2.display.textContent=0
    // isGameOver = false
    // p1.display.classList.remove('winner', 'loser')
    // p2.display.classList.remove('winner','loser')
}
