let player = 0;
let computer = 0;

function getComputerChoice() {
    const handof = ['ROCK','PAPER','SCISSORS'];
    const randomNum = Math.floor(Math.random() * 3);
    return handof[randomNum];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return 'Draw'
    }
    else if(playerSelection && computerSelection == 'PAPER'){
        computer++
        return "You Lose! Paper beats Rock";
    }
    else{
        player++
        return "You Win! Rock beats Scissors";
    }
}

    const game = ()=>{
        for(let i = 0; i < 5; i++){
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection)); 
        }
        console.log(`Player ${player} : ${computer} Computer`);
        if(player > computer){
            console.log("You Win!");
        }
        else if(player == computer){
            console.log("It's a tie!")
        }
        else{
            console.log("You Lost!")
        }
    }
    
    let playerSelection = window.prompt('input hand');
    playerSelection = playerSelection.toUpperCase();
    
    game();