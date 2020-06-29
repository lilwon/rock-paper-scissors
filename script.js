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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); 

    if ( playerSelection === "rock" ) {
        if ( computerSelection === "paper" ) 
            return "You Lose! Paper beats Rock"; 
        else if ( computerSelection === "scissors") 
            return "You Win! Rock beats Scissors"; 
        else 
            return "You Tie! Rock against Rock"; 
    }
    else if ( playerSelection === "paper" ) {
        if ( computerSelection === "scissors" )
            return "You Lose! Scissors beats Paper"; 
        else if ( computerSelection === "rock") 
            return "You Win! Paper beats Rock"; 
        else 
            return "You Tie! Paper against Paper"; 
    }
    else if ( playerSelection === "scissors") {
        if ( computerSelection === "rock" ) 
            return "You Lose! Rock beats Scissors"; 
        else if ( computerSelection === "paper") 
            return "You Win! Scissors beats Paper"; 
        else 
            return "You Tie! Scissors against Scissors"; 
    }
    else {
        return "Not a correct value"; 
    }
}

function game() {
    let playerCount = 0;
    let compCount = 0; 

    for ( i = 0; i < 5; i++ ) {
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
    }

    if ( playerCount > compCount) {
        console.log("You beat the computer!");
    }
    else if ( playerCount < compCount) {
        console.log("You lost against the computer!");
    }
    else {
        console.log("You tied against the computer!");
    }
}

function alertFunction() {
    alert("Hello World");
}

const rockBtn= document.querySelector('#rock');
rockBtn.addEventListener('click', alertFunction);

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', alertFunction);

const scisBtn = document.querySelector('#scissors');
scisBtn.addEventListener('click', alertFunction);
