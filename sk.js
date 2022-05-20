/* Assining Buttons */
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')
/*  Assgning Span */
const p1Display = document.querySelector('#p1Score')
const p2Display = document.querySelector('#p2Score')
/* Counting Score */
let p1Score = 0
let p2Score = 0
const winningScore = 3;
let isGameOver = false;

/* Button Function to Update Score*/
p1Button.addEventListener('click', function(){
    if(!isGameOver){
        p1Score +=1;
        if(p1Score === winningScore){
            isGameOver = true;
        }
        p1Display.textContent= p1Score;
    }
})

p2Button.addEventListener('click', function(){
    if(!isGameOver){
        p2Score +=1;
        if(p2Score === winningScore){
            isGameOver = true;
        }
        p2Display.textContent= p2Score;
    }
})
/* Function to Detect the Change in Select Button */
winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value); /* this.value will give the current value of your winning score */
})
/* Reset Button Function */
resetButton.addEventListener('click', function(){
    p1Score=0
    p2Score=0
    p1Display.textContent=0
    p2Display.textContent=0
})


