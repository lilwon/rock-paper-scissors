// trying to test global variables
var playerCount = 0;
var compCount = 0;

function computerPlay() {
    let action = Math.floor((Math.random() * 3) + 1); 
    switch(action) {
        case 1:
            return "rock"; 
            break;

        case 2:
            return "paper";
            break;
        
        case 3:
            return "scissors";
            break;
    }
}

function playRound() {
    // when a player picks one of the buttons...
    const computerSelection = computerPlay();
    const playerSelection = this.id;
    
    if ( playerSelection === "rock" ) {
        if ( computerSelection === "paper" ) {
            compCount++; 
            document.getElementById("response").innerHTML = "You Lose! Paper beats Rock"; 
        }
        else if ( computerSelection === "scissors") { 
            playerCount++;
            document.getElementById("response").innerHTML = "You Win! Rock beats Scissors";
        }
        else { 
            document.getElementById("response").innerHTML = "You Tie! Rock against Rock";
        }
    }
    else if ( playerSelection === "paper" ) {
        if ( computerSelection === "scissors" ) {
            compCount++;
            document.getElementById("response").innerHTML = "You Lose! Scissors beats Paper"; 
        } 
        else if ( computerSelection === "rock") { 
            playerCount++;
            document.getElementById("response").innerHTML = "You Win! Paper beats Rock";
        } 
        else {
            document.getElementById("response").innerHTML = "You Tie! Paper against Paper";
        }
    }
    else if ( playerSelection === "scissors") {
        if ( computerSelection === "rock" ) { 
            compCount++;
            document.getElementById("response").innerHTML = "You Lose! Rock beats Scissors";
        } 
        else if ( computerSelection === "paper") { 
            playerCount++; 
            document.getElementById("response").innerHTML = "You Win! Scissors beats Paper";
        }
        else { 
            document.getElementById("response").innerHTML = "You Tie! Scissors against Scissors";
        } 
    }
    else {
        document.getElementById("response").innerHTML = "Not a correct value"; 
    }

    checkWinner();
}

function checkWinner() {
    if (playerCount === 5 ) {
        document.getElementById("score").innerHTML = "You beat the computer!";
        // reset the counts
        playerCount = 0; 
        compCount = 0;
    } else if ( compCount === 5) {
        document.getElementById("score").innerHTML = "The computer beat you!";
        playerCount = 0; 
        compCount = 0; 
    } else {
        // display the scores
        document.getElementById("score").innerHTML =
            `Current Score: ${playerCount}-${compCount}`; 
    }
}

const rockBtn= document.querySelector('#rock');
rockBtn.addEventListener('click', playRound);  

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', playRound );

const scisBtn = document.querySelector('#scissors');
scisBtn.addEventListener('click', playRound);