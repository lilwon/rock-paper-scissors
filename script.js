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

// remove the parameters...
function playRound() {
    // when a player picks one of the buttons...
    const computerSelection = computerPlay();
    const playerSelection = this.id;
    
    if ( playerSelection === "rock" ) {
        if ( computerSelection === "paper" ) {
            return document.getElementById("response").innerHTML
                = "You Lose! Paper beats Rock"; 
        }
        else if ( computerSelection === "scissors") { 
            return document.getElementById("response").innerHTML
                = "You Win! Rock beats Scissors";
        }
        else { 
            return document.getElementById("response").innerHTML
                = "You Tie! Rock against Rock";
        }
    }
    else if ( playerSelection === "paper" ) {
        if ( computerSelection === "scissors" ) {
            return document.getElementById("response").innerHTML
                = "You Lose! Scissors beats Paper"; 
        } 
        else if ( computerSelection === "rock") { 
            return document.getElementById("response").innerHTML
                = "You Win! Paper beats Rock";
        } 
        else { 
            return document.getElementById("response").innerHTML
                = "You Tie! Paper against Paper";
        }
    }
    else if ( playerSelection === "scissors") {
        if ( computerSelection === "rock" ) { 
            return document.getElementById("response").innerHTML 
                = "You Lose! Rock beats Scissors";
        } 
        else if ( computerSelection === "paper") { 
            return document.getElementById("response").innerHTML 
                = "You Win! Scissors beats Paper";
        }
        else { 
            return document.getElementById("response").innerHTML
                = "You Tie! Scissors against Scissors";
        } 
    }
    else {
        return document.getElementById("response").innerHTML 
            = "Not a correct value"; 
    }
}

function game() {
    let playerCount = 0;
    let compCount = 0; 

    let playerSelection = prompt("Enter 'rock', 'paper', or 'scissors': "); 
    let computerSelection = computerPlay(); 
    let result = playRound(playerSelection, computerSelection); 

    console.log(result);

    if ( result.includes("You Win!") ) {
        playerCount++; 
    }
    else if ( result.includes("You Lose!" ) ) {
        compCount++; 
    } 

    /*
    if ( playerCount > compCount) {
        console.log("You beat the computer!");
    }
    else if ( playerCount < compCount) {
        console.log("You lost against the computer!");
    }
    else {
        console.log("You tied against the computer!");
    }
    */
}

const rockBtn= document.querySelector('#rock');
rockBtn.addEventListener('click', playRound);  

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', playRound );

const scisBtn = document.querySelector('#scissors');
scisBtn.addEventListener('click', playRound );
