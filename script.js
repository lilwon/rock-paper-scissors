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
    const playerSelection = ""; 
    const rockBtn= document.querySelector('#rock');
    rockBtn.addEventListener('click', playerSelection);

    const paperBtn = document.querySelector('#paper');
    paperBtn.addEventListener('click', playerSelection);

    const scisBtn = document.querySelector('#scissors');
    scisBtn.addEventListener('click', playerSelection);

    if ( playerSelection === "rock" ) {
        if ( computerSelection === "paper" ) 
            return console.log("You Lose! Paper beats Rock"); 
        else if ( computerSelection === "scissors") 
            return console.log("You Win! Rock beats Scissors"); 
        else 
            return console.log("You Tie! Rock against Rock"); 
    }
    else if ( playerSelection === "paper" ) {
        if ( computerSelection === "scissors" )
            return console.log("You Lose! Scissors beats Paper"); 
        else if ( computerSelection === "rock") 
            return console.log("You Win! Paper beats Rock"); 
        else 
            return console.log("You Tie! Paper against Paper"); 
    }
    else if ( playerSelection === "scissors") {
        if ( computerSelection === "rock" ) 
            return console.log("You Lose! Rock beats Scissors"); 
        else if ( computerSelection === "paper") 
            return console.log("You Win! Scissors beats Paper"); 
        else 
            return console.log("You Tie! Scissors against Scissors"); 
    }
    else {
        return console.log("Not a correct value"); 
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

function alertFunction() {
    alert("Hello World");
}

const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', playRound);


/*
const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', alertFunction);

const scisBtn = document.querySelector('#scissors');
scisBtn.addEventListener('click', alertFunction);
*/